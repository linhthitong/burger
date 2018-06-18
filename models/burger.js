// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//export for use by the controller
var burger = module.exports = {};

burger.all = function (callback) {
    orm.all("burgers", function (res) {
        callback(res);
    });
};

burger.select = function (selectionObj, callback) {
    orm.select("burgers", selectionObj, function(res) {
        callback(res);
    });
};

burger.create = function (restaurantObj, callback) {
    orm.create("burgers", restaurantObj, function(res) {
        callback(res);
    });
};

burger.update = function (id, updateObj, callback) {
    var conditionObj = {"id": id};
    orm.update("burgers", conditionObj, updateObj, function (res) {
        callback(res);
    });
};

burger.delete = function (id, callback) {
    var conditionObj = {"id": id};
    orm.delete("burgers", conditionObj, function (res) {
        callback(res);
    });
};