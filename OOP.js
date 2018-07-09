var C = function (name,age) {
	this.name = name ;
	this.age = age ;
}
C.prototype.extend = function(p, c) {
	var c = c || {};
	for (var i in p) {
		if (typeof p[i] === 'object') {
			c[i] = (p[i].constructor === Array) ? [] : {};
			deepCopy(p[i], c[i]);
　　　　} else {
			c[i] = p[i];
　　　　}
　　}
　　return c;
}
var c =  new C('child',11);
var p = {
	name : 'parent',
	class : 401
}
console.log(c);
c.extend(p,c);
console.log(c);

/**
 * 公有属性、公有方法、私有属性、使用方法、静态属性
 */
function Person (name,age) {
	this.name = name; //    -> 公有属性
	var age = age; //    -> 私有属性

	function makeFriend () { //    -> 私有方法
		console.log('I\'m '+ name + ',nice to meet u.');
	}
	this.intr = function () { //    -> 公有方法
		console.log('My name is ' + name + ',I\'m ' + age);
	}
}
var p1 = new Person('alan',12);
console.log(p1.name); // undefined   
console.log(p1.age); // 12    
p1.makeFriend(); // Uncaught TypeError: p1.makeFriend is not a function
p1.intr(); // My name is alan,my age is 12