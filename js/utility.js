function subtotal(mealPrice, mealTaxRate) {
 if (mealTaxRate > 1) {
    mealTaxRate = parseFloat(mealTaxRate)/100;
    var tax = mealPrice * mealTaxRate;
    var mealSubtotal = (parseFloat(mealPrice) + parseFloat(tax));
    return mealSubtotal.toFixed(2);
  }else{
    var tax1 = mealPrice * mealTaxRate;
    var mealSubtotal1 = (parseFloat(mealPrice) + parseFloat(tax1));
    return mealSubtotal1.toFixed(2);
  }
}

//function to total the tip
function tipTotal(mealPrice, mealTipRate) {
  if ($('input[name="meal-tiprate"]').val() > 1) {
    mealTipRate = parseFloat(mealTipRate)/100;
    var tip = mealPrice * mealTipRate;
    return tip.toFixed(2);
  }else{
    var tip1 = mealPrice * mealTipRate;
    return tip1.toFixed(2);
  }
}

//function to find total meal price
function totalCharges(subtotal, tipTotal) {
  var total = parseFloat(subtotal) + parseFloat(tipTotal);
  return total.toFixed(2);
}

//function to find total earning tips
function tipEarnings(array){
  var tipAmount;
  var tipArray = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i].mealTipRate < 1){
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
}

//function to find total meal count
function mealCount(array){
  var count = array.length;
  return count;
}

//function to find average total tip
function averageTip(tipTotal, numberTips){
  var tipAverage = tipTotal / numberTips;
  return tipAverage.toFixed(2);
}
