document.getElementById('resume-form')?.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  // Collecting values from the form
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Generating the resume content dynamically
  const resumeContent = `
    <div class="resume-section">
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    </div>

    <div class="resume-section">
      <h3>Work Experience</h3>
      <p>${experience}</p>
    </div>

    <div class="resume-section">
      <h3>Skills</h3>
      <p>${skills}</p>
    </div>
  `;

  // Displaying the generated resume
  const resumeContainer = document.getElementById('resume')!;
  const resumeContentContainer = document.getElementById('resume-content')!;
  resumeContentContainer.innerHTML = resumeContent;

  // Show the resume
  resumeContainer.style.display = 'block';
});
