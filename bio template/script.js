function submitBiodata() {
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
  
    const biodata = {
      fullName,
      dob,
      address
    };
  
    // Send the biodata to the server (Node.js)
    fetch('/submit-biodata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(biodata),
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server (if needed)
      console.log('Server response:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  