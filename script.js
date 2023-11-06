var istatus = document.querySelector("h5");

var addFriend = document.querySelector("#add");
var removefriend = document.querySelector("#remove");

var friendcheck = 0;
addFriend.addEventListener("click", function () {
  if (friendcheck == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    friendcheck = 1;
    addFriend.innerHTML = "Remove";
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    friendcheck = 0;
    addFriend.innerHTML = "Add Friend";
  }
});
