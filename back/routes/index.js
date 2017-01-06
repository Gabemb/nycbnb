/////////////////////////
// Index page - import and organize all api routes. export for use in server
/////////////////////////
const router = require('express').Router();



router.use('/users', require('./userRoutes'))
// router.use('/listing', require('./listingsRoutes.js'))
// router.use('/booking', require('./bookingRoutes.js'))

module.exports = router;