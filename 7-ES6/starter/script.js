/*function func1() {
	console.log(this);
	func2();

	function func2() {
		console.log(this);
		func3();

		function func3() {
			console.log(this);
		}
	}
}*/

/*function methodDeclaration(){
    console.log(this);
}

var methodExpression = function(){
		function qla(self){
				console.log(self);
		}
		qla(this);
}

var obj = {
    name: 'objName',
    method: methodExpression
};

obj.method();*/


// var SecretObject = function(publicData, secret) {
// 	this.publicData = publicData
// 	var privateVar = secret;
// 	this.getPrivateVar = function() {
// 		return privateVar;
// 	};
// 	this.setPrivateVar = function(value) {
// 		privateVar = value;
// 	};
// }

// SecretObject.prototype.getThis = function() {
// 	return this;
// };
// SecretObject.prototype.reversePublicData = function() {
// 	this.publicData = this.publicData.split('').reverse().join('');
// };

// var SubSecretObject = function(publicData, secret, newData) {
// 	SecretObject.call(this, publicData, secret);
// 	this.newData = newData;
// };

// SubSecretObject.prototype = Object.create(SecretObject.prototype);

class SecretObject {
	constructor(publicData, secret) {
		this.publicData = publicData
		let privateVar = secret;
		this.getPrivateVar = function() {
			return privateVar;
		};
		this.setPrivateVar = function(value) {
			privateVar = value;
		};
	}

	getThis() {
		return this;
	};

	reversePublicData() {
		this.publicData = this.publicData.split('').reverse().join('');
	};
}

class SubSecretObject extends SecretObject {
	constructor(publicData, secret, newData) {
		super(publicData, secret);
		this.newData = newData;
	}
}

var objTest = new SubSecretObject('Public info', 'Top secret', 'WTF?');

console.log(objTest);

console.log(objTest.getPrivateVar());
console.log(objTest.privateVar);

objTest.setPrivateVar('New value');
objTest.reversePublicData('New value');
console.log(objTest.getPrivateVar());
console.log(objTest.privateVar);

console.log(objTest.getThis());

/*const question = new Map();

question.set('question', 'What is the official name of the latest major JavaScript version?');

question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Oh Yeah!');
question.set(false, 'Nononono');

console.log(question);

console.log(question.get('question'));*/