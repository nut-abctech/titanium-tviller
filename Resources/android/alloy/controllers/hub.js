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
        height: "120px",
        top: 10,
        id: "header"
    });
    $.__views.hub.add($.__views.header);
    $.__views.appName = Ti.UI.createLabel({
        color: "#FFF6E5",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "30px",
            fontWeigth: "bold"
        },
        id: "appName",
        text: "Tviller"
    });
    $.__views.header.add($.__views.appName);
    $.__views.body = Ti.UI.createView({
        top: "140px",
        backgroundColor: "#FFF6E5",
        id: "body"
    });
    $.__views.hub.add($.__views.body);
    $.__views.__alloyId2 = Ti.UI.createView({
        height: "100px",
        backgroundColor: "#D13C1C",
        id: "__alloyId2"
    });
    $.__views.__alloyId3 = Ti.UI.createLabel({
        color: "#FFF6E5",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "20px",
            fontWeigth: "bold",
            color: "FFF6E5"
        },
        text: "Popular Channels",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    var __alloyId4 = [];
    $.__views.__alloyId5 = {
        properties: {
            title: "Papaya",
            searchableText: "Papaya",
            id: "__alloyId5"
        }
    };
    __alloyId4.push($.__views.__alloyId5);
    $.__views.toplist = Ti.UI.createListSection({
        headerView: $.__views.__alloyId2,
        id: "toplist"
    });
    $.__views.toplist.items = __alloyId4;
    var __alloyId6 = [];
    __alloyId6.push($.__views.toplist);
    $.__views.__alloyId9 = Ti.UI.createView({
        height: "100px",
        backgroundColor: "#D13C1C",
        id: "__alloyId9"
    });
    $.__views.__alloyId10 = Ti.UI.createLabel({
        color: "#FFF6E5",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "20px",
            fontWeigth: "bold",
            color: "FFF6E5"
        },
        text: "All Channels",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    var __alloyId11 = [];
    $.__views.__alloyId12 = {
        properties: {
            title: "Peach",
            searchableText: "Peach",
            id: "__alloyId12"
        }
    };
    __alloyId11.push($.__views.__alloyId12);
    $.__views.__alloyId13 = {
        properties: {
            title: "Pear",
            searchableText: "Pear",
            id: "__alloyId13"
        }
    };
    __alloyId11.push($.__views.__alloyId13);
    $.__views.__alloyId14 = {
        properties: {
            title: "Persimmon",
            searchableText: "Persimmon",
            id: "__alloyId14"
        }
    };
    __alloyId11.push($.__views.__alloyId14);
    $.__views.allChannels = Ti.UI.createListSection({
        height: "100px",
        backgroundColor: "#D13C1C",
        headerView: $.__views.__alloyId9,
        id: "allChannels",
        headerTitle: "All channels"
    });
    $.__views.allChannels.items = __alloyId11;
    __alloyId6.push($.__views.allChannels);
    $.__views.channelsView = Ti.UI.createListView({
        backgroundColor: "#FFF6E5",
        sections: __alloyId6,
        id: "channelsView"
    });
    $.__views.body.add($.__views.channelsView);
    $.__views.footer = Ti.UI.createView({
        width: "100%",
        height: "100px",
        bottom: 0,
        backgroundColor: "#333",
        id: "footer"
    });
    $.__views.hub.add($.__views.footer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;