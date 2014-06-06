exports.definition = {
    config: {
        columns: {
            id: "String",
            name: "String",
            attendance: int,
            full: boolean,
            capacity: String
        },
        adapter: {
            type: "localStorage",
            collection_name: "channel"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("channel", exports.definition, []);

collection = Alloy.C("channel", exports.definition, model);

exports.Model = model;

exports.Collection = collection;