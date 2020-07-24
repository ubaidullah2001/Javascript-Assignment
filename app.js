// **************************** Chapter 1 ****************************************** //
// // Task 1
// alert ('Greetings!');

// // Task 2
// alert('Error! Please Enter a valid password.');

// // Task 3
// alert('Welcome to JS land... \r\nHappy Coding');

// // Task 4
// alert('Welcome to JS land... ');

// var check = document.createElement('input');
// check.type = 'checkbox';
// checkbox.id = "id";
// var lable = document.createElement('label');
// lable.htmlFor = 'id';
// lable.appendChild(document.createTextNode('Prevent this page from creating additional dialogs.'))
// var myDiv = document.getElementById('myDiv');
// myDiv.appendChild(check);
// myDiv.appendChild(lable);
// confirm(myDiv) 

// // Task 5
// alert('Hello........I can run Javascript through my web browsers console');

// Task 6 and 7 in index.html





// ******************************** Chapter 2 ***********************//
// // Task 1
// var username = 'Username';

// // Task 2
// var myName = "Obaid Nadeem";

// // Task 3
// var message = 'Hello world';
// alert(message);

// // Task 4
// var students_name = "Obaid";
// alert(students_name);

// var students_age = "18 years old";
// alert(students_age);

// var course = "Web and Hybrid application development";
// alert(course);

// // Task 5
// var pizza = 'pizza';
// var str = ""
// for(var i = 0; pizza.length > 0; i++){
//     str += pizza;
//     str += "\n";
//     pizza = pizza.slice(0,-1);
// }
// alert(str);

// // Task 6
// var email = "obaidnadeem4@gmail.com";
// console.log("My email address is"+ " " + email);

// // Task 7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book" + " " + book);

// // Task 8
// document.write("Yah! I can write HTML content through JavaScript");

// // Task 9
// var pattern = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"; 
// alert(pattern);


// *********************************** Chapter 3 ****************************//

// // Task 1
// var age = 18
// alert("I am " + age + " years old")

// Task 2 krna hai


// // Task 3
// var birth_year = 2001;
// document.write("My birth year is" + " " + birth_year);
// var type = typeof(birth_year);
// document.write("\n Data type of my decleared variable is "+ type);

// //Task 4
// var name = window.prompt("Enter Your Name:");
// var product = window.prompt("Enter The Product You Want to Buy:");
// var quantity = window.prompt("Enter How Many Quantities:");
// document.write(name + " " + "ordered " + quantity + " " +  product + " "+ "on XYZ Clothing store");


// **************************************** Chapter 4 *****************************//

// Task 1
// var var1="value1",var2 = "value2", var3="value3";

// // Task 2
// // **Legal variables **
// var var1 = value;
// var var_1 = value;
// var variableOne = value;
// var variable-one = value;
// var variable = value;

// // **Illeagal variables **
// var 1var = value;
// var vari 1 = value;
// var var = value
// var variable#$$%% = value;
// var print = value;

// // Task 3
// document.write("<h1>Rules for naming JS variables</h1><br>")

// document.write(" Variable names can only contain letter , $ , _  and number<br>")

// document.write(" Variables must begin with a _ , $ , name <br>")

// document.write("Variable names are case sensitive <br>")

// document.write("Variable names should not be JS keywords False <br>")



// **************************************** Chapter 5 *************************//

// // Task 1

// var num1 = prompt("Enter first no:");
// var num2 = prompt("Enter second no:");
// var sum = num1 + num2;
// document.write("The sum of " + n1 + " and " + n2 + " is " + sum);

// // Task 2

// Subtraction
// var num1 = prompt("Enter first no:");
// var num2 = prompt("Enter second no:");
// var sub = num1 - num2;
// document.write("The subraction of " + n1 + " and " + n2 + " is " + sub);

// Multiply
// var num1 = prompt("Enter first no:");
// var num2 = prompt("Enter second no:");
// var mul = num1 * num2;
// document.write("The product of " + n1 + " and " + n2 + " is " + mul);

// Division
// var num1 = prompt("Enter first no:");
// var num2 = prompt("Enter second no:");
// var div = num1 + num2;
// document.write("The division of " + n1 + " and " + n2 + " is " + div);

// Modulus
// var num1 = prompt("Enter first no:");
// var num2 = prompt("Enter second no:");
// var mod = num1 + num2;
// document.write("The modulus of " + n1 + " and " + n2 + " is " + mod);


// // Task 3
// var variable;
// document.write("<br><br>Value after variable declaration is " + variable);
// variable = 5;
// document.write("<br>Initial value is ", variable++);
// document.write("<br>Value after increment is " + variable);
// document.write("<br>Value after addition is " + (variable+7));
// document.write("<br>Value after decrement is " + --variable);
// document.write("<br>The remainder is " + variable%3)


// // Task 4

// var cost_of_movie_ticket = 600;
// var no_of_tickets = 5;
// document.write("<br><br>Total cost to buy " + no_of_tickets + " tickets to a movie is " + cost_of_movie_ticket + "PKR")


// // Task 5
// var no = prompt("Enter a number:");
// for(var i = 1 ; i<11; i++){
//     document.write("<br>" + no + "   x    " + i + "    =    " + "    " + (no*i))
// }


// ************************************* Chapter 6-9 **************************** //

