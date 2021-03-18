const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = ["Message 1", "Message 2", "Message 3", "Message 4"];
const types = ["info", "success", "error"];

// listen for click on button to call createNotification
button.addEventListener("click", () => createNotification());

// takes parameters message and type, which are default to null
function createNotification(message = null, type = null) {
  // get random message from messages
  let randMessage = Math.floor(Math.random() * messages.length);
  // get random type from types
  let randType = Math.floor(Math.random() * types.length);
  // create div
  let notification = document.createElement("div");
  // add toast class to div
  notification.classList.add("toast");
  // if there is a message parameter use it, otherwise use random message
  notification.innerText = message ? message : messages[randMessage];
  // if there is a type parameter use it, otherwise use random type
  notification.classList.add(type ? type : types[randType]);
  // append notification div to toasts
  toasts.appendChild(notification);

  // after 3 seconds remove notification
  setTimeout(() => {
    notification.remove();
  }, 3000);
}
