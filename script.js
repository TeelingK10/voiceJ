const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const data = Object.fromEntries(
    new FormData(form)
  );

  fetch("https://docs.google.com/spreadsheets/d/1auqhm91n7pQWOXhfqIQSq2qlxe1K4sKZcQd--6DmHfg/edit?usp=sharing", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => {
    if (!res.ok) throw new Error();
    alert("送信が完了しました");
    form.reset();
  })
  .catch(() => {
    alert("送信に失敗しました");
  });
});
