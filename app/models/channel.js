exports.definition = {
    config : {
        columns : {
            "id" : "String",
            "name" : "String",
            "attendance" : int,
            "full" : boolean,
            capacity : String,

        },
        adapter : {
            type : "localStorage",
            collection_name : "channel"
        }
    },
    extendModel : function(Model) {
        _.extend(Model.prototype, {
            // extended functions and properties go here
        });

        return Model;
    },
    extendCollection : function(Collection) {
        _.extend(Collection.prototype, {
            // extended functions and properties go here
        });

        return Collection;
    }
};