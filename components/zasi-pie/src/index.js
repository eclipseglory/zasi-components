Component({
    properties: {
        ringWidthPercent: {
            value: 0,
            type: Number
        },
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
        },

        rotate: {
            value: 0,
            type: Number
        },

        ready: {
            value: true,
            type: Boolean
        },
    },

    data: {
        centerRadius: 0,
        pieRadius: 0,
    },

    methods: {},

    // tableObs: null,

    observers: {
        'ringWidthPercent': function (ringWidthPercent) {
            let radius = this.data.pieRadius;
            if (radius == null) return;
            let that = this;
            let centerRadius = radius * (1 - ringWidthPercent);
            if (ringWidthPercent <= 0) centerRadius = 0;
            that.setData({
                centerRadius: centerRadius
            })
        }
    },

    detached: function () {
        // if (this.tableObs != null) {
        //     this.tableObs.disconnect();
        // }
    },

    attached: function () {
        let that = this;
        // this.tableObs = this.createIntersectionObserver();
        // if (this.properties.relatedTo != null) {
        //     this.tableObs = this.tableObs.relatedTo(this.properties.relatedTo);
        // } else {
        //     this.tableObs = this.tableObs.relativeToViewport();
        // }
        // this.tableObs.observe('#zasi-pie-back-ground', function (res) {
        //     that.setData({
        //         ready: res.intersectionRatio > 0
        //     })
        // });

        let query = wx.createSelectorQuery().in(this);

        query.select('#root').boundingClientRect().exec(function (res) {
            if (res[0] == null) {
                console.warn('没找到根节点，可能尺寸大小为0')
            } else {
                let w = res[0].width;
                let h = res[0].height;
                w = Math.min(w, h);
                let radius = Math.floor(w / 2);
                let centerRadius = radius * (1 - that.properties.ringWidthPercent);
                if (that.properties.ringWidthPercent <= 0) centerRadius = 0;
                that.setData({
                    centerRadius: centerRadius,
                    pieRadius: radius
                })
            }
        });
    },


});