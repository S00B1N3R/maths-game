player1 = localStorage.getItem("player1")
player2 = localStorage.getItem("player2")
document.getElementById("p1name").innerHTML = player1
document.getElementById("p2name").innerHTML = player2
var player1score=0 
player2score=0
document.getElementById("p1score").innerHTML=player1score
document.getElementById("p2score").innerHTML=player2score
function send(){
    number1=Number(document.getElementById("number1").value)
    number2=Number(document.getElementById("number2").value)
    sum=number1+" + "+number2
    qword="<h4 id='word_display'>Q. "+sum+"</h4>"
    input_box = "<br>Answer : <input type='number' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";


    row=qword+input_box+check_button
    document.getElementById("output").innerHTML=row
    document.getElementById("number1").value=""
    document.getElementById("number2").value=""


}
answerturn = 'p1'
questionturn = 'p2'
document.getElementById('player_answer').innerHTML = 'answer turn= ' + player1
document.getElementById('player_question').innerHTML = 'question turn= ' + player2
function check(){
    answer=document.getElementById("input_check_box").value
    if (answer==(number1+number2)) {
        if (answerturn == 'p1') {
            player1score += 1
            document.getElementById("p1score").innerHTML = player1score

        } else {
            player2score += 1
            document.getElementById("p2score").innerHTML = player2score

        }  
    }
    if (answerturn == 'p1') {
        answerturn = 'p2'
        questionturn = 'p1'

        document.getElementById("player_question").innerHTML = 'question turn= ' + player1
        document.getElementById("player_answer").innerHTML = 'answer turn= ' + player2
    } else {
        answerturn = 'p1'
        questionturn = 'p2'
        document.getElementById('player_question').innerHTML = 'question turn= ' + player2
        document.getElementById('player_answer').innerHTML = 'answer turn= ' + player1
    }
    document.getElementById('output').innerHTML=""
}
