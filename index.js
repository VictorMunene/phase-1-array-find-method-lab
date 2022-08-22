// code your solution here
function superbowlWin(record) {
    let win = record.find(row => row.result === 'W');
    if(typeof(win) === 'undefined') {
        return undefined;
    } else {
        return win.year;
    }
}
