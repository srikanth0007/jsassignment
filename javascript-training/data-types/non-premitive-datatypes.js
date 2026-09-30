//before objects
let name = 'sreekanth';
let age = 30;
let sal = 40000;
let visaStatus = true;
let city = "Kadapa";
let state = "Andrapradesh";
let country = "India";

console.log(name, age, sal, visaStatus , city, state, country  );

// after object
//Object => Object Datatype represents a collection of key-value pairs stored together. 

let empinfo = {"empname" : 'Sreekanth', "age": 30 , "sal" : 30000, "visaStatus": true,
                "address" : {"city": "sricilla",
                            "village" : 'lingapur',
                            "house": '1-126',
                            "details":{
                                "cell": 9888889,
                                "married": true,
                                "pin": 505405  }
                             }
                }
console.log(empinfo);  
console.log(empinfo.address);
console.log(empinfo.address.house);
console.log(empinfo["address"]["village"]);
console.log(empinfo.address.details.married);

let fruit = "apple"; //normal datatype declaration
let market = {"fruite": "banana"}  //Object 
let fruits = ["apple", "mango", "orange"]; // Array
console.log(fruits);




            
