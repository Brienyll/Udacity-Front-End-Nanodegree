function average(...nums) {
    let ave = 0;
    for (const num of nums) {
    	ave += num;
    	}
    	return ave / nums.length;
    	}
console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
