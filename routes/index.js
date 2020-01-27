const path = require("path");
const router = require("express").Router();
const apiRoutes =  require("./api");

// API ROUTES
router.use("./api",  apiRoutes);

// If no API routes are connected send to index.html page
router.use((req, res) => 
res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;