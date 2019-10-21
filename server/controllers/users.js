const { User } = require('../models');

module.exports = {

    async create(req, res){
        const { firstName, lastName, email, admin } = req.body;
        try { 
           const user = await User.create({
                firstName,
                lastName,
                email,
                admin 
            });
            res.status(201).send(user);
        } catch(error) {           
            res.status(400).send(error)
        }
    },

    async list(req, res) {
        try {
            const users = await User.findAll();
            res.status(200).send(users);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
