/*now for the js file, here are the things which come to my mind before building it
1.The 'X' button - when clicked and event occurs which closes the window so I need a function to do that
2. When a user accepts the cookie pop-up it also closes which means the same work happens as with the 'x' button so whenever a user click on the accept button I call the "x function" here as well.
3. Also I need to accept the cookie information which the user provides how do I do that? so when the user visits frequently the pop-up doesn't appear again and again.
4.When the HTML loads, the banner is visible by default. What is the very first check the JavaScript needs to run before the user even looks at the screen?
*/
const cookieCard = document.getElementById("container")
const cancelbtn = document.getElementById("cancel")

function hidePopUp(){
   //hide the css property of this button
    cookieCard.style.display = 'none';
}
cancelbtn.addEventListener('click', hidePopUp)
