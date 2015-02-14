(function(){
  'use strict';

  app = app || {};

  try {
    var MyStorage = new app.MyStorage('local');
  }
  catch (ex) {
    alert("Sorry, your browser not browserSupported a Webstorage");
  }

})();
