Component({
    externalClasses: [
        'ext-image-class',
        'ext-image-container-class',
        'ext-class',
        'ext-number-class',
        'ext-number-container-class',
        'ext-content-class',
    ],
    properties: {
        imageUrl: {
            value: '',
            type: String
        },
        isInteger: {
            value: true,
            type: Boolean
        },
        content: {
            value: '',
            type: String
        },
        height: {
            value: '100px',
            type: String
        },
        width: {
            value: '100px',
            type: String
        },

        imageWidth: {
            value: '100%',
            type: String
        },

        mode: {value: 'aspectFill', type: String},

        imageHeight: {
            value: '100%',
            type: String
        },

        imageContainerPercent: {
            value: 0.5,
            type: Number
        },
        startNumber: {
            value: 0,
            type: Number
        },
        value: {
            value: 0,
            type: Number
        },

        valueSuffix: {
            value: '',
            type: String
        },

        duration: {
            value: 500,
            type: Number
        },

        showAnimation: {
            value: true,
            type: Boolean
        }
    },

    ready: function (options) {

        if (this.data.showAnimation) {
            let delta = this.data.value - this.data.startNumber;
            let time = this.data.duration;
            let st = 1000 / 60;
            let count = Math.floor(time / st);
            let perDelta = delta / count;
            let pained = 0;

            let that = this;

            // 小程序不支持requestAnimationFrame，setTimeout替代
            function animation() {
                if (pained >= count) {
                    if (that.data.startNumber != that.data.value)
                        that.setData({
                            startNumber: that.data.value,
                        })
                } else {
                    that.setData({
                        startNumber: that.data.startNumber + perDelta
                    }, function () {
                        pained++;
                        setTimeout(function () {
                            animation();
                        }, st)
                    })
                }
            }

            animation();
        }
    }
});