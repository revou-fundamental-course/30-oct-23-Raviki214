// let bb = document.getElementById("berat_badan");
// let tb = document.getElementById("tinggi_badan");

// function showResult() {
//     if (bb.value === "" || tb.value === "") {
//       result.innerHTML = "Diisi dulu";
//     } else {
//       const beratBadan = parseFloat(bb.value);
//       const tinggiBadan = parseFloat(tb.value);
//       const tb2 = parseFloat(tinggiBadan) / 100;

//       const bmi = beratBadan / (tb2 * tb2);
//     if (bmi < 18.5) {
//         result.innerHTML = "Kekurangan berat badan " + bmi.toFixed(3);
//     } else if (bmi > 18.5 && bmi < 24.9) {
//         result.innerHTML = "Normal (ideal) " + bmi.toFixed(3);
//     } else if (bmi > 25.0 && bmi < 29.9) {
//         result.innerHTML = "Kelebihan berat badan " + bmi.toFixed(3);
//     } else if (bmi > 30.0) {
//         result.innerHTML = "Kegemukan (Obesitas) " + bmi.toFixed(3);
//      }
//     }
// }

const beratBadan = document.getElementById("bb")
const tinggiBadan = document.getElementById("tb")
const buttonHitung = document.getElementById("hitung")

beratBadan.addEventListener('input',function() {
    const inputBb = beratBadan.value.trim()
    if (validationBb(inputBb)){
        console.log("FALSE")
        buttonHitung.diisabled = false;
    }else{
        console.log("TRUE")
        buttonHitung.disabled = true;
    }
})

function validationBb(input) {
    const integerRegex = /^-?\d+5/;
    return integerRegex.test(input)
}