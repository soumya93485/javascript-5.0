##What is javascript and why used it?

-javascript is logic based programing language where we can ctreate our code project functionality in that.
-javascript is a high level programming language for build web pages.
-Now we used the ES6(echma script 6) version of javascript,in other words we called vanila javascript.
-runtime environment of javascript is node js.

##Variable:-
 
 -variable is container to store some data.
 -in javascript we have 3 types of variables:-
 1.let :-
    -Let is a type of variable which is used for changing the variable name later.
    -Now these days , most of the cases we used let for creating variables.
    -Let is a block scope code so we have been using let for most of the cases.
 2.var :-
    -Var is a type of variable which is also used for changing the variable later stage.
    -Var is used in oldest browser so now a days we are don't use var most of the time.
 3.const :-
    -Const is a type of variable where we can't change our data further.
    -const means constant to sote some data like numbers,intiger etc...

    task :-
    1.difference between let & var.
    2.difference between var & const.
    3.what do you mean by haisting.(when we don't declare value of variable but it execute the code)

    ##Rules of Variable :-
    -Variable name are case sensative "a" & "A" is different.
    -Only letter,digit,underscore & $ is allowed.(not even space).
    -reserver words cannot be variable names.

    ##Data types in javascript :-

    -data type is an attribute associated with a piece of data that tells a computer system how to interpret it's value.
    -in data types we used "typeof" operator to know the what type of data it is.
    -mainly in javascript thire are 2 types of data type.

    1.primitive :-
      -in javascript there are 7 type primitive data types.
      1.Number :-number are the type of data type those it contain some numerical value.
      2.string :-string is a type of data type that can hold some character like names...
      3.boolean :-in boolean data type get Boolean value like true or false.
      4.undefined :-in undefined data type the data is not define so that  it wioll show undefined.
      5.null :-in this data type we get null for the value means nothing.
      6.bigint :- in bigint we will get big integer.
      7.symbol :- in symbol we will get whole symbol as well as the value we gwt for the data type.

    2.non-primitive or reference :-
      -non primitive data types are the type of data type that can hold multiple items in a single time
      -non-primitive data types are - object , arry , function

      object :-
         -object is a non-primitive data types which can hold multiple of item in one single entity.
         -mainly objects are working on (key:value)pair.
         -the left hand side is our keys and right hand side are the values of the following object.

         ex-
            soumya={
               college: "GIET",
               address: "BBSR",
               age: 22,
               salary: 4500,
               carrier: "Good"
            }

##operator in js :-

-operator are the key features to do some task or operate some task.
-ex. A + B
-in the above example A & B are operands , '+' is the operators to addition.
1. Arithmetic Operators:-
(+,-,*,/)
modulus -> %
Exponetiation -> **

2.unary operators:-
increment -> ++
decrement -> --

3.assignment operator:-
(=, +=, -=, *=, %=, **=)

4.Comparison operator :- (compair thge values)
* its give the result true or false.
equal to -> ==
not equal to -> !=
equal to & type -> ===
not equal to & type -> !==
(>, >=, <, <=)

5. Logical operator :- checks the logic of the operator(true/false)
Logical AND &&
table of AND operator is :-
cond 1 , cond 2, res (&&)
T + T = T
T + F = F
F + T = F
F + F = F

Logical OR ||
table of OR operator is :-
cond 1 , cond 2, res (||)
T + T = T
T + F = T
F + T = T
F + F = F

Logical NOT !

conditional statement :-

-to implement some condition in the code
-there are 3 types of conditional statements are there
1.if condition -
-if condition is true then statement is true otherwise false. syntax :- if(condition){ statement }
2.if-else condition
-if condition is true then block executed otherwise its terminate to else condition. syntax :- if(condition){ statement } else{ statement }
3.else-if condition
-its check the condition multiple times where condition is true. syntax :- if(condition){ statement } else if(condition) { statement } else if(condition) { statement } else { statement }

##Loops :-

- loops are used to execute a piece of code again and again.

1. For Loop :-
syntax - for(initialization, condition, updation)
{
   statement
} 

ex-
for(let i=1;i<=5; i++)
{
   console.log("web bocket")
}

2. while loop :-
syntax -
while (condition)
{
   statement
   updation
}

3. Do-while :-
syntax-
do{
   statement
   updation
}while (condition);

4. For-of loop :- it iterate on string and array

5. for-in loop - it iterate over objects(key-value pair)
syntax-
for(let key in objvar)
{
   statement
}

* home work *
1. print all even number from 0 to 100
2. create a game you start with any random game number. ask the user to keep gussing the game number untill the user enters correct value.




 
