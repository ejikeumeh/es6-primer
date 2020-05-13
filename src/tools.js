const logger = output => {
    console.log(output)

}

export const appName = "es6 Review";
export const dummyFunction = () =>{
    let feedback = "i am a dummy function"
    feedback = "i am still a dummy function "
    return feedback;
}

export const genericFunction = () =>{
    const languages = ['python', 'javascript', 'c# ', 'c++' ];
    const [firstLang, secondLang, ...otherLanguages] = languages;
    return `first language is ${firstLang}, the second language is ${secondLang} and the rest are ${otherLanguages}`;
}

export const multiplier1 = (a,b) =>{
    return (a*b);

}

export const addressees = ["john Uzo", "Mary Smith", "Sam Clarkson"];
addressees.map(addresse =>{
    let message = `Dear ${addresse}, it is my pleasure to inform you that your admission letter is ready for collection`;

})

export class Person{
    constructor(firstName, lastName, gender, height){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;   
    }

};

export class User extends Person{
    constructor(username, password,firstName, lastName, gender, height){
        super(firstName, lastName, gender, height);
        this.username = username;
        this.password = password
    }

}

export class CustomMath{
    static sqrt(a){
        return Math.sqrt(a);
    }
    static pow(a,b){
        return Math.pow(a,b);
    }
}



export const coordinateGenerator = (m, c, ...xValues) =>{
    let coordinates = xValues.map(
        (x) =>{
            return {'x':x, 'y':(m*x) +c};   
        }
    );

    let output = 'The (x,y) values are as follows: '
    for (let coordinates of coordinates){
        let xy = `(${coordinate.x}, ${coorsinate.y})`;
        output = output + xy;

    }
    return output
}


export default logger;

