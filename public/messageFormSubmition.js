document.addEventListener('DOMContentLoaded', (e) => {
  const messageForm = document.getElementById('messageForm')
  const warning = document.getElementById('formEmptyWarning');
  const successText = document.getElementById('formSubmittedSuccessfullyText');

  messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (validFields(formData)) {
      postMessage(formData);
      successText.style.display = 'block';
      warning.style.display = 'none';
    } else {
      warning.style.display = 'block';
      successText.style.display = 'none';
    }
  })
})

function validFields(formData) {
  const userName = formData.get('user-name');
  const message = formData.get('message');

  if (userName === '' || message === '') {
    return false;
  }

  return true;
}

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
    window.location.href = '/';
  } catch (err) {
    console.error(err);
  }
}
