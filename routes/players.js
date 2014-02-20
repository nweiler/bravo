var players = [];
players.push({
  name: {
    first: 'Eddie',
    last: 'Bravo'
  }
});

players.push({
  name: {
    first: 'Royler',
    last: 'Gracie'
  }
});

exports.list = function(req, res) {
  res.render('players', {
    title: 'Players',
    players: players
  })
};
