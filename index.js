// деструктуризация
//0 const list =  ["Milk" , "Sugar", "Salt", "Butter", "Bread"];

// const [first, second] = list;
// console.log(first, second); 


// let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
// ];
// let [[a,b,c,d],[newArr, ...other]] = arr;
// console.log(a,b,c,d,other);


// let person = {
//     age  = 30,
//     name = "John",
//     lastName: "Snow",
// };
// let {age, name, lastName}; = person
// console.log(age, name, lastName);

// let obj = {
//     arr:[
//         {
//             name: "ogogo",
//         },
//     ],
// };
// let {
//     arr: [{name}],
// } = obj;

// console.log(name);

// let arr = [1,2,3,4,5];
// let [one, , , , four] = arr;
// console.log(four);

// const title = document.getElementsByClassName ("title");
// console.log(title);

// const title2 = document.getElementsByTagName("title2");
// console.log(title2);

// const click = document.getElementById("click");
// console.log(click.textContent);


const click = document.querySelector("#click");
const item = document.querySelectorAll(".item");
console.log(items);


items.forEach((element, index) => {
    element.textContent = `Hello - ${index + 1}`;
    if (index > 3) {
        element.style.color = "red";
    }
    element.addEvenListener("click", alert (`${element}`));
});