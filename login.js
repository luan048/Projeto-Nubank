function toggleSenhaVisibility(){
    var senhaInput = document.getElementById("pass")
    var olhoFechadoIcone = document.getElementById("olhoFechado")

    if(senhaInput.type === "password"){
        senhaInput.type = "text"
        olhoFechadoIcone.classList.remove("fa-eye-slash")
        olhoFechadoIcone.classList.add("fa-eye")
    }

    else {
        senhaInput.type = "password"
        olhoFechadoIcone.classList.remove("fa-eye")
        olhoFechadoIcone.classList.add("fa-eye-slash")
    }
}
//Código acima responsavel pelo olho da senha

//Para que o erro apareça no USR
document.addEventListener('DOMContentLoaded', function(){
    var inputField = document.getElementById('usr')
    var errorMessage = document.getElementById('error-message')
    var errorText = document.getElementById('error-text')

    errorMessage.style.display = 'none' 
    //Para que esse erro apareça somente quando for solicitado, e não no inicio

    inputField.addEventListener('blur', function(){
        if(inputField.value.trim() === '') {
            errorText.textContent = 'Campo obrigatório'
            errorMessage.style.display = 'flex'
        }

        else{
            errorText.textContent = ''
            errorMessage.style.display = 'none'
        }
    })

    inputField.addEventListener('input', function(){
        if(inputField.value.trim() !== '') {
            errorText.textContent = ''
            errorMessage.style.display = 'none'
        }
    })
})

//Para que  erro apareça somente no PASS
document.addEventListener('DOMContentLoaded', function(){
    var inputFault = document.getElementById('pass')
    var faultMessage = document.getElementById('fault-message')
    var errorPass = document.getElementById('error-pass')

    faultMessage.style.display = 'none'

    inputFault.addEventListener('blur', function(){
        if(inputFault.value.trim() === '') {
            errorPass.textContent = 'Campo obrigatório'
            faultMessage.style.display = 'flex'
        }

        else{
            errorPass.textContent = ''
            faultMessage.style.display = 'none'
        }
    })

    inputFault.addEventListener('input', function(){
        if(inputFault.value.trim() !== '') {
            errorPass.textContent = ''
            faultMessage.style.display = 'none'
        }
    })
})