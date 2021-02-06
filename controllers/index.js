const router = require('express').Router();
const homeRoutes = require('./routes/home');
const apiRoutes = require('./routes/api');


router.use('/', homeRoutes);
router.use('/api', apiRoutes)

module.exports = router;