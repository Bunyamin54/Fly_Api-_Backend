"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/user:



// URL: /users


// auth:
router.use('/auth', require('./auth'))
// user:
router.use('/users', require('./user'))
// flight:
router.use('/flights', require('./flight'))
// passenger:
router.use('/passengers', require('./passenger'))
// reservation:
router.use('/reservations', require('./reservation'))
// document:
router.use('/documents', require('./document'))


app.use('/', require('./src/routes/'))
/* ------------------------------------------------------- */
module.exports = router