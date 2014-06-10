// open window
var usesNavWin = OS_IOS && Alloy.isHandheld;

// save a global reference to the navgroup on iPhone
if (usesNavWin) {
    Alloy.Globals.navwin = $.index;
}

if (OS_ANDROID) {
    Ti.API.warn('Not yet implemented Androd');
} else {
    $.index.open();
}
