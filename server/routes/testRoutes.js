module.exports = (app) => {
  app.get('/api/test', (req, res) => {
    res.send({
      a: 1,
      b: 2,
    })
  });
}
