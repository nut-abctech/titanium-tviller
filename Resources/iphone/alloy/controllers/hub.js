function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "hub";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.hub = Ti.UI.createWindow({
        backgroundColor: "#333",
        id: "hub"
    });
    $.__views.hub && $.addTopLevelView($.__views.hub);
    $.__views.header = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 80,
        top: 5,
        id: "header"
    });
    $.__views.hub.add($.__views.header);
    $.__views.appName = Ti.UI.createLabel({
        color: "#FFF6E5",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 25,
            fontWeigth: "bold"
        },
        id: "appName",
        text: "Tviller"
    });
    $.__views.header.add($.__views.appName);
    $.__views.body = Ti.UI.createView({
        top: 80,
        backgroundColor: "#FFF6E5",
        id: "body"
    });
    $.__views.hub.add($.__views.body);
    $.__views.__alloyId2 = Ti.UI.createView({
        height: 60,
        backgroundColor: "#D13C1C",
        id: "__alloyId2"
    });
    $.__views.__alloyId3 = Ti.UI.createLabel({
        color: "#FFF6E5",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 20,
            fontWeigth: "bold",
            color: "FFF6E5"
        },
        text: "Popular Channels",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.toplist = Ti.UI.createListSection({
        headerView: $.__views.__alloyId2,
        id: "toplist"
    });
    var __alloyId4 = [];
    __alloyId4.push($.__views.toplist);
    $.__views.__alloyId7 = Ti.UI.createView({
        height: 60,
        backgroundColor: "#D13C1C",
        id: "__alloyId7"
    });
    $.__views.__alloyId8 = Ti.UI.createLabel({
        color: "#FFF6E5",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 20,
            fontWeigth: "bold",
            color: "FFF6E5"
        },
        text: "All Channels",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.allChannels = Ti.UI.createListSection({
        height: 60,
        backgroundColor: "#D13C1C",
        headerView: $.__views.__alloyId7,
        id: "allChannels",
        headerTitle: "All channels"
    });
    __alloyId4.push($.__views.allChannels);
    $.__views.channelsView = Ti.UI.createListView({
        backgroundColor: "#FFF6E5",
        sections: __alloyId4,
        id: "channelsView"
    });
    $.__views.body.add($.__views.channelsView);
    var __alloyId11 = [];
    $.__views.send = Ti.UI.createButton({
        id: "send",
        title: "test"
    });
    __alloyId11.push($.__views.send);
    $.__views.__alloyId12 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId11.push($.__views.__alloyId12);
    $.__views.contact = Ti.UI.createButton({
        id: "contact",
        systemButton: Ti.UI.iPhone.SystemButton.ORGANIZE
    });
    __alloyId11.push($.__views.contact);
    $.__views.__alloyId13 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId11.push($.__views.__alloyId13);
    $.__views.contact = Ti.UI.createButton({
        id: "contact",
        systemButton: Ti.UI.iPhone.SystemButton.CONTACT_ADD
    });
    __alloyId11.push($.__views.contact);
    $.__views.__alloyId14 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId11.push($.__views.__alloyId14);
    $.__views.contact = Ti.UI.createButton({
        id: "contact",
        systemButton: Ti.UI.iPhone.SystemButton.TRASH
    });
    __alloyId11.push($.__views.contact);
    $.__views.__alloyId15 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId11.push($.__views.__alloyId15);
    $.__views.about = Ti.UI.createButton({
        id: "about",
        systemButton: Ti.UI.iPhone.SystemButton.INFO_DARK
    });
    __alloyId11.push($.__views.about);
    $.__views.__alloyId9 = Ti.UI.iOS.createToolbar({
        width: Titanium.UI.FILL,
        bottom: 0,
        barColor: "#333",
        items: __alloyId11,
        id: "__alloyId9"
    });
    $.__views.hub.add($.__views.__alloyId9);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var channelDataSet = [ {
        program: {
            text: "Nurse Jackie"
        },
        airingTime: {
            text: "15:10 - 16:10"
        },
        chnImg: {
            image: "/NRK1.png"
        }
    }, {
        program: {
            text: "God moregen NOrge"
        },
        airingTime: {
            text: "15:10 - 16:10"
        },
        chnImg: {
            image: "/NRK1.png"
        }
    }, {
        program: {
            text: "Store forrentninger"
        },
        airingTime: {
            text: "15:10 - 16:10"
        },
        chnImg: {
            image: "/NRK1.png"
        }
    }, {
        program: {
            text: "Millionera"
        },
        airingTime: {
            text: "15:10 - 16:10"
        },
        chnImg: {
            image: "/NRK1.png"
        }
    } ];
    var channelRowTemplate = {
        properties: {
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE,
            height: 70,
            backgroundColor: "#FFF6E5"
        },
        childTemplates: [ {
            type: "Ti.UI.ImageView",
            bindId: "chnImg",
            properties: {
                width: 60,
                height: 50,
                left: 10
            }
        }, {
            type: "Ti.UI.Label",
            bindId: "program",
            properties: {
                color: "black",
                font: {
                    fontSize: 20,
                    fontWeight: "bold"
                },
                left: 80,
                top: 10
            }
        }, {
            type: "Ti.UI.Label",
            bindId: "airingTime",
            properties: {
                color: "gray",
                font: {
                    fontSize: 14
                },
                left: 80,
                top: 40
            }
        } ]
    };
    $.channelsView.templates = {
        channelRowTemplate: channelRowTemplate
    };
    $.channelsView.setDefaultItemTemplate("channelRowTemplate");
    var sections = $.channelsView.getSections();
    sections[0].setItems(channelDataSet);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;