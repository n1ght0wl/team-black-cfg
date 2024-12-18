// 1. Create a cookie prompt like shown in lesson

const response = confirm("This site uses cookies, by clicking ok and proceeding to the site, you are agreeing to the cookie policy.")

if (response === true) {
    // 2. Try out logging different messages.
    console.log("User clicked Accept, proceed to the site.")
    alert("You have accepted the cookies, please proceed to the site.");
} else {
    console.log("User clicked Decline. Don't proceed to site")
    alert("You have decline the cookies, please exit this site to insure that your cookies are not tracked.");
}





