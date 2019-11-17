Page({

    data: {
        text:null,
        show: false,
    },
    show(e) {
        let type = e.currentTarget.dataset.type
        this.setData({
            showToast: true,
            text:type,
            type:type
        })
    }
})