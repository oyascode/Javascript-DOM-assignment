
# **First Class Citizen**  

A first-class citizen is an object that supports all of the operations generally allowed to other objects. JavaScript functions are types of objects. A first-class function support the same operations we would expect from other objects. So what are these operations? Generally, first-class objects can:  
Be stored in a variable  
Be passed as arguments to functions  
Be returned by functions  
Be stored in some data structure  
Hold their own properties and methods.  

### Example  
// Function definition and invocation  
function greet(string) {  
  console.log(string);  
}  
greet("Hello");  

// Store in a variable  
var talk = greet;
talk("Hi");      

# Second Class Citizen  

An entity of which the value can be passed as a parameter, but that can neither be returned from a function, nor be assigned to a variable. Mostly found in C language functions.

