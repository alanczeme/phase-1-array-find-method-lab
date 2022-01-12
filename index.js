// code your solution here
function superbowlWin(records) {
    const winningObj = records.find(record => record.result === "W");
    
    return (winningObj ? winningObj.year : winningObj)
}