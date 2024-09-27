function openDropdown() {
    var element = document.getElementById("dropdown");
    element.classList.toggle("active");
  }

function submit(){
    var firstname = document.getElementById("firstname")
    var lastname = document.getElementById("lastname")
    var email = document.getElementById("email")
    var phone = document.getElementById("phone")
    var select = document.getElementById("select")
    var message = document.getElementById("message")
    var agree = document.getElementById("agree")

    if(firstname.value ==""){
        error.innerHTML = "Firstname must be filled!"
        alert("First Name must be filled!")
    }else if(lastname.value ==""){
        error.innerHTML = "lastname must be filled!"
        alert("last Name must be filled!")
    
    }else if(email.value.endswith("@gmail.com")){
        error.innerHTML = "email must end with @gmail.com"
        alert("email must end with @gmail.com")
    
    }else if(phone.value ==""){
        error.innerHTML = "phone must be filled!"
        alert("phone must be filled!")
    
    }else if(select.value ==""){
        error.innerHTML = "Select 1 country!"
        alert("Select 1 country!")
    
    }else if(message.value ==""){
        error.innerHTML = "Message must be filled!"
        alert("Message must be filled!")
    
    }else if(!agree.checked){
        error.innerHTML = "please agree terms and condition first"
        alert("please agree terms and condition first")
    }else{
        error.innerHTML =""
        alert("Message send")
    }
}

// var form = document.getElementById('form')
// form.addEventListener('submit', function(e)){
//     e.preventDefault()
    
//     var firstname = document.getElementById('firstname')
//     var lastname = document.getElementById('lastname')

//     if(firstname.value =="" || lastname.value ==""){
//         alert("Isi woy")
//     }
// }
