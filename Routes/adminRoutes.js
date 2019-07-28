
const express = require('express'); 
const router = express.Router(); 
const { 
    adminRegister, 
    getAdmin, 
    deleteAdmin, 
    updateAdmin, 
    adminLogin
} = require('../Controllers/adminController'); 
const authenticate = require('../Middlewares/authenticate')


// routes
// /api/admin/...
router.get('/adminregister', adminRegister); 
router.post('/adminlogin', adminLogin); 
router.get('/getadmin', getAdmin); 
router.delete('/adminregister/:id', deleteAdmin); 
router.patch('/updateadmin/:id', updateAdmin); 


module.exports = router; 
