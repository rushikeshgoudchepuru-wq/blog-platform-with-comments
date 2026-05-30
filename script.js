function addComment(){

    let comment =
    document.getElementById("commentInput").value;

    if(comment===""){
        alert("Please enter a comment");
        return;
    }

    let li =
    document.createElement("li");

    li.innerText = comment;

    document.getElementById("commentList")
    .appendChild(li);

    document.getElementById("commentInput").value="";
}
