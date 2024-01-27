(() => {
  const changeThemeBtn = document.querySelector(".change-theme-btn");
  const body = document.querySelector("body");

  changeThemeBtn.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "blue") {
      body.setAttribute("data-theme", "light");
      changeThemeBtn.setAttribute("data-theme", "light");
    } else {
      body.setAttribute("data-theme", "blue");
      changeThemeBtn.setAttribute("data-theme", "blue");
    }
  });
})();
