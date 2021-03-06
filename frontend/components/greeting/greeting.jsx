import React from 'react';
import { Link } from 'react-router';
import SearchContainer from '../search/search_container';


class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.state = { userDropDownClicked: false };
  }

  clickUserDropDownMenu() {
    return (e) => {
      if (this.state.userDropDownClicked === false) {
        this.setState({ userDropDownClicked: true });
      } else {
        this.setState({ userDropDownClicked: false });
      }
    };
  }

  userDropDownMenu() {
    if (this.state.userDropDownClicked === false) {
      return <div></div>;
    } else {
      return(
        <div className="UserMenu">
          <ul className="UserMenuMain">
            <li>
              <button
                className="header-button"
                onClick={this.props.logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>

      );
    }
  }

  personalGreeting() {
    return (
      <div className="NavBar">
        <nav>
          <div className="NavBegin">
        	  <a className="HomeLink" href='/'>Quarry</a>
        	  <SearchContainer/>
          </div>
          <div className="NavMiddle">
            {/* below is set for if the read/answer/notifications options are implemented */}
            <a></a>
            <a></a>
            <a></a>
          </div>
      		<div onClick={this.clickUserDropDownMenu()} className="NavEnd">
      			<img className="NavUserPhoto" src="https://qsf.ec.quoracdn.net/-3-images.new_grid.profile_pic_default_small.png-26-902da2b339fedf49.png"></img>
      		  <div className="NavUserName">{this.props.currentUser.username}</div>
      		  <div>{this.userDropDownMenu()}</div>
      		</div>
      	</nav>

      </div>
    );
  }

  render() {
    if (this.props.currentUser) {
      return this.personalGreeting();
    } else {
      return <div></div>;
    }

  }

}

export default Greeting;
