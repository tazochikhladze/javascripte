let userIsAdmin = false;
let userIsCreator =false;
let userIsCommentauthor = false;
const userCenDelete = userIsAdmin || userIsCommentauthor || userIsCreator;

console.log(userCenDelete);