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
    const username = formData.get('user-name');
    const message = formData.get('message');
    const data = {
      "username": username,
      "message": message
    }
    const response = await fetch('/submit-message', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      throw new Error('Failed to submit message');
    }
    console.log('Message submitted successfully');
  } catch (err) {
    console.error(err);
  }
}