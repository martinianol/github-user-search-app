const fetch = require('node-fetch');


const controller = {
  landing: (req, res) => {
    res.render('index.ejs');
  },

  search: async (req, res) => {
    let userToFind = req.query.keyword
    let url = 'https://api.github.com/users/'
    const response = await fetch(`${url}${userToFind}`);
    const user = await response.json();

    let timestamp = user.created_at;
    let toDate = new Date(timestamp).getDate();
    let toMonth = new Date(timestamp).getMonth();
    let toYear = new Date(timestamp).getFullYear();

    const date = new Date(toYear, toMonth, toDate);
    const formatter = new Intl.DateTimeFormat('en', { month: 'short' });
    const month = formatter.format(date);

    user.joined = `${toDate} ${month} ${toYear}`
    console.log(user);

    /* console.log(user); */
    res.render('index.ejs', { user });
  }
}


module.exports = controller;
