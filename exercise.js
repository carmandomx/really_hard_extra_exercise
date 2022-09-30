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
    
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.hard = hard;