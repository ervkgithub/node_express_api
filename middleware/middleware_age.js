const reqFilter = (req, res, next) => {
    console.log('middleware hit.....');
    if(!req.query.age) {
        res.send('<h2>Plz enter age in query parameters.')
    }
    if(req.query.age >= 18) {
        next();
    }
    else {
        res.send('<h2>Not allowed...')
    }
}

module.exports = reqFilter;