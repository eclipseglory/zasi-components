Component({
    properties: {
        backgroundColor: {
            value: 'rgba(0,0,0,0.618)',
            type: String
        },
        like: {
            value: false,
            type: Boolean
        },

        showDescription: {
            value: false,
            type: Boolean
        },

        likeImageUrl: {
            value: 'icons/like-2.svg',
            type: String
        },

        unLikeImageUrl: {
            value: 'icons/like-1.svg',
            type: String
        },

        likeSize: {
            value: 0,
            type: Number
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

        titleColor: {
            value: 'whitesmoke',
            type: String
        },

        description: {
            value: undefined,
            type: String
        },

        descriptionColor: {
            value: 'lightGrey',
            type: String
        },

        rating: {
            value: 0,
            type: Number
        },

        fullStarImage: {
            value: 'icons/rating-solid.svg',
            type: String
        },
        halfStarImage: {
            value: 'icons/rating-half.svg',
            type: String
        },
        noStarImage: {
            value: 'icons/rating-line.svg',
            type: String
        },
        priceColor: {
            value: '#bae8e8',
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

        showPlaceOrder:{
            value:false,
            type:Boolean,
        },

        showAddCart:{
            value:true,
            type:Boolean,
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
                let likeW = Math.floor(w * 0.15);
                let starSize = Math.floor(w * 0.1);
                that.setData({
                    cardWidth: w,
                    starSize: starSize,
                    likeSize: likeW
                })
            }
        });
        let rating = this.properties.rating;
        let stars = [];
        for (let i = 0; i < 5; i++) {
            let index = i + 1;
            let t = rating / index;
            if (t >= 1) {
                //满星
                stars[i] = this.properties.fullStarImage;
            } else {
                let t2 = index - rating;
                if (t2 < 0.5) {
                    //半醒
                    stars[i] = this.properties.halfStarImage;
                } else {
                    //无星
                    stars[i] = this.properties.noStarImage;
                }
            }
        }
        this.setData({
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