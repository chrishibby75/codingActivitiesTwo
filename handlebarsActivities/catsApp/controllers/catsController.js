var express = require('express');

var router = express.Router();

var cat = require("../models/cat");

router.get("/", function(req, res) {
    cat.all(function(data) {
        var hbsObject = {
            cats: data
        };
        console.log(hbsObject);

        res.render("index", hbsObject);
    });
});

router.post("/api/cats", function(req, res) {
    cat.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    cat.update({ sleepy: req.body.sleepy }, condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

router.delete("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    cat.delete(condition, function(result) {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;