const UserModel = require('../../models/User');

const deleteUser = (req, res) => {
    const {userId} = req.params;
    const result = UserModel.delete(userId);
    return res.json({result});
}

module.exports = deleteUser;