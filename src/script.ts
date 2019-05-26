module.exports = function sum(one:number) {
    let count:number = one;
    return function next(two:number) {
        if(two == undefined) {
            return count;
        } 
        else{
            count += two;
            return next;
        };
    };
};