// // Task 1
// var a = prompt("Enter value of a:");
// document.write("<br><br>Result:");
// document.write("<br>The value of a is: ",a);
// document.write("<br><br>............................");
// document.write("<br><br>The value of ++a is: ",++a);
// document.write("<br>The value of a is: ",a);
// document.write("<br><br>The value of a++ is:",a++);
// document.write("<br>The value of a is:",a);
// document.write("<br><br>The value of --a is: ",--a);
// document.write("<br>The value of a is: ",a);
// document.write("<br><br>The value of a-- is: ",a--);
// document.write("<br>The value of a is: ",a);

// // Task 2
// var a = 2, b = 1;
// document.write("<br><br>a is ",a);
// document.write("<br>b is ",b);
// var result = --a - --b + ++b + b--;
// // --a = 1
// // --a - --b = 1
// // --a - --b + ++b = 2
// // --a - --b + ++b + b-- = 3
// document.write("<br>Result is ",result);


// // Task 3

// var name = prompt("Enter your name: ");
// alert("Hello " + name + " Welcome to our site!!!")


// // Task 4

// var no = prompt("Enter a number:");
// if(no === ""){
//     no = 5
// }
// for(var i = 1 ; i<11; i++){
//     document.write("<br>" + no + "   x    " + i + "    =    " + "    " + (no*i))
// }


// // Task 5
////// Table in HTML file //////
// var subs = document.getElementsByClassName("sub");
//     var total_m = document.getElementsByClassName("total");
//     var obtained_m = document.getElementsByClassName("obtained");
//     var percentage = document.getElementsByClassName("percentage")

//     var total_total = document.getElementById("total_total");
//     var total_obtained = document.getElementById("total_obtained");
//     var avg_percent = document.getElementById("avg_percent");

//     var total_list = [];
//     var obtained_list = [];
//     var percent_list = [];

//     for(i = 0; i < subs.length; i++){

//         var subject = prompt("Enter subject name:");
//         subs[i].innerHTML = subject;

//         var total_n = parseInt(prompt("Enter total marks"));
//         total_m[i].innerHTML = total_n;
//         total_list.push(total_n);

//         var obtained_n = parseInt(prompt("Enter Obtained marks"));
//         obtained_m[i].innerHTML = obtained_n;
//         obtained_list.push(obtained_n)

//         var percent = parseFloat((obtained_n/total_n)*100);
//         percentage[i].innerHTML = percent;
//         percent_list.push(percent);
        
//     }
//     // Sum of total, obtained and percentage
//     var sum_total = total_list.reduce(function(a, b){
//         return a + b;
//     }, 0);
//     total_total.innerHTML = sum_total;

//     var sum_obtained = obtained_list.reduce(function(a,b){
//         return a+b;
//     },0);
//     total_obtained.innerHTML = sum_obtained;

//     var sum_percent = percent_list.reduce(function(a,b){
//         return a + b;
//     },0);
//     avg_percent.innerHTML = (sum_percent/(percent_list.length));



// ******************************** Chapter 9-11 ******************************** //

// // Task 1
// var city = prompt("Enter your city name").toUpperCase();
// if(city == "KARACHI"){
//     alert("Welcome to the city of lights")
// }

// // Task 2
// var gender = prompt("Enter your gender").toUpperCase();
// if(gender === 'MALE'){
//     alert('Good Morning Sir');
// }else if(gender === 'FEMALE'){
//     alert("Good Morning Ma'am")
// }

// // Task 3
// var color = prompt("Enter color of traffic signal").toUpperCase();
// if(color === "RED"){
//     alert("Must Stop")
// }else if(color === "YELLOW"){
//     alert("Ready To Move")
// }else if(color === "GREEN"){
//     alert("Move Now")
// }

// // Task 4
// var fuel = prompt("Enter fuel in litre");
// if(fuel <= 0.25){
//     alert("Please refill the fuel in your car");
// }

// // Task 5
// a
// var a = 4;
// if (++a === 5){ 
//     alert("given condition for variable a is true");
// } 

// // b
// var b = 82;
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); 
// }

