const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    This gets all user's contacts
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all contacts')
});

// @route   POST api/contacts
// @desc    This adds a new contact
// @access  Private
router.post('/', (req, res) => {
    res.send('Add contact')
});

// @route   PUT api/contacts/:id
// @desc    Update user's contacts
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update users contacts')
});

// @route   DELETE api/contacts
// @desc    This deletes contacts
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete user contact')
});

module.exports = router;