let index = sessionStorage.getItem("index");
// Save old Data
let Data = JSON.parse(localStorage.getItem('Data'));
let submitPage = document.querySelector(".submit-page");


//GET VALUE VALIDATION
let inpCheckbox = document.querySelector("#agree");
let inpFirst = document.querySelector("#First");
let inpSecond = document.querySelector("#Second");
let inpBirth = document.querySelector("#Birth");
let inpEducation = document.querySelector("#education");

console.log(submitPage);

//GET BOX SHOW VALIDATION 
let checkbox = document.querySelector(".error-checkbox");
let first = document.querySelector(".error-First");
let second = document.querySelector(".error-Second");
let birth = document.querySelector(".error-Birth");
let education = document.querySelector(".error-education");

// ERROR TAG 
let error = document.createElement("i");
error.setAttribute("class", "fa-solid fa-exclamation");

if (Data[index].profile) {
    window.location.href = "../status.html";
}

submitPage.addEventListener("click", function () {
    checkbox.textContent = "";
    first.textContent = "";
    second.textContent = "";
    birth.textContent = "";
    education.textContent = "";

    if (inpFirst.value !== "" && inpSecond.value !== "" && inpBirth.value !== "" && inpEducation.value !== "") {
        if (Data[index].profile === "") {
            Data[index].profile = "Done";
            Data[index].firstName = inpFirst.value;
            Data[index].secondName = inpSecond.value ;
            Data[index].personalData = inpBirth.value ;
            Data[index].education = inpEducation.value;
        }

        // Save New Data
        localStorage.removeItem('Data');
        localStorage.setItem('Data', JSON.stringify(Data));
        window.location.href = "../status.html";
    } else {

        if (!inpCheckbox.checked) {
            let error = document.createElement("i");
            let text = document.createTextNode("This field is required");
            error.setAttribute("class", "fa-solid fa-exclamation");
            checkbox.appendChild(error);
            checkbox.appendChild(text);
        }

        if (inpFirst.value === "") {
            let error = document.createElement("i");
            let text = document.createTextNode("This field is required");
            error.setAttribute("class", "fa-solid fa-exclamation");
            first.appendChild(error);
            first.appendChild(text);
        }

        if (inpSecond.value === "") {
            let error = document.createElement("i");
            let text = document.createTextNode("This field is required");
            error.setAttribute("class", "fa-solid fa-exclamation");
            second.appendChild(error);
            second.appendChild(text);
        }

        if (inpBirth.value === "") {
            let error = document.createElement("i");
            let text = document.createTextNode("This field is required");
            error.setAttribute("class", "fa-solid fa-exclamation");
            birth.appendChild(error);
            birth.appendChild(text);
        }

        if (inpEducation.value === "") {
            let error = document.createElement("i");
            let text = document.createTextNode("This field is required");
            error.setAttribute("class", "fa-solid fa-exclamation");
            education.appendChild(error);
            education.appendChild(text);
        }
    }
});

