var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {

//passing "index" to index.handlebars as object called data which is coming from ORM select all query
        res.render("index", {burgers : data});
    });
});

// send AJAX call to server from front-end (listener waiting to be called)
router.post("/api/burgers", function (req, res) {
    burger.create(req.body, function (response)  {
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var update = req.body;
    update.devoured = (update.devoured == "true");
    // update.liked = (update.liked == "true");
    burger.update(req.params.id, req.body, function (response) {
        if (response.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    burger.delete(req.params.id, function (response) {
        if (response.affectedRows == 0) {
            // If no rows were deleted, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router