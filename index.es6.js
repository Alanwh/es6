/**
 * ES6常用功能总结
 *
 * 1.let/const
 *
 * 2.字符串模板
 *
 * 3.结构赋值
 *
 * 4.赋值数组
 *
 * 5.Map
 *
 * 6.for-of 循环
 *
 * 7.箭头函数
 *
 * 8.对象的简洁语法
 *
 * 9.class 和 extends
 *
 *10.模块化 export和import
 *
 *11.Promise
 *
 *12.Generator 和 yield
 *
 */

/**
* let & const
*   javascript 只有函数作用域，没有块级作用域
*   块级作用域
*   不能重新声明
*   const 初始化必须赋值
*/ 
window.onload = funtion () {
	for(var i = 0; i < 10; i++){
		(function () {
			alert(i);
		})(i)
	}
}
