let n = prompt("enter any  number")
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    string += "*";
  }
  string += "<br>";
}
document.write(string);