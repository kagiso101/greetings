window.addEventListener("DOMContentLoaded", function() {

    var inputBox = document.getElementById("inputElements")
    var greetBtn = document.getElementById("greetButton")
    var message = document.getElementById("txtBox")
    var total = document.getElementById("counter")
    var resetBtn = document.getElementById("resetButton")

    var stored = localStorage['greetedUsers'] ? JSON.parse(localStorage['greetedUsers']) : {};

    var greetings = GreetFactory(stored);

    window.addEventListener("load", function() {
        total.innerHTML = greetings.getGreetCounter();
    });

    //greet buttons event listener 
    greetBtn.addEventListener("click", function() {
        var input = inputBox.value;
        var radioBtn = document.querySelector("input[name='selector']:checked");
        if (radioBtn) {
            var language = radioBtn.value;
            var name = greetings.getNameFromInput(input)
            if (name !== "") {
                message.innerHTML = greetings.greetUser(name, language)
                total.innerHTML = greetings.getGreetCounter();
                localStorage['greetedUsers'] = JSON.stringify(greetings.getAllUsers());

            } else {
                message.innerHTML = "no name entered."
            }
        } else {
            message.innerHTML = "please select language."
        }
    });

    // this is the reset buttons event listener
    resetBtn.addEventListener("click", function() {
        greetings.resetBtn();
        greetings.resetBtn();
        location.reload();
    });
});