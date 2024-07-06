class User {
    static users = {}
    static currentId = 1

    constructor(userData) {
        this.id = userData.id;
        this.name = userData.name;
        this.age = userData.age;
    }

    static create(userData) {
        const {name = 'username', age = 0} = userData;
        const user = new User({name, age, id: ++User.currentId});
        User.users[user.id] = user;
        return user;
    }

    static findById(id) {
        return User.users[id] ?? null;
    }

    static delete(id) {
        if (!User.users[id]) {
            return false;
        }
        delete User.users[id];
        return true;
    }

    static updateById(id, userData) {
        const user = User.findById(id);
        if (!user) {
            return null;
        }
        if (userData.age) {
            user.age = userData.age;
        }
        if (userData.name) {
            user.name = userData.name;
        }
        return user;
    }

    static getUsersList() {
        return Object.values(User.users);
    }
}

module.exports = User;