document.addEventListener('DOMContentLoaded', (e) => {
  const messageForm = document.getElementById('messageForm')
  const warning = document.getElementById('formEmptyWarning');

  messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (
      formData.get("user-name") !== "" &&
      formData.get("message") !== ""
    ) {
      postMessage(formData);
    } else {
      warning.style.visibility = 'visible';
    }
  })
})

async function postMessage(formData) {
  try {
    const response = await fetch('/submit-message', {
      method: "POST",
      body: formData
    });
    if (!response.ok) {
      throw new Error('Failed to submit the message');
    }
    const data = await response.json();
    console.log(`Message submitted successfully: ${data}`);
  } catch (err) {
    console.error(err);
  }
}