// // c
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }if(c === 14){
//     alert("condition 4 is true");
// }

// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
// }

// // e
// if (true){ 
//     alert("True"); 
// } 
// if (false){ 
//     alert("False"); 
// }

// // f
// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
// }


// // Task 6
// var sub1 = prompt("Enter marks of sub1");
// var total1 = prompt("Enter total marks of sub1");

// var sub2 = prompt('Enter marks of sub2');
// var total2 = prompt("Enter total marks of sub2");

// var sub3 = prompt("Enter marks of sub3");
// var total3 = prompt("Enter total marks of sub3");

// var obt = parseInt(sub1) + parseInt(sub2) + parseInt(sub3);
// var total = parseInt(total1) + parseInt(total2) + parseInt(total3);

// var percentage = (obt/total) * 100;

// document.write("<h1>Mark Sheet</h1><br><br><br>");
// document.write("Obtained Marks = ",obt);
// document.write("<br>Total Marks = ",total);
// document.write("<br>Percentage = ", percentage);

// if (percentage >= 80){
//     document.write("<br>Grade = A one");
//     document.write("<br>Remarks = Excellent")
// }else if(percentage >= 70){
//     document.write("<br>Grade = A");
//     document.write("<br>Remarks = Good")
// }else if(percentage >= 60){
//     document.write("<br>Grade = B");
//     document.write("<br>Remarks = You Need To Improve")
// }else if(percentage < 60){
//     document.write("<br>Grade = Fail");
//     document.write("<br>Remarks = Sorry")
// }

// // Task 7
// var sec_number = 5;
// var user_input_number = prompt("Enter number");
// if (user_input_number === sec_number){
//     alert("Bingo! Correct answer");
// }else if (user_input_number === (sec_number+1)){
//     alert("Close enough to the correct answer")
// }

// // Task 8
// var number = prompt("Enter a number");
// if (number%3 === 0){
//     alert("This number is divisible by 3")
// }

// // Task 9
// var number = prompt("Enter a number");
// if (number%2 === 0){
//     alert('Even')
// }else if(number%2 !== 0){
//     alert('Odd')
// }

// // Task 10
// var temp = prompt("Enter temperature");
// if(temp > 40){
//     alert('It is too hot outside.')
// }else if(temp > 30){
//     alert('The Weather today is Normal.')
// }else if(temp > 20){
//     alert("Today's weather is cool.")
// }else if(temp > 10){
//     alert("OMG! Today’s weather is so Cool.")
// }

// // Task 11
// var fno = parseInt(prompt("Enter first no"));
// var lno = parseInt(prompt("Enter  second number"));
// var operator = prompt("Enter operator");
// if(operator === "+"){
//     alert('The sum is ' + (fno + lno));
// }else if(operator === "-"){
//     alert('The sum is ' + (fno - lno));
// }else if(operator === "*"){
//     alert('The sum is ' + (fno * lno));
// }else if(operator === "/"){
//     alert('The sum is ' + (fno/lno));
// }else if(operator === "%"){
//     alert('The sum is ' + (fno%lno));
// }





// ************************************** Chapter 12-13 ******************************//

// // Task 1
// var letter = prompt("Enter a letter");
// if("abcdefghijklmnopqrstuvwxyz".indexOf(letter) > -1){
//     alert("This is lowercase")
// }else if("ABCDEFGHIJKLMNOPQURSTUVWXYZ".indexOf(letter) > -1){
//     alert("This is uppercase")
// }



// // Task 2
// var no1 = parseInt(prompt("Enter 1st number"));
// var no2 = parseInt(prompt("Enter 2nd number"));
// if(no1> no2){
//     alert("1st number is greater");
// }else if(no2 > no1){
//     alert("2nd number is greater");
// }else if(no1 === no2){
//     alert("Both numbers are same");
// }

// // Task 3
// var number = prompt("Enter a number");
// if (number > 0){
//     alert("number is positive")
// }else if(number < 0){
//     alert("number is negative")
// }else if(number === 0){
//     alert("number is equal to zero")
// }

// // Task 4
// var str = prompt("Enter a letter").toLowerCase();
// if("aeiou".indexOf(str)> -1){
//     alert("True")
// }else{
//     alert("False")
// }

// // Task 5
// var pas = "12345";
// var pas1 = prompt("Enter pasword 1");
// if (pas1 === pas){
//     alert("Correct! The password you entered matches the original password")
// }else{
//     alert("Incorrect Pasword")
// }

// // Task 6
// var greeting;
// var hour = 13;
// if(hour < 18){ 
//     greeting = "Good day";
// }
// else{
//      greeting = "Good evening";
// }

// // Task 7
// var time = parseInt(prompt("Enter time in 24hr format"));
// if(time >= 0000 && time < 1200){
//     alert("Good Morning")
// }else if(time >= 1200 && time < 1700){
//     alert("Good Afternoon")
// }else if(time >= 1700 && time < 2100){
//     alert("Good Evening")
// }else if(time >= 2100 && time < 2359){
//     alert("Good Night")
// }





// *********************************** Chapter 14-16 ****************************** //

// // Task 1
// var students_list = new Array();

// // Task 2
// var students_list = new Array();

// // Task 3
// var string_array = ['a' , 'b' , 'c'];

// // Task 4
// var number_array = [1,2,3];

// / Task 5
// var bolean_array = [ true, false, false, true];

// // Task 6
// var mixed_array = ['a', 1, 1.1, true];

// // Task 7
// var degree = ['SSC', 'HSC', 'BSC', 'BS', 'BCOM', 'MS', 'M.Phill', 'Ph.D'];
// for(i = 0; i< degree.length; i++){
    // document.write("<br>",i+1,") ",degree[i]);
// }

// // Task 8
// var name_array = ["Muhammad Obaid", "Shayan", "Ezan"];
// var score_array = [400,350,450];
// var percent_array = [(400/500)*100, (350/500)*100, (450/500)*100];
// for(i = 0; i < name_array.length; i++){
//     document.write("<br><br>Score of ",name_array[i], " is ", score_array[i] , ". Percentage is: ", percent_array[i]);
// }

// // Task 9
// var color = ['red', 'green', 'blue'];
// document.write("<br>The array before addition");
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i])
// }

// var color_first = prompt("Enter color to put in begining");
// document.write("<br>The array after adding color in beginning");
// color.unshift(color_first);
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i])
// }

// var color_last = prompt("Enter color to put in begining");
// color.push(color_first);
// document.write("<br>The array after adding color in end");
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i]);
// }

// document.write("<br>The array after adding more colors");
// color.unshift("black", 'white', 'pink');
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i]);
// }


