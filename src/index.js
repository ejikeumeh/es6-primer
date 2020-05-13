import fetch from 'node-fetch';
import logger, {User, Person, CustomMath, appName, dummyFunction, genericFunction, multiplier1, addresses,coordinateGenerator} from './tools'



const promiseAwareTimeout = (milliseconds=1000) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`Timeout of ${milliseconds} milliseconds is over`); 
        }, milliseconds) 
    });
   }
  
   const usePromiseAwareTimeout = async (milliseconds) => {
       log('About to call timeout')
       try{
        log(await promiseAwareTimeout(milliseconds));
       }catch(error){
        log(error);
       }
   };
  
   usePromiseAwareTimeout(3000); 


/*let fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json())  
let fetch2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(response => response.json())
let fetch3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json()) 
let fetch4 = fetch('https://jsonplaceholder.typicode.com/users/4').then(response => response.json()) 
let fetch5 = fetch('https://jsonplaceholder.typicode.com/users/5').then(response => response.json()) 
Promise.all([fetch1,fetch2,fetch3,fetch4,fetch5])//get the data for the three calls in an array.
.then((data)=>{
 logger(`User1 = ${data[0].name}; User2 = ${data[1].name}; User3 = ${data[2].name}; User4 =${data[3].name}; User5 = ${data[4].name}`);//display data from array
}) */


/*new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Timeout is over")
        },1000)
    }).then((data)=>{
        logger(`${data}`)
    }).catch((error)=>{
        logger(`${error}`)
    }).then(()=>{
        logger("This function is returned after a success or failure.")
    });
    
let user1 = new User("myusername", "mypassword", "ejike", "umeh", "male");

logger(`the username of ${user1.firstName} is ${user1.username}`);


/*let person1 = new Person("ejike", "umeh", "male", 1.8);

let person2 = new Person("mary","joseph", "Trans", 1.9);

logger(`2 raised to power 3 = ${CustomMath.pow(2,3)}`);

logger(`Person 1 is ${person1.firstName}, whose height is ${person1.height}. Person two is ${person2.firstName}, whose height is ${person2.height}`);

logger(`welcome the application name is "${appName}". There is a function that returns "${dummyFunction()}".`);

logger (genericFunction());

logger (multiplier1(2,3));*/