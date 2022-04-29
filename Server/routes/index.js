import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("SPA App says hello world!");
});

export default router;