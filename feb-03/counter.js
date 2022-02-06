var a=0;
b=document.getElementById("counting").innerText;
b.innerText= a;

function increment() {
    a=a+1;
    document.getElementById("counting").innerText= a;
}

function decrement() {
    a=a-1;
    document.getElementById("counting").innerText= a;
}