/////////////////////////
// Index page - import and organize all api routes. export for use in server
/////////////////////////
const router = require('express').Router();

router.use('/users', require('./userRoutes.js'));
// router.use('/listing', require('./listingsRoutes.js'));
//router.use('/booking', require('./bookingRoutes.js'));
router.use('/*', require('./homeRoute.js'));

module.exports = router;