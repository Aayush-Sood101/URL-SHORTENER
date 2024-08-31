const URL = require('../models/url');

async function handleRedirectAndUpdate(req , res){
    console.log("New request Received");
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
    {
        shortId,
    },
    {
    $push: {
        visitHistory: {
            timestamp: Date.now(),
        }
    }
    }
)
return res.redirect(entry.redirectURL);
}

module.exports = {
    handleRedirectAndUpdate
}