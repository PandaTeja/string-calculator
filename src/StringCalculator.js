function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const delimiterLine = numbers.split('\n')[0];
        delimiter = new RegExp(`[${delimiterLine[2]}]`);
        numbers = numbers.split('\n')[1];
    }

    const nums = numbers.split(delimiter).map(Number);

    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return nums.reduce((total, num) => total + num, 0);
}
  
module.exports = { add };