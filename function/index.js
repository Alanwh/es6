/**
 * 函数参数的默认值
 */
function log(x , y) {
	if(typeof y === 'undefined')
	y = 'word';
	console.log(x , y);
};

log('hello');
log('hello','china');
log('hello','');

function logEs6(x,y='word') {
	console.log(x,y);
};
logEs6('hello');
logEs6('hello','china');
logEs6('hello','');

/*-------------------------------*/ 

function Point(x=0,y=0) {
	this.x = x;
	this.y = y;
}
var p = new Point(2);
console.log(p);

let x = 99;
function foo(p = x + 1) {
	console.log(p);
}
foo();
x = 100;
foo();

/**
 * 解构赋值
 */

function foo({x , y = 5}) {
	console.log(x , y);
}
foo({});
foo({x : 1 , y :2});
foo({x : 1 });
foo();

function foo({x , y = 5} = {}) {
	console.log(x , y);
}
foo();

/*-------------------------------*/

function fetch(url , {body = '' , methods = 'GET' , headers = {} }) {
	console.log(methods);
}
fetch('http://www/baidu.com' , {});
fetch('http://www.baidu.com');

function fetchEs6(url , {body = '' , methods = 'GET' , headers = {} } = {}) {
	console.log(methods);
}
fetchEs6('http://www/baidu.com' , {});
fetchEs6('http://www.baidu.com');

/*-------------------------------*/

function m1({x = 0, y = 0} = {}) {
	console.log([x , y])
}
function m2({x , y} = {x : 0 ,y : 0}) {
	console.log([x , y])
}
m1();
m2();
m1({});
m2({});
m1({x : 3});
m2({x : 3});
m1({z : 3});
m2({z : 3});

/**
 * 参数默认值的位置
 */ 
function fn(x = 1 ,y) {
	console.log(x , y);
}
fn();
fn(2);
fn( , 1);
fn(undefined , 1);
fn(undefined,undefined);

/**
 * 函数的length属性 (函数重头开始，没有赋值的参数个数)
 */
 (function (a = 1  , b) {}).length;
 (function (a , b = 1) {}).length;
 (function (a = 1, b , c) {}).length;
 (function (a , b , c = 1) {}).length

 /**
  * 函数的作用域
  */

/*================== 箭头函数 ==================*/ 
	var f1 = function (v) {
		return v;
	}
	var f1 = v => v;
	//不需要参数或者多个参数需要用()
	var f2 = function () {
		return 5;
	}
	var f2 = () => 5;

	var f3 = function (n , m) {
		return n + m;
	}
	var f3 = (n , m) => n + m;