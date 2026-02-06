const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // データをURLSearchParams形式に変換（GASのe.parameterで受け取るため）
  const formData = new FormData(form);
  const params = new URLSearchParams(formData);

  fetch(
    "https://script.google.com/macros/s/AKfycbwC0trJ97fxpF3cuxMh30YLdJeUvFiMDLvKUsv8Kmd6kld2MaxrtFizZe2QTKZd35ey/exec",
    {
      method: "POST",
      mode: "no-cors", // GASへの送信でエラーが出にくい設定
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params.toString()
    }
  )
  .then(() => {
    alert("送信完了");
    form.reset();
  })
  .catch(err => {
    console.error(err);
    alert("送信に失敗しました");
  });
});
