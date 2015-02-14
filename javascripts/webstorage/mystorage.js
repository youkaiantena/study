'use strict';

var app = app || {};

app.MyStorage = (function(){
  function MyStorage(storageType){
    this.resource = storage(storageType);
  }

  /**
   * ストレージから情報を取得する
   *
   * @param string
   * @return string
   */
  MyStorage.prototype.getItem = function(key){
    return this.resource.getItem(key);
  };

  /**
   * ストレージに情報を保存する
   */
  MyStorage.prototype.setItem = function(key, value, option){
    this.resource.setItem(key, value);
    return this;
  };

  /**
   * ストレージから情報を削除する
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
    switch(storageType){
    case 'local':
      try {
        return localstorage(browserSupported);
      }
      catch (exc) {
        return browserCookie(browserSupported);
      }

    case 'session':
      try {
        return sessionstorage(browserSupported);
      }
      catch (exc) {
        return browserCookie(browserSupported);
      }

    case 'cookie':
    default:
      return browserCookie(browserSupported);
    }

    throw new Error('Webstorage is not browserSupported.');
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
   * browserSupported とは、ブラウザーが任意のストレージ機能をサポートしている場合のみ「正しい」という事である
   *
   * @return boolean サポートしている:true | サポートしていない:false
   */
  function browserSupported(storage){
    return (_.isUndefined(storage) === false);
  }

  return MyStorage;
})();
