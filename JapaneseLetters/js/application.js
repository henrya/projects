 /**
 *
 * application.js
 *
 * @description. Generates simple questionnaire to study Japanese letters. It is possible to modify this script to study anything.
 * @version 1.0 
 * @copyright 2014 Henry ALgus. All rights reserved.
 *
 */

$(document).ready(function ($) {

	// How many answers to show to the user

	var answerCount = 4;
	
	// Next question timeout
	
	var nextQuestionTimeout = 1000;

	// Shuffles array items
	
	var shuffleArray = function (array) {
			for (var i = array.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
			return array;
	};
	
	// loads new question file and evals its content
	
	$("#header a").click(function(e){
		e.preventDefault();
		$(this).parent().children().removeClass('active');
		$(this).addClass('active');
		var scriptName = $(this).text().toLowerCase();
		$.get('js/'+scriptName+'.js', function( data ) {
			eval(data);
		    generateQuestion();
		});
	});
		
	// Generates new questions and takes care of displaying next question

	var generateQuestion = function () {
			var randomized = shuffleArray(quizItems);
			var selected = randomized.slice(0, answerCount);
			// fade out wrong question
			var fadeoutWrong = function(){
					window.setTimeout(function () {
							$("#message").children(".wrong").fadeOut();
					}, 1000);
			};
			// show next question
			var showNext = function(){
				window.setTimeout(function () {
							generateQuestion();
				}, nextQuestionTimeout);
			};
			
			var answer = selected[0];
			$("#testletter").text(answer[1]);
			var i = 0;
			// Empty 
			$("#letters").html("");
			$("#message").children().hide();
			// Shuffle all items
			var randSelected = shuffleArray(selected);
			var row = $("<div/>").addClass('row');
			for (var letter in randSelected) {
			
				var child = $("<div/>").addClass('col-xs-6');
				var anchor = $("<button/>").attr('class', 'btn btn-lg btn-default').text(randSelected[letter][0]);

				anchor.data('item', randSelected[letter][0]);
				anchor.click(function (e) {
					e.preventDefault();
					$("#message").children().hide();
					var item = $(this).data('item');
					// Chceck if answer is correct or not
					if (item == answer['0']) {
						$(this).addClass('correct');
						$("#message").children(".correct").show();
						showNext();
					} else {
						$(this).addClass('wrong');
						$("#message").children(".wrong").show();
						fadeoutWrong();
					}
				});
				
				child.append(anchor);
				row.append(child);
				$("#letters").append(row);

				i++;
			}
	};
	
	generateQuestion();

});