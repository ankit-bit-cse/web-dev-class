const calculator = {
  a: 10,
  b: 5,

  add: function () {
    console.log(this.a + this.b);
  },

  multiply: function () {
    console.log(this.a * this.b);
  }

};

calculator.add()
calculator.multiply()