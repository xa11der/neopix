module.exports = (req, res, next) => {
    const key = req.headers.key;
    if(key === process.env.API_KEY) next();
    return res.sendStatus(403);
};