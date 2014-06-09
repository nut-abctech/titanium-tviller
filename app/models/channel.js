exports.definition = {
    config : {
        "columns" : {
            "id" : "text",
            "name" : "text",
            "attendance" : "integer",
            "full" : "integer",
            "capacity" : "integer",
            "program_name" : "text",
            "program_description" : "text",
            "program_image" : "text",
            "program_start" : "text",
            "program_end" : "text"
        },
        "defaults" : {
            "isToplist" : "0",
            "program_name" : "No program"
        },
        "adapter" : {
            "type" : "sql",
            "collection_name" : "channel",
            "idAttribute" : "id"
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
            loadChannels : function() {
                this.load(Alloy.CFG.apiUrl + "/channels");
            },
            loadToplist : function() {
                this.load(Alloy.CFG.apiUrl + "/channels/toplist");
            },
            load : function(url) {
                var self = this;
                var xhr = Titanium.Network.createHTTPClient({
                    onload : function(e) {
                        // this.responseText
                        // this.status;
                        Ti.API.debug('HTTP status : ' + this.status);
                        Ti.API.debug('Received data : ' + this.responseText);
                        var chnList = JSON.parse(this.responseText);
                        _.each(chnList, function(chn) {
                            var channelModel = Alloy.createModel('channel', {
                                id : chn.id,
                                name : chn.channelName
                            });
                            if (chn.program) {
                                channelModel.set('program_name', chn.program.name);
                                channelModel.set('program_description', chn.program.description);
                                channelModel.set('program_image', chn.program.image);
                                channelModel.set('program_start', chn.program.start);
                                channelModel.set('program_end', chn.program.end);
                            }
                            self.add(channelModel);
                            chn = null;
                        });
                    },
                    onerror : function(e) {
                        Ti.API.error(e.error);
                    }
                });
                xhr.open('GET', url);
                xhr.send();
            }
        });

        return Collection;
    }
};