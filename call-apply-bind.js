/**
 * ★ apply、call、bind 三者都是用来改变函数的this对象的指向的
 * ★ 三者第一个参数都是this要指向的对象
 * ★ apply 、 call 、bind 三者都可以利用后续参数传参
 * ★ apply、call 则是立即调用 bind 是返回对应函数，
 */ 

/**
 * ★ call(thisObj,arg1,arg2...)
 * ★ thisObj = 不传/undefined/null/ ----> window对象
 * ★ thisObj = fn ----> fn
 * ★ thisObj = ''/bool/number ----> String/Boolean/Number
 * ★ thisObj = obj ----> obj
 */
function class1 () {
	this.name = function () {
		console.log('我是class1的name');
	}
}
function class2() {
	class1.call(this); // class2 继承了 class1
}
var c = new class2();
c.name();

function eat (x,y) {
	console.log(x + y);
}
function drink (x,y) {
	console.log(x - y);
}
eat.call(drink,3,2);

function Animal(){   
  this.name="animal";   
  this.showName=function(){   
    console.log(this.name);   
  }   
}   
function Dog(){   
  this.name="dog";   
}   
var animal=new Animal();   
var dog=new Dog();       
animal.showName.call(dog);

function Animal (name) {
	this.name = name;
	this.showName = function () {
		console.log(this.name);
	}
}
function Dog (name) {
	Animal.call(this,name);
}
var dog = new Dog('wang wang');
dog.showName();

/**
* ★ apply(thisObj,[arg1,arg2,...])
* ★ 当参数数量不确定时，函数内部也可以通过 arguments 这个数组来遍历所有的参数
*/
function class1 (arg1,arg2) {
	this.name = function () {
		console.log(arg1,arg2);
	}
}
function class2 () {
	var arg1 = 'hello';
	var arg2 = 'word';
	// class1.call(this,arg1,arg2);
	class1.apply(this,[arg1,arg2]);
}
var c = new class2();
c.name();

/**
* ★ bind是在ES5中扩展的方法IE6,7,8不支持
* ★ bind()方法会创建一个新函数，称为绑定函数
* ★ bind 方法的返回值是函数
*/
function bar () {
	console.log(this.x);
}
function foo () {
	this.x = 3; // window.x = 3;foo.x = undefined;
}
var foo = {
	x : 3
}
bar();
bar.bind(foo)();

function fruits() {}

fruits.prototype = {
	color: "red",
	say: function() {
		console.log("My color is " + this.color);
	}
}

var apple = new fruits;
apple.say();  
var banana = {
	color : 'yellow'
}
apple.say.call(banana);
apple.say.apply(banana);

// 数组的追加
var arr1 = [1,2,3];
var arr2 = [4,5,6];
Array.prototype.push.apply(arr1,arr2);
arr1 // [1,2,3,4,5,6]
// 最大值
Math.max(3,6,2,9,4,7,1); // -> 9
Math.max([3,6,2,9,4,7,1]); // -> NaN
Math.max.apply(Math,[3,6,2,9,4,7,1]); //9
// 验证是否是数组
Object.prototype.toString.call(obj) === '[object Array]';
// 类数组使用数组方法
Array.prototype.slice.call($("el"));
// 自定义log()
function log () {
	console.log.apply(console,arguments);
}
function log(...args) {
	console.log(...args);
}
// 伪数组转换成数组
var oLi = document.querySelect.all("li");
Array.prototype.slice.call(oLi);
oLi.__prot__ = Array.prototype;

var foo = {
	name : 'Hello Ketty'
}
var bar = {
	intr : function () {
		console.log(this.name);
	}
}
bar.intr.call(foo);
bar.intr.apply(foo);
bar.intr.bind(foo)();

// ★ call 的实现
Function.prototype.call = function (context) {
    var context = context || window;
    context.fn = this;

    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }

    var result = eval('context.fn(' + args +')');

    delete context.fn
    return result;
}
// ★ apply 的实现
Function.prototype.apply = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result;
}
 // ★ bind 的实现
Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}