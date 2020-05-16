const messageArray = [];

const addMessage = (message) => {
    if (messageArray.length >= 29) {
        messageArray.shift();
    }
    messageArray.push(message);
};

const deleteMessageArray = () => {
    messageArray.length = 0;
};

export { addMessage, deleteMessageArray };
export default messageArray;
