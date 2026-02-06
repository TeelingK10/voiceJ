const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  fetch(
    "https://script.google.com/macros/s/AKfycbx831-_gt-26LKCvlxycEDV61BFF2jJOuYgCbFZmukm2d1FHVGw0b2SjK2Dfnjm3M8/exec",
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





