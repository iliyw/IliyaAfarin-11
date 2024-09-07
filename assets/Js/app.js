"use strict";

const btnResault = document.querySelector(".resault");
const btnReset = document.querySelector(".reset");
const modal = document.querySelector(".modal-bmi");
const bmiResault = document.querySelector(".bmi");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const bmiInfo = document.querySelector(".bmi-info");
const errorText = document.querySelector(".error-txt");

btnResault.addEventListener("click", function () {
    const height = Number(document.querySelector(".height").value);
    const weight = Number(document.querySelector(".weight").value);
    if (weight && height) {
        if (height > 0.47 && weight > 2.5) {
            const bmi = weight / height ** 2;
            modal.classList.remove("hidden");
            overlay.classList.remove("hidden");
            bmiResault.textContent = bmi.toFixed(3);
        } else {
            errorText.classList.remove("hidden");
        }
    } else {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    }
});
closeModal.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});
btnReset.addEventListener("click", function () {
    document.querySelector(".height").value = "";
    document.querySelector(".weight").value = "";
    errorText.classList.add("hidden");
});
