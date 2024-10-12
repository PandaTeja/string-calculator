function add(numbers) {
    if (numbers === "") return 0;
    
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const delimiterLine = numbers.split('\n')[0];
        delimiter = new RegExp(`[${delimiterLine[2]}]`);
        numbers = numbers.split('\n')[1];
    }

    const nums = numbers.split(delimiter);
    const sum = nums.reduce((total, num) => total + parseInt(num), 0);
    return sum;
}
  
module.exports = { add };
