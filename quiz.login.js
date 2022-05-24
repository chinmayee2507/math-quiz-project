function addUser(){

    user_name1 = document.getElementById("player1_name_input").value;
    user_name2 = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name_input" , user_name1);
    localStorage.setItem("player2_name_input" , user_name2);

    window.location = "quiz_game_page.html" ;
}