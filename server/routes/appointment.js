const express=require('express');
const {get_appointment,post_appointment,put_appointment,delete_appointment}= require('../controller/Appointment.js');
const router=express.Router();

router.get('/:roomno',get_appointment);
router.post('/',post_appointment);
router.put('/:id',put_appointment);
router.delete('/:id',delete_appointment);

module.exports = router;