let texto = document.querySelector('#entrada')
let resultado = document.querySelector('#saida')
let criptografar = document.querySelector('#btn-cripto')
let descriptografar = document.querySelector('#btn-descripto')
let copiar = document.querySelector('#btn-copy')
const regex = new RegExp('^[a-z 0-9\b]')

criptografar.addEventListener('click', event => {
  event.preventDefault()

  resultado.textContent = caracteres(criptografa(texto.value))

  texto.value = ''
})

descriptografar.addEventListener('click', event => {
  event.preventDefault()

  resultado.textContent = caracteres(descriptografa(texto.value))

  texto.value = ''
})

copiar.addEventListener('click', event => {
  event.preventDefault()

  resultado.select()

  document.execCommand('copy')
  texto.value = ''
})

function criptografa(texto) {
  let textoCriptografado = texto
    .replace(/e/gi, 'enter')
    .replace(/i/gi, 'imes')
    .replace(/a/gi, 'ai')
    .replace(/o/gi, 'ober')
    .replace(/u/gi, 'ufat')
    .toLowerCase()

  return textoCriptografado
}

function descriptografa(texto) {
  let textoDescriptografado = texto
    .replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u')

  return textoDescriptografado
}

function caracteres(testeTexto) {
  if (!regex.test(testeTexto)) {
    return 'ATENÇÃO: Você precisa digitar frases com apenas letras minúsculas e sem acento para continuar.'
  } else {
    return testeTexto
  }
}
