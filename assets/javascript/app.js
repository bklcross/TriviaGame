
var 

//Trivia Game Christmas Song style
//--------------------------------
//================================
//--------------------------------
//Description: A trivia game that
// allows the user to "start"
// and is presented with a lyric
// from a classic Christmas Song
// if the user guesses the correct
// answer then a snippit of the
// song will play for 5 seconds
// and the user only has 5 seconds
// to answer the question or they
// will automatically get it wrong
//--------------------------------
//================================
//--------------------------------
//          FUNCTIONS
//
// Name:  $('#').on('click', function(){});
// Note:  A standard JQuery function to
//        give the user a clickable div.
//
// Name:  $('#').html(var);
//        var = '<b>White Christmas</b>';
// Note:  A standard JQuery function to
//        give the user a clickable answer.
//
// Name:  reset(){}
// Note:  A reset function that resets the
//        interval timer, emptys the divs,
//        populates the new divs with a new
//        lyric and the 4 multiple choice
//        answers.
//
// Name:  initialize(){}
// Note:  A initialize function that starts
//        the game with specific values.
//
// Name:  $('#').remove();
// Note:  A standard JQuery function to
//        remove the start button once
//        it is clicked. It will also
//        be used to remove other divs
//        answers, trivia questions, and
//        song snippits.
//
// Name:  $('#').html(var);
//        var = '<audio controls autoplay>
//               <source src='...'
//                  type='audio/mpeg'>'
// Note:  A standard JQuery function to
//        auto play an audio snippit when
//        the user gets the correct answer
//        or the time runs out and they
//        fail to answer correctly.