// You should implement your task here.

module.exports = function towelSort(matrix) {
    arr = [];
    if (matrix === [] || matrix === undefined) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 !== 0) {
                arr.push(matrix[i].reverse());
            } else {
                arr.push(matrix[i]);
            }
        }
        return arr.flat();
    }
};
