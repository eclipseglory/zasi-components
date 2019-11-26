Component({

    externalClasses: [
        'ext-class'
    ],

    properties: {
        backgroundColor: {
            value: 'whitesmoke',
            type: String
        },
        iconSize: {
            value: '64px',
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
            value: undefined,
            type: String
        },
    },

    data: {},

    methods: {},

    observers: {},

    detached: function () {
    },

    attached: function () {
        let query = wx.createSelectorQuery().in(this);
        let that = this;
        let info = wx.getSystemInfoSync();
        query.select('#root').boundingClientRect().exec(function (res) {
            let rect = res[0];
            if (rect == null) return;

            let bottom = (info.windowHeight - rect.height) / 2 + rect.height/2;
            that.setData({
                left: (info.windowWidth - rect.width) / 2,
                bottom: bottom
            });
        });
    },

    ready() {
    }

});