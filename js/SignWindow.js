function signcheck(){
    var t = document.getElementById("signna").value;
    var k = document.getElementById("signpwd").value;
    if(k==0&&t!=0)
        {
            alert("密碼不能為空");
        }
        if(t==0&&k!=0)
        {
            alert("帳號不能為空");
        }
        if(t==0&&k==0)
        {
            alert("帳號密碼不能為空");
        }
        if(k!=0&&t!=0)
        {

            alert(t+"歡迎回來!XD");
        }
}
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


