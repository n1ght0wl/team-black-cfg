//Navigation Menu Bar
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
/*=============== SHOW HIDE PASSWORD LOGIN ===============*/
const passwordAccess = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)
 
    iconEye.addEventListener('click', () =>{
       // Change password to text
       input.type === 'password' ? input.type = 'text'
                                       : input.type = 'password'
 
       // Icon change
       iconEye.classList.toggle('ri-eye-fill')
       iconEye.classList.toggle('ri-eye-off-fill')
    })
 }
 passwordAccess('password','loginPassword')
 
 /*=============== SHOW HIDE PASSWORD CREATE ACCOUNT ===============*/
 const passwordRegister = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)
 
    iconEye.addEventListener('click', () =>{
       // Change password to text
       input.type === 'password' ? input.type = 'text'
                                       : input.type = 'password'
 
       // Icon change
       iconEye.classList.toggle('ri-eye-fill')
       iconEye.classList.toggle('ri-eye-off-fill')
    })
 }
 passwordRegister('passwordCreate','loginPasswordCreate')
 
 /*=============== SHOW HIDE LOGIN & CREATE ACCOUNT ===============*/
 const loginAcessRegister = document.getElementById('loginAccessRegister'),
       buttonRegister = document.getElementById('loginButtonRegister'),
       buttonAccess = document.getElementById('loginButtonAccess')
 
 buttonRegister.addEventListener('click', () => {
    loginAcessRegister.classList.add('active')
 })
 
 buttonAccess.addEventListener('click', () => {
    loginAcessRegister.classList.remove('active')
 })

//Register Event Attendance
function attendanceFunction() {
   alert("Your Attendance has been registered and you will receive a confirmation email shortly.");
}

//Navigation Menu Bar
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
   let x = document.getElementById("myLinks"); //i changed var to 'let'. Don't use 'var' anymore
   if (x.style.display === "block") {
     x.style.display = "none";
   } else {
     x.style.display = "block";
   }
 }
/*=============== SHOW HIDE LOGIN & CREATE ACCOUNT ===============*/
buttonRegister.addEventListener('click', () => {
loginAcessRegister.classList.add('active')
})

buttonAccess.addEventListener('click', () => {
loginAcessRegister.classList.remove('active')
})

// Add our event listeniers
textAreaInput.addEventListener("keyup", (event) => handleInput(event));

//Register Event Attendance
function submitFunction() {
    alert("Your enquiry has been submitted and you will receive a response email shortly.");
    }
//Reset Password Button
function resetPasswordFunction() {
   alert("Your password has been reset. You will receive an email shortly with instructions to follow.");
   }
// past events youtube button
function youtubeButtonFunction() {
   document.getElementById("demo").innerHTML = "Loading......redirecting you to the SkyScanner On Demand YouTube Page";
 }

