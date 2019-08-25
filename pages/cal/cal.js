Page(
  {
    calSubmit: function (event) {
      var n1 = event.detail.value.num1;
      var n2 = event.detail.value.num2;
      var r = parseInt(n1) + parseInt(n2);
      this.setData({ calResult: r });
    },

    calJianSubmit: function (event) {
      var n1 = event.detail.value.num1;
      var n2 = event.detail.value.num2;
      var r = parseInt(n1) - parseInt(n2);
      this.setData({ calResult: r });
    }
  });