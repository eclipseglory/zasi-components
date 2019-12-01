Component({
    properties: {
        imageBackgroundColor1: {
            value: '#ffffff',
            type: String
        },
        imageBackgroundColor2: {
            value: '#ffffff',
            type: String
        },
        backgroundColor: {
            value: '#f7f7f7',
            type: String
        },

        titleColor: {
            value: '#393e46',
            type: String
        },

        placeOrderColor: {
            value: '#e5dfdf',
            type: String
        },

        cartColor: {
            value: '#e5dfdf',
            type: String
        },

        likeColor: {
            value: '#fa4252',
            type: String
        },

        priceColor: {
            value: '#fa4252',
            type: String
        },

        buttonColor1: {
            value: '#fe6845',
            type: String
        },
        buttonColor2: {
            value: '#fa4252',
            type: String
        },


        descriptionColor: {
            value: '#5c636e',
            type: String
        },

        ratingTextColor: {
            value: '#fe6845',
            type: String
        },

        starColor: {
            value: '#fe6845',
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
            value: '1em',
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
            value: '1em',
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
            value: 'aspectFit',
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
            value: '0.75em',
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
            value: '￥',
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
            value: '￥',
            type: String
        },
        priceSuffix: {
            value: undefined,
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

    data: {},

    methods: {},

    observers: {},

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