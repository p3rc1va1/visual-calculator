const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const current = document.getElementById("current");
const memory = document.getElementById("memory");
const erease = document.getElementById("erease");

const operator = document.getElementById("operator");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply")
const negate = document.getElementById("negate")
const equals = document.getElementById("equals");
const dot = document.getElementById("dot");
const percent = document.getElementById("percent")

zero.addEventListener("click", ()=>{
    current.textContent = current.textContent +0;
});

one.addEventListener("click", ()=>{
    current.textContent = current.textContent +1;
});

two.addEventListener("click", ()=>{
    current.textContent = current.textContent +2;
});

three.addEventListener("click", ()=>{
    current.textContent = current.textContent +3;
});

four.addEventListener("click", ()=>{
    current.textContent = current.textContent +4;
});

five.addEventListener("click", ()=>{
    current.textContent = current.textContent +5;
});

six.addEventListener("click", ()=>{
    current.textContent = current.textContent +6;
});

seven.addEventListener("click", ()=>{
    current.textContent = current.textContent +7;
});

eight.addEventListener("click", ()=>{
    current.textContent = current.textContent +8;
});

nine.addEventListener("click", ()=>{
    current.textContent = current.textContent +9;
});

erease.addEventListener("click", ()=>{
    current.textContent = "";
});

plus.addEventListener("click", ()=>{
    memory.textContent = current.textContent;
    operator.textContent = "+";
    current.textContent = "";
});

minus.addEventListener("click", ()=>{
    memory.textContent = current.textContent;
    operator.textContent = "-";
    current.textContent = "";
});

multiply.addEventListener("click", ()=>{
    memory.textContent = current.textContent;
    operator.textContent = "x";
    current.textContent = "";
});

divide.addEventListener("click", ()=>{
    memory.textContent = current.textContent;
    operator.textContent = "/";
    current.textContent = "";
});

negate.addEventListener("click", ()=>{
    current.textContent = Number(current.textContent) *-1
});

percent.addEventListener("click", ()=>{
    current.textContent = Number(current.textContent) /100
});

dot.addEventListener("click", ()=>{
    current.textContent = current.textContent + "."
});

equals.addEventListener("click", ()=>{
    if(operator.textContent == "+"){
        current.textContent = Number(memory.textContent)+Number(current.textContent);
        operator.textContent = "";
        memory.textContent = "";
    }else if(operator.textContent =="-"){
        current.textContent = Number(memory.textContent)-Number(current.textContent);
        operator.textContent = "";
        memory.textContent = "";
    }else if(operator.textContent =="x"){
        current.textContent = Number(memory.textContent)*Number(current.textContent);
        operator.textContent = "";
        memory.textContent = "";
    }else if(operator.textContent =="/"){
        current.textContent = Number(memory.textContent)/Number(current.textContent);
        operator.textContent = "";
        memory.textContent = "";
    }
});

