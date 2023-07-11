import { useEnv } from "../server.js";
useEnv();
export function Auth(req, res, next) {
    return checkUserIsValid(req.query.name, req.query.password) ? next() : res.sendStatus(401);
}
function checkUserIsValid(name, password) {
    return process.env.NAME === name && process.env.PASSWORD == password;
}
