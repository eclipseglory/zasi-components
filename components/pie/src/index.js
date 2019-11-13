Component({
    properties: {

        relatedTo: {
            value: null,
            type: String
        },

        animation: {
            value: true,
            type: Boolean
        },

        animationDuration: {
            value: 500,
            type: Number
        },

        angle: {
            value: 0,
            type: Number
        },

        width: {
            value: '100px',
            type: String
        },

        height: {
            value: '100px',
            type: String
        },

        pieColor: {
            value: '#cccccc',
            type: String
        },

        backgroundColor: {
            value: '#ffffff',
            type: String
        }
    },

    data: {
        pieRadius: 0,
        ready: false,
    },

    methods: {},

    observer: null,

    detached: function () {
        if (this.observer != null) {
            this.observer.disconnect();
        }
    },

    attached: function () {
        let that = this;
        this.observer = this.createIntersectionObserver();
        if (this.properties.relatedTo != null) {
            this.observer = this.observer.relatedTo(this.properties.relatedTo);
        } else {
            this.observer = this.observer.relativeToViewport();
        }
        this.observer.observe('#pie-back-ground', function (res) {
            that.setData({
                ready: res.intersectionRatio > 0
            })
        });

        let query = wx.createSelectorQuery().in(this);

        query.select('#root').boundingClientRect().exec(function (res) {
            if (res[0] == null) {
                console.warn('没找到根节点，可能尺寸大小为0')
            } else {
                let w = res[0].width;
                let h = res[0].height;
                w = Math.min(w, h);
                let radius = Math.floor(w / 2);
                that.setData({
                    pieRadius: radius
                })
            }
        });
    },


});