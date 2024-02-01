const express = require('express');
const users = require('../data/users');
const error = require('../utilities/error');

const router = express.Router();


/**
 * GET /api/users
 */
router.route('/')
 .get( (req, res) => {
    const links = [
        {
          href: "users/:id",
          rel: ":id",
          type: "GET",
        },
      ];

    res.json({users, links});
})
.post((req, res) => {
    if (req.body.name && req.body.username && req.body.email) {
        if (users.find(u => u.username == req.body.username)) {
            next(error(409, "Username is taken!"));
            return;
        }

        const user = {
            id: users[users.length -1].id + 1,
            name: req.body.name,
            username: req.body.username,
            email: req.body.email
        }

        users.push(user);
        res.json(users[users.length - 1]);
    } else next(error(400, "Insufficient data"));
})

/**
 * @method GET /api/:id
 * @param :id
 */
router.route('/:id')
.get((req, res, next) => {
    const user = users.find(u => u.id == req.params.id);
    
    const links = [
        {
          href: `/${req.params.id}`,
          rel: "",
          type: "PATCH",
        },
        {
          href: `/${req.params.id}`,
          rel: "",
          type: "DELETE",
        },
      ];

    if (user) res.json({user, links});
    else next();
})
.patch((req, res, next) => {
    const user = users.find((u, i) => {
        if (u.id == req.params.id) {
          for (const key in req.body) {
            users[i][key] = req.body[key];
          }
          return true;
        }
      });
  
      if (user) res.json(user);
      else next();
})
.delete((req, res, next) => {
    // The DELETE request route simply removes a resource.
    const user = users.find((u, i) => {
        if (u.id == req.params.id) {
          users.splice(i, 1);
          return true;
        }
      });
  
      if (user) res.json(user);
      else next();
});

module.exports = router;