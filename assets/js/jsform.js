function Sendmails() {
    event.preventDefault(); // Stop form from refreshing the page
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    const serviceID = "service_3rbdetn"; // Replace with your actual EmailJS service ID
    const templateID = "template_d1e5jwj"; // Replace with your EmailJS template ID
  
    const templateParams = {
      name: name,
      email : email,
      message: message
    };
  
    emailjs.send(serviceID, templateID, templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Oops... Something went wrong.');
      });
  }
  