const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  fetch(
    "https://script.google.com/macros/s/AKfycbz0GnWKb6zKx1jDRaW6WKc2hUC5lBqipJ7vlJ5jvuOmYTmbZLprUEjryMh7XFU6mb8/exec",
    {
      method: "POST",
      body: JSON.stringify(data)
    }
  )
  .then(res => res.text())
  .then(text => {
    alert("送信完了");
    form.reset();
  })
  .catch(err => {
    console.error(err);
    alert("送信に失敗しました");
  });
});



