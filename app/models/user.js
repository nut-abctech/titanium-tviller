exports.definition = {
    config : {
        "URL" : Titanium.App.Properties.getString('apiUrl') + "/user",
        "adapter" : {
            "type" : "restapi",
            "collection_name" : "UserCollection",
            "idAttribute" : "_id"
        },
        "columns" : {
            "_id" : "String",
            "nick" : "String",
            "name" : "String",
            "email" : "String",
            "banned" : boolean,
            "online" : boolean,
            "facebookId" : "String"
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
