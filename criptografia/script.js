

function encriptar() {
  let mensagem = document.querySelector(".aencriptar").value;

  if (mensagem != "") {
    const codigo = mensagem.split(/e/g).join("enter").split(/i/g).join("imes").split(/a/g).join("ai").split(/o/g).join("ober").split(/u/g).join("ufat");
    document.querySelector(".adecriptar").value = codigo;
    document.querySelector(".aencriptar").value = "";
  }
};


function decriptar() {
  let copia = document.querySelector(".aencriptar").value;

  if (copia != "") {
    const codigo = copia.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.querySelector(".adecriptar").value = codigo;
    document.querySelector(".aencriptar").value = "";
  }
};


async function copiar() {

  let saida = document.querySelector(".adecriptar").value;
  await navigator.clipboard.writeText(saida);
  document.querySelector(".adecriptar").value = "";
  document.querySelector(".aencriptar").value = saida;
};

