Component({
    externalClasses: [
        'ext-class'
    ],
    properties: {
        'indicatorDots': {value: false, type: Boolean},
        'indicatorColor': {value: 'rgba(0, 0, 0, .3)', type: String},
        'indicatorActiveColor': {value: '#000000', type: String},
        autoplay: {value: true, type: Boolean},
        interval: {value: 5000, type: Number},
        duration: {value: 500, type: Number},
        textBackgroundOpacity: {value: 0.5, type: Number},
        textBackground: {value: 'black', type: String},
        textBackgroundHeight: {value: '75rpx', type: String},

        mode: {value: 'aspectFill', type: String},
        width: {value: '100%', type: String},
        height: {value: '200rpx', type: String},

        textSize: {value: '1em', type: String},
        textColor: {value: 'white', type: String},
        textPadding: {value: '0 15rpx 0 15rpx', type: String},
        textHAlign: {value: 'flex-start', type: String},
        textVAlign: {value: 'center', type: String},

        images: {
            type: Array,
            value: []
        }
    }
});