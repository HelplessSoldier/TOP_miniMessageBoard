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
      console.log('hi c:');
      return;
    } else {
      warning.style.visibility = 'visible';
    }
  })
})

