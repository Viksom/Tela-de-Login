function ConteinnerGeral(){
    const loginButton = document.getElementById("btnLogin")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
 

    loginButton.addEventListener('click', ( event )=>{

        event.preventDefault()
        
        let emailValue = email.value
        let passwordValue = password.value
        
        const apiResponse = peformLogin()


        apiResponse.then(data =>{

            const {users} = data

            let selectedUser = users.find( user => {
                return user.email === emailValue
            })

            console.log(selectedUser)

            gerenciadorLogin(selectedUser,{
                email: emailValue,
                password: passwordValue
            })
        })
    })
}

async function peformLogin(){

    let result

    return await fetch('../db.json').then(response => response.json()).then(data =>{
        return data
    })

}

function gerenciadorLogin(apiResponse, userInput){
    const{password, email} = apiResponse
    const userInputPassword = userInput.password
    const userInputEmail = userInput.email

    if(userInputEmail === email && userInputPassword===password){
        window.location.href ='../pages/tela2.html'
    }
    else{
        window.alert("Usuário não existe")
    }
}
window.onload = ConteinnerGeral