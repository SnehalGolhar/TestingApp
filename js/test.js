/**
 * Created by Vaibhav on 11/17/2015.
 */
function food()
{

    $("#foodtest").addClass("hidden");
    $("#desttest").addClass("hidden");
    $("#actortest").addClass("hidden");
    $("#habittest").addClass("hidden");
    $("#pictest").addClass("hidden");
    $("#gifttest").addClass("hidden");
var count=0;

//code for food
   if(document.getElementById("sandwich").checked==true)
   {
       $("#foodtest").removeClass("hidden");
       $("#foodrightanswer").removeClass("hidden");
       $("#foodwronganswer").addClass("hidden");
       count++;

   }

    else
   {
       $("#foodtest").removeClass("hidden");
       $("#foodrightanswer").addClass("hidden");
       $("#foodwronganswer").removeClass("hidden");
   }
    //code for destination

    if(document.getElementById("tarkarli").checked==true)
    {
        $("#desttest").removeClass("hidden");
        $("#destrightanswer").removeClass("hidden");
        $("#destwronganswer").addClass("hidden");
        count++;

    }

    else
    {
        $("#desttest").removeClass("hidden");
        $("#destwronganswer").removeClass("hidden");
        $("#destrightanswer").addClass("hidden");

    }

    //code for habit
    if(document.getElementById("legs").checked==true)
    {
        $("#habittest").removeClass("hidden");
        $("#habitrightanswer").removeClass("hidden");
        $("#habitwronganswer").addClass("hidden");
        count++;

    }

    else
    {
        $("#habittest").removeClass("hidden");
        $("#habitrightanswer").addClass("hidden");
        $("#habitwronganswer").removeClass("hidden");


    }

    //code for actor
    if(document.getElementById("nana").checked==true)
    {
        $("#actortest").removeClass("hidden");
        $("#actorrightanswer").removeClass("hidden");
        $("#actorwronganswer").addClass("hidden");
        count++;

    }

    else
    {
        $("#actortest").removeClass("hidden");
        $("#actorrightanswer").addClass("hidden");
        $("#actorwronganswer").removeClass("hidden");
    }



    //code for worry
  if(document.getElementById("weight").checked==true)
    {
        $("#worrytest").removeClass("hidden");
        $("#worryrightanswer").removeClass("hidden");
        $("#worrywronganswer").addClass("hidden");
        count++;

    }

    else
    {
        $("#worrytest").removeClass("hidden");
        $("#worryrightanswer").addClass("hidden");
        $("#worrywronganswer").removeClass("hidden");
    }

    //code for Gift
    if(document.getElementById("card").checked==true)
    {
        $("#gifttest").removeClass("hidden");
        $("#giftrightanswer").removeClass("hidden");
        $("#giftwronganswer").addClass("hidden");
        count++;

    }

    else
    {
        $("#gifttest").removeClass("hidden");
        $("#giftrightanswer").addClass("hidden");
        $("#giftwronganswer").removeClass("hidden");
    }

    //code for pic
    if(document.getElementById("pic").checked==true)
    {
        $("#pictest").removeClass("hidden");
        $("#picrightanswer").removeClass("hidden");
        $("#picwronganswer").addClass("hidden");
        count++;

    }

    else
    {
        $("#pictest").removeClass("hidden");
        $("#picrightanswer").addClass("hidden");
        $("#picwronganswer").removeClass("hidden");
    }




if(count==7)
{
$("#clue").removeClass("hidden");


}

}

function test()
{
    window.open('contact.html');
}
