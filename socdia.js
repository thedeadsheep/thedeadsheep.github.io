function tron() {
    var xucxacs = document.querySelectorAll('[id=xuc-xac]')
    for (var i = 0; i < xucxacs.length; i++) {
        var nut = ngauNhien().toString()
        xucxacs[i].innerHTML = nut
    }
}

function ngauNhien() {
    var rand = Math.random()
    var intRand = parseInt(rand * 100)
    intRand = intRand % 6
    return intRand
}