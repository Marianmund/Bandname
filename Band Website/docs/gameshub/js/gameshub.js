// ========== LOADING OVERLAY ==========

// Select the loading overlay only once and avoid naming conflicts
const loadingOverlay = document.getElementById("loadingOverlay");

function showLoading() {
  loadingOverlay.classList.add("active");
}

function hideLoading() {
  loadingOverlay.classList.remove("active");
}

// Show loading overlay for 5 seconds on test button click
function testLoading() {
  showLoading();
  setTimeout(hideLoading, 5000);
}

// Check if all images are fully loaded
function checkImagesLoaded() {
  for (let img of document.images) {
    if (!img.complete) return false;
  }
  return true;
}

// Wait until all images are loaded before hiding the overlay
function waitForImagesToLoad() {
  showLoading();

  const interval = setInterval(() => {
    if (checkImagesLoaded()) {
      hideLoading();
      clearInterval(interval);
    }
  }, 100);
}

// Start loading overlay on page load
window.addEventListener("load", () => {
  waitForImagesToLoad();
});

// Example async data loading function
async function loadData() {
  showLoading();

  try {
    const response = await fetch("your-api-url");
    const data = await response.json();
    // Handle your data here
  } catch (error) {
    console.error(error);
  } finally {
    hideLoading();
  }
}

// ========== HAMBURGER NAVIGATION ==========

// Navigation elements
const hamburgerMenu = document.querySelector("#hamburger-menu");
const navOverlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Helper function to animate nav items in/out
function navAnimation(directionFrom, directionTo) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${directionFrom}-${i + 1}`,
      `slide-${directionTo}-${i + 1}`
    );
  });
}

// Toggle the mobile navigation menu
function toggleNav() {
  hamburgerMenu.classList.toggle("active");
  navOverlay.classList.toggle("overlay-active");

  if (navOverlay.classList.contains("overlay-active")) {
    navOverlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    navAnimation("out", "in");
  } else {
    navOverlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    navAnimation("in", "out");
  }
}

// Add event listeners to nav
hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => nav.addEventListener("click", toggleNav));

// Countdown

function startCountdown(duration, display) {
  let timer = duration,
    hours,
    minutes,
    seconds;
  setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  const countdownDuration = 12 * 3600 + 34 * 60 + 56; // 12:34:56 in seconds
  const display = document.querySelector("#countdown");
  startCountdown(countdownDuration, display);
};
