const UserModel = require('../../models/User');

const getList = (req, res) => {
    const users = UserModel.getUsersList();
    return res.json({users});
}

module.exports = getList;