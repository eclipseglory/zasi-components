Page({

    data: {
        show: false,
        currentColor: null,
        opacity: 1,
        showOpacity: false,
        pointerClass: null,
        sliderPointerClass: null,
        pointerImage : null,
        pointerImage2 : null,
    },
    onLoad: function () {
    },

    showDialog(e) {
        let ds = e.currentTarget.dataset;
        let dialogOptions = this.getDefaultDialogOptions();
        dialogOptions.show = true;
        for (let p in ds) {
            dialogOptions[p] = ds[p];
        }
        this.setData(dialogOptions);
    },

    confirmColor(e) {
        this.setData({
            currentColor: e.detail.value,
            opacity: e.detail.opacity
        })
    },

    colorChange(e) {
    },

    getDefaultDialogOptions() {
        let defaultDialogOptions = {
            showOpacity: false,
            pointerClass: null,
            sliderPointerClass: null,
            pointerImage : null,
            pointerImage2 : null,
            centerClass:null,
            confirmImage:'confirm-white.svg', //这是自带的确认图片
        }
        return defaultDialogOptions;
    }
});