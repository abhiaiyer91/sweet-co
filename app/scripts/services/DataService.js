//Global Shopping cart and Store

'use strict';

app.factory('DataService', function() {
  var myStore = new store();
  var myCart = new shoppingCart('AngularStore');
  myCart.addCheckoutParameters('PayPal', 'abhiaiyer91@gmail.com');
  return {
    store: myStore,
    cart: myCart
  };
});
