'use strict';

// Variation 1 JavaScript

(function($) {
  var $cartHeader = $('#cartHeader'); //the 'my cart' button in the menu
  var $topCartContent = $('#topCartContent') //drop down cart container
  var $miniCart = $('#mini-cart');  //items container inside the drop down cart container
  var $welcome = $('<div id="stuff">' + '<h2>Welcome Back!</h2>' + '<p>We saved your cart for you.</p>' + '<p>Your shopping cart:</p>' + '</div>');
  var $cartCount = $('.product-name').length;
  var $productName = $('.product-name').html();
  var $productPrice = $('')

  if ($cartCount > 0) {
    $cartHeader.css('color', 'orange').click();
  }
  
  /*
   * Example usage of timpl (see timpl function below)
   */
  
  var greetingHtml = timpl('<h2>Hello, {{name}}!</h2>', { name: 'world' });
  
  $('.container').append(greetingHtml);
  
  var data = { orange: '#ffa933' };

  var stylesTemplate = function() {
    /*
      <style>
        .sometext {
          color: {{ orange }}
        }
      </style>
    */
  }

  var stylesheet = timpl(stylesTemplate, data);
  
  $('head').append(stylesheet);

})(window.jQuery);