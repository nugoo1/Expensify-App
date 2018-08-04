export default (expenses) => {
    if (Array.isArray(expenses)) {
        const arr = Object.values(expenses)
        return arr.length;
    }
    else {
        return 1
    };
};
