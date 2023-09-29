var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
const background = document.getElementById("background-image");

// Change the icons inside the button based on previous settings

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  background.classList.remove("boxes-pattern-white");

  themeToggleLightIcon.classList.remove("hidden");
} else {
  background.classList.remove("boxes-pattern");
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      background.classList.remove("boxes-pattern-white");
      background.classList.add("boxes-pattern");

      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      background.classList.remove("boxes-pattern");
      background.classList.add("boxes-pattern-white");

      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      //   background.classList.remove("boxes-pattern-white");
      //   background.classList.add("boxes-pattern");
      background.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      //   background.classList.remove("boxes-pattern");
      //   background.classList.add("boxes-pattern-white");
      background.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});
