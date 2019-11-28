Page({
    data: {
        tabs: [
            {key: 'tab1', name: '选项1'}
        ],
        useSticky: false
    },

    onLoad() {

    },
    switch1Change(e) {
        this.setData({
            useSticky : e.detail.value
        })
    }
})