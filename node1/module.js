var counter = function(arr){
	return `数组中拥有${arr.length}个元素`;
}
// console.log(counter(["Henry","2","3"]));

var adder = function(a,b){
	return `两个数的和为${a+b}`;
}

var pi = 3.142;

// 只有使用module.exports之后，其他文件才可以引用
// module.exports先公开,require再调用


// module.exports.sbcounter = counter;
// module.exports.sbadder = adder;
// module.exports.sbpi = pi;

// 模块模式：Module Patterns
module.exports = {
	sbcounter:counter,
	sbadder:adder,
	sbpi:pi
}