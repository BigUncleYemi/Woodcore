
document.getElementsByTagName("button")[0].addEventListener("click", () => {
  console.log('here',window.document, parent);
  document.getElementsByTagName("body")[0].innerHTML = `<!DOCTYPE html><style>body{  display: flex;
    justify-content: center;
      background: #00000080;
    align-items: center;height: 100vh;}</style><body><img src="assets/Spinner.svg" /></body>`;
  setTimeout(() => document.getElementsByTagName("body")[0].innerHTML = "", 1000)
  window.href=""
})