// INDEX OF ARRAY USER
let index = sessionStorage.getItem("index")
let Data = JSON.parse(localStorage.getItem("Data"))

// STATUS PAGE
const infoBtn = document.querySelector(".btn-apply-info")
const englishBtn = document.querySelector(
  ".btn-apply-english"
)
const technicalBtn = document.querySelector(
  ".btn-apply-technical"
)
const logout = document.querySelector(".logout")
const submitPage = document.querySelector(".submit-page")

if (Data[index].profile !== "") {
  infoBtn.textContent = "completed"
  infoBtn.classList.remove("cursor")
} else {
  infoBtn.addEventListener("click", function () {
    window.location.href = "./profile-info.html"
  })
}

if (Data[index].taskE !== "") {
  englishBtn.textContent = "completed"
  englishBtn.classList.remove("cursor")
} else {
  englishBtn.addEventListener("click", function () {
    window.location.href = "./english-test.html"
  })
}

if (Data[index].taskT !== "") {
  technicalBtn.textContent = "completed"
  technicalBtn.classList.remove("cursor")
} else {
  technicalBtn.addEventListener("click", function () {
    window.location.href = "./technical-test.html"
  })
}

logout.addEventListener("click", function () {
  window.location.href = "./login.html"
})

let table = document.querySelector(".table")
let hero = document.querySelector(".hero")
let submitAll = document.querySelector(".submit-all")
let showTable = document.querySelector(".showTable")

// if (
//   Data[index].taskE !== "" &&
//   Data[index].profile !== "" &&
//   Data[index].taskT !== "" &&
//   Data[index].answerAll == ""
// ) {

// }

// if (
//   Data[index].taskE !== "" &&
//   Data[index].profile !== "" &&
//   Data[index].taskT !== "" &&
//   Data[index].answerAll == ""
// ) {
//   submitAll.classList.remove("hidden")
//   submitAll.addEventListener("click", () => {
//     table.classList.remove("hidden")
//     hero.classList.add("hidden")
//     Data[index].answerAll = "Done"
//     submitAll.remove()
//     showTable.innerHTML = `
//     <tr>
//       <th>${Data[index].nameInput}</th>
//       <td>${Data[index].emailInputRegi}</td>
//       <td>${Data[index].education}</td>
//       <td>${Data[index].personalData}</td>
//       <td>${Data[index].taskE} / 15</td>
//       <td>${Data[index].taskT} / 10</td>
//     </tr>
//   `
//   })
// } else {
//   table.classList.remove("hidden")
//   hero.classList.add("hidden")
//   submitAll.remove()
//   submitAll.classList.remove("hidden")
//   Data[index].answerAll = "Done"
//   showTable.innerHTML = `
//     <tr>
//       <th>${Data[index].nameInput}</th>
//       <td>${Data[index].emailInputRegi}</td>
//       <td>${Data[index].education}</td>
//       <td>${Data[index].personalData}</td>
//       <td>${Data[index].taskE} / 15</td>
//       <td>${Data[index].taskT} / 10</td>
//     </tr>
//   `
// }

if (
  Data[index].taskT !== "" &&
  Data[index].taskE !== "" &&
  Data[index].profile !== "" &&
  Data[index].answerAll == ""
) {
  submitAll.classList.remove("hidden")
}

submitAll.addEventListener("click", () => {
  Data[index].answerAll = "Done"
  localStorage.removeItem("Data")
  localStorage.setItem("Data", JSON.stringify(Data))
  hero.classList.add("hidden")
  table.classList.remove("hidden")
  submitAll.remove()
  showTable.innerHTML = `<tr>
      <th>${Data[index].nameInput}</th>
      <td>${Data[index].emailInputRegi}</td>
      <td>${Data[index].education}</td>
      <td>${Data[index].personalData}</td>
      <td>${Data[index].taskE} / 15</td>
      <td>${Data[index].taskT} / 10</td>
    </tr>`
})

if (Data[index].answerAll !== "") {
  hero.classList.add("hidden")
  submitAll.remove()
  table.classList.remove("hidden")
  showTable.innerHTML = `<tr>
      <th>${Data[index].nameInput}</th>
      <td>${Data[index].emailInputRegi}</td>
      <td>${Data[index].education}</td>
      <td>${Data[index].personalData}</td>
      <td>${Data[index].taskE} / 15</td>
      <td>${Data[index].taskT} / 10</td>
    </tr>`
}
