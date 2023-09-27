const express=require('express');
const {get_orders,post_orders,put_orders,delete_orders} =require('../controller/orders.js');
const router=express.Router();

router.get('/:roomno',get_orders);
router.post('/',post_orders);
router.put('/:id',put_orders);
router.delete('/:id',delete_orders);

module.exports = router;