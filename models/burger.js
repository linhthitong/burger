// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//export for use by the controller
var burger = module.exports = {

all: function (callback) {
    orm.all("burgers", function (res) {
        callback(res);
    });
},

select: function (selectionObj, callback) {
    orm.select("burgers", selectionObj, function(res) {
        callback(res);
    });
},

create: function (burgerObj, callback) {
    orm.create("burgers", burgerObj, function(res) {
        callback(res);
    });
},

update: function (id, updateObj, callback) {
    var conditionObj = {"id": id};
    console.log(conditionObj, updateObj)
    orm.update("burgers", conditionObj, updateObj, function (res) {
        
        callback(res);
    });
},

delete: function (id, callback) {
    var conditionObj = {"id": id};
    orm.delete("burgers", conditionObj, function (res) {
        callback(res);
    });
}
}