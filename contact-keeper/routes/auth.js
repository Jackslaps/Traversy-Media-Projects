const express = require('express');
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require('express-validator/check')
const jwt = require('jsonwebtoken');
const config = require('config');

// @route   GET api/auth
// @desc    This will get logged in user
// @access  Private
router.get('/', (req, res) => {
    res.send('Get logged in user')
});

// @route   POST api/auth
// @desc    Authenticate user and get token
// @access  Public
router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
], async (req, res) => {
		const errors = validationResult(req);
		if(!errors.isEmpty()) {
				return res.status(400).json({errors: errors.array()})
		}

		const { email, password } = req.body;

		try {
			let user = await User.findOne({ email })

			if(!user) {
				return res.status(400).json({ msg: 'Invalid credentials' });
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if(!isMatch) {
				return res.status(400).json({msg: 'Invalid credentials'});
			}

			const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 360000
      }, (err, token) => {
        if(err) throw err;
        res.json({ token })
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
	}
);

module.exports = router;