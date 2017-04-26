import React from 'react';
import merge from 'lodash/merge';

class NewAnswer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      answer: {
        text: "",
        author_id: this.props.currentUser.id,
        question_id: this.props.questionId
      },
      answerClicked: false
    };
    this.submitNewAnswer = this.submitNewAnswer.bind(this);

  }



  submitNewAnswer(e) {
    e.preventDefault();
    // const answer = this.state.answer;
    this.props.createAnswer(this.state.answer).then(() => {
      let newState = merge( {}, this.state,
        { answer: { text: "" } }
      );
      this.setState(newState);
    });
  }

  updateAnswerField() {
    return e => {
      let newState = merge( {}, this.state,
        { answer: { text: e.target.value } }
      );
      this.setState(newState);
    };
  }

  newAnswerForm() {
    if (this.state.answerClicked === true) {
      return (
        <div className="NewAnswer">
          <div className="AnswerAuthorHeader">
            <img className="QuestionItemAnswerUserPhoto" src="https://qsf.ec.quoracdn.net/-3-images.new_grid.profile_pic_default_small.png-26-902da2b339fedf49.png"></img>
            <a>{window.currentUser.username}</a>
          </div>
          <form onSubmit={this.submitNewAnswer}>
            <input
              type="textarea"
              placeholder="Write your answer"
              onChange={this.updateAnswerField()}/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    } else {
      return <div></div>;
    }


  }

  updateAnswerClicked(boolean) {
    return e => {
      let newState = merge( {}, this.state,
        { answerClicked: boolean }
      );
      this.setState(newState);

    };
  }

  render() {
    return (
      <div>
        <button className="NewAnswerButton" onClick={this.updateAnswerClicked(true)}>Answer</button>
        {this.newAnswerForm()}
      </div>
    );
  }
}

export default NewAnswer;
