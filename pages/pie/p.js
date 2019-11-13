Page({
    data: {
        angle: 190,
        randomBack: "rgb(100,20,1)",
        randomPie: null,
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
    }
});