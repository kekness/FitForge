window.addEventListener("DOMContentLoaded", function() {
    var contestForm = document.getElementById("contestForm");
  
    contestForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var email = document.getElementById("email").value;
      var comments = document.getElementById("comments").value;
      var experience = document.getElementById("experience").value;
  
      var checkboxes = document.querySelectorAll('input[name="interests"]:checked');
      var interestsChecked = checkboxes.length > 0;
  
      var frequencyChecked = document.querySelector('input[name="frequency"]:checked');
  
      if (!interestsChecked || !frequencyChecked) {
        alert("upewnij się że wszystkie wymagane pola zostały zaznaczone!");
        return;
      }

      
    });
  });
  