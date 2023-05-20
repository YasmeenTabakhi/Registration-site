// username => mkyong-100@yahoo.com
// password => gr3at@3wdsG

// REGISTRATION ELEMENTS
const nameInput = document.getElementById("name")
const emailInputRegi = document.getElementById("email")
const passwordInputRegi =
  document.getElementById("password")
const rePassword = document.getElementById("re-password")
const submitBtnRegi = document.getElementById("submit")

// REGX CHECK
let checkEmail = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}"
let checkPass =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"

// ERROR SPAN
let spanName = document.querySelector(".error-name")
let spanEmail = document.querySelector(".error-email")
let spanPass = document.querySelector(".error-password")
let spanPassrep = document.querySelector(".error-passwRep")

// ERROR TAG
let error = document.createElement("i")
error.setAttribute("class", "fa-solid fa-exclamation")
// WARNING TAG
let warning = document.createElement("i")
warning.setAttribute(
  "class",
  "warning fa-solid fa-triangle-exclamation"
)

submitBtnRegi.addEventListener("click", (e) => {
  e.preventDefault()
  // DELETE TEXT ERROR
  spanName.textContent = ""
  spanEmail.textContent = ""
  spanPass.textContent = ""
  spanPassrep.textContent = ""

  if (
    nameInput.value !== "" &&
    emailInputRegi.value !== "" &&
    passwordInputRegi.value !== ""
  ) {
    if (emailInputRegi.value.match(checkEmail)) {
      if (passwordInputRegi.value.match(checkPass)) {
        if (passwordInputRegi.value === rePassword.value) {
          let obj = {
            nameInput: nameInput.value,
            emailInputRegi: emailInputRegi.value,
            passwordInputRegi: passwordInputRegi.value,
            profile: "",
            firstName: "",
            secondName: "",
            personalData: "",
            education: "",
            taskT: "",
            taskE: "",
            answerAll: "",
          }

          // CHECK LOCALSTORAGE DATA
          if (localStorage.getItem("Data") == null) {
            localStorage.setItem("Data", JSON.stringify([]))
          }

          // SET LOCALSTORAGE DATA
          let data = JSON.parse(
            localStorage.getItem("Data")
          )

          // CHECK VALID EMAIL
          for (const ele of data) {
            if (
              ele.emailInputRegi == emailInputRegi.value
            ) {
              let text1 = document.createTextNode(
                "This email is already in use"
              )
              error.appendChild(text1)
              spanEmail.appendChild(warning)
              spanEmail.appendChild(text1)
              return
            }
          }
          // INSERT DATA
          data.push(obj)
          localStorage.setItem("Data", JSON.stringify(data))
          window.location.href = "../login.html"
        } else {
          // VALIDATION CHECK PASSWORD === PASSWORDREP
          let text = document.createTextNode(
            "Passwords do not match"
          )
          error.appendChild(text)
          spanPass.appendChild(error)
          spanPass.appendChild(text)
        }
      } else {
        // VALIDATION CHECK REGX PASSWORD
        let text1 = document.createTextNode(
          "It must contain an uppercase and lowercase letter and a number"
        )
        warning.appendChild(text1)
        spanPass.appendChild(warning)
        spanPass.appendChild(text1)
      }
    } else {
      // VALIDATION CHECK REGX PASSWORD
      let text = document.createTextNode(
        "Email Error .. ex : mkyong-100@yahoo.com"
      )
      error.appendChild(text)
      spanEmail.appendChild(error)
      spanEmail.appendChild(text)

      let text1 = document.createTextNode(
        "It must contain an uppercase and lowercase letter and a number"
      )
      warning.appendChild(text1)
      spanPass.appendChild(warning)
      spanPass.appendChild(text1)
    }
  } else {
    // HIS FIELD IS REQUIRED

    if (nameInput.value === "") {
      let error = document.createElement("i")
      let text = document.createTextNode(
        "This field is required"
      )
      error.setAttribute("class", "fa-solid fa-exclamation")
      spanName.appendChild(error)
      spanName.appendChild(text)
    }

    if (emailInputRegi.value === "") {
      let error = document.createElement("i")
      let text = document.createTextNode(
        "This field is required "
      )
      error.setAttribute("class", "fa-solid fa-exclamation")
      spanEmail.appendChild(error)
      spanEmail.appendChild(text)
    }

    if (passwordInputRegi.value === "") {
      let error = document.createElement("i")
      let text = document.createTextNode(
        "This field is required "
      )
      error.setAttribute("class", "fa-solid fa-exclamation")
      spanPass.appendChild(error)
      spanPass.appendChild(text)
    }

    if (rePassword.value === "") {
      let error = document.createElement("i")
      let text = document.createTextNode(
        "This field is required "
      )
      error.setAttribute("class", "fa-solid fa-exclamation")
      spanPassrep.appendChild(error)
      spanPassrep.appendChild(text)
    }
  }
})
