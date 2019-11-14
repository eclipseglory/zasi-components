Page({

    tableObs: null,

    data: {
        angle: 270,
        randomBack: "#000000",
        randomPie: '#ff0000',
        rotateAngle: 0,
        startRotate: false,
        pdatas: [],
        tablePieReady: false,
        chartReady: false,
        chartDatas: []
    },

    onLoad() {
        let that = this;
        this.tableObs = wx.createIntersectionObserver();
        this.tableObs = this.tableObs.relativeToViewport();
        this.tableObs.observe('#pieTable', function (res) {
            that.setData({
                tablePieReady: res.intersectionRatio > 0
            })
        });

        this.chartObs = wx.createIntersectionObserver();
        this.chartObs = this.chartObs.relativeToViewport();
        this.chartObs.observe('#pieChart', function (res) {
            that.setData({
                chartReady: res.intersectionRatio > 0
            })
        });

        for (let i = 0; i < 8; i++) {
            this.data.pdatas.push({value: Math.floor(Math.random() * 360), color: this.randomColor()});
        }

        let totalValue = 0;
        for (let i = 0; i < 5; i++) {
            let value = Math.floor(Math.random() * 100);
            totalValue += value;
            this.data.chartDatas.push({value: value, color: this.randomColor()});
        }
        let cdatas = this.data.chartDatas;
        let rotate = 0;
        for (let i = 0; i < cdatas.length; i++) {
            let d = cdatas[i];
            d.percent = d.value / totalValue;
            d.angle = d.percent * 360;
            d.rotate = rotate;
            rotate += d.angle;
        }

        console.log(cdatas);

        this.setData({
            chartDatas:cdatas,
            pdatas: this.data.pdatas
        })
    },

    onUnload() {
        if (this.tableObs)
            this.tableObs.disconnect();
        if (this.chartObs)
            this.chartObs.disconnect();
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