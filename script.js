"use strict";

let barsBtn = document.querySelector(".bars");
let cancelBtn = document.querySelector(".cancel-btn");
let sidebar = document.querySelector("aside");

barsBtn.addEventListener("click", () =>
  sidebar.classList.toggle("show-sidebar")
);

cancelBtn.addEventListener("click", () =>
  sidebar.classList.remove("show-sidebar")
);
