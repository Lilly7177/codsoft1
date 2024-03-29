// JavaScript functionality can be added as needed
// For example, form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // You can add your form submission logic here, like sending the data to a server
  // For now, let's just log the form data to the console
  const formData = new FormData(this);
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });
  console.log(formDataObject);
});

