$(document).on('ready', function() {

  //create global array to store individual meal cost functions
  var mealArray = [];

  $('input[value="Submit"]').on('click', function(e) {
    e.preventDefault();

    var mealCost = {};

    // set variable to input value
    mealCost.mealPrice = $('input[name="meal-price"]').val();
    mealCost.mealTaxRate = $('input[name="meal-taxrate"]').val();
    mealCost.mealTipRate = $('input[name="meal-tiprate"]').val();
    mealArray.push(mealCost);

    // call function
    var subtotalDOM = subtotal(mealCost.mealPrice, mealCost.mealTaxRate);
    var tipDOM = tipTotal(mealCost.mealPrice, mealCost.mealTipRate);
    var totalDOM = totalCharges(subtotalDOM, tipDOM);

    $('input').not('.btn').val(" ");

//Total Earnings
    var totalTipsDOM = tipEarnings(mealArray);
    var mealCountDOM = mealCount(mealArray);
    var averageTipDOM = averageTip(totalTipsDOM, mealCountDOM);


//DOM manipulation
    $('#subtotal').html("$" + subtotalDOM);
    $('#tip').html("$" + tipDOM);
    $('#total').html("$" + totalDOM);

  //total earnings DOM
    $('#total-tips').html("$" + totalTipsDOM);
    $('#meal-count').html(mealCountDOM);
    $('#average-tip').html("$" + averageTipDOM);

}); //end of submit button

//clear button
 $('input[value="Clear"]').on('click', function(e) {
    e.preventDefault();
    $('input').not('.btn').val(" ");
});

//reset button
 $('input[value="Reset"]').on('click', function(e) {
    e.preventDefault();
    $('input').not('.btn').val(" ");
    $('.totals span').html('');
    mealArray= [];
});

}); // end document
