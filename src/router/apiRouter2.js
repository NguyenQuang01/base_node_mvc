const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ name: "router2" });
});

module.exports = router;
