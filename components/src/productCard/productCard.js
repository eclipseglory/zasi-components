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
            value: 0,
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

    data: {},

    methods: {},

    observers: {
        'property': function (property) {

        }
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
        let rating = this.properties.rating;
        let useImg = this.properties.fullStarImage != null && this.properties.halfStarImage != null && this.properties.noStarImage != null;
        let stars = [];
        for (let i = 0; i < 5; i++) {
            let index = i + 1;
            let t = rating / index;
            if (t >= 1) {
                //满星
                if (useImg) {
                    stars[i] = this.properties.fullStarImage;
                } else {
                    stars[i] = 'iconrating-solid';
                }

            } else {
                let t2 = index - rating;
                if (t2 < 0.5) {
                    //半醒
                    if (useImg) {
                        stars[i] = this.properties.halfStarImage;
                    } else {
                        stars[i] = 'iconrating-half';
                    }
                } else {
                    //无星
                    if (useImg) {
                        stars[i] = this.properties.noStarImage;
                    } else {
                        stars[i] = 'iconrating-line';
                    }
                }
            }
        }
        this.setData({
            useImg: useImg,
            star1: stars[0],
            star2: stars[1],
            star3: stars[2],
            star4: stars[3],
            star5: stars[4]
        }, function () {
            stars = null
        })

    },

    ready() {
    }

});