// document.write("<br>The array after deleting first color");
// color.splice(0,1)
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i]);
// }




// // Task 10
// var marks = [200,400,100,300];
// document.write("<br>Score of students: ")
// for(i = 0; i < marks.length; i++){
//     document.write(marks[i] + "  ")
// }

// marks.sort();

// document.write("<br>Ordered Scores of Students: ");
// for(i = 0; i < marks.length; i++){
//     document.write(marks[i] + "  ")
// }

// // Task 11
// var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
// document.write("<br>List of cities: ")
// for(i = 0; i < cities.length; i++){
//     document.write(cities[i] + " ");
// }

// document.write("<br>Selected cities: " ,cities.slice(2,4))

// // Task 12
// var list = ['This',"is",'my','cat'];
// document.write("<br>Array<br>",list);
// document.write("<br>String<br>",list.join(" "));

// // Task 13
// var devices = [];
// devices.unshift('keyboard');
// devices.unshift('mouse');
// devices.unshift('monitor');
// devices.unshift('printer');

// document.write("<br>Devices");
// document.write("<br>",devices);

// for(i = 0 ; i < devices.length; i++){
//     document.write("<br>Out:<br>",devices[i]);
// }

// // Task 14
// var devices = [];
// devices.push('keyboard');
// devices.push('mouse');
// devices.push('monitor');
// devices.push('printer');

// document.write("<br>Devices");
// document.write("<br>",devices);

// for(i = 0 ; i < devices.length; i++){
//     document.write("<br>Out:<br>",devices[i]);
// }

// // Task 15
// solution at index.html page


// ********************************* Chapter 17-20 ***************************** //
// // Task 1
// var array_0f_array = [[] , [] , [] , []];

// // Task 2
// var array = [[0,1,2,3] , [1,0,1,2] , [2,1,0,1]];
// document.write("<br>")
// for(i = 0; i < array.length; i++){
//     for(j = 0; j < array[i].length; j++){
//         document.write(array[i][j]," ");
//     }
//     document.write("<br>")
// }

// // Task 3
// for(i = 0; i<11; i++){
//     document.write("<br>",i, "<br>");
// }

// // Task 4
// var number = parseInt(prompt("Enter number for multiplicaiton"));
// var length = parseInt(prompt("Enter length of multiplicaiton table"));

// for(i = 1; i< (length+1);i++){
//     document.write("<br>" + number + "   x    " + i + "    =    " + "    " + (number*i))
// }

// // Task 5
// var fruits = ['apple' , 'banana' , 'mango' , 'orange' , 'strawerry'];
// for(i = 0; i < fruits.length ; i++){
    // document.write(fruits[i], "<br>")
// }
// for(i = 0; i < fruits.length ; i++){
    // document.write("Element at index ", i , " is " , fruits[i] , "<br>");
// }

// // Task 6
// document.write("Counting<br>");
// for(i = 1; i < 16; i++){
//     document.write(i," ")
// }

// document.write("<br>Reverse Counting<br>");
// for(i = 10; i > 0; i--){
//     document.write(i," ");
// }

// document.write("<br>Even<br>");
// for(i = 0; i < 21; i++){
//     if(i%2 === 0){
//         document.write(i," ")
//     }
// }

// document.write("<br>Odd<br>");
// for(i = 0; i < 21; i++){
//     if(i%2 !== 0){
//         document.write(i," ")
//     }
// }

// document.write("<br>Series<br>");
// for(i = 0; i < 11; i++){
//     document.write(2*i,"K ")
// }

// // Task 7
// var items = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties'];
// var order = prompt("Welcome to pre to pro bakery! What do you want to order");
// if(items.indexOf(order) > -1){
//     document.write("<br><br>",order," is available at index", items.indexOf(order), " in our bakery")
// }else{
//     document.write("<br><br>We are sorry ", order, " is not available in our bakery")
// }

// // Task 8
// var num = [24, 53, 78, 91, 12];
// document.write("<br>Array items: ", num);
// num.sort();
// document.write("<br>Largest number: ", num[num.length - 1]);

// // Task 9
// var num = [24, 53, 78, 91, 12];
// document.write("<br>Array items: ", num);
// num.sort();
// document.write("<br>Smallest number: ", num[0]);

// // Task 10
// document.write("<br>")
// for(i = 0; i < 101; i++){
//     if(i%5 === 0){
//         document.write(i,", ")
//     }
// }





// // *********************** Chapter 21 - 25 **********************


// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert("Greetings " + fullName);

// var model = prompt("Enter your fav mobile model")
// var length = model.length;
// document.write("My fav phone is: " + model + ". Length of string is: " + length);

// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("<br><br> String: " + word + "<br> Index of 'n': " + index);

// var word2 = "Hello World";
// var index = word2.lastIndexOf("l");
// document.write("<br><br> String: " + word2 + "<br> Index of 'l': " + index);


// var word3 = "Pakistani";
// var char = word3.charAt(3);
// document.write("<br><br> String: " + word3 + "<br> Character at index 3: " + char);


// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" ", lastName);
// alert("Hello! " + fullName);


// var city = "Hyderabad";
// var city2 = city.replace("Hyder", "Islam");
// document.write("<br><br> City: " + city + "<br> After replacement: " + city2)

