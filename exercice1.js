// :::::Exercice1
let afficher=function()
{
	console.log(`Hello World`);
}
afficher();

// :::::Exercice2

document.writeln('<form id="Form">');
document.writeln('<div>');
document.writeln('<p >Text:</p>');
document.writeln('<input type="text" id="msg">');
document.writeln('</div>');
document.writeln('</form>');
 
document.getElementById('msg').value="Vous avez réussi votre exercice";

// :::::Exercice3

function validerForm() {
  if(document.getElementById('valide').value == '') {
    document.getElementById('Error').innerHTML = "Le formulaire n\'est pas  envoyé";
    return false;
  } else {
    document.getElementById('Error').innerHTML = '';
    alert('Le formulaire peut être envoyé');
    return true;
  }
}


//exercice4

let a = "1";
let b = "2";
let c = a + b;
 

document.writeln("  le type de a est : "+typeof(a)+" "+a+"  <br>  ");
document.writeln("  le type de b est :"+typeof(b)+" "+b+"  <br>  ");
document.writeln("   le type de c est : "+typeof(c)+" "+c+"  <br>  ");
 

 
a = parseInt(a);
b = parseInt(b);
c = a + b;
 
document.writeln("  le type de a est : "+typeof(a)+" "+a+"  <br>  ");
document.writeln("  le type de b est :"+typeof(b)+" "+b+"  <br>  ");
document.writeln("   le type de c est : "+typeof(c)+" "+c+"  <br>  ");


//exercice 5

let arg=function sumIndetermine()
{
	var sum =0 ;
	for (var i =0; i < arguments.length; i++) {
		sum+=arguments[i];
	}
	return sum;
}
document.writeln(arg(1,2,2,8,0));

// exercice 6 

let random = function aleatoire()
{
		var rand=Math.floor(Math.random() * 11);
		var cmpt=0;
		var correct=false;

		do {
			let rep=prompt("Entrez le nombre :");
			cmpt++;
			if (rep==(rand)) {
				alert("C'est correct!!! le nombre de coups est : "+cmpt);
				correct=true;
			}
			else
			{
				if(rep>rand){
					alert("incorrect!! Le nombre est plus grand");
				}
				else{
					if(rep<rand)
				
				{
					alert("incorrect!! Le nombre est plus petit");
				}
			}

			}
		}while(correct==false);
}
random();