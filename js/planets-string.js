// (function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray = planetsString.split('|') ;
    console.log(planetsArray);

    // /**
    //  * TODO:
    //  * Create a string with <br> tags between each planet. console.log() your
    //  * results. Why might this be useful?
    //  *
     console.log(planetsArray);
     console.log(planetsArray.join('<br>'));

     // * BONUS:
     // * Create another string that would display your planets in an undordered
     // * list. You will need an opening AND closing <ul> tags around the entire
     // * string, and <li> tags around each planet.
     // */

var output = '<ul><li>' + planetsArray.join('</li><li>') + '</li></ul>'
document.write(output);

   // <ul>
   //  <li>
// planetsArray = <ul><li>"Mercury</li>Venus<li>Earth</li>Mars<li>Jupiter</li>Saturn<li>Uranus</li>Neptune"</ul></li>;

//create another variable for output of the list string
//use our array of planets to join them all together using whatever html is
//between our li tags

        // <ul>
        //     <li>Mercury</li>
        //     <li>Venus</li>
        //     <li>Earth</li>
        //     <li>Mars</li>
        //     <li>Jupiter</li>
        //     <li>Saturn</li>
        //     <li>Uranus</li>
        //     <li>Neptune</li>
        // </ul>


        // })();