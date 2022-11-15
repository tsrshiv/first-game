
for(let counter=1; counter<=10; counter ++){
    document.write(counter);
    document.write('<br>')
} 
//alert('welcome');

/*let age=prompt('enter your age', 20);
if(age!=null){
document.write('your age is ${age}');
}
else{
    document.write('age filled is blank');
    document.write('<br>')
}*/  
let response= confirm('are you sure, you want to delete ');
if(response){
    document.write('deleted');
}
else{
    document.write('not deleted');
}