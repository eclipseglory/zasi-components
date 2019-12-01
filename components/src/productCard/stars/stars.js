Component({
    properties: {
        starColor: {
            value: 'yellow',
            type: String
        },
        starSize: {
            value: '0.75em',
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
    },

    data: {},

    methods: {
        setStars: function () {
            let rating = this.properties.rating;
            if (rating == null) return;
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
        }
    },

    observers: {
        'rating' : function(rating){
            this.setStars();
        }
    },

    detached: function () {
    },

    attached: function () {

    },

    ready() {
    }

});