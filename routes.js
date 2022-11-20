const router = require('express').Router();
const jwtMiddleware = require('./middlewares/jwtToken');
const adminCheckMiddleware = require('./middlewares/adminCheck');
const RolesController = require('./controllers/Roles');
const Usercontroller = require('./controllers/Users');
const ContactsController = require('./controllers/Contacts');
const CompanyController = require('./controllers/Company');
const Occupationcontroller = require('./controllers/Occupation');
const Contactinformationcontroller = require('./controllers/Contactinformation');
const Interestcontroller = require('./controllers/interestedPercentage');
const Citycontroller = require('./controllers/City');
const Countrycontroller = require('./controllers/Country');
const Regioncontroller = require('./controllers/Region');

/* user's roles*/
router.post('/role', RolesController.create);
router.get('/role', RolesController.getAll);
router.get('/role/:id', RolesController.getById);

/* users */
router.post('/user', jwtMiddleware, adminCheckMiddleware, Usercontroller.create);
router.get('/user', jwtMiddleware, adminCheckMiddleware, Usercontroller.getAll);
router.get('/user/:id', jwtMiddleware, adminCheckMiddleware, Usercontroller.getById);
router.patch('/user/:id', jwtMiddleware, adminCheckMiddleware, Usercontroller.update);
router.delete('/user/:id', jwtMiddleware, adminCheckMiddleware, Usercontroller.delete);
router.post('/login', Usercontroller.login);

/* contacts */
router.post('/contact',  jwtMiddleware, ContactsController.create);
router.get('/contact',  jwtMiddleware, ContactsController.getAll);
router.get('/contact/:id',  jwtMiddleware, ContactsController.getById);

/* company */
router.post('/company',  jwtMiddleware, CompanyController.create);
router.get('/company',  jwtMiddleware, CompanyController.getAll);
router.get('/company/:id',  jwtMiddleware, CompanyController.getById);
router.patch('/company/:id', jwtMiddleware, CompanyController.update);

/* occupation */
router.post('/occupation',  jwtMiddleware, Occupationcontroller.create);
router.get('/occupation',  jwtMiddleware, Occupationcontroller.getAll);
router.get('/occupation/:id',  jwtMiddleware, Occupationcontroller.getById);

/* contact information */
router.post('/contactinformation',  jwtMiddleware, Contactinformationcontroller.create);
router.get('/contactinformation',  jwtMiddleware, Contactinformationcontroller.getAll);
router.get('/contactinformation/:id',  jwtMiddleware, Contactinformationcontroller.getById);

/* interest percentage*/
router.post('/interest',  jwtMiddleware, Interestcontroller.create);
router.get('/interest',  jwtMiddleware, Interestcontroller.getAll);
router.get('/interest/:id',  jwtMiddleware, Interestcontroller.getById);

/* city */
router.post('/city',  jwtMiddleware, Citycontroller.create);
router.get('/city',  jwtMiddleware, Citycontroller.getAll);

/* country */
router.post('/country',  jwtMiddleware, Countrycontroller.create);
router.get('/country',  jwtMiddleware, Countrycontroller.getAll);
router.get('/country/:id',  jwtMiddleware, Countrycontroller.getById);

/* region */
router.post('/region',  jwtMiddleware, Regioncontroller.create);
router.get('/region',  jwtMiddleware, Regioncontroller.getAll);
router.get('/region/:id', jwtMiddleware, Regioncontroller.getById);

module.exports = router;