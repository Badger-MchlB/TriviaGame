        let timer = 30;
        let userPick;
        let currentQuestion = 0;
        let seconds;
        let userSelect;
        let time;
        let answered;
        let gamingQuestions = {};
        let correctAnswer = 0;
        let incorrectAnswer = 0;
        let unanswered = 0;
        let question = 0;
        let choices = [];
$(document).ready(function() {
    
    
        let gamingQuestions = [{
            Question: "This British Overwatch team won the inaugural season in 2018.",
            Choices: ["British Hurricanes","London Spitfire","Shanghai Dragons","Team Dignitas"],
            validAnswer: 1
        }, {
            Question: "Assassin's Creed III featured a Native American main character named what?",
            Choices: ["Ezio Auditore","Evie Frye","Thomas Jefferson","Connor Kenway"],
            validAnswer: 3
        }, {
            Question: "Grand Theft Auto V had three main characters.  Which character joined the Air Force?",
            Choices: ["Franklin Clinton","Michael De Santa","Trevor Philips","Lance Vance"],
            validAnswer: 2
        }, {
            Question: "This horror game made in 2016 focused on artwork and paintings to psyche the player out.",
            Choices: ["Layers of Fear","Contagion: Outbreak","System Shock 2","Resident Evil"],
            validAnswer: 0
        }, {
            Question: "Resident Evil 4 first released in what year?",
            Choices: ["2005","2003","2007","2004"],
            validAnswer: 0
        }, {
            Question: "Which famous horror director was working with Norman Reedus to create a Silent Hill game?",
            Choices: ["Uwe Boll","John Carpenter","Guillermo del Toro","Wes Craven"],
            validAnswer: 2
        }, {
            Question: "This titular character from the RPG series Baldur's Gate was known for talking to his pet giant space hamster.",
            Choices: ["Drizzt Do'Urden","Minsc","Khalid","Edwin"],
            validAnswer: 1
        }, {
            Question: "Which popular video game developing company recently released its director who cameos in the game Metal Gear Solid?",
            Choices: ["Activision","Gearbox","Konami","Blizzard"],
            validAnswer: 2
        }, {
            Question: "What was the name of the original XCOM game made in 1994 in the EU?",
            Choices: ["Enemy Unknown","UFO Defense","Apocalypse","Terror from the Deep"],
            validAnswer: 0
        }, {
            Question: "This science fiction series featuring the character John Shepherd also has a species who lives on trash barges.  What is their name?",
            Choices: ["Krogans","Quarians","Volus","Turians"],
            validAnswer: 1
        }];
    
    
    
    $("#start").on('click',function(){
        
    $(this).hide();
    console.log(gamingQuestions.validAnswer);
    newGame();
    
    });
    function newGame(){
        $('#correctAnswers').empty();
        $('#incorrectAnswers').empty();
        $('#unanswered').empty();
        correctAnswer = 0;
        incorrectAnswer = 0;
        unanswered = 0;
        question = 0;
        currentQuestion = 0;
        newQuestions();
    }
    function newQuestions(){
        $(".currentQuestion").html("Question #"+(currentQuestion+1)+"/"+gamingQuestions.length);
        $(".question").html(gamingQuestions[currentQuestion].Question);
        answered = true;
        for (var i = 0; i < gamingQuestions.length; i++){
            let answer = $('<div>');
            answer.text(gamingQuestions[currentQuestion].Choices[i]);
            answer.attr({'data-index': i});
            answer.addClass('thisChoice');
            $('.answers').append(choices);
        }
        countdown();
        $(".thisChoice").on('click',function(){
            userSelect = $(this).data("index");
            clearInterval(time);
        });
        function countdown (){
            seconds = 30;
            $(".timer").html("<h3>Time Left: " + seconds + "</h3>");
            answered = true;
            time = setInterval(showCountdown, 1000);
            answerPage();
        }
        function showCountdown (){
            seconds--;
            $('.timer').html("<h3>Time Left: " + seconds + "</h3>");
            if(seconds < 1){
                clearInterval(time);
                answered = false;
                answerPage();
            }
        }
    }})
    function answerPage(){
        $(".thisChoice").empty();
        $(".question").empty();

        let rightAnswerTxt = gamingQuestions[currentQuestion].Choices[gamingQuestion[currentQuestion].validAnswer];
        let rightAnswerI = gamingQuestions[currentQuestion].validAnswer;
            if ((userSelect == rightAnswerIndex) && (answered == true)){
                correctAnswer++;
            }
            else if ((userSelect != rightAnswerIndex) && (answered == true)){
            incorrectAnswer++;
            }
            else{
                unanswered++;
            }
    }
