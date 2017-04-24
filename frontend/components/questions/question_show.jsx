import React from 'react';
import { Link, hashHistory } from 'react-router';
import merge from 'lodash/merge';

class QuestionShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = { editQuestionClicked: false, question: this.props.question };
    this.submitQuestionEdits = this.submitQuestionEdits.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.params.questionId);
  }

  componentWillReceiveProps(newProps) {
    let newState = merge( {}, this.state, {question: newProps.question} );
    this.setState(newState);
  }

  deleteQuestion() {
    return e => {
      this.props.deleteQuestion(this.props.question.id);
      hashHistory.push('/');
    };
  }

  updateEditQuestionClicked(boolean) {

    return e => {
      let newState = merge( {}, this.state,
        { editQuestionClicked: boolean }
      );
      this.setState(newState);
    };
  }

  submitQuestionEdits(e) {
    e.preventDefault();
    this.props.updateQuestion(this.state.question);
    let newState = merge( {}, this.state,
      { editQuestionClicked: false }
    );
    this.setState(newState);
  }

  update(field) {
    return e => {
      let newState = merge( {}, this.state,
        { question: { [field]: e.target.value } }
      );
      this.setState(newState);
    };
  }

  questionBody() {
    const {question} = this.props;
    // debugger;

    if (this.state.editQuestionClicked === false) {
      return (
        <div>
          <h3>{question.question}</h3>
          <p>{question.details}</p>
          <div>...</div>
          <div className="dotMenu">
            <span onClick={this.updateEditQuestionClicked(true)}>Edit (click me)</span>
            <span onClick={this.deleteQuestion()}>Delete (click me)</span>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={this.submitQuestionEdits}>
            <input
              type="text"
              value={this.state.question.question}
              onChange={this.update('question')} />
            <textarea
              value={this.state.question.details}
              onChange={this.update('details')} />
            <span onClick={this.updateEditQuestionClicked(false)} >Cancel (click me)</span>
            <input type="submit" value="Update" />
          </form>
        </div>
      );
    }
  }

  render () {
    const {question} = this.props;

    if (!question) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <p>topics</p>
        {this.questionBody()}
        <div>AnswerIndexContainer</div>
      </div>

    );
  }

}

export default QuestionShow;