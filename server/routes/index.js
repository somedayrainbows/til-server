const usersController = require('../controllers/').users;
const nuggetsController = require('../controllers/').nuggets;

module.exports = (app) => {

    app.get('/api', (req, res) =>  res.status(200).send({
        message: 'Hello World!',
    }));

    app.post('/api/users', usersController.create);

    app.get('/api/users', usersController.list);

    app.post('/api/nuggets/:userId/nuggets', nuggetsController.create)
}
