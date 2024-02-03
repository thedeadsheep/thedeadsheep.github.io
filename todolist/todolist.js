var toDoList = []

function addValueToList(normalize) {
    toDoList.push(normalize)
}

function generateUniqueId() {

    return Date.now().toString() + Math.floor(Math.random() * 256)
}
function addClickHandle() {
    let iValue = document.getElementById("note-input")
    let noteList = document.getElementById("note-list")
    if (!isValueValid(iValue.value)) {
        alert("du ma viet cai gi do vao di ba")
    } else {
        noteList.innerHTML = ""
        var normalize = {
            id: generateUniqueId(),
            value: iValue.value,
            isDone: false
        }
        addValueToList(normalize)
        renderNoteList()

    }
}
function renderNoteList() {
    let noteList = document.getElementById("note-list")
    noteList.innerHTML = ""
    toDoList.forEach((textNote) => {
        noteList.innerHTML += noteTemplate(textNote)
    })
}
function isValueValid(value) {
    if (value === "")
        return false
    if (value === null)
        return false
    return true
}
function noteTemplate(textNote) {

    return `<div class= "note-item" id="${textNote.id}" onclick = "forcusNote(event)" ondblclick = "itDone(event)">
    
                <div class="note-content" >
                  ${textNote.value}
                </div>
                 <button class="del-btn" onclick="deleteNode(event)">x</button>
           
            </div>`
}

function itDone(event) {

    var element = event.target
    var id = element.parentElement.id
    if (element.classList.contains("note-item")) {
        id = element.id
    }
    console.log(event.target)
    var index = toDoList.findIndex((element) => {
        console.log(element.id)
        console.log(id)
        return element.id === id
    })
    console.log(index)
    toDoList[index].isDone = !toDoList[index].isDone
    console.log(toDoList)
}

function deleteNode(event) {
    var id = event.target.parentElement.id
    toDoList = toDoList.filter((e) => e.id != id)
    console.log(toDoList)
    renderNoteList()
}
function forcusNote(event) {
    var element = event.target
    if (element.classList.contains("note-item"))
        element.classList.toggle("forcus-note")
    else {
        element.parentElement.classList.toggle("forcus-note")
    }
}