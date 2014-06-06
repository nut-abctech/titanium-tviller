var channelDataSet = [
    { program : {text : 'Nurse Jackie'}, airingTime : {text : '15:10 - 16:10'}, chnImg: {image :'/NRK1.png'}},
    { program : {text : 'God moregen NOrge'},  airingTime : {text : '15:10 - 16:10'}, chnImg: {image :'/NRK1.png'}},
    { program : {text : 'Store forrentninger'},  airingTime : {text : '15:10 - 16:10'}, chnImg: {image :'/NRK1.png'}},
    { program : {text : 'Millionera'},  airingTime : {text : '15:10 - 16:10'}, chnImg: {image :'/NRK1.png'}},
];
var channelRowTemplate = {
    properties: {
        // These are the same as the list data item properties
        // The list data item properties supersedes these if both are defined
        accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE,
        height: 70,
        backgroundColor:"#FFF6E5"
    },
    childTemplates: [
        {                            // Image justified left
            type: 'Ti.UI.ImageView', // Use an image view for the image
            bindId: 'chnImg',        // Maps to a custom pic property of the item data
            properties: {            // Sets the image view  properties
                width: 60, height: 50, left: 10
            }
        },
        {                            // Title
            type: 'Ti.UI.Label',     // Use a label for the title
            bindId: 'program',       // Maps to a custom info property of the item data
            properties: {            // Sets the label properties
                color: 'black',
                font: { fontSize: 20, fontWeight:'bold' },
                left: 80, top: 10
            }
        },
        {                            // Subtitle
            type: 'Ti.UI.Label',     // Use a label for the subtitle
            bindId: 'airingTime',    // Maps to a custom es_info property of the item data
            properties: {            // Sets the label properties
                color: 'gray',
                font: {  fontSize: 14 },
                left: 80 , top: 40
            }
        }
    ]
};
//
$.channelsView.templates = { 'channelRowTemplate': channelRowTemplate };
$.channelsView.setDefaultItemTemplate('channelRowTemplate');
var sections = $.channelsView.getSections();
sections[0].setItems(channelDataSet);

