// Write your Pizza Builder JavaScript in this file.

//ITERATION 1: Add and remove toppings

$(document).ready(function() {
    $('.btn-pepperonni').click(function(){
        $('#pepperonnies').toggle(); 
    });

    $('.btn-mushrooms').click(function(){
        $('#mushrooms').toggle(); 
    });

    $('.btn-green-peppers').click(function(){
        $('#green-peppers').toggle(); 
    });

//ITERATION 2: Sauce and crust options
//See HTML l.47,48 and CSS l.59-61

//ITERATION 3: Change the buttons'state

    $('.btn').click(function(){
        $(this).toggleClass("active")
    }); 

//ITERATION 4: Ingredients and prices

    $('.btn-pepperonni').click(function(){
        $('#pepperonni-li').toggleClass('hidden-ingredients')
    });

    $('.btn-mushrooms').click(function(){
        $('#mushrooms-li').toggleClass('hidden-ingredients')
    });

    $('.btn-green-peppers').click(function(){
        $('#green-peppers-li').toggleClass('hidden-ingredients')
    });

    $('.btn-sauce').click(function(){
        $('.sauce-li').toggleClass('hidden-ingredients')
    });

    $('.btn-crust').click(function(){
        $('.crust-li').toggleClass('hidden-ingredients')
    });

//ITERATION 5: Update price

function updatePrice(button){
    var currentPrice = Number($('.total-price').text());

    switch ($(button).attr('class')) {

        case "btn btn-pepperonni":
            var unitPricePepperonni = -Number($('.unit-price-pepperonni').text()) ;
        break;
        case "btn btn-pepperonni active":
            var unitPricePepperonni = Number($('.unit-price-pepperonni').text());
        break; 

        case "btn btn-mushrooms":
            var unitPriceMushrooms = -Number($('.unit-price-mushrooms').text()) ;
        break;
        case "btn btn-mushrooms active":
            var unitPriceMushrooms = Number($('.unit-price-mushrooms').text());
        break; 

        case "btn btn-green-peppers":
                var unitPriceGreenPeppers = -Number($('.unit-price-green-peppers').text()) ;
            break;
        case "btn btn-green-peppers active":
            var unitPriceGreenPeppers = Number($('.unit-price-green-peppers').text());
        break; 

        case "btn btn-sauce":
                var unitPriceSauce = -Number($('.unit-price-sauce').text()) ;
        break;
        case "btn btn-sauce active":
                var unitPriceSauce = Number($('.unit-price-sauce').text());
        break; 
           
        case "btn btn-crust":
                var unitPriceCrust = -Number($('.unit-price-crust').text()) ;
        break;
        case "btn btn-crust active":
                var unitPriceCrust = Number($('.unit-price-crust').text());
        break; 
        
    }

    var newPricePepperonni = currentPrice + unitPricePepperonni;
    // var newPriceMushrooms = currentPrice + unitPriceMushrooms
    // var unitPriceGreenPeppers = currentPrice + unitPriceGreenPeppers
    // var unitPriceSauce = currentPrice + unitPriceSauce
    // var unitPriceCrust = currentPrice + unitPriceCrust

   $('.total-price').text(newPricePepperonni);
    // $('.total-price').text(newPriceMushrooms);
    // $('.total-price').text(unitPriceGreenPeppers);
    // $('.total-price').text(unitPriceSauce);
    // $('.total-price').text(unitPriceCrust);
}

    $('.btn').click(function(){
        let btnClicked = this
        updatePrice(btnClicked)
    });
    
});
