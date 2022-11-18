import React from 'react';
import PropTypes from 'prop-types';
import './TeamMember.css';
import CodelitEmptyAvatar from '../../assets/codelit_empty_avatar.svg';
import NewMemberForm from '../NewMemberForm';

class TeamMember extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    story: PropTypes.string,
    favoriteColor: PropTypes.string
  };

  static defaultProps = {
    photoUrl: CodelitEmptyAvatar,
    story: null,
    favoriteColor: '#3466F2'
  };

  render() {
    return (
      <div>
      <div className="container">
        <header>
          <div className="avatar-container">
            <img
              className="avatar"
              src={this.props.photoUrl}
              alt={this.props.name}
            />
          </div>
          <h2 className="title">{this.props.title}</h2>

          {(this.props.title=="New Teammate")?
          <button><h1 className="name" onClick={this.props.newTeamMember}>{this.props.name}</h1></button>
          :<h1 className="name">{this.props.name}</h1>
          }
          
        </header>
        <div className="body">{this.props.story}</div>
        <footer style={{ backgroundColor: this.props.favoriteColor }}>
          <div className="full-width-flex-box">
            <div className="one-third-flex-box stat">9.0</div>
            <div className="one-third-flex-box stat bordered">9.0</div>
            <div className="one-third-flex-box stat">9.0</div>
          </div>
          <div className="full-width-flex-box">
            <div className="one-third-flex-box">CANDID</div>
            <div className="one-third-flex-box">LEARNING</div>
            <div className="one-third-flex-box">GRIT</div>
          </div>
        </footer>
      </div>
      </div>
    );
  }
}

export default TeamMember;
