'use strict';

var app = app || {};

app.MyStorage = (function(){
  function MyStorage(storageType){
    this.resource = storage(storageType);
  }

  /**
   * ストレージから情報を取得する
   *
   * @param string key
   * @return string
   */
  MyStorage.prototype.getItem = function(key){
    if (canUseGetItem(this.resource) === true) {
      return JSON.parse(this.resource.getItem(key));
    }
  };

  /**
   * ストレージに情報を保存する
   *
   * @param string key
   * @param string value
   * @param object option
   * @return this
   */
  MyStorage.prototype.setItem = function(key, value, option){
    this.resource.setItem(key, value);
    return this;
  };

  /**
   * ストレージから情報を削除する
   *
   * @param string key
   * @return this
   */
  MyStorage.prototype.removeItem = function(key){
    this.resource.removeItem(key);
    return this;
  };

  /**
   * storage とは、任意のストレージオブジェクトである
   *
   * @param string storageType
   * @return Object
   */
  function storage(storageType){
    try {
      if (storageType == 'local') {
        return localstorage(browserSupported);
      }
      if (storageType == 'session') {
        return sessionstorage(browserSupported);
      }
    }
    catch (err) {
      return browserCookie(browserSupported);
    }

    return browserCookie(browserSupported);
  }

  /**
   * localstorage とは、ローカルストレージ機能をサポートしている場合のみ、ローカルストレージオブジェクトである
   *
   * @param Function supported
   * @return localStorage
   */
  function localstorage(supported){
    if (supported(localStorage) === false) {
      throw new Error('localStorage is not supported.');
    }

    return localStorage;
  }

  /**
   * sessionstorage とは、セッションストレージ機能をサポートしている場合のみ、セッションストレージオブジェクトである
   *
   * @param Function supported
   * @return sessionStorage
   */
  function sessionstorage(supported){
    if (supported(sessionStorage) === false) {
      throw new Error('sessionStorage is not supported.');
    }

    return sessionStorage;
  }

  /**
   * browserCookie とは、クッキー機能をサポートしている場合のみ、クッキーオブジェクトである
   *
   * @param Function supported
   * @return document.cookie
   */
  function browserCookie(supported){
    if (supported(document.cookie) === false) {
      throw new Error('cookie is not supported.');
    }

    return document.cookie;
  }

  /**
   * browserSupported とは、ブラウザーが任意のストレージ機能をサポートしているという事である
   *
   * @param Object storage
   * @return boolean サポートしている:true | サポートしていない:false
   */
  function browserSupported(storage){
    return (_.isUndefined(storage) === false);
  }

  /**
   * canUseGetItem とは、任意のストレージオブジェクトが、getItemというメソッドを使えるという事である
   *
   * @param Object storage
   * @return boolean getItemが使える:true | getItemが使えない:false
   */
   function canUseGetItem(storage){
     return (storage.hasOwnProperty('getItem'));
   }

   /**
    * explode とは、区切り文字を使用して、文字列を配列に変換する事である
    *
    * @param string separator
    * @param string src
    * @return Array
    */
    function explode(separator, src){

    }

  return MyStorage;
})();
