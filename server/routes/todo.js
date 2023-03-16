const router = require('express').Router()

router.get('/',(req,res)=>{
    res.send('todos get')
})



module.exports = router