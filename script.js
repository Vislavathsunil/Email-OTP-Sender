const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");


const email = document.getElementById("email");
const sentBtn = document.getElementById("sendBtn");
const verifyBtn = document.getElementById("verifyBtn");
const again = document.getElementById("try-again");
const home = document.getElementById("Home-Page");


const userOTP = document.querySelectorAll(".otp-input input");
console.log(userOTP);



// Generate OTP
const OTP = Math.floor(Math.random() * 10000);
console.log(OTP);


window.addEventListener("load", () => {

    emailjs.init("rbLde6NDZEcWcxx_Z");

    step2.style.display = "none";
    step3.style.display = "none";

    sentBtn.classList.add("disableBtn")
})


email.addEventListener("keyup", () => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(email.value)) {
        sentBtn.classList.remove("disableBtn");
    }
})


const serviveId = "service_c6ies6g";
const templateId = "template_zq1acld";

sentBtn.addEventListener("click", () => {

    const templateParameters = {
        to_name: "Sunil",
        otp: OTP,
        email: email.value,
    }

    emailjs.send(serviveId, templateId, templateParameters).then(
        (res) => {
            console.log("Email sent successfully");
            sentBtn.innerHTML = "sending..."
            step1.style.display = "none";
            step2.style.display = "inline-flex";
            step3.style.display = "none";

        }, (err) => {
            console.log(err);
        })
})

// OTP setting

userOTP.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        if (e.target.value.length >= 1) {
            e.target.value = e.target.value.substr(0, 1);
        }

        if (userOTP[0].value == "" && userOTP[1].value == "" && userOTP[2].value == "" && userOTP[3].value == "") {
            verifyBtn.classList.add("disableBtn");
        } else {
            verifyBtn.classList.remove("disableBtn");
        }
    })
})


verifyBtn.addEventListener("click", () => {

    let values = "";
    userOTP.forEach((input) => {
        values += input.value;
    });

    if (OTP == values) {
        alert("OTP Verified")
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "inline-flex";
    } else {
        alert("Wrong OTP");
    }

})


again.addEventListener("click", () => {
    step1.style.display = "inline-flex";
    step2.style.display = "none";
    step3.style.display = "none";
});


home.addEventListener("click", () => {
    step1.style.display = "inline-flex";
    step2.style.display = "none";
    step3.style.display = "none";
})



