const commentsTable = document.getElementById("commentsTable");
const commentsBody = commentsTable.querySelector("tbody");


async function comments(){
  const allComments = await fetch("https://dummyjson.com/comments").then(r => r.json())

  allComments.comments.splice(0, 32).forEach(comment => {
    const row = document.createElement("tr");
    const commentCell = document.createElement("td");
    const usernameCell = document.createElement("td");

    commentCell.textContent = comment.body;
    usernameCell.textContent = comment.user.username;

    row.append(commentCell);
    row.append(usernameCell);

    commentsBody.append(row);
  });
}
  comments();