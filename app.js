async function rollDice() {
    boolUp = false

    const dice = [...document.querySelectorAll(".die-list")];
    var lawc = document.getElementById("dice");
    var bat = document.getElementById("bat")
    var audio = document.getElementById("audioXD")
    bat.style.transform = " translate(-50%, -50%)"
    await setTimeout(() => {
        lawc.style.animation = "lawc 0.5s infinite ease-out"
        audio.play()

    }, 1000)
    await setTimeout(() => {

        dice.forEach(die => {
            toggleClasses(die);
            die.dataset.roll = ngauNhien()
            console.log(die.dataset)

        });
    }, 1000)
    await setTimeout(() => {
        audio.pause()
        bat.style.transform = " translate(-50%, -150%)"
        lawc.style.animation = ""
        boolUp = false
    }, 3000)

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
