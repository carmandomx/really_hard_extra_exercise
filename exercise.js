/*

We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].

You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.

If you choose a job that ends at time X you will be able to start another job that starts at time X.

 
For ex.

startTime = [1,2,3,3]
endTime = [3,4,5,6]
profit = [50,10,40,70]

the result should be: 120

This is because startTime[0] - endTime[0] gives a profit of profit[0] (50) and
startTime[3] - endTime[3] gives a profit of 70 so 50 + 70 = 120.




/** DO NOT CHANGE THE FUNCTION NAME **/
const hard = (startTime, endTime, profit) => {
    /* Only make changes below this comment */
    //add each schedule in arr
    const arr =  startTime.reduce((acc, ele, index) => {
        acc.push([ele, endTime[index], profit[index]])
        return acc
    }, []);
    //sort arr
    arr.sort((a, b) => a[1] - b[1]);
    //variables to store profits and max profit
    const memo = []
    let max = 0

    const getPrevIndex = (left, right, target) => {
        let result = -1
        while (left <= right) {
        const middle = Math.floor((left + right) / 2)
        if (arr[middle][1] <= target) {
            left = middle + 1
            result = middle
        } else {
            right = middle - 1
        }
        }
        return result
    }
    for (let i = 0; i < arr.length; i++) {
        const prevIndex = getPrevIndex(0, i, arr[i][0])
        memo[i] = Math.max((memo[i - 1] || 0),arr[i][2] + (memo[prevIndex] || 0),)
        //max profit
        max = Math.max(max, memo[i])
    }
    return max;


    
    /* Only make changes below this comment */
}







/** DO NOT CHANGE THE LINE BELOW **/
module.exports.hard = hard;