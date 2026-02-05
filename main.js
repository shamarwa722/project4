document.getElementById("supportForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let msg = document.getElementById("formMsg");

  if (name === "" || email === "" || message === "") {
    msg.style.color = "red";
    msg.innerText = "يرجى تعبئة جميع الحقول";
  } else {
    msg.style.color = "green";
    msg.innerText = "تم إرسال طلبك بنجاح، سنتواصل معك قريبًا";
    document.getElementById("supportForm").reset();
  }
});
$(document).ready(function(){
  $("#articles").hide().fadeIn(1500);
});



