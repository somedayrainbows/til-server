const { Nugget } = require('../models')

module.exports = {
  async create(req, res) {
    const { title, description, externalLink } = req.body
    try {
      const nugget = Nugget.create({
        title,
        description,
        externalLink,
        userId: req.params.userId
      })
      res.status(201).send(nugget)
    } catch (error) {
      res.status(400).send(error)
    }
  }
}
