var socket
document.getElementById("send_name").onclick = function () {
    socket = new WebSocket(`wss://taksa-phts.herokuapp.com/play/1?name=${document.getElementById("name").value}`)
    document.getElementById("register").hidden = true
    document.getElementById("wait").hidden = false
    document.getElementById("points").hidden = false

    socket.addEventListener('message', function (event) {
        let data = JSON.parse(event.data)
        if (data.status === "error")
            alert(`Ошибка ${data.data}`)
        if (data.status === "question") {
            data = data.data
            document.getElementById("wait").hidden = true
            document.getElementById("question").hidden = false
            document.getElementById("question").data_id = data.id
            document.getElementById("question_id_text").innerText = `Вопрос ${data.id}`
            add_hint(data.hints[0])
            setTimeout(add_hint, 15000, data.hints[1])
            setTimeout(add_hint, 2 * 15000, data.hints[2])
            setTimeout(close_form, 3 * 15000)
        }
        if (data.status === "points") {
            document.getElementById("points").innerText = `Сейчас у Вас ${data.data} очков!`
        }
        if (data.data === "answer accepted") {
            document.getElementById("answer_accepted").hidden = false
            document.getElementById("wait").hidden = true
        }
    });
}

document.getElementById("send_answer").onclick = function (){
    let question_id = document.getElementById("question").data_id
    let answer = document.getElementById("answer").value
    socket.send(question_id + " " +answer)
    close_form()
    document.getElementById("wait").hidden = true
}

function add_hint(hint) {
    let ol = document.getElementById("hints")
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(hint));
    ol.appendChild(li);
}

function close_form() {
    document.getElementById("wait").hidden = false
    document.getElementById("answer_accepted").hidden = true
    document.getElementById("question").hidden = true
    document.getElementById("answer").value = ""
    let ol = document.getElementById("hints");
    while (ol.firstChild) {
        ol.removeChild(ol.firstChild);
    }
}