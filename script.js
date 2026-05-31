/*now for the js file, here are the things which come to my mind before building it
1.The 'X' button - when clicked and event occurs which closes the window so I need a function to do that
2. When a user accepts the cookie pop-up it also closes which means the same work happens as with the 'x' button so whenever a user click on the accept button I call the "x function" here as well.
3. Also I need to accept the cookie information which the user provides how do I do that? so when the user visits frequently the pop-up doesn't appear again and again.
4.When the HTML loads, the banner is visible by default. What is the very first check the JavaScript needs to run before the user even looks at the screen?
*/



//grab the elements
const cookieCard = document.getElementById("container");
const cancelbtn = document.getElementById("cancel");
const acceptbtn = document.getElementById("accept");

//Define close button function
function hidePopUp(){
    cookieCard.style.display = 'none';
}

//when the user visits again the pop-up should not appear if they have already accepted cookies
if (localStorage.getItem("cookieAccepted") === "true") {
    hidePopUp();
}

//Attach  event listeners 
cancelbtn.addEventListener('click', hidePopUp);
acceptbtn.addEventListener('click', () => {
    localStorage.setItem("cookieAccepted", "true");
    hidePopUp();
});