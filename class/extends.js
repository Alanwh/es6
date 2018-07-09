class Animal {
	constructor () {
		this.type = 'animal';
	}
	says(name){
		console.log('hello ,my name is ' + name);
	}
}
class Cat extends Animal{
	constructor () {
		super();
		this.type = 'cat';
	}
	intr () {
		console.log("I'm 12 years old.");
	}
}
const a = new Animal();
const b = new Cat();

console.log(a);
console.log(b);