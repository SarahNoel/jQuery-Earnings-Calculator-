  var mealCost = {};

  var Bill = function(mealPrice, taxRate, mealTipRate){
    this.mealPrice = mealPrice;
    this.taxRate = taxRate;
    this.mealTipRate = mealTipRate;
  };

  Bill.prototype.subtotal = function(){
    var sub = parseFloat(this.mealPrice) * parseFloat(this.taxRate) + parseFloat(this.mealPrice);
    return sub.toFixed(2);
  };

  //function to total the tip
  Bill.prototype.tipTotal = function(mealPrice, mealTipRate) {
    if ($('input[name="meal-tiprate"]').val() > 1) {
      mealTipRate = parseFloat(mealTipRate)/100;
      var tip = mealPrice * mealTipRate;
      return tip.toFixed(2);
    }else{
      var tip1 = mealPrice * mealTipRate;
      return tip1.toFixed(2);
    }
  };

  Bill.prototype.totalCharges = function(subtotal, tipTotal) {
    var total = parseFloat(subtotal) + parseFloat(tipTotal);
    return total.toFixed(2);
  };

  Bill.prototype.tipEarnings = function(array){
    var tipAmount;
    var tipArray = [];
    for (var i = 0; i < array.length; i++) {
      console.log(array);
      if(array[i].mealTipRate < 1){
        console.log(array[i].mealTipRate);
      tipAmount = array[i].mealTipRate * array[i].mealPrice;
      tipArray.push(tipAmount);
      }
      else{
      tipAmount = array[i].mealTipRate/100 * array[i].mealPrice;
      tipArray.push(tipAmount);
      }
    }
    var total = 0;
    $.each(tipArray, function(){
      total += this;
    });
    return total.toFixed(2);
  };

  Bill.prototype.mealCount = function(array){
    var count = array.length;
    return count;
  };

  Bill.prototype.averageTip = function(tipTotal, numberTips){
    var tipAverage = tipTotal / numberTips;
    return tipAverage.toFixed(2);
  };


module.exports = Bill;
