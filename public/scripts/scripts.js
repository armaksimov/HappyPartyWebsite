function displayFAQ(num) {
    var x = document.getElementById("faqlist");
    var y = document.getElementById("faqlist2");
    var z = document.getElementById("faqlist3");
    if (num == 1) {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
    else if (num == 2) {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
    else if (num == 3) {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    }
    else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
}