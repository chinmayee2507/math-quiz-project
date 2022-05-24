question_turn = "player1" ;
answer_turn = "player2" ;

player1_score = 0 ;
player2_score = 0 ;

player1_name = localStorage.getItem("player1_name_input");
player2_name = localStorage.getItem("player2_name_input"); 



function send(){

    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;

    correct_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
input_box = "<br> Answer: <input type='text' id='input_check_box' class='form_control' placeholder='Your Answer' >" ;

check_button = "<br><br><button class='btn btn-warning' onclick='check()'> Check </button>";

row= question_number + input_box + check_button ;

document.getElementById("output").innerHTML = row;


document.getElementById("number_1").value = " " ;
document.getElementById("number_2").value = " " ;

}

function check(){

    get_answer= document.getElementById("input_check_box").value;

    if(get_answer == correct_answer){

    if(answer_turn == "player1"){

        player1_score = player1_score + 1 ;
        document.getElementById("player1_score").innerHTML = player1_name + ": " + player1_score;

    }

    else{

       player2_score = player2_score + 1 ;
        document.getElementById("player2_score").innerHTML = player2_name + ": " + player2_score;
    
    }
    }

    if(question_turn == "player1"){

       question_turn = "player2";
       document.getElementById("player_question").innerHTML = "question turn: " + player2_name;
    }

    else{

        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "question turn: " + player1_name;
    
    }

    if(answer_turn == "player1"){

        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn: " + player2_name;
     }
 
     else{
 
         answer_turn = "player1";
         document.getElementById("player_answer").innerHTML = "answer turn: " + player1_name;
     
     

    }

    document.getElementById("output").innerHTML = "";
}