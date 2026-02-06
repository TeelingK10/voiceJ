const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  fetch(
    "https://script.google.com/macros/s/AKfycbzpX204tYylSZU37-FQ6tECw2725ha-WieieVaDMZ6JukIQTtFymo4cQZ9nsqeKARTs/exec",
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
