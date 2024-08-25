// Timothy Miller
//not gonna lie! javascript is way more of a pain 
//than what i was expecting.
// so heres my issue, i put down that the function was to display text on click. *yes*
// identified that the var text was = to the document id *yes*
// identified the var both a & b are also in the main html by their id. *yes
// went and added the same base text for all the others and added the if statement.
// now i am stuck with the if statement and dont know how to get it to work right now.
function question1(answer){
    var text = document.getElementById("light&weapon");
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    // right here for instance, ive placed so many symbols in hopes that at least one of them would work right
    if (answer =='A') {
        // or here, i placed it to where after either a and b are true that the text style display would change. 
        
        // I ended up getting help from one of the tutors at the school who explained how the if else statements
        // worked as well as functions, after he explained it to where i could understand it the rest of the game went
        // through without any real problems 
       text.style.display ="block";

        
    }
    else if (answer  == 'B'){

       text.style.display ="block";
    }
}
function question2(answer){
    var text = document.getElementById("sleep");
    var c = document.getElementById("c");
    var e = document.getElementById("e")
    // maybe if i did it with only one var. no change
         if (answer =='C') {
    
           text.style.display="block";   

        }
        else if (answer == 'E'){
            text.style.display="block";
        }

}
function question3(answer){
    var text = document.getElementById("rock");
    var h = document.getElementById("h");
    
 
   if (answer =='H'){    
   
     
        text.style.display="block";

    }



}
function question4(answer){
    var text = document.getElementById("name");
    var j = document.getElementById("j");
    var k = document.getElementById("k");
    var l = document.getElementById("l");
// maybe multiple choices
    if (answer =='J') {
// same coded text style, no change since to get here you need the first to work properly. so i went back into the html 
// and removed the text reading style in the text of all the html in hopes that will change things.
        text.style.display="block";
        
    }
    else if (answer  == 'K'){

        text.style.display ="block";

     }
      else if (answer  == 'L') {

       text.style.display ="block";
    
    }
    





}

function question5(answer){
    var text = document.getElementById("cave-in");
    var d = document.getElementById("d");
    var f = document.getElementById("f");
    var g = document.getElementById("g");
    var i = document.getElementById("i");
    var m = document.getElementById("m");
// this one i hope works right in all honestly this one i hope works
    if (answer =='D') {
// same text style display = id of header 6 (h6)
        text.style.display="block";

    
    }
    else if (answer  == 'F'){

       text.style.display ="block";

    }
    else if (answer  == 'G'){

        text.style.display ="block";

     }
     else if (answer  == 'I'){

        text.style.display ="block";

     }
     else if (answer == 'M') {

        text.style.display ="block";
     }
     


    }
function question6(answer){
    var text = document.getElementById("yell");
    var o = document.getElementById("o");

// if i hide the text through css would that be an easier alternative than hiding it threw javascript? 
// the basis of the text being hidden isnt absolute? if all else fails there is still the idea of making multiple html. --way too much work though--
   if (answer == 'O') {

    text.style.display="block";
   }




}
// not sure if function display text on click is nessesary?
// would removing on click change anything?
function question7(answer){
    var text = document.getElementById("hole");
    var n = document.getElementById("n");
    var p = document.getElementById("p");
    var q = document.getElementById("q");
    var r = document.getElementById("r");
// seeing this work in action would be nice.
      if (answer =='N') {

        text.style.display="block";

      }else if (answer  == 'P'){

        text.style.display ="block";

     }else if (answer  == 'Q'){

        text.style.display ="block";

     }else if (answer  == 'R'){

        text.style.display ="block";
     }

 



    }

function question8(answer){
    var text = document.getElementById("escape");
     var s = document.getElementById("s");
     var t = document.getElementById("t");


     if (answer =='S') {

        text.style.display="block";

     }else if (answer  == 'T'){

       text.style.display ="block";
    }



}
function question9(answer){
    var text = document.getElementById("home");
    var u = document.getElementById("u");

    if (answer == 'U') {

        text.style.display="block";

    }





}
function question10(answer){
    var text = document.getElementById("the end");
    var s = document.getElementById("s");
    var t = document.getElementById("t");
    var u = document.getElementById("u");

    if (answer == 'S') {

        text.style.display="block";

    }else if (answer  == 'T'){

       text.style.display ="block";

    }else  if (answer  == 'U'){

        text.style.display ="block";
     }

// will be commenting on this more often? had given me time to go through my code more affectivly and gave me time 
// to notate on a couple lines to plan a more effective approach of my game. hopefully it works and the next time 
// i write on here it will be a good comment about how well it works.

// I FINISHED MY FIRST GAME!!!!

}