const name = "Roke"
const repoCount =50

// console.log(name+repoCount+"Value");  no use


    console.log(`hello my name is ${name} and my repo count is ${repoCount}`);   // this use
 
    const gameName = new String('Rokehc-hc-com')

    // console.log(gameName[0]);
    // console.log(gameName.__proto__);



// console.log(gameName.length);
// console.log(gameName.toUpperCase());

    console.log(gameName.charAt(2));
    console.log(gameName.indexOf('k'));

    const newString =gameName.substring(0,4)
    console.log(newString)

    const anotherString = gameName.slice(-5,4)
    console.log(anotherString)

    const newStringOne = "  hitesh  " 
    console.log(newStringOne);
    console.log(newStringOne.trim())

    const url ="https://roke.com/hitesh%20xyz"
    console.log(url.replace('%20',"-"))


    console.log(url.includes('sunder'))

    console.log(gameName.split('-'));