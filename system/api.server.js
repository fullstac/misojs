/* NOTE: This is a generated file, please do not modify it, your changes will be lost */
var utils = require('../system/adaptor/adaptor.js')().utils;
var miso = require('../server/miso.util.js');
var myAdaptor = require('../system/adaptor/mongoose/mongoose.adaptor.js')(utils);
module.exports = function(m, scope){
	return {
'find': function(){
	var args = Array.prototype.slice.call(arguments, 0),
		errResult,
		errFunc = function(){errResult=arguments; doneFunc()},
		successResult,
		successFunc = function(){successResult=arguments; doneFunc()},
		doneFunc = function(){throw 'miso ready binding failed';};
	
	args.unshift(successFunc, errFunc);
	result = myAdaptor['find'].apply(this, args);
	var bindScope = arguments.callee.caller;
	bindScope._misoReadyBinding = miso.readyBinderFactory();
	
	return { then: function(cb, err){
		doneFunc = bindScope._misoReadyBinding.bind(function(){
			if(errResult){
				err(errResult);
 			} else {
				cb(successResult);
			}
		});
	}};
},
'save': function(){
	var args = Array.prototype.slice.call(arguments, 0),
		errResult,
		errFunc = function(){errResult=arguments; doneFunc()},
		successResult,
		successFunc = function(){successResult=arguments; doneFunc()},
		doneFunc = function(){throw 'miso ready binding failed';};
	
	args.unshift(successFunc, errFunc);
	result = myAdaptor['save'].apply(this, args);
	var bindScope = arguments.callee.caller;
	bindScope._misoReadyBinding = miso.readyBinderFactory();
	
	return { then: function(cb, err){
		doneFunc = bindScope._misoReadyBinding.bind(function(){
			if(errResult){
				err(errResult);
 			} else {
				cb(successResult);
			}
		});
	}};
}
	};
};