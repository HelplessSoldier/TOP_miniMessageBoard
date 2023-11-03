const warning = document.getElementById('formEmptyWarning');
document.getElementById('messageForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  if (formData.get("user-name") !== "" && formData.get("message") !== "") {
    console.log('hi c:');
    return;
  }
})
