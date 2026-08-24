// console.log("Hello guyssss !!!")
// console.warn("This is warning")
// console.error("This is error")
alert("There is an alert")
var ans = confirm("Are you an Adult??")
console.log(ans)
var Name = prompt("Enter you name")
console.log(Name)
function walk(){
    console.log("Chal toh rha hu bhaii!!!")
}
function dance(){
    console.log(" Dancing")
}
function sing(){
    console.log("Maiiiii huuu giiaaan!!")
}
walk()
dance()
sing()
var obj ={
    user:'Harsh',
    age:20
}
console.log(obj)
console.log(obj.user)
var obj2 ={
    user: 'Harshit',
    age:20,
    greet:function(){
        console.log("Good Morning")
        return 0;
    }
}
console.log(obj2.greet())
var arr = [
    {name:"Harshit",age:20},
    {name:"Harsh",age:22},
    {name:"Raghav",age:21}
]
console.log(arr)
