const router = require("express").Router();
const apiRoutes = require("./api");

//Api Routes
router.use("/api", apiRoutes);

module.exports = router


