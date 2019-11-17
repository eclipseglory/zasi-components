Component({

    externalClasses: ['ext-class'],

    properties: {
        showMe: {
            value: false,
            type: Boolean
        },
        forward: {
            value: 'bottom',
            type: String
        },
        type: {
            value: 'normal',
            type: String
        },
        text: {
            value: null,
            type: String
        },
        zIndex: {
            value: 1,
            type: Number
        },
        targetHeight: {
            value: 0.382 * 0.382,
            type: Number
        },
        stayTime: {
            value: 2000,
            type: Number
        },
        animationDuration: {
            value: 150,
            type: Number
        },
        show: {
            value: false,
            type: Boolean
        }
    },

    options: {
        pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
    },

    data: {
        bottom: -99999,
        totalHeight: 0
    },

    methods: {
        showing(e) {
            let that = this;
            if (this.properties.stayTime >= 0)
                setTimeout(function () {
                    if (that.properties.show) {
                        that.setData({
                            show: false
                        })
                    }
                }, this.properties.stayTime);
        }
    },

    observers: {
        'show': function (show) {
            if (this.properties.text != this.data.lastText) {
                this.data.lastText = this.properties.text;
                let that = this;
                let q = wx.createSelectorQuery().in(this);
                q.select('#root').boundingClientRect(function (res) {
                    let r = res;
                    if (r == null) {
                        console.warn('toast大小为0');
                    } else {
                        let width = r.width;
                        let height = r.height;
                        let info = wx.getSystemInfoSync();
                        let ww = info.windowWidth;
                        that.setData({
                            left: (ww - width) / 2,
                            bottom: -height,
                            totalHeight: info.windowHeight,
                            height: height,
                            showMe: show
                        })
                    }
                }).exec();
            } else {
                this.setData({
                    showMe: show
                })
            }
        },
        'type': function (type) {
            if (type == 'error' || type == 'success') {
                this.setData({
                    forward: 'top'
                })
            } else {
                this.setData({
                    forward: 'bottom'
                })
            }
        }
    },

    attached: function () {
    },

    ready() {
    },

    detached: function () {
    }

});