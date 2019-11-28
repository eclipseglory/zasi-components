Component({

    externalClasses: [
        'ext-class'
    ],

    properties: {
        backgroundColor: {
            value: '#ffffff',
            type: String
        },
        iconSize: {
            value: '20px',
            type: String
        },
        iconDuration: {
            value: 1000,
            type: Number
        },
        iconUrl: {
            value: 'icons/dot.svg',
            type: String
        },

        show: {
            value: false,
            type: Boolean
        },

        zIndex: {
            value: 2,
            type: Number
        },
        text: {
            value: '正在读取...',
            type: String
        },
    },

    data: {
    },

    methods: {},

    observers: {},

    detached: function () {
    },

    attached: function () {
        let query = wx.createSelectorQuery().in(this);
        let that = this;
        query.select('#root').boundingClientRect().exec(function (res) {
            let rect = res[0];
            if (rect == null) return;
            let info = wx.getSystemInfoSync();
            that.setData({
                left: (info.windowWidth - rect.width) / 2,
            });
        });
    },

    ready() {
    }

});