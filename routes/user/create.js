const UserModel = require('../../models/User');

const createUser = (req, res) => {
    const {age, name} = req.body;
    const user = UserModel.create({age, name});
    return res.json({user});
}

module.exports = createUser;