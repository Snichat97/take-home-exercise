import React from 'react';
import axios from 'axios';
import TeamMember from '../TeamMember';
import NewMemberForm from '../NewMemberForm';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      loading: true,
      visible: false
    };
    this.newTeamMember=this.newTeamMember.bind(this);
    this.setData=this.setData.bind(this);
  }

  async newTeamMember() {
    const flip = !this.state.visible;    
    this.setState({visible :flip})
    console.log("Doneeeeeee", flip)
  }

  async componentDidMount() {
    try {
      await this.fetchInitialData();
    } catch (error) {
      // try again after half a second if fails due to race condition
      console.log('retrying initial data request...');
      setTimeout(async () => {
        await this.fetchInitialData();
      }, 500);
    }
  }

  async setData(data) {
    this.setState({
      team: data,
    });
  }

  async fetchInitialData() {
    const response = await axios.get('/team');
    this.setState({
      team: response.data,
      loading: false
    });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="app">
      {this.state.visible?<NewMemberForm newTeamMember={this.newTeamMember} setData={this.setData}/>:""}
        <div className="team-grid" />
        {this.state.team && this.state.team.map(member => (
          <TeamMember
            key={member.id}
            name={`${member.firstName} ${member.lastName}`}
            title={member.title}
            photoUrl={member.photoUrl}
            story={member.story}
            favoriteColor={member.favoriteColor}
          />
        ))}
        {/* Make this new team member link to your form! */}
        <TeamMember id="new" name="Join us!" title="New Teammate" newTeamMember={this.newTeamMember}/>
      </div>
    );
  }
}

export default App;
