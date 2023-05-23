

function encriptar() {
  let typingTxt = document.querySelector(".aencriptar").value;

  if (typingTxt != "") {
    const encryptingTxt = typingTxt.split(/e/g).join("enter").split(/i/g).join("imes").split(/a/g).join("ai").split(/o/g).join("ober").split(/u/g).join("ufat");
    document.querySelector(".adecriptar").value = encryptingTxt;
    document.querySelector(".aencriptar").value = "";
  }
};


function decriptar() {
  let pasteTxt = document.querySelector(".aencriptar").value;

  if (pasteTxt != "") {
    const encryptingTxt = pasteTxt.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.querySelector(".adecriptar").value = encryptingTxt;
    document.querySelector(".aencriptar").value = "";
  }
};


async function copiar() {

  let outputText = document.querySelector(".adecriptar").value;
  await navigator.clipboard.writeText(outputText);
  document.querySelector(".adecriptar").value = "";
  document.querySelector(".aencriptar").value = outputText;
};

