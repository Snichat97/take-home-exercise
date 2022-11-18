const express = require('express');
const { TeamMember } = require('./model');

const app = express();
app.use(express.json());

app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

app.post('/team', async (req, res) => {
  console.log(req.body)
  const { 
    title,
    firstName,
    lastName,
    story,
    favouriteColor,
    photoUrl } =req.body;
    
  const query = {
      title,
      firstName,
      lastName,
      story,
      favouriteColor,
      photoUrl
  };

  const sql = await TeamMember.create(query);
  const team = await TeamMember.findAll();
  return(res.json(team));
});

module.exports = app;