// var message = "Ezan and Hassan are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// document.write("<br><br> " + newMessage);


// var str = "472";
// document.write("<br><br>Value: " + str + "<br>Type: " + typeof (str));
// var num = parseInt(str);
// document.write("<br><br>Value: " + num + "<br>Type: " + typeof (num));



// var input = prompt("Enter any word to change in uppercase");
// var changed = input.toUpperCase();
// document.write("<br><br>User input: " + input + "<br>Upper case: " + changed);


// var input = prompt("Enter any word to change in titlecase");
// var firstWord = input.charAt(0).toUpperCase();
// var remaining = input.slice(1);
// var titleCase = firstWord.concat(remaining);
// document.write("<br><br>User input: " + input + "<br>Title case: " + titleCase);


// var num = 35.36;
// var numInString = num.toString();
// var removed = numInString.replace(".", "");
// document.write("<br><br>Number: " + num + "<br>Result: " + removed);


// var userName = prompt("Enter Username");
// var flag = false;
// for (var i = 0; i < userName.length; i++) {
//     if (userName.charCodeAt(i) == 33 || userName.charCodeAt(i) == 44 || userName.charCodeAt(i) == 46 || userName.charCodeAt(i) == 64) {
//         alert("Please enter a valid username");
//         flag = true;
//     }
// }
// if (!flag) {
//     alert("Entered username is valid")
// }



// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userOrder = prompt("Welcome to ABC bakery! Which item you want to purchase?");
// var check = false;
// for (var i = 0; i < A.length; i++) {
//     if (userOrder.toLowerCase() == A[i]) {
//         alert(userOrder + " is available at index " + i + "in our bakery");
//         check = true;
//         break;

//     }
// }
// if (!check) {
//     alert("Item not found");
// }




// var password = prompt("Enter your password");
// var num = false; var alph = false;
// document.write("<br><br>Entered password: " + password);


// if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//     document.write("<br>Password cannot begin with a number");
//     document.write("<br>Plz enter a valid password")
// }
// else if (password.length < 6) {
//     document.write("<br>Password length cannot be less than 6");
//     document.write("<br>Plz enter a valid password");

// }
// else {
//     for (var i = 1; i < password.length; i++) {
//         if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
//             num = true;
//             break;
//         }
//     }
//     for (var i = 1; i < password.length; i++) {
//         if ((password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)) {

//             alph = true;
//             break;
//         }
//     }
//     if (num && alph) {
//         document.write("<br>Valid Password");

//     }
//     else {
//         document.write("<br>Invalid Password");
//     }
// }



// document.write("<br><br>");
// var university = "University of Karachi";
// var split = university.split(" ");
// for (var i = 0; i < split.length; i++) {
//     document.write(split[i] + "<br>");

// }


// var userInput = prompt("Enter any word to display it's last character");
// var lastChar = userInput.slice(userInput.length - 1);
// document.write("<br><br>user input: " + userInput + "<br>Lasr character of input: " + lastChar);


// var sentence = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// for (var j = 0; j < sentence.length; j++) {
//     if (sentence.slice(j, j + 3).toLowerCase() === "the")
//         count++;
// }
// document.write("<br><br>Text: " + sentence + "<br>There are " + count + " occurrence(s) of word 'the'");




// // *********************** Chapter 26 - 30 **********************


// var input = +prompt("Enter any positive integer");
// document.write("number:" + input);
// document.write("<br>round off value: " + Math.round(input));
// document.write("<br>floor value: " + Math.floor(input));
// document.write("<br>ceil value: " + Math.ceil(input));

// var input2 = +prompt("Enter any negative integer");
// document.write("<br><br>number:" + input2);
// document.write("<br>round off value: " + Math.round(input2));
// document.write("<br>floor value: " + Math.floor(input2));
// document.write("<br>ceil value: " + Math.ceil(input2));

// var abs = +prompt("Enter number to find absolute");
// document.write("<br><br>The absolute value of " + abs + " is " + Math.abs(abs));

// var dice = Math.random();
// var numbr = (dice * 6) + 1;
// var round = Math.floor(numbr);
// document.write("<br><br> Random number" + round);

// var coin = Math.random();
// var coinNum = (coin * 2) + 1;
// var roundCoin = Math.floor(coinNum);
// if (roundCoin == 1)
//     document.write("<br><br> " + roundCoin + " <br>Random coin value:Heads");
// else
//     document.write("<br><br> " + roundCoin + " <br>Random coin value:Tails");


// var num = Math.random();
// var hund = (num * 100) + 1;
// var round = Math.floor(hund);
// document.write("<br><br> Random number between 1 and 100:" + round);

// var weight = prompt("Enter your weight");
// var convert = parseFloat(weight);
// document.write("<br>Your Weight is " + convert + " kilograms");


// var secret = Math.random();
// var numbr = (secret * 10) + 1;
// var round = Math.floor(numbr);
// var userInput = +prompt("Enter number");
// if (round == userInput) {
//     document.write("<br><br>Congratulations! you enter correct number");

// }
// else {
//     document.write("<br><br>Please try again");
// }



// //  ***************************** Chapter 31 - 34 ***************************


// var current = new Date();
// document.write(current);


// var months = ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"];
// var currentMonth = current.getMonth();
// document.write("<br><br>Current Month: " + months[currentMonth]);


