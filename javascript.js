var count = 30;
var track = 30;
var rightAns = 0;
var wrongAns = 5;

var intervalId;

const timer = () =>{

		intervalId = setInterval(()=>{
			count--;
			$("#display-timer").html(`${count}`);
			if (count == 0) {
				clearInterval(intervalId);
			}
			console.log(count);
			
			if ((count == 0)) {

				$(".container").empty();
				var h1 = "<h1>Sorry you ran out of time, you did not get all the questions right</h1>";
				$("#body").append(h1);
			}


		}, 1000);


		

		
};


$("#appear").on("click", () => {

	$(".invi").css("opacity", "100");

	timer();

});

$("#right1").on("click", () => {

	rightAns++;
	wrongAns--;
	console.log(rightAns);
	console.log(wrongAns);
	if (rightAns == 5) {

		$(".container").empty();
		var h1 = "<h1>You did it! You got all the questions right!!</h1>";
		$("#body").append(h1);

	}

});


$("#right2").on("click", () => {

	rightAns++;
	wrongAns--;
	console.log(rightAns);
	console.log(wrongAns);
	if (rightAns == 5) {

		$(".container").empty();
		var h1 = "<h1>You did it! You got all the questions right!!</h1>";
		$("#body").append(h1);

	}

});

$("#right3").on("click", () => {

	rightAns++;
	wrongAns--;
	console.log(rightAns);
	console.log(wrongAns);
	if (rightAns == 5) {

		$(".container").empty();
		var h1 = "<h1>You did it! You got all the questions right!!</h1>";

	}

});

$("#right4").on("click", () => {

	rightAns++;
	wrongAns--;
	console.log(rightAns);
	console.log(wrongAns);
	if (rightAns == 5) {

		$(".container").empty();
		var h1 = "<h1>You did it! You got all the questions right!!</h1>";
		$("#body").append(h1);

	}

});

$("#right5").on("click", () => {

	rightAns++;
	wrongAns--;
	console.log(rightAns);
	console.log(wrongAns);
	if (rightAns == 5) {

		$(".container").empty();
		var h1 = "<h1>You did it! You got all the questions right!!</h1>";
		$("#body").append(h1);

	}

});



