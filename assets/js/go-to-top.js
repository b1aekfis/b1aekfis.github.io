const btn=document.querySelector(".go-to-top-btn");

btn.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior:"instant",
  });
});