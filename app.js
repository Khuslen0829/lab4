//DOM - document --> html deerh buh kod
//console.log(document);
// document.getElementsByTagName() -> tag nerer handah
//var h1 = document.getElementsByTagName('h1')[0];
//console.log(h1);
// .innerText = "solih text bichne" --> tag dotorh text solino.
//h1.innerText = "sain bnu";
// .style.styleName = "style utga" --> tag-d style ugnu.
/*h1.style.color = "brown";
var abc = document.getElementsByTagName('h1')[1];
console.log(h1);
abc.innerText = "(^-^)";
abc .style.color = "purple";
var p = document.getElementsByTagName('p')[0];
console.log(p);
function c(){
	p.innerText = "(-_-)";
	p.style.color = "red";
}*/
var ageInput = document.getElementsByTagName('input')[0];
var birthYear = document.getElementsByTagName('h4')[0];
var currentYear = 2023,myYear;
console.log(ageInput);
console.log(birthYear);
function age(){
	myYear = currentYear - ageInput.value;
	console.log(ageInput.value);
	birthYear.innerText = "Таны төрсөн он: " + myYear;
}
// hasah too buyu 0 ees doosh oruulval alert garj ireh "ta turuugu bn"
// 150aas deesh too oruulval alert garj ireh "iim too oruulj bolohgu"
// hooson utga oruulval alert garj irne  "hooson bn"