const username = document.getElementById('nome')
const namespan = document.getElementById('nameSpan')
const email = document.getElementById('email')
const emailSpan = document.getElementById('emailSpan')
const telefone = document.getElementById('telefone')
const telefoneSpan = document.getElementById('telefoneSpan')
const mesage = document.getElementById('mensagem')
const mesageSpan = document.getElementById('mesageSpan')

function validacaoCampos() {

    const nameValue = username.value.trim()
    const emailValue = email.value.trim()
    const telefoneValue = telefone.value.trim()
    const mesageValue = mesage.value.trim()

    if (nameValue === '') {
        namespan.classList.add("span-campo-obrigatorio-ativado")
        namespan.classList.remove("span-campo-obrigatorio-desativado")
        username.classList.add('inputVazio')
        username.classList.remove('inputCheio')
    } else {
        console.log(nameValue)
        namespan.classList.add("span-campo-obrigatorio-desativado")
        namespan.classList.remove("span-campo-obrigatorio-ativado")
        username.classList.add('inputCheio')
        username.classList.remove('inputVazio')
    }

    if (emailValue === '') {
        emailSpan.classList.add("span-campo-obrigatorio-ativado")
        emailSpan.classList.remove("span-campo-obrigatorio-desativado")
        email.classList.add('inputVazio')
        email.classList.remove('inputCheio')
    } else {
        console.log(nameValue)
        emailSpan.classList.add("span-campo-obrigatorio-desativado")
        emailSpan.classList.remove("span-campo-obrigatorio-ativado")
        email.classList.add('inputCheio')
        email.classList.remove('inputVazio')
    }

    if (telefoneValue === '') {
        telefoneSpan.classList.add("span-campo-obrigatorio-ativado")
        telefoneSpan.classList.remove("span-campo-obrigatorio-desativado")
        telefone.classList.add('inputVazio')
        telefone.classList.remove('inputCheio')
    } else {
        console.log(nameValue)
        telefoneSpan.classList.add("span-campo-obrigatorio-desativado")
        telefoneSpan.classList.remove("span-campo-obrigatorio-ativado")
        telefone.classList.add('inputCheio')
        telefone.classList.remove('inputVazio')
    }

    if (mesageValue === '') {
        mesageSpan.classList.add("span-campo-obrigatorio-ativado")
        mesageSpan.classList.remove("span-campo-obrigatorio-desativado")
        mesage.classList.add('inputVazio')
        mesage.classList.remove('inputCheio')
    } else {
        console.log(nameValue)
        mesageSpan.classList.add("span-campo-obrigatorio-desativado")
        mesageSpan.classList.remove("span-campo-obrigatorio-ativado")
        mesage.classList.add('inputCheio')
        mesage.classList.remove('inputVazio')
    }
}