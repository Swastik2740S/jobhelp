function submitEmployerForm() {
    const employerName = document.getElementById('employerName').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const workType = document.getElementById('workType').value;
    const salary = document.getElementById('salary').value;
  
    // Validate the form fields (add more validation as needed)
    if (!employerName || !jobTitle || !workType || !salary) {
      alert('Please fill in all fields.');
      return;
    }
  
    // In a real application, you would handle the form submission, possibly sending the data to a server.
    console.log(`Employer Name: ${employerName}\nJob Title: ${jobTitle}\nType of Work: ${workType}\nSalary: ${salary}`);
    alert('Form submitted successfully!');
  }
  