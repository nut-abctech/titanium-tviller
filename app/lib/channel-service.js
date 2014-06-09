/**
 * User service
 */
exports.channelService = function() {
    var methods = {
        refresh : function(){
            Alloy.Collections.Channels.fetchFromServer();
        },
        getToplist : function() {

        },
        getChannel : function(id) {

        }
    };
    _.extends(this, methods);
};
