Page({

    data: {
        show: false,
    },
    show(e) {
        let type = e.currentTarget.dataset.type
        this.setData({
            showToast: true,
            type:type
        })
    }
})