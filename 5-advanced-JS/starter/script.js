/*var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

var john = new Person('John', 1990, 'Teacher');

Person.prototype.calculateAge = function() {
	return 2018 - this.yearOfBirth;
};

console.log(john);

var personProto = {
	calculateAge: function() {
		return 2018 - this.yearOfBirth;
	}
};

var jane = Object.create(personProto, {
	name: { value: 'Jane' },
	yearOfBirth: { value: 1989 },
	job: { value: 'Designer' },
});*/

/*
console.log(func1, func2);
func1();
func2();


function func1() {
	var a1 = 'func1'
	console.log(a1);
}

// console.log('1', a1);

// var a1 = 'global'

var func2 = function() {
	var a1 = 'func2'
	func1();
	function func21() {
		var a1 = 'func21'
		console.log(a1);
	}
	func21();
	console.log(a1);
}

// func2();

// console.log(a1);
*/

var SecretObject = function(secret) {
	var privateVar = secret;
	this.getPrivateVar = function() {
		return privateVar;
	};
	this.setPrivateVar = function(value) {
		privateVar = value;
	};
	this.getThis = function() {
		return this;
	};
}

var objTest = new SecretObject('Top secret');

console.log(objTest);

console.log(objTest.getPrivateVar());
console.log(objTest.privateVar);

objTest.setPrivateVar('New value');
console.log(objTest.getPrivateVar());
console.log(objTest.privateVar);

console.log(objTest.getThis());