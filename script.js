
const container = document.querySelector('#container');
let rows = document.getElementsByClassName('row');
const button = document.getElementById('theButton');
let color = "purple";
let cols = document.getElementsByClassName('col');
let green = document.getElementById('green');
green.addEventListener('click', function(){
    color = "green";
});
let pink = document.getElementById('pink');
pink.addEventListener('click', function(){
    color = "pink";
});
let orange = document.getElementById('orange');
orange.addEventListener('click', function(){
    color = "orange";
});
let blue = document.getElementById('blue');
blue.addEventListener('click', function(){
    color = "blue";
});
let eraser = document.getElementById('eraser');
eraser.addEventListener('click', function(){
    color = "white";
});
button.addEventListener('click', function(){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    createGrid(50, 50);
});
function makeRow(numRow){
    for(let i = 0; i < numRow; i++){
        const row = document.createElement('div');
        row.className = "row";
        container.appendChild(row);
    }
}
function makeCol(numCol){
    for(let j = 0; j < rows.length; j++){
        for(let i = 0; i < numCol; i++){
            const col = document.createElement('div');
            col.className = "col";
            col.addEventListener('mouseover', function(){
                col.style.backgroundColor = color;
                }
            );
            rows[j].appendChild(col);
        }
    }  
}
function createGrid(num1, num2){
    makeRow(num1);
    makeCol(num2);
}
createGrid(50,50);