// var days = ["Sun", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = current.getDay();
// document.write("<br><br>Today is " + days[currentDay]);


// if (currentDay == 0 || currentDay == 6)
//     document.write("<br><br>Today is fun day");
// else
//     document.write("<br><br>Today is working day");
// }


// if (current.getDate() <= 15) {
//     document.write("<br><br>First fifteen days oif the month");
// }
// else {
//     document.write("<br><br>Last days of the month");
// }



// document.write("<br><br>Current Date: " + current);
// document.write("<br>Elapsed milliseconds since January 1, 1970: " + current.getTime());
// document.write("<br>Elapsed minutes since January 1, 1970: " + (current.getTime() / (1000 * 60 * 60)));




// if (current.getHours < 12) {
//     document.write("<br><br>It's AM");
// }
// else
//     document.write("<br><br>It's PM");



// var later = new Date(2020, 11, 31);
// document.write("<br><br>Later date: " + later);

// var ramadan = new Date(2015, 5, 18);
// var totalMill = current.getTime() - ramadan.getTime();
// document.write("<br><br>" + (totalMill / (1000 * 60 * 60 * 24)));


// var start = new Date(2015, 0, 1);
// var refDate = new Date(2015, 11, 5, 22, 16, 54);
// document.write("<br><br>On reference date:" + refDate + " " + (refDate.getTime() - start.getTime()) + "seconds have passed since beginning of 2015");


// var current = new Date();
// var ahead = new Date();
// ahead.setHours(current.getHours() - 1);
// document.write("<br><br>current date: " + current + " 1 hour ago, it was " + ahead);


// var back = new Date();
// back.setFullYear(current.getFullYear() - 100);
// alert("current date: " + current + " 100 years back, it was " + back);


// var age = +prompt("Enter your age");
// var birth = new Date();
// birth.setFullYear(birth.getFullYear() - age);
// document.write("<br><br>Your age is " + age + "<br>Your birth year is " + birth.getFullYear());


// var customer = prompt("Enter customer name");
// var month = new Date();
// var units = +prompt("Enter number of units");
// var charges = +prompt("Enter charges per unit");
// var surcharge = +prompt("Enter late payment surcharge")


// document.write("<br><br><h1>K-Electric Bill</h1><br><br>Customer Name: <b>" + customer + "Customer</b><br>Month: <b>" + months[month.getMonth()] + "</b><br>Number of units: <b>" + units + "</b><br>Charges per unit: <b>" + charges + "</b><br><br>");
// var amount = netAmount(units, charges);
// var gross = grossAmount(amount, surcharge);
// document.write("<br><br>Net Amount Payabe (within Due Date): <b>" + amount + "</b><br>Late payment surcharge: <b>" + surcharge + "</b><br>Gross Amount Payable(after Due Date): <b>" + gross + "</b>");
// function netAmount(units, charges) {
//     var payable = units * charges;
//     return payable;

// }
// function grossAmount(netAmount, surcharge) {
//     var gross = netAmount * surcharge;
//     return gross;
// }



// // ************************** Chapter 35 - 38 ****************************

// function currentDate() {
//     var func = new Date();
//     document.write("<br><br>" + func);
// }
// currentDate();


// function greet() {
//     var first = prompt("Enter First name");
//     var last = prompt("Enter Last name");
//     alert("Hello " + first + " " + last);
// }
// greet();


// var first = +prompt("Enter first number to add");
// var second = +prompt("Enter second number to add");
// var result = add(first, second);
// alert(result);
// function add(first, second) {
//     return first + second;
// }


// var num1 = 7;
// var num2 = 4;
// var operator = "-";
// var ans = calc(num1, num2, operator);
// document.write("<br><br>" + ans);

// function calc(num1, num2, operator) {
//     if (operator == "+") {
//         return num1 + num2;
//     }
//     else if (operator == "-") {
//         return num1 - num2;
//     }
//     else if (operator == "/") {
//         return num1 / num2;
//     }
//     else
//         return "Illegal operator"
// }



// var sq = 4;
// var sqRes = square(sq);
// document.write("<br><br>Square of " + sq + "is " + sqRes);

// function square(sq) {
//     return sq * sq;
// }


// var fact = 5;
// var result = factorial(5);
// document.write("<br><br>Factorial of " + fact + "is " + result);

// function factorial(fact) {
//     var res = 1;
//     for (var i = 1; i <= fact; i++) {
//         res *= i;
//     }
//     return res;
// }


// var start = 1;
// var end = 12;
// counting(start, end);
// document.write("<br><br>");
// function counting(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + ",");
//     }
// }


// var base = +prompt("Enter base value");
// var perp = +prompt("Enter perpendicular value");
// calculateHypotenuse(base, perp);


// function calculateHypotenuse(base, perp) {
//     var b = calculateSquare(base);
//     var p = calculateSquare(perp);
//     var h = b + p;
//     document.write("<br><br>hypotenuse<sup>2</sup>: " + h);
// }
// function calculateSquare(abc) {
//     return abc * abc;
// }



// area(3, 5);
// var a = 3;
// var b = 5;
// area(a, b);

// function area(a, b) {
//     document.write("<br><br>Area of Rectangle is: " + a * b)
// }



