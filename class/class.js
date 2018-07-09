/**
 * 简介
 */
function Point(x,y) {
	this.x = x;
	this.y = y;
}
Point.prototype.toString = function() {
	return '('+ this.x + ',' + this.y + ')';
}

var p = new Point(1,2);
console.log(p);

class ClassPoint{
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}

	toString() {
		return '(' + this.x + ',' + this.y + ')';
	}
}
var p1 = new ClassPoint(1,2);
console.log(p1);

/**
 * Object.assign()
 */
 class Point {
 	constructor() {
 		// ...
 	}
 }
 Object.assign(Point.prototype,{
 	toString(){},
 	toValue(){}
 })
 Point === Point.prototype.constructor //true;

/**
 * es6不可枚举,es5可枚举
 */
 Object.keys(Point.prototype) //[]
 Object.getOwnPropertyNames(Point.prototype) //["constructor","toString","toValue"]

/**
 * 默认严格模式
 */

/**
 *	共享原型对象 
 */
var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__ === p2.__proto__ //true

/**
 * 类不存在变量提升
 */
new foo();
class Foo { } // ReferenceError

/**
 * 类的方法内部如果含有this，它默认指向类的实例
 */