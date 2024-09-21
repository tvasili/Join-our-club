document.querySelector('.button').addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  console.log(document.querySelector('.inputname').value);
  console.log(document.querySelector('.inputsurname').value);
  console.log(document.querySelector('.inputbirth').value);
  console.log(document.querySelector('.inputadress').value);

  // Get the selected country
  console.log(document.querySelector('#country').value);

  // Get the selected radio button for profession
  const selectedProfession = document.querySelector('input[name="profession"]:checked');
  console.log(selectedProfession ? selectedProfession.value : 'No profession selected');

  // Get the selected radio button for study section
  const selectedStudy = document.querySelector('input[name="study"]:checked');
  console.log(selectedStudy ? selectedStudy.value : 'No study section selected');
});
