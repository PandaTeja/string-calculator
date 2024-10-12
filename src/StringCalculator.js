function add(numbers) {
    if (numbers === "") return 0;
    
    const nums = numbers.split(/[\n,]/); 
    const sum = nums.reduce((total, num) => total + parseInt(num), 0);
    return sum;
}
  
module.exports = { add };
  