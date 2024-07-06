const UserModel = require('../../models/User');

const getUser = (req, res) => {
    const user = UserModel.findById(req.params.userId);
    if (!user) {
        return res.status(404).json({result: false});
    }
    return res.json({user});
}

module.exports = getUser;