// var palin = "madam";
// checkPalindrome(palin);
// function checkPalindrome(palin) {
//     var length = palin.length - 1;
//     var check = false;
//     for (var i = 0; i < palin.length / 2; i++) {
//         if (palin.charAt(i) == palin.charAt(length--)) {
//             check = true;
//         }
//         else
//             check = false;
//         break;

//     }
//     if (check) {
//         document.write("<br><br>It is a palindrome");
//     }
//     else
//         document.write("<br><br>Not a palindrome");

// }



// var example = "the quick brown fox";
// upperCase(example);

// function upperCase(example) {
//     var newString = example.charAt(0).toUpperCase();;

//     for (var i = 1; i < example.length; i++) {
//         if (example.charAt(i) == " ") {
//             newString += " ";
//             newString += example.charAt(i + 1).toUpperCase();
//             i++;
//         }
//         else
//             newString += example.charAt(i);
//     }
//     document.write("<br><br>" + newString);
// }



// var line = "Web Development Tutorial";
// longestWord(line);

// function longestWord(line) {
//     var lengthPre = 0;
//     var lengthNew = 0;
//     var word = "";
//     var newWord = "";
//     for (var i = 0; i < line.length; i++) {

//         if (line.charAt(i) == " ") {

//             if (lengthPre < lengthNew)
//                 lengthPre = lengthNew;
//             lengthNew = 0;
//             newWord = word;
//             word = "";
//         }
//         else if (i == --line.length) {
//             word += line.charAt(i);
//             lengthPre = lengthNew;
//             lengthNew = 0;
//             newWord = word;
//             word = "";

//         }
//         else
//             word += line.charAt(i);
//         lengthNew++;
//     }

//     document.write("<br><br>Longest word is " + newWord);
// }




// var occurence = "JSResourceS.com";
// count(occurence, 'o');

// function count(occurence, letter) {
//     var occur = 0;
//     for (var i = 0; i < occurence.length; i++) {
//         if (occurence.charAt(i).toLowerCase() == 'o') {
//             occur++;
//         }
//     }
//     document.write("<br><br>it occurs " + occur + " times")
// }



// var radius = 4;
// calcCircumference(radius);
// calcArea(radius);

// function calcCircumference(radius) {
//     document.write("<br><br>Circumference is " + (2 * 3.142 * radius));
// }


// function calcArea(radius) {
//     document.write("<br><br>Area is " + (3.142 * radius * radius));
// }


// Chap 38-42

// Question 1
// document.write("Question 1 \n")
// var a = 7;
// var b = 2;
// var value = Math.pow(a, b);
// document.write("First Test Value : " + value );

// // Question 2
// document.write("Question 2 \n")

// function checkFunction () {
//     var year = document.getElementById("year").value;

//     document.getElementById("Answer").innerHTML = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// } 

// // Question 3
// var a = 5;
// var b = 6;
// var c = 10;

// // area = S(S − a)(S − b)(S − c)
// // where, S = ( a + b + c ) / 2

// // S:
// var s = ( a + b + c) / 2;
// console.log(s);


// // area:
// var sa = s -a ;
// console.log(sa);

// var sb = s - b;
// console.log(sb);

// var sc = (s-c);
// console.log(sc);


// var area = (s * (sa)) * (sb) * (sc);
// document.write(area);


// // Question 4
// document.write("Question 4 \n")

// Urdu
// var urdu = [];
// for (i = 0; i < 3; i++) {
//     var urduMarks = window.prompt(("Enter marks out of hundred:"));
//     urdu.push(urduMarks);

// };

// var maths = [];
// for (i = 0; i < 3; i++) {
//     var mathMarks = window.prompt(("Enter marks out of hundred:"));
//     maths.push(mathMarks);

// };

// var physics = [];
// for (i = 0; i < 3; i++) {
//     var physicsMarks = window.prompt(("Enter marks out of hundred:"));
//     physics.push(physicsMarks);

// };

// function main() {


//     function average() {

//         var student1 = (parseInt(urdu[0]) + parseInt(maths[0]) + parseInt(physics[0])) / 3;
//         console.log(student1);

//         var student2 = (parseInt(urdu[1]) + parseInt(maths[1]) + parseInt(physics[1])) / 3;
//         console.log(student2);

//         var student3 = (parseInt(urdu[2]) + parseInt(maths[2]) + parseInt(physics[2])) / 3;
//         console.log(student3);

//     }

//     average();

//     function percentage() {

//         var total1 = ((parseInt(urdu[0]) + parseInt(maths[0]) + parseInt(physics[0])));
//         var student1 = (total1 / 300 ) * 100;
//         console.log(student1);


//         var total2 = ((parseInt(urdu[1]) + parseInt(maths[1]) + parseInt(physics[1])));
//         var student2 = (total2 / 300 ) * 100;
//         console.log(student1);



//         var total3 = ((parseInt(urdu[2]) + parseInt(maths[2]) + parseInt(physics[2])));
//         var student3 = (total3 / 300 ) * 100;
//         console.log(student1);




//     }

//     percentage();

// }

// main();



// Question 5

// task 3
// function indexof() {
//     var test = "string"
//     var search = "n";
//     var index;
//     for (var i = 0; i <= test.length; i++) {

//         if (test[i] === search) {
//             index = i;
//         }
//     }
//     return index;
// }
// document.write("index is " + indexof());


// Question 6

