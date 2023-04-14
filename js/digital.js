let title = document.querySelector("h1");

if (document.location.href.includes("project-pets")) {
  let all = document.querySelectorAll(".pets");
  title.innerHTML = "Project charter - PETS WEB";
  all.forEach((item) => {
    item.style.display = "flex";
  });
} else if (document.location.href.includes("project-cv")) {
  title.innerHTML = "Project Charter - CV WEB";
  let all = document.querySelectorAll(".cv");
  all.forEach((item) => {
    item.style.display = "flex";
  });
} else if (document.location.href.includes("project-news")) {
  title.innerHTML = "Project Charter - NEWS WEB";
  let all = document.querySelectorAll(".news");
  all.forEach((item) => {
    item.style.display = "flex";
  });
}
