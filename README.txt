step 1 - create index.html, index.css, and index.js
step 2 - link the css ans js file in html file 
step 3 - in html file create html structure and inside the body create div with class name container and inside the container create h1 tage and grid id div and button 
             when we click the restrat button page reload using (window.location.reload()) function
step 4 - styling the page using css 
step 5 - In index.js first we call the grid id becase we push the all car details here.
step 6 - The create array for adding the all images using array and object method (cardArray=[]).
step 7 - We add the image in ramdom so we need to sort the card using (cardArray.sort(()=>0.5-Math.random())).
step 8 - Then create the function for insert the image what we are given in the array . Inside the function 
              Add the for loop because 18 image we added so use given array length to iterate the loop and insert the image.
              and here we add the one bg image so create the img element using setAttribute and set the attribute element .
              we added the all images and add the data-id value (find which card we click). Then we need to flip the card so add the addEvemtListener (click , functionname).
              Then append the card detais into the grid using appendChild method.
step 9 -  We called the flipcard function in above function so create the flipcard function and then create one variable and getAttribute value from data-id to this variable.
               and setAttribute method used to set the img tag attribute valuse.
               and main condition if if both card or equal so we need to push the images into 2 array and find if it is equal or not
               so we add  decleare the 2 empry arra card_chosen and card_chosen_id.
               and add the condition if the card_chosen array is === 2 then go to checkmatch function otherwise 0.5 sec again go to old useing setTimeout method.
step 10 - Then create the checkmatch function and select the all the img into cards variable. then check the condition if the card_chosen 0 element and card_chosen_id 1 element is equal or not if it is equal remove the addEvenListener  card_chosen_id[0] and card_chosen_id[1];
                else again flip the old potion try to do again .. one the card is equal then we need to empty the card_chosen and card_chosen_id becasewe need to find next card.
        
stop 11 - finaly all cards equal then show the alert after click the popup reload the game . so in create cardwon empty array inside the checkmatch function puch the card_chosen value into the cardwon.
               Then add the condition if the cardwon lenght and cradArray length/2 is euqal show the alter  .
               