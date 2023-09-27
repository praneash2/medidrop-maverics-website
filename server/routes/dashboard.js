const express=require('express');
const {get_dashboard,post_dashboard,put_dashboard,delete_dashboard} =require( '../controller/dashboard.js');
const router=express.Router();

router.get('/',get_dashboard);
router.post('/',post_dashboard);
router.put('/:id',put_dashboard);
router.delete('/:id',delete_dashboard);
module.exports = router;