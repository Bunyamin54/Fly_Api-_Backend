"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/user:



// URL: /users


// auth:
router.use('/auth', require('./src/routes/auth'))
// user:
router.use('/users', require('./src/routes/user'))
// flight:
router.use('/flights', require('./src/routes/flight'))
// passenger:
router.use('/passengers', require('./src/routes/passenger'))
// reservation:
router.use('/reservations', require('./src/routes/reservation'))
// document:
router.use('/documents', require('./src/routes/document'))


app.use('/', require('./src/routes/'))
/* ------------------------------------------------------- */
module.exports = router