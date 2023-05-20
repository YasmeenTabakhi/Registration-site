// LOGIN ELEMENTS
const emailInputLog = document.getElementById("email-log")
const passwordInputLog =
  document.getElementById("password-log")
const submitBtnLog = document.getElementById("submit-log")

// ERROR SPAN
let spanEmail = document.querySelector(".error-email")
let spanPass = document.querySelector(".error-password")

submitBtnLog.addEventListener("click", (ele) => {
  ele.preventDefault()

  // DELETE TEXT ERROR
  spanEmail.textContent = ""
  spanPass.textContent = ""

  // input value from user
  const username = emailInputLog.value
  const password = passwordInputLog.value

  // function to check if email or pass registered
  const authenticated = authentication(username, password)

  if (username && password) {
    if (authenticated) {
      window.location.href = "status.html"
    } else {
      let taskE = document.createTextNode(
        "⚠️ Invalid email or password. Please make sure your email and password are correct"
      )
      spanEmail.appendChild(taskE)
    }
  } else {
    if (password == "" && username == "") {
      let text1 = document.createTextNode(
        "⚠️ This field is required"
      )
      spanEmail.appendChild(text1)

      let text = document.createTextNode(
        "⚠️ This field is required"
      )
      spanPass.appendChild(text)
    } else if (password == "") {
      let text = document.createTextNode(
        "⚠️ This field is required"
      )
      spanPass.appendChild(text)
    } else if (username == "") {
      let text1 = document.createTextNode(
        "⚠️ This field is required"
      )
      spanEmail.appendChild(text1)
    }
  }
})

let arrData = JSON.parse(localStorage.getItem("Data"))

console.log(arrData)

function authentication(username, password) {
  for (let i = 0; i < arrData.length; ++i) {
    // CHECK EMAIL AND PASSWORD IS YES RETURN TRUE
    if (
      username === arrData[i].emailInputRegi &&
      password === arrData[i].passwordInputRegi
    ) {
      sessionStorage.setItem("index", i)
      return true
    }
  }
}

let index = sessionStorage.getItem("index")
console.log(index)
