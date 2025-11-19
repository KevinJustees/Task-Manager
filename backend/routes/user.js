const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
});

router.put('/me', auth, async (req, res) => {
  const updated = await User.findByIdAndUpdate(
    req.user.id,
    { name: req.body.name },
    { new: true }
  ).select('-password');
  res.json(updated);
});

module.exports = router;
