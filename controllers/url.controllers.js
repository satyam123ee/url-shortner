import {nanoid} from "nanoid";
import urlModel from "../models/url.models.js";

async function handleGenerateNewUrl(req,res){
    const body=req.body;
    //chechk case if the url is already present in the database or not
    if(!body.redirectURL){
        return res.status(400).json({error:"URL is required"});
    }

    const shortId = nanoid(8);
    await urlModel.create({
        shortId:shortId,
        redirectURL:body.redirectURL,
        visitHistory: [ ]
    });
    return res.status(201).json({shortId:shortId});
}

async function handleRedirectToOriginalUrl(req,res){
    const shortId=req.params.shortId;
    const urlData=await urlModel.findOneAndUpdate(
        {shortId:shortId},
        {$push:{visitHistory:{timestamp:Date.now()}}},
        {new:true}
    );

    if(!urlData){
        return res.status(404).json({error:"URL not found"});
    }

    return res.redirect(urlData.redirectURL);
}

async function handlegetanalytics(req,res){ 
    const shortId=req.params.shortId;
    const result=await urlModel.findOne({shortId:shortId});
    if(!result){
        return res.status(404).json({error:"URL not found"});
    }
    return res.status(200).json({totalClicks: result.visitHistory.length,analytics: result.visitHistory});
}







export {handleGenerateNewUrl, handleRedirectToOriginalUrl, handlegetanalytics};

   
