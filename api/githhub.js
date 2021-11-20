const fetch = require('node-fetch');


const controller = {
  landing: (req, res) => {
    res.render('index.ejs');
  },

  user: async (req, res) => {
    let userToFind = 'martinianol';
    let url = 'https://api.github.com/users/'
    const response = await fetch(`${url}${userToFind}`);
    const data = await response.json();

    console.log(data);
    res.render('index.ejs');
  }
}


module.exports = controller;
