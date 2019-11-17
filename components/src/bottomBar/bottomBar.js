Component({
    externalClasses: [
        'ext-class'
    ],
    options: {},
    properties: {
        showBorder: {
            value: false,
            type: Boolean
        },

        zIndex: {
            value: 1,
            type: Number
        },
        height: {
            type: String,
            value: null
        },
        border: {
            type: String,
            value: 'solid 1px whitesmoke'
        },
        backgroundColor: {
            type: String,
            value: '#ffffff'
        }
    },
    methods: {},
    data: {},

    attached: function (options) {
        let that = this;
        let q = wx.createSelectorQuery().in(this);
        q.select('#container').boundingClientRect(function (res) {
            let r = res;
            if (r != null) {
                let width = r.width;
                let height = r.height;
                that.setData({
                    height: height + 'px'
                })
            }
        }).exec();
    }
});