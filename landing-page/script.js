"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const obj = document.querySelector(".pdf-embed object");
  if (!obj) return;
  let loaded = false;
  const timer = setTimeout(() => {
    if (!loaded) {
      console.log("PDF may be blocked by the browser. Showing links instead.");
    }
  }, 3000);
  obj.addEventListener("load", () => {
    loaded = true;
    clearTimeout(timer);
  });
});