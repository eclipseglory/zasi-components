Page({

    data:{
        show:false,
        show2:false,
        show3:false
    },
    showLoad:function(e){
      this.setData({
          show : !this.data.show
      })
    },

    showCenterLoad:function(e){
        this.setData({
            show2 : !this.data.show2
        })
    },

    showCenterLoad2:function(e){
        this.setData({
            show3 : !this.data.show3
        })
    }
});