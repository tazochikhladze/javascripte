let userIsLoggein = false;
let userIsBlocked = true;
const userCanPost = userIsLoggein && userIsBlocked;

console.log(userCanPost);
