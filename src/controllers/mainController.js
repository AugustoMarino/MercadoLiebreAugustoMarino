const controller = {
    home: (req, res) => {
        res.render('./users/home')
    },
    login: (req, res) => {
        res.render('./users/login')
    },
    register: (req, res) => {
        res.render('./users/register')
    }
}

module.exports = controller;