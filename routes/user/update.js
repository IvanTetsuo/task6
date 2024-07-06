const UserModel = require('../../models/User');

const update = (req, res) => {
    const {userId} = req.params;
    const {age, name} = req.body;
    const user = UserModel.updateById(userId, {age, name});
    if (!user) {
        return res.status(404).json({result: false});
    }
    return res.json({user});
}

module.exports = update;