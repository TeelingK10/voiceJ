const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  fetch(
    "https://script.google.com/macros/s/AKfycbwC0trJ97fxpF3cuxMh30YLdJeUvFiMDLvKUsv8Kmd6kld2MaxrtFizZe2QTKZd35ey/exec",
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







