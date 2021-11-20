const fetch = require('node-fetch');


const controller = {
  landing: (req, res) => {
    res.render('index.ejs');
  },

  search: async (req, res) => {
    let userToFind = req.query.keyword
    console.log(userToFind);
    let url = 'https://api.github.com/users/'
    const response = await fetch(`${url}${userToFind}`);
    const user = await response.json();

    console.log(user);
    res.render('index.ejs', { user });
  }
}


module.exports = controller;
