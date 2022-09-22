const parent_str = prompt("Please enter parent string");
const child_str=prompt("Please enter child string");

let result=parent_str.includes(child_str);
if(result==true){
    console.log('Child string is substring of parent string');
}
else{
    console.log('Child string is not substring of parent string');
}

/* const string= prompt("Please enter string whose index you want to remove");
// remove character at specifc position
let _position=prompt('Please enter position');
let str=parent_str.substring(0,_position-1)+ parent_str.substring(_position);
document.getElementById('demo1').innerHTML='String after removing character at position 3<br>' + str; */