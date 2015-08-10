$(document).on('ready', function() {

  //create global array to store individual meal cost functions
  var mealArray = [];

  $('input[value="Submit"]').on('click', function(e) {
    e.preventDefault();
    var mealCost = {};
    var newMeal= new Bill(
        $('input[name="meal-price"]').val(),
        $('input[name="meal-taxrate"]').val(),
        $('input[name="meal-tiprate"]').val());
    mealArray.push(newMeal);

   // call function
    var subtotalDOM = newMeal.subtotal(newMeal.mealPrice, newMeal.mealTaxRate);
    var tipDOM = newMeal.tipTotal(newMeal.mealPrice, newMeal.mealTipRate);
    var totalDOM = newMeal.totalCharges(subtotalDOM, tipDOM);
    var totalTipsDOM = newMeal.tipEarnings(mealArray);
    var mealCountDOM = newMeal.mealCount(mealArray);
    var averageTipDOM = newMeal.averageTip(totalTipsDOM, mealCountDOM);

    //Total Earnings

    $('#subtotal').html("$" + subtotalDOM);
    $('#tip').html("$" + tipDOM);
    $('#total').html("$" + totalDOM);

    //total earnings DOM
    $('#total-tips').html("$" + totalTipsDOM);
    $('#meal-count').html(mealCountDOM);
    $('#average-tip').html("$" + averageTipDOM);
    $('input').not('.btn').val(" ");
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