// var txt = "hassan mughal";
// function vowelEraser(txt) {
//     for (var i = 0; i < txt.length; i++) {
//         if (txt[i] == "a"  ||txt[i] == "A"  ||txt[i] == "e"  ||txt[i] == "E"  ||txt[i] == "i" || txt[i] == "I" || txt[i] == "o" || txt[i] == "O" || txt[i] == "u" || txt[i] == "U") {
//             var range = txt.slice(0, i);
//             // console.log(range);
//         }
//         else {
//             document.write(txt[i])
//         }
//     }
// }
// vowelEraser(txt);
// console.log(txt);


// Question 7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
// console.log(findOccurrences());



// Question 8

// var dis = prompt("Enter distance between two cities in KM")


// function kmTOm (dis){
//     console.log("distance in meter"+dis*1000)
// }


// function kmTOft(dis){

//     console.log("distance in ft"+dis*3280.84)

// }

// function kmTOinch(dis){

//     console.log("distance in inch"+dis*39370.1)

// }

// function kmTOcm(dis){

//     console.log(""+dis*100000)
// }


// kmTOm(dis)
// kmTOft(dis)
// kmTOinch(dis)
// kmTOcm(dis)


// Question 9

// var a = parseInt( prompt("Enter your working hours: "))
// var b = a - 40
// var c = b*12
// document.write(c)

// Question 10

// var Amount = prompt("Please Enter Amount for Withdraw :");
// document.write("No of notes of 100 is: ", Math.floor( Amount / 100 ) ,"</br>" );
// document.write("No of notes of 50 is : " , Math.floor((Amount % 100) / 50) ,"</br>" );
// document.write("No of notes of 10 is : " , Math.floor(((Amount % 100) % 50) / 10),"</br>" );
// document.write("Amount still remaining is : ", Math.floor(((Amount % 100) % 50) % 10) ,"</br>"  );


//  // Chapter 43 - 48

// Question 1 

// function showAlert(){
//     alert("Hey ?")
// }

// Question 2 

// function purchase(){
//     alert("Thanks for purchasing phone from us :)")
// }

// Question 3 
// function myFunction(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
//   }

// Question 4 

// function changeImage(){
//     var gunImage = document.getElementById('gun');
//     gunImage.src = 'https://www.dw.com/image/38735983_303.jpg';
// }

// function originalImage(){
//     var gunImage = document.getElementById('gun');
//     gunImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJn5zhTP08FMqcM4mdOLCyHpg9Bv_W72z2vg&usqp=CAU';
// }

// Question 5 
// var clicks = 0;
// function incFunction() {

//     clicks += 1;
//     document.getElementById("counter").innerHTML = clicks;
// }
// var clicks = 0;
// function decFunction() {

//     clicks -= 1;
//     document.getElementById("counter").innerHTML = clicks;
// }



// // Chapter 49 - 52


// Question 1 
// function showMessage(){
//     var input1 = document.getElementById('1').value;
//     var input2 = document.getElementById('2').value;
//     var input3 = document.getElementById('3').value;
//     var input4 = document.getElementById('4').value;
//     var output = "<h1>Your Details</h1>" + "<br>" + "First Name: " + input1 + '<br> ' + "Last Name: " + input2 + '<br> '+ "Email: " + input3 + ' <br>'+ "Password: " + input4;
//     var a = document.getElementById('print').textContent = output;
//     document.write(a)
// }

// Question 2 
// function readMore(){
//     var text = "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. Wikipedia"
//     var paragraph = document.getElementById('paragraph')
//     paragraph.innerHTML = text;
// }

// Question 3 
// function myFunction(r) {
//     var i = r.parentNode.parentNode.rowIndex;                               //Edit row ka mana krdia tha Sir ne :)
//     document.getElementById("myTable").deleteRow(i);
//   }



// // Chapter 52 - 57

// Question 1 

// var modal = document.getElementById("modal");
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("modal-img");
// function iMg(){
//     modal.style.display = "block";
//     var a = modalImg.src = img.src;
//     a.getElementsByClassName('modal-open')
    
// }
// var span = document.getElementsByClassName("close")[0];

// function onClosedImagModal(){
//     modal.style.display = "none";
//    setTimeout(()=>{ modal.style.display = "none"; }, 550)
// }

// Question 2 
// function zoomIn(){
//     var a = document.getElementById('para')
//     a.className = 'bigfont'
    
// }
// function zoomOut(){
//     var a = document.getElementById('para')
//     a.className = 'smallfont'
    
// }



// // Chapter 58 - 67

// Question 1
// var render = document.getElementsByClassName("render");

// for(var a=0; a < 5; a++){
//     console.log(render[a].innerHTML)
// }


// Question 2 

// var a = document.getElementById('form-content').nodeType;
// console.log(a)

// var x = document.getElementById('lastName').nodeType;
// var y = document.getElementById('lastName').childNodes
// var z = document.getElementById('lastName').childNodes.nodeValue = 'Updated'
// console.log(x)
// console.log(y)
// console.log(z)

// var z = document.getElementById('main-content')
// var a = z.firstChild
// var b = z.lastChild
// console.log(a)
// console.log(b)

// var n = document.getElementById('lastName');
// var a = n.nextSibling
// var b = n.previousSibling;
// // console.log(a)
// console.log(b)

// var j = document.getElementById('email');
// var a = j.nodeType
// var b = j.parentNode
// console.log(a)
// console.log(b)
