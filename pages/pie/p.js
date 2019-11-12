Page({
    data: {
        angle: 190
    },
    changeAngle() {
        this.setData({
            angle: Math.random()*1000+100
        })
    }
});