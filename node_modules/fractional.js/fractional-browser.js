/*!
 * fractional.js - v1.0.0 - (https://github.com/lucasgruwez/fractional.js)
 * Copyright 2017 Lucas Gruwez.
 * Licensed under MIT
 * https://github.com/lucasgruwez/fractional.js
 */

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.Fractional = require('./fractional.min.js')

},{"./fractional.min.js":2}],2:[function(require,module,exports){
var err={divideBy0:new EvalError("Can't divide by 0"),invalidParam:new TypeError("Invaild paramteter")},F=function(a){if(a instanceof Fraction)return a;"number"==typeof a&&0==a%1&&(a=[a,1]);return new Fraction(a)},Fraction=function(a,d){if(0==d)throw err.divideBy0;if(0==a%1&&0==d%1)return this.n=Math.abs(a/this._gcd(a,d)),this.d=Math.abs(d/this._gcd(a,d)),0>a*d&&(this.n=-this.n),this;switch(typeof a){case "object":if("n"in a&&"d"in a)return new Fraction(a.n,a.d);if(0 in a)return new Fraction(a[0],
a[1]);throw err.invalidParam;case "number":for(var b=[0,1],c=[Math.ceil(a),1];1E8>=b[1]&&1E8>=c[1];){var e=(b[0]+c[0])/(b[1]+c[1]);if(a===e)return 1E8>=b[1]+c[1]?new Fraction(b[0]+c[0],b[1]+c[1]):b[1]>c[1]?new Fraction(c):new Fraction(b);e<a?b=[b[0]+c[0],b[1]+c[1]]:c=[b[0]+c[0],b[1]+c[1]]}return 1E8<b[1]?new Fraction(c):new Fraction(b);default:throw err.invalidParam;}};Fraction.prototype.toString=function(){return this.n+"/"+this.d};Fraction.prototype.valueOf=function(){return this.n/this.d};
Fraction.prototype.add=function(a){a=F(a);return new Fraction(this.n*a.d+this.d*a.n,this.d*a.d)};Fraction.prototype.sub=function(a){a=F(a);return new Fraction(this.n*a.d-this.d*a.n,this.d*a.d)};Fraction.prototype.mul=function(a){a=F(a);return new Fraction(this.n*a.n,this.d*a.d)};Fraction.prototype.div=function(a){a=F(a);return new Fraction(this.n*a.d,this.d*a.n)};Fraction.prototype.reciprocal=function(){return(new Fraction(1,1)).div(this)};
Fraction.prototype.pow=function(a){a=F(a).valueOf();return 0==a%1&&0<=a?new Fraction(Math.pow(this.n,a),Math.pow(this.d,a)):0==a%1&&0>=a?new Fraction(Math.pow(this.d,-a),Math.pow(this.n,-a)):new Fraction(Math.pow(this.n,a)/Math.pow(this.d,a))};Fraction.prototype.nthRoot=function(a){return this.pow(new Fraction(1,a))};Fraction.prototype._gcd=function(a,d){for(;d;){var b=a%d;a=d;d=b}return a};module.exports=Fraction;

},{}]},{},[1]);
