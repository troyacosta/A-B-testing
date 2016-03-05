(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Variation 1 JavaScript

(function ($) {
  var $cartHeader = $('#cartHeader'); //the 'my cart' button in the menu
  var $topCartContent = $('#topCartContent'); //drop down cart container
  var $miniCart = $('#mini-cart'); //items container inside the drop down cart container
  var $welcome = $('<div id="stuff">' + '<h2>Welcome Back!</h2>' + '<p>We saved your cart for you.</p>' + '<p>Your shopping cart:</p>' + '</div>');
  var $cartCount = $('.product-name').length;
  var $productName = $('.product-name').html();
  var $productPrice = $('');

  if ($cartCount > 0) {
    $cartHeader.css('color', 'orange').click();
  }

  /*
   * Example usage of timpl (see timpl function below)
   */

  var greetingHtml = timpl('<h2>Hello, {{name}}!</h2>', { name: 'world' });

  $('.container').append(greetingHtml);

  var data = { orange: '#ffa933' };

  var stylesTemplate = function stylesTemplate() {
    /*
      <style>
        .sometext {
          color: {{ orange }}
        }
      </style>
    */
  };

  var stylesheet = timpl(stylesTemplate, data);

  $('head').append(stylesheet);
})(window.jQuery);

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map