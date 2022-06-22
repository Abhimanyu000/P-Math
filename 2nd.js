//taking item from local storage
player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

//set player score
player1_score=0;
player2_score=0;

//set player name
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

//update score
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

//set turn of players
document.getElementById("player_question").innerHTML="Question asked by "+player1_name;
document.getElementById("player_answer").innerHTML="Question answered by "+player2_name;

//function sending answer
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;

    answer=parseInt(number1)*parseInt(number2);
    question_number="<h4>" +number1+ " X " +number2+ "</h4>";
    inputbox="<br>Answer : <input type='text' id='inputcheckbox'>";
    checkbutton="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+inputbox+checkbutton;

    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    getanswer=document.getElementById("inputcheckbox").value;
    if(getanswer==answer){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question asked by "+player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question asked by "+player1_name;
    }

    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Question answered by "+player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Question answered by "+player1_name;
    }

    document.getElementById("output").innerHTML="";
}