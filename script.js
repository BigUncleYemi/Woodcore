function payWithYemi(e) {
  if (e) e.preventDefault();
  const email = e.target['email'].value;
  const amount = e.target['amount'].value;
  const bank = "Kuda Bank";
  const bankAccName = "Oyebanji Olayemi";
  const bankAccNumber = "0909090890";
  const body = document.getElementsByTagName("body")[0];
  const Iframe = document.createElement('Iframe');
  Iframe.id = "iframe"
  function addScript() {
    const iframeDoc = iframe.contentDocument;
    const s = iframeDoc.createElement('script');
    s.type = 'text/javascript';
    s.src = 'inner.js';
    iframeDoc.body.appendChild(s);
  }
  Iframe.onload = addScript;
  Iframe.srcdoc = `<!DOCTYPE html><style>body{  display: flex;
    justify-content: center;
      background: #00000080;
    align-items: center;height: 100vh;}</style><body><h1><img src="assets/Spinner.svg" /></h1></body>`
  setTimeout(() => Iframe.srcdoc = `<!DOCTYPE html><body><style>body{  display: flex;
    justify-content: center;
      background: #00000080;
    align-items: center;height: 100vh;}section{background-color: white; width: 300px;padding: 20px;}</style>
    <section><div>${email} - ${amount}</div><div><h3>Bank</h3><p>${bank}</p></div><div><h3>Bank Account Name</h3><p>${bankAccName}</p></div><div><h3>Bank Account Number</h3><p>${bankAccNumber}</p></div>
    <div><button id="payed" onclick="${() => close()}">I have made payment</button></div></section></body>`, 5000) 
  body.appendChild(Iframe);
}

const form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => payWithYemi(e)); 