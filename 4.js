// ১ থেকে ১০০ পর্যণত কোন সংখ্যা গুলো ৩,৫ এবং ৩ও৫ উভয় সংখ্যা দ্বারা বিভাজ্য তা বের করুন।


function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            console.log(`${i} is FizzBuzz`);
        } else if (i % 3 === 0) {
            console.log(`${i} is Fizz`);
        } else if (i % 5 === 0) {
            console.log(`${i} is Buzz`);
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(100);