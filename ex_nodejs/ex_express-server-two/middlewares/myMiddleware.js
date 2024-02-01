module.exports = function(req, res, next) {
    console.log(`Time: ${Date.now()}`);
    next();
}