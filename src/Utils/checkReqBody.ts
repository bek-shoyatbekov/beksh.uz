export const isValidBody = (reqBody: any) => {
    return !(reqBody.title == "" || reqBody.body == "" || reqBody.type == "") ? reqBody : false;
}