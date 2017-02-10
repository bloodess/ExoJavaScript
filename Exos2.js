function repeat(operation, num) {
    for (var i = num - 1; i >= 0; i--) {
        operation();
    }
}
// Do not remove the line below
module.exports = repeat