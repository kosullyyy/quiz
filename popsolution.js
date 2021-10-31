//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Follow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="How many miles is a 5k?"
choice1[1]="5"
choice1[2]="3.1"
choice1[3]="2"
choice1[4]="1/2"

question[2]="What is the largest country (land wise)"
choice2[1]="USA"
choice2[2]="England"
choice2[3]="China"
choice2[4]="Russia"

question[3]="Which shape has 3 sides?"
choice3[1]="An octagon"
choice3[2]="A triangle"
choice3[3]="A square"
choice3[4]="A rectangle"

question[4]="How many months are in a year?"
choice4[1]="23"
choice4[2]="12"
choice4[3]="10"
choice4[4]="6"

question[5]="As of October 2021, who is the wealthiest person in the world?"
choice5[1]="Jeff Bezos"
choice5[2]="Elon Musk"
choice5[3]="Taylor Swift"
choice5[4]="Donald Trump"

question[6]="What is the tallest tree in the world called?"
choice6[1]="The Hyperion Tree"
choice6[2]="General Sherman Tree"
choice6[3]="Pine Tree"
choice6[4]="Palm Tree"
question[7]="Which is the tallest mountain?"
choice7[1]="Mt. Everest"
choice7[2]="Mt. St. Helen"
choice7[3]="Mt. Olympia"
choice7[4]="Mt. K2"

question[8]="What is the normal abbreviation for pi"
choice8[1]="3.14"
choice8[2]="6"
choice8[3]="2.8"
choice8[4]="9"

question[9]="What color do blue and yellow make when mixed together?"
choice9[1]="brown"
choice9[2]="green"
choice9[3]="pink"
choice9[4]="more blue"

question[10]="Which US President is depicted in a painting crossing the Delaware River?"
choice10[1]="George Washington"
choice10[2]="Abraham Lincoln"
choice10[3]="Teddy Rosevelt"
choice10[4]="Barrock Obama"

solution[1]="b"
solution[2]="a"
solution[3]="b"
solution[4]="b"
solution[5]="a"
Solution[6]="a"
Solution[7]="a"
Solution[8]="a"Solution[9]="b"
Solution[10]="a"