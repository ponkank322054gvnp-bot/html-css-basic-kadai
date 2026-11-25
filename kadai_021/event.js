
const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent = "文章を書き換えました！";
  }, 2000);
});
