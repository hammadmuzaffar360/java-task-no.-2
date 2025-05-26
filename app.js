
// task one 

        // 1. City name input
        var city = prompt("Enter your city name:");
        if (city === "Karachi") {
            alert("Welcome to city of lights");
        }

        // 2. Gender input
        var gender = prompt("Enter your gender (male/female):");
        if (gender === "male") {
            alert("Good Morning Sir.");
        } else if (gender === "female") {
            alert("Good Morning Ma’am.");
        } else {
            alert("Good Morning!");
        }

        // 3. Traffic signal color
        var signalColor = prompt("Enter traffic signal color (Red/Yellow/Green):");
        if (signalColor === "Red") {
            alert("Must Stop");
        } else if (signalColor === "Yellow") {
            alert("Ready to move");
        } else if (signalColor === "Green") {
            alert("Move now");
        } else {
            alert("Invalid color entered");
        }

        // 4. Fuel check
        var fuel = parseFloat(prompt("Enter remaining fuel in litres:"));
        if (fuel < 0.25) {
            alert("Please refill the fuel in your car");
        }

        // 5. Condition checks
        var a = 4;
        if (++a === 5) {
            alert("given condition for variable a is true");
        }

        var b = 82;
        if (b++ === 83) {
            alert("given condition for variable b is true");
        }

        var c = 12;
        if (c++ === 13) {
            alert("condition 1 is true");
        }
        if (c === 13) {
            alert("condition 2 is true");
        }
        if (++c < 14) {
            alert("condition 3 is true");
        }
        if (c === 14) {
            alert("condition 4 is true");
        }

        var materialCost = 20000;
        var laborCost = 2000;
        var totalCost = materialCost + laborCost;
        if (totalCost === laborCost + materialCost) {
            alert("The cost equals");
        }

        if (true) {
            alert("True");
        }
        if (false) {
            // Will not show anything
        }

        if ("car" < "cat") {
            alert("car is smaller than cat");
        }

        // 6. Marks & Grades
        var sub1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
        var sub2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
        var sub3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
        var totalMarks = parseFloat(prompt("Enter total marks:"));

        var obtainedMarks = sub1 + sub2 + sub3;
        var percentage = (obtainedMarks / totalMarks) * 100;

        var grade = "";
        var remarks = "";

        if (percentage >= 80) {
            grade = "A-one";
            remarks = "Excellent";
        } else if (percentage >= 70) {
            grade = "A";
            remarks = "Good";
        } else if (percentage >= 60) {
            grade = "B";
            remarks = "You need to improve";
        } else {
            grade = "Fail";
            remarks = "Sorry";
        }

        // Display result on screen
        document.write("<h2>Marks Sheet</h2>");
        document.write("Total Marks: " + totalMarks + "<br>");
        document.write("Marks Obtained: " + obtainedMarks + "<br>");
        document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
        document.write("Grade: " + grade + "<br>");
        document.write("Remarks: " + remarks + "<br>");

        // 7. Guess game
        var secretNumber = 7;
        var guess = parseInt(prompt("Guess the secret number (1 to 10):"));
        if (guess === secretNumber) {
            alert("Bingo! Correct answer");
        } else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
            alert("Close enough to the correct answer");
        } else {
            alert("Try again!");
        }

        // 8. Divisible by 3
        var num = parseInt(prompt("Enter a number to check if divisible by 3:"));
        if (num % 3 === 0) {
            alert("The number is divisible by 3");
        } else {
            alert("The number is not divisible by 3");
        }

        // 9. Even or Odd
        var number = parseInt(prompt("Enter a number to check even or odd:"));
        if (number % 2 === 0) {
            alert("Even number");
        } else {
            alert("Odd number");
        }

        // 10. Temperature messages
        var temp = parseFloat(prompt("Enter temperature:"));
        if (temp > 40) {
            alert("It is too hot outside.");
        } else if (temp > 30) {
            alert("The Weather today is Normal.");
        } else if (temp > 20) {
            alert("Today’s Weather is cool.");
        } else if (temp > 10) {
            alert("OMG! Today’s weather is so Cool.");
        } else {
            alert("It's freezing!");
        }

        // 11. Calculator
        var num1 = parseFloat(prompt("Enter first number:"));
        var num2 = parseFloat(prompt("Enter second number:"));
        var operation = prompt("Enter operation (+, -, *, /, %):");

        var result;
        if (operation === "+") {
            result = num1 + num2;
        } else if (operation === "-") {
            result = num1 - num2;
        } else if (operation === "*") {
            result = num1 * num2;
        } else if (operation === "/") {
            result = num1 / num2;
        } else if (operation === "%") {
            result = num1 % num2;
        } else {
            result = "Invalid operator";
        }

        alert("Result: " + result);
 

// task two



        // 1. Check character type (number, uppercase, lowercase)
        var char = prompt("Enter a single character:");
        var charCode = char.charCodeAt(0);

        if (charCode >= 48 && charCode <= 57) {
            alert("It is a number.");
        } else if (charCode >= 65 && charCode <= 90) {
            alert("It is an uppercase letter.");
        } else if (charCode >= 97 && charCode <= 122) {
            alert("It is a lowercase letter.");
        } else {
            alert("It is a special character or unknown.");
        }

        // 2. display the larger 
        var num1 = parseInt(prompt("Enter first integer:"));
        var num2 = parseInt(prompt("Enter second integer:"));

        if (num1 > num2) {
            alert("The larger number is: " + num1);
        } else if (num2 > num1) {
            alert("The larger number is: " + num2);
        } else {
            alert("Both numbers are equal.");
        }

        // 3. Check number is positive, negative, or zero
        var number = parseFloat(prompt("Enter a number:"));
        if (number > 0) {
            alert("The number is positive.");
        } else if (number < 0) {
            alert("The number is negative.");
        } else {
            alert("The number is zero.");
        }

        // 4. Check if character is a vowel
        var ch = prompt("Enter a single character to check if it's a vowel:");
        if (ch.length === 1) {
            if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" ||
                ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U") {
                alert("True: It is a vowel.");
            } else {
                alert("False: It is not a vowel.");
            }
        } else {
            alert("Please enter only one character.");
        }

        // 5. Password validation
        var correctPassword = "pass123";
        var userPassword = prompt("Enter your password:");

        if (userPassword === "") {
            alert("Please enter your password");
        } else if (userPassword === correctPassword) {
            alert("Correct! ");
        } else {
            alert("Incorrect password");
        }

        // 6.  if/else statement
        var greeting;
        var hour = 13;
        if (hour < 18) {
            greeting = "Good day";
        } else {
            greeting = "Good evening";
        }
        alert(greeting);

        // 7. Time-based greeting message 
        var time = parseInt(prompt("Enter time in 24-hour format (e.g. 1900):"));

        if (time >= 0 && time < 1200) {
            alert("Good morning!");
        } else if (time >= 1200 && time < 1700) {
            alert("Good afternoon!");
        } else if (time >= 1700 && time < 2100) {
            alert("Good evening!");
        } else if (time >= 2100 && time <= 2359) {
            alert("Good night!");
        } else {
            alert("Invalid time entered.");
        }
    
