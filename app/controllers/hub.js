var moment = require('alloy/moment');
var channelCol = Alloy.Collections.channel, toplist = Alloy.Collections.toplist;
// initial load
if (channelCol && channelCol.length === 0) {
    Ti.API.info('Load channel from server');
    channelCol.loadChannels();
}
// always get a fresh toplist
toplist.loadToplist();

// data transform
function transformChannelModel(model) {
    var transform = model.toJSON();
    transform.channelLogo = 'http://static.meetv.no/v1/channel-logo/image/50x35/' + transform.id + '.png';
    if (model.has("program_start") && model.has("program_end")) {
        var start = moment.unix(transform.program_start).format('HH:mm');
        var end = moment.unix(transform.program_end).format('HH:mm');
        transform.duration = start + " - " + end;
    }
    return transform;
}

$.win.addEventListener("close", function() {
    $.destroy();
});