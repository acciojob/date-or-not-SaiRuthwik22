var isDate = function (input) {
  //   write your code here
	return(/[0-9]/g.test(input))
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
