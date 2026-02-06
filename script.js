const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  fetch(
    "https://script.google.com/macros/s/AKfycbwWIsivK3M8w_itAdkgD2784GUVL7VoE2GQonZn-wY8GrF2krKUw1Mmx9qc1Xl3JAz8/exec",
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






