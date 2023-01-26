
async function rollDice() {

    const dice = [...document.querySelectorAll(".die-list")];
    var lawc = document.getElementById("dice");
    var bat = document.getElementById("bat")
    var audio = document.getElementById("audioXD")

    if (localStorage.getItem("Rolling") == "false") {
        await localStorage.setItem("Rolling", true)
        console.log(localStorage.getItem("Rolling"))
        bat.style.transform = " translate(-50%, -50%)"
        await setTimeout(() => {
            lawc.style.animation = "lawc 0.5s infinite ease-out"
            audio.play()

        }, 1000)
        await setTimeout(() => {

            dice.forEach(die => {
                toggleClasses(die);
                die.dataset.roll = ngauNhien()

            });
        }, 1000)
        await setTimeout(() => {
            audio.pause()
            bat.style.transform = " translate(-50%, -150%)"
            lawc.style.animation = ""
            boolUp = false
        }, 3000)
        await localStorage.setItem("Rolling", false)
    }
}
function toggleClasses(die) {
    die.classList.toggle("even-roll");
    die.classList.toggle("odd-roll");
}
function ngauNhien() {
    var rand = Math.random()
    var intRand = parseInt(rand * 100)
    intRand = intRand % 6
    console.log(typeof intRand)
    return intRand + 1
}
