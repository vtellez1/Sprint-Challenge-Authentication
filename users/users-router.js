const router = require('express').Router();

const Users = require('./users-model.js');
const authenticate = require('../auth/authenticate-middleware.js');


//endpoints for /api/users
router.get('/', authenticate, (req, res) => {
    Users.find()
    .then(users => {
        res.json(users);
    })
    .catch(err => res.send(err));
});

router.delete('/:id', (req, res) => {
    Users.remove(req.params.id)
    .then(deleted =>{
      res.status(204).json(deleted);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: "The User could not be removed"
      });
    });
});

module.exports = router;