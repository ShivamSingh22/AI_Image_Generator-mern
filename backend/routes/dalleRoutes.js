import express from "express";
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router =express.Router();



const openai=new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').get((req,res) => {
    res.send('Hello from DALL-e');
})

//this route will make call to the dall-e API
router.route('/').post(async(req,res) => {
    try{
        const {prompt} = req.body;//come from frontend side the prompt we create 

        const aiResponse=await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        const image=aiResponse.data.data[0].b64_json;

        res.status(200).json({photo:image});
    } catch (error){
        console.log(error);
        res.status(500).send(error?.response.data.error.message)
    }
})

router

export default router;