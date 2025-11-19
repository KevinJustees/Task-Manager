const express = require('express');
const auth = require('../middleware/auth');
const Task = require('../models/Task');

const router = express.Router();

// Create Task
router.post('/', auth, async (req, res) => {
  const task = new Task({ ...req.body, user: req.user.id });
  await task.save();
  res.json(task);
});

// Get Tasks
router.get('/', auth, async (req, res) => {
  const { q, status } = req.query;
  const filter = { user: req.user.id };

  if (status) filter.status = status;
  if (q) filter.title = { $regex: q, $options: 'i' };

  const tasks = await Task.find(filter).sort({ createdAt: -1 });
  res.json(tasks);
});

// Update Task
router.put('/:id', auth, async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );
  res.json(task);
});

// Delete Task
router.delete('/:id', auth, async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });
  res.json({ message: 'Deleted' });
});

module.exports = router;
