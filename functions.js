function myfun(a)
{
    return a**3;
}

function multiply(a,b)
{
    return a*b;
}

console.log("the cube of a number is "+myfun(4))

console.log("the multiplication is "+multiply(34,567))

console.log(tocelcius(100))

function tocelcius(faren)
{
    far=5/9*(faren-32)

    return far
}


let var1=(a,b)=>{

    return a**b
}
console.log(var1(2,3))


let variable=(a,b)=>{

    for(let i=a;i<=b;i++)
    {
        for(let j=1;j<=i;j++)
        {
            process.stdout.write('*')
        }
        console.log()
    }
}
variable(1,10)


//objects in javascript

const car="volksWagen"

const carmodel={type:'hatchback',model:'polo',engine:'1500 turbo', fullname:function (){ console.log("My full name is Adithya sai")}}


console.log(carmodel["type"])
console.log(carmodel["engine"])
console.log(carmodel["model"])

console.log(carmodel.type)

console.log(carmodel.fullname())