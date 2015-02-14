'use strict';

var app = app || {};

app.MyStorage = (function(){
  function MyStorage(storageName){
    this.storageName = storageName;

    console.log(storage(this.storageName));
  }

  /**
   * ストレージから情報を取得する
   */
  MyStorage.prototype.getItem = function(key){

  };

  /**
   * ストレージに情報を保存する
   */
  MyStorage.prototype.setItem = function(key, value){

  };

  /**
   * storage とは、ストレージオブジェクトである
   *
   * @param string storageName
   * @return Object
   */
  function storage(storageName){
    if (storageName == 'local' && supported(localStorage)) {
      return localStorage;
    }

    if (storageName == 'cookie' && supported(document.cookie)) {
      return document.cookie;
    }

    if (storageName == 'session' && supported(sessionStorage)) {
      return sessionStorage;
    }

    throw new Error('Webstorage is not supported.');
  }

  /**
   * supported とは、ストレージ機能をブラウザーがサポートしている事である
   *
   * @return boolean サポートしている:true | サポートしていな:false
   */
  function supported(storage){
    return (_.isUndefined(storage) === false);
  }

  return MyStorage;
})();
