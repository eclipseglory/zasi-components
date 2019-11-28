Component({
    properties: {
        backgroundColor: {
            value: '#f4f9f4',
            type: String
        },

        titleColor: {
            value: '#5c8d89',
            type: String
        },

        placeOrderColor: {
            value: '#5c8d89',
            type: String
        },

        cartColor: {
            value: '#5c8d89',
            type: String
        },

        likeColor: {
            value: '#74b49b',
            type: String
        },

        priceColor: {
            value: '#74b49b',
            type: String
        },

        descriptionColor: {
            value: '#a7d7c5',
            type: String
        },

        ratingTextColor: {
            value: '#a7d7c5',
            type: String
        },

        starColor: {
            value: '#a7d7c5',
            type: String
        },

        titleSize: {
            value: '1em',
            type: String
        },

        descriptionSize: {
            value: '0.5em',
            type: String
        },

        cartButtonSize: {
            value: '1.5em',
            type: String
        },

        like: {
            value: false,
            type: Boolean
        },

        likeSize: {
            value: '1.5em',
            type: String
        },

        priceSize: {
            value: '2em',
            type: String
        },

        priceTextSize: {
            value: '0.5em',
            type: String
        },

        regularPriceSize: {
            value: '0.5em',
            type: String
        },

        url: {
            value: undefined,
            type: String
        },
        showDescription: {
            value: false,
            type: Boolean
        },

        name: {
            value: null,
            type: String
        },

        imageSize: {
            value: '100px',
            type: String
        },
        imageUrl: {
            value: null,
            type: String
        },

        imageMode: {
            value: 'aspectFill',
            type: String
        },

        description: {
            value: undefined,
            type: String
        },

        rating: {
            value: undefined,
            type: Number
        },

        fullStarImage: {
            value: null,
            type: String
        },
        halfStarImage: {
            value: null,
            type: String
        },
        noStarImage: {
            value: null,
            type: String
        },

        ratingSize: {
            value: '0.5em',
            type: String
        },

        showRegularPrice: {
            value: false,
            type: Boolean
        },

        regularPrice: {
            value: undefined,
            type: Number
        },
        regularPricePrefix: {
            value: undefined,
            type: String
        },
        regularPriceSuffix: {
            value: undefined,
            type: String
        },

        price: {
            value: undefined,
            type: Number
        },
        pricePrefix: {
            value: undefined,
            type: String
        },
        priceSuffix: {
            value: ' 元',
            type: String
        },

        showPlaceOrder: {
            value: false,
            type: Boolean,
        },

        showAddCart: {
            value: true,
            type: Boolean,
        },
        mix: {
            value: false,
            type: Boolean
        }
    },

    data: {
    },

    methods: {},

    observers: {
    },

    detached: function () {
    },

    attached: function () {
        let query = wx.createSelectorQuery().in(this);
        let that = this;
        query.select('#root').boundingClientRect().exec(function (res) {
            if (res[0] == null) {
                console.warn('没找到根节点，可能尺寸大小为0')
            } else {
                let w = res[0].width;
                let starSize = Math.floor(w * 0.1);
                that.setData({
                    cardWidth: w,
                    starSize: starSize,
                })
            }
        });
    },

    ready() {
    }

});