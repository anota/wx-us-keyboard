// index.js
Page({
    /**
     *  初始数据
     */
    data: {},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
      
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {},


    /**
     * 配合键盘输入事件：input，获取输入内容到虚拟输入框中
     */
    inputChange: function(e) {
      const textValue = e.detail;
      this.setData({
        textValue: textValue
      });
    },

    /**
     * 配合键盘点击‘完成’事件：done，设置虚拟输入框为未激活状态
     */
    inputDone: function() {
        this.setData({
            isFocus: false
        })
    }
});
