// 숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수
// forEach
function countBiggerThanTen(numbers) {
    /* 구현해보세요 */
    let cnt = 0;
    numbers.forEach(n => {
        if(n > 10) cnt++;
    });
    return cnt;
}  
const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(`forEach : ${count}`); // 5

// filter
function countBiggerThanTen(numbers) {
    /* 구현해보세요 */
    return numbers.filter(num => num > 10).length;
}  
const count2 = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(`filter : ${count2}`); // 5

// reduce
function countBiggerThanTen(numbers) {
    /* 구현해보세요 */
    return numbers.reduce((acc, cur) => {
        if (cur > 10) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
}
const count3 = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(`reduce : ${count3}`); // 5