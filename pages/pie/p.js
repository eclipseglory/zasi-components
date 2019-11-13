Page({
    data: {
        angle: 270,
        randomBack: "#000000",
        randomPie: '#ff0000',
        rotateAngle: 0,
        startRotate: false,
        pdatas: []
    },

    onLoad() {
        for (let i = 0; i < 4; i++) {
            this.data.pdatas.push({value: Math.floor(Math.random() * 360), color: this.randomColor()});
        }
        this.setData({
            pdatas:this.data.pdatas
        })
    },

    rotateIt(e) {
        this.data.startRotate = !this.data.startRotate;
        this.setData({
            startRotate: this.data.startRotate
        })
        this.runRotate();
    },

    runRotate() {
        let that = this;
        let id = setInterval(function () {
            if (!that.data.startRotate) {
                clearInterval(id);
                return;
            }
            that.data.rotateAngle += 1;
            that.setData({
                rotateAngle: that.data.rotateAngle
            })
        }, 16.6);
    },

    changeAngle() {
        this.setData({
            angle: Math.random() * 1000 + 100
        })
    },

    changeColor(e) {
        let c = this.randomColor();
        let c1 = this.randomColor();

        this.setData({
            randomBack: c,
            randomPie: c1
        })
    },
    randomColor() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    },

    ringWidthPercentChanging(e) {
        this.setData({
            ringWidthPercent: e.detail.value
        })
    }
});