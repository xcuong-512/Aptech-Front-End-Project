
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const resetBtn = document.getElementById("reset-btn");

    resetBtn.addEventListener("click", function () {
        form.reset();
    })
})