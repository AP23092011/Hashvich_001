document.getElementById("a22").addEventListener("click", function () {

    document.getElementById("a22").style.background = " rgb(0, 11, 66)";
    document.getElementById("a2").style.background = "#ccc";
})
document.getElementById("a2").addEventListener("click", function () {

    document.getElementById("a2").style.background = " rgb(0, 11, 66)";
    document.getElementById("a22").style.background = "#ccc";

})
document.getElementById("a1").addEventListener("click", function () {
    document.getElementById("a1").style.background = "red";
    document.getElementById("a11").style.background = "#ccc";
    document.getElementById("a1a").style.background = "#ccc";

})
document.getElementById("a11").addEventListener("click", function () {
    document.getElementById("a11").style.background = "red";
    document.getElementById("a1").style.background = "#ccc";
    document.getElementById("a1a").style.background = "#ccc";
})
document.getElementById("a1a").addEventListener("click", function () {
    document.getElementById("a1a").style.background = "red";
    document.getElementById("a1").style.background = "#ccc";
    document.getElementById("a11").style.background = "#ccc";
})

document.getElementById("okk").addEventListener("click", function () {
    let a = +document.getElementById("inputtmec").value
    let social = 0
    let droshmananish = 0
    let ekamtahark = 0
    console.log(a);
    if (a >= 100001 && a <= 200000) {
        droshmananish = 3000
        document.getElementById("droshman").value = droshmananish

    } else if (a >= 200001 && a <= 500000) {
        droshmananish = 5500
        document.getElementById("droshman").value = 5500

    } else if (a >= 500001 && a <= 1000000) {
        droshmananish = 8500
        document.getElementById("droshman").value = 8500

    } else if (a >= 1000001) {
        droshmananish = 15000
        document.getElementById("droshman").value = 15000

    }
    ekamtahark = a * 20 / 100
    document.getElementById("ekamtahark").value = ekamtahark
    if (a >= 500000 && a <= 1125000) {
        social = (a * 10 / 100) - 25000
        document.getElementById("soc").value = social
    } else if (a < 500000) {
        social = a * 5 / 100
        document.getElementById("soc").value = social
    }

    document.getElementById("maqur").value = a - social - droshmananish - ekamtahark
})