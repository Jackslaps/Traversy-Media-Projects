const express = require("express");
const router = express.Router();
const User = require("../models/Users");

// @route   POST api/users
// @desc    This will register a user
// @access  Public
router.post(
  "/",
  [
    check("name", "Please add name")
      .not()
      .isEmpty(),
      check('email', 'please include a valid email').isEmail(),
      check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
  ],
  (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    res.send('Passed');
  }
);

module.exports = router;
