const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(403).json({
            message: "Only Admin access.."
        })
    }
}

module.exports = adminOnly;