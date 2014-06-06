exports.definition = {
    config : {
        "columns" : {
            "id" : "String",
            "name" : "String",
            "program" : {
                "name" : "String",
                "description" : "String",
                "image" : "String",
                "start" : "String",
                "end" : "String"
            },
            "attendance" : int,
            "full" : boolean,
            "capacity" : "String",
        },
        "adapter" : {
            "type" : "localStorage",
            "collection_name" : "ChannelCollection"
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