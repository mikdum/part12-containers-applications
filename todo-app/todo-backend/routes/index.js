const express = require('express');
const router = express.Router();
const redis = require('../redis')
const configs = require('../util/config')

// let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  let visits=await redis.getAsync("counter")
  if (visits===null) {visits=0}
  visits++
  console.log("🚀 ~ a1:", visits)

  redis.setAsync("counter",visits)
  console.log("🚀 ~ a:", visits)
  res.send({
    ...configs,
    visits
  });
});

module.exports = router;
