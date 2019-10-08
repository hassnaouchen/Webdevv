let x=5;
let y=2;
let s=x+y;

// console.log(`la somme de ${x}+${y} est ${s}`) ;
// let age =20;

// (x==y)? console.log("bonjour") : console.log("end")

// console.log(`j'ai ${age} ans `) ;
// let rep=prompt("Une note : ");
// rep=Number parseInt(rep);
// (rep>=12)? console.log("succes") : console.log("fail")

// let nbr=prompt("Entrer un nombre : ");
// let rep;
// nbr=Number.parseInt(nbr);
// for (var i = 1; i <=10; i++) {
// 	rep=nbr*i;
// 	console.log(`${nbr}*${i} = ${rep}`);
// }
//function Somme(a,b){
	//if (Number.isInteger(a) && Number.isInteger(b)) {
	//	return a+b;
	//}
	//else

//	return 0;

//}
//console.log(Somme(3,6));

// let f=function(a,b)
// {
// 	console.log(a+b);
// }
// f(2,1);

//////// CALCULATRICE
// let nbr1=prompt("Entrer le premier nombre : ");
// let operation=prompt("Entrer l operation : ");
// let nbr2=prompt("Entrer le deuxieme nombre : ");

// nbr1=Number.parseInt(nbr1);
// nbr2=Number.parseInt(nbr2);
// let rep;
// switch (operation)
// {
// 	case "+" :rep=nbr1+nbr2 ;break;
// 	case "-" : rep=(nbr1-nbr2);break;
// 	case "*": rep=(nbr1*nbr2);break;
// 	case "/": rep=(nbr1/nbr2);break;
// 	default : rep=("echec d'operation ");
// }
// console.log(rep);
///////////////////////// POO
// let personne ={
// 	nom : "yhyaoui",
// 	age : 20,
// 	direHi : function() {
// 		console.log("Hi");
// 	}
	

// }
// function user(a,b){
// 		this.nom=a;
// 		this.age=b;
// 		this.direHi = function(){
// 			console.log("Hi");
// 		}
// 	}
// personne.taille=30;
// a="age";
// personne[a];
// let p=new user("souad",20);
// console.log(personne);
// console.log(user);
// console.log(p.nom);
// user.prototype.taille=30;
// class Ligne{
// 	constructor(nom,longueur){
// 		this.nom=nom;
// 		this.longueur=longueur;
// 	}
// 	taille(){
// 		console.log();
// 	}
// }
function vect(x,y){
	this.x=x;
	this.y=y;

};
vect.prototype.module=function(){
return Math.sqrt(this.x*this.x+this.y*this.y);
}
vect.prototype.egale=function(v){
	return (this.x==v.x && this.y==v.y);
	
}
let v1=new vect(2,4);
let v2=new vect(3,4);
console.log (v1.module());
console.log(v2.module());
console.log(v1.egale(v2));









