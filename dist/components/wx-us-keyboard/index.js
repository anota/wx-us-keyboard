// pages/vehicleKeyboard/vehicleKeyboard.js
Component({
  properties: {
    //是否显示键盘
    keyboardValue: {
      type: String
    }
  },
  data: {
    isNum: false,
    isUpperCase:false,
    keyboardNumber: '1234567890-/:;()$&@".,?!\'',
    keyboardAlph: 'qwertyuiopasdfghjklzxcvbnm',
    keyboardValue: "",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 点击键盘按键事件
     */
    tapKeyboard: function(e) {
      var tapVal = e.target.dataset.val;
      var keyboardValue = this.data.keyboardValue;
      var length = keyboardValue.length;

      if (tapVal === 'del') {
        //点击删除
        if (length < 1) {
          return false;
        }

        keyboardValue = keyboardValue.substring(0, length - 1);
        this.setData({
          keyboardValue: keyboardValue
        });

        this.triggerEvent('input', keyboardValue);
        return false;
      }

      keyboardValue = (keyboardValue + tapVal);

      this.setData({
        keyboardValue: keyboardValue
      });

      this.triggerEvent('input', keyboardValue);
      return false;
    },
    onShift(){
      const keyboardLowerCaseAlph = 'qwertyuiopasdfghjklzxcvbnm';
      const keyboardUpperCaseAlph = 'QWERTYUIOPASDFGHJKLZXCVBNM';
      const isUpperCase = this.data.isUpperCase;
      let keyboardAlph;
      if (isUpperCase){
        keyboardAlph = keyboardLowerCaseAlph;
      }else{
        keyboardAlph = keyboardUpperCaseAlph;
      }
      this.setData({
        keyboardAlph,
        isUpperCase: !isUpperCase
      });
    },
    onDone(){
        this.triggerEvent('done');
    },
    onTrans(){
      const isNum = this.data.isNum;
      this.setData({
        isNum: !isNum
      });
    },
    /**
     * 组织键盘点击事件冒泡到父容器
     */
    stopProp: function() {
      return false;
    }
  }
})