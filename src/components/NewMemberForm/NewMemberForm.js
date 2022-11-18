import React from 'react';
import PropTypes from 'prop-types';
import './NewMemberForm.css';
import axios from 'axios';
import CodelitEmptyAvatar from '../../assets/codelit_empty_avatar.svg';

class NewMemberForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state ={
      errorValue:""
    }
    this.newTeamMemberSend=this.newTeamMemberSend.bind(this);
  }


  async newTeamMemberSend(e) {
    e.preventDefault();
    if(e.target[0].value=="" ||e.target[1].value=="" || e.target[2].value=="" 
     || e.target[3].value=="" ||e.target[4].value=="" ||e.target[5].value=="") 
     {
       this.setState({errorValue:"Some fields are missing"})
     }
     else{
        console.log(e.target[0].value)
        const payload={
          "title":e.target[0].value,
          "firstName":e.target[1].value,
          "lastName":e.target[2].value,
          "story":e.target[3].value,
          "favoriteColor":e.target[4].value,
          "photoUrl":e.target[5].value
        }

        axios.post('/team',payload).then(response => {
          this.props.setData(response.data);
        });

        this.props.newTeamMember();
  }
  }

  render() {
    return (
      <div className="modal">

      <div className="container ">
        <div style={{display:"flex",paddingLeft:"1rem"}} onClick={this.props.newTeamMember}>X</div>
      <h1>Enter your new team member details</h1>
          <form onSubmit={this.newTeamMemberSend}>

          <label>Title </label><br />
          <input type="text" name="title" />  <br /><br />

          <label>First Name </label><br />
          <input type="text" name="fname" />  <br /><br />

          <label>Last Name </label><br />
          <input type="text" name="lname" />  <br /><br />

          <label>Story</label><br />
          <textarea rows="5" cols="40"></textarea>    <br /><br />

          <label>Favorite Color </label><br />
          <input type="text" name="favcolour" />  <br /><br />

          <label>Photo URL </label><br />
          <input type="text" name="photo" />  <br /><br />

          <div className="error" style={{color:"red"}}>{this.state.errorValue}</div>
          <input type="submit" value="submit" / >  
        </form> 
      </div>
      </div>
    )
  }
}

export default NewMemberForm;
