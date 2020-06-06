var nameString = document.querySelector(".nameString")

var greetBtn = document.querySelector(".greetBtn")

var clearBtn = document.querySelector(".clearBtn")

var langSelectedRadio = document.querySelector(".langSelectedRadio")

var display = document.querySelector(".display")

var counter = 0

function greetMeBtnClicked() {

    var lang = langSelectedRadio.value
    var nameEntered = nameString.value;

    for (var i = 0; i < nameEntered.length; i++) {
        var name = nameEntered[i]
        if (lang === English) {
            ("Hello" + name)
        }
        else if (lang === Spanish) {
            ("Ola " + name)
        }
        else if (lang === Mandarin) {
            ("你好 " + name)
        }
    }
}


greetBtn.addEventListener('click', greetMeBtnClicked);