export const isValidBody = (reqBody) => {
    return (reqBody.title == "" || reqBody.body == "" || reqBody.type == "") ? reqBody : false;
};
