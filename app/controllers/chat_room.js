var args = arguments[0] || {};
Ti.API.info('The chat room receives ' + args.roomId);
var channelCollection = Alloy.Collections.channel;
var room = channelCollection.get(args.roomId);
Ti.API.debug('Get room '+ JSON.stringify(room));
$.chatRoomWin.setTitle(room.name);



//manage windown evens
$.chatRoomWin.addEventListener('close', function() {
    Ti.API.debug('close chat room win');
    $.destroy();
});

$.chatRoomWin.addEventListener('open', function() {
    Ti.API.debug('open chat room win');
});