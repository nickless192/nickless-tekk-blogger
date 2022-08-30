const userRoutes = require('./userRoutes');
const router = require('express').Router();

router.use('/users', userRoutes);

module.exports = router;