// Do not change any of the function names

function multiplyArguments() {
	var total = 1;
	
	if (arguments.length === 0) return 0;
	else if (arguments.length === 1) return arguments[0];
		for (var i = 0; i < arguments.length; i++) {
			total *= arguments[i];
	}
	return total;
}

function invokeCallback(cb) {
	cb();
}

function sumArray(numbers, cb) {
	var total = 0;
	
	for (var i =0; i < numbers.length; i++) {
		total += numbers[i];
	}
	cb(total);
}

function forEach(arr, cb) {
	arr.forEach(function (x) {
	cb(x);
	});
}

function map(arr, cb) {
	var newArray = arr.map(function(x) {
	return cb(x);
	});
	return newArray;
}

function getUserConstructor() {
	var User = function(options) {
		this.name     = options.name;
		this.email    = options.email;
		this.password = options.password;
		this.username = options.username;
};

	User.prototype.saysHi = function() {
		return 'Hello, my name is ' + this.name;
	};

	return User;
}

function addPrototypeMethod(Constructor) {
	Constructor.prototype.sayHi = function() {
		return 'Hello World!';
	};
}

function addReverseString() {
	String.prototype.reverse = function() {
		var fwd = this;
		var rev = '';
			for (var i = fwd.length - 1; i >= 0; i--) {
			rev += fwd[i];
}
		return rev;
	};
}

function nFactorial(n) {
	if (n === 1) return n;
	return n * nFactorial(n - 1);
}

function cacheFunction(cb) {
	var cache = {};
	
	return function (single_argument) {
		if (cache.hasOwnProperty(single_argument)) {
			return cache[single_argument];
}	else {
		cache[single_argument] = cb(single_argument);
		return cache[single_argument];
	}
};
  // Extra Credit
  // use closure to create a cache for the cb function
  // the function that you return should accept a single argument and invoke cb with that argument
  // when the function you return is invoked with an argument it should save that argument and its result
  // when the function you return is called again with an argument that it has seen before it should not call cb
  // but should instead directly returned the previous result
  // example:
  // cb -> function(x) { return x * x; }
  // if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
  // if the function you return is invoked again with 5 it will look on an object in the closure scope
  // and return 25 directly and will not invoke cb again
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments: multiplyArguments,
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
  getUserConstructor: getUserConstructor,
  addPrototypeMethod: addPrototypeMethod,
  addReverseString: addReverseString,
  nFactorial: nFactorial,
  cacheFunction: cacheFunction
};
