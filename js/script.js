function ConteinnerGeral(){
    // const loginButton = document.getElementById("LoginButtom")
    // const email = document.getElementById("email")
    // const password = document.getElementById("password")

    const loginButton = document.querySelector(".btnLogin")
    const email = document.querySelector(".email")
    const password = document.querySelector(".password")


    loginButton.addEventListener('click', ()=>{
        
        let emailValue = email.value
        let passwordValue = password.value
        
        const apiResponse = peformLogin()


        apiResponse.then(data =>{
            const {user} = data
            gerenciadorLogin(user,{
                email: emailValue,
                password: passwordValue
            })
        })
    })
}

async function peformLogin(){

    let result

    return await fetch('/db.json').then(response => response.json()).then(data =>{
        return data
    })

}

function gerenciadorLogin(apiResponse, userInput){
    const{password, email} = apiResponse
    const userInputPassword = userInput.password
    const userInputEmail = userInput.email

    if(userInputEmail === email && userInputPassword===password){
        window.location.href ='/pages/tela2.html'
    }
    else{
        alert("Usuário não existe")
    }
}
window.onload = ConteinnerGeral