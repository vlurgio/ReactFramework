// regular way

// function printMyName(name)
// {
//     console.log(name);
// }
//
// printMyName('Me!')

//new way

// const person =
//     {
//         name: 'max'
//     }
//
//     export default person

// class Person
// {
//     constructor()
//     {
//         this.name = 'max';
//         call = () => {return 'hi'}
//     }
//     printMyName()
//     {
//         console.log(this.name);
//     }
//
//
// }


// class Person
// {
//     name = 'max';
//     printMyName = () =>
//     {
//         console.log(this.name)
//     }
// }
// const person = new Person();
// person.printMyName();

const nums = [1,2,3];
const newNums = [...nums, 2,3];
console.log(newNums);