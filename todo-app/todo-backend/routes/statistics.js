const express = require('express');
const router = express.Router();
const redis = require('../redis')

// let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  let added_todos=await redis.getAsync("added_todos")
  console.log("🚀 ~ added_todos:", added_todos)
  if (added_todos===null) {added_todos=0}
  res.send({added_todos});
});

module.exports = router;
