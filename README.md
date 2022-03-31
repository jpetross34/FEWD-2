# FEWD-2
Started out with wanting to make a dice roller. Realized about halfway through, that although a dice roller is cool, it didn't quite meet all of the requirements. So i thought that adding a to do list would perhaps meet the rest if the requirements... It did not. Finally I added a countdown timer for my wedding anniversary that pulls the local system time to determine how much time is left. HOPEFULLY, this meets the requirements. If there is time, I will try to add another 1-2 features from the list. 

PROJECT REQUIREMENTS THAT WERE USED:

●	Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)

-I implemented a countdown timer for the date of my wedding anniversary! Pulls the local time/date from the system to determine how much time is left. 

●	Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application

-With the dice roller part of this page, you are able to click on any of the Dice buttons (d4-d100) Each button shuffles through an array of numbers (i.e. a d4 shuffles through [1,2,3,4]) and returns a random number from those shuffles through.

●	Create a form and save the values (on click of Submit button) to an external file 
    ○	You must show us or document where that information is being stored so we can confirm that it’s being saved/persisted

-With the "Honey Do List" Each item that is added is saved to Local Storage. You can edit and delete items from the app, and they will be edited in, or removed from Local Storage as well. Even if the user refreshes the page, or navigates away from the page, the items are stored and available upon return.

