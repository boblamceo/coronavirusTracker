const nameArray = [];

const addName = (name) => {
    if (nameArray.length >= 29) {
        nameArray.shift();
    }
    nameArray.push(name);
};

const deleteNameArray = () => {
    nameArray.length = 0;
};

export { addName, deleteNameArray };
export default nameArray;
