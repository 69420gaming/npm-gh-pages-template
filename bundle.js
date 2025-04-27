(() => {
  // dist/index.js
  document.body.style.backgroundColor = "#f0f0f0";
  document.body.style.fontFamily = "Arial, sans-serif";
  document.body.style.textAlign = "center";
  document.body.style.paddingTop = "50px";
  var h1 = document.createElement("h1");
  h1.textContent = "Hello World from esbuild & gh-pages!";
  h1.style.color = "#333";
  var p = document.createElement("p");
  p.textContent = "This page was bundled with esbuild and deployed with gh-pages";
  p.style.color = "#666";
  document.body.appendChild(h1);
  document.body.appendChild(p);
})();
