player1_name = localStorage.getItem("Player1");
player2_name = localStorage.getItem("Player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
document.getElementById("P1_name").innerHTML = player1_name + ": ";
document.getElementById("P2_name").innerHTML = player2_name + ": ";
document.getElementById("P1_Score").innerHTML = player1_score;
document.getElementById("P2_Score").innerHTML = player2_score;

function sendWord(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("The word is " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    charAt2 = word.charAt(word.length / 2);
    console.log(charAt2);
    
    charAt3 = word.charAt(word.length - 1);
    console.log(charAt3);

    removeCharAt1 = word.replace(charAt1, "_");

    removeCharAt2 = removeCharAt1.replace(charAt2, "_");

    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
    
    question_word = "<h4 id='word_display'>Question: " + removeCharAt3 + "</h4>";
    input_box = "<br> answer: <input type='text' id='input_checkBox'>";
    check_button = "<br><br><button class='btn btn-info' onclick='checkWord()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
var question_turn = "player1";
var answer_turn = "player2";
function checkWord() {
    get_answer = document.getElementById("input_checkBox").value;
    answer = get_answer.toLowerCase();
    console.log("The answer in lowercase is " + answer);
    if(answer == word){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("P1_Score").innerHTML = player1_score;
        } 
        else{
            player2_score = player2_score + 1;
            document.getElementById("P2_Score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}