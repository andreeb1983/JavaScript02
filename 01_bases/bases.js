
//-------------------------------------------------
//1-Commentaires
//-------------------------------------------------

// pour écrire un commentaire sur une seule ligne
/*
pour écrire des commentaires sur plusieurs lignes
*/

//-------------------------------------------------
//2-Affichage
//-------------------------------------------------

document.write('mon premier message'); //affichage dans le navigateur

document.write('<h1>les bases du JavaScript</h1>'); //on peut mettre des balises HTML, elles sont interprétées et donc insérées dans le HTML

//Toutes les instructions en JS se finissent par un point virgule ";". Elles se suivent et sont effectuées les unes à la suite des autres; du HAUT vers le BAS du script.

//------
//Les boîtes de dialogues:
//alert('Salut!');  //affiche un message
//confirm('Etes-vous sûr?');  //message avec bouton de confirmation "ok" ou "annuler"
//prompt('Quel est votre code postal?');  //message avec champ à remplir

//------
//Afficher dans la console:
console.log('attention aux erreurs de syntaxes dans la console'); //message écrit dans la console de débugage (F) + onglet Console)

//-------------------------------------------------
//3-Variables - déclaration - affectation
//-------------------------------------------------
document.write('<h2>3-Variables - déclaration - affectation</h2>');
//définition: une variable est un espace mémoir nommé dans lequel nous allons stocker une donnée, une valeur. cette valeur peut être de n'importe quel type : chiffre, chaîne de caractère, une balise HTML, etc.

//Déclaration d'une variable : 
var maBoite;  //le mot clé var permet de déclarer(=créer) la variable nommée maBoite.

//Règle de nommage des variables: caractères acceptés: de a à z, A à Z (accents exclus), 0 à 9 (jamais au début), _ (jamais au début ni à la fin). Premier mot en muniscule , puis majuscule à la première lettre de chaque mot.

//------
//Affectation d'une variable :
maBoite = 10;   //on affecte une valzur à une variable avec le signe "=". maBoite contien donc 10 (= est un signe d'affectation)

document.write(maBoite);   ///on affiche le contenu de la variable en ne mettant pas les quote autour de son nom. Affiche 10.

var maBoite = 10;   //on peut déclarer et affecter une variable en même temps ( nous retiendrons cette habitude).

//------
monAutreBoite = 'bonjour';   //cette écriture est possible (déclaration san le mot clé var), mais ce n'est pas conventionnel. De plus, dans une fonction celle n'a pas la même signification ( voir Chapitre "portée des variables")

document.write('<br>');

//------
//Affecter et déclarer plusieurs variables en même temps :
var prenom = "Sylvie",
    nom = "Robert",
    genre= "féminin";   // un seul var en séparant chaque déclaration par un virgule, un saut de ligne et une indentation. On termine par un point virgule ";"

document.write(prenom); //affiche Sylvie
document.write('<br>');

//------
// Changer la valeur d'une variable :
prenom = 'Pierre';   // nous changeons la valeur initiale Sylvie pour la remplacer par "Pierre"

document.write(prenom); //affiche Pierre
document.write('<br>');

prenom = nom;   //nous affectons la valeur de la variable nom à la varaible prénom, autrement dit on remplace "Pierre" par "Robert"

document.write(prenom); //affiche Robert
document.write('<br>');

//------
// Ajouter une valeur à la valeur déjà existante d'une variable :
var fruit = 'pomme';
fruit += ' fraise';   //on ajoute la chaîne de caractère (espace fraise)" fraise" à "pomme" déja existante dans la variable fruit avec l'opérateur += (sans espace)

document.write(fruit);   //affiche "pomme fraise"
document.write('<br>');


//------
// Utiliser prompt avec une variable :
var codePostal = prompt('Quel est votre code postal?');

document.write(codePostal); //affiche le code postal indiqué par l'internaute
document.write('<br>');

//-------------------------------------------------
//4-Types de données
//-------------------------------------------------
document.write('<h2>4-Types de données</h2>')

//nous commencons par les 3 principaux types de données dits primitifs:

//Les types numériques appelés NUMBER :
var chiffre = 20;   //les numbers s'écrivent sans quote ni guillemets
//Tous les types numéques sont possibles : entiers, décimaux, positifs, négatifs...

//Les types chaînes de caractères appelés STRING :
var texte = "phrase entre guillemets";
var apostrophe = 'il faut utuliser le caractère d\'échappement pour les apostrophes dans les quotes'; //AltGR + 8 pour les caractère d'échappement

//Les quotes ou les guillemets indiquent qu'il s'agit d'un type STRING.

var numero = '10';   //un chiffre dans un e quote ou des guillemets est interprété comme un STRING.

//Le type booléen (ou boolean) :
//Le type booléen ne prend que deux valeurs: TRUE ou FALSE
var choix = true;   //s'écrit SANS quote

//------
//typeof permet de vérifier le type d'une variable :
document.write(typeof(chiffre));   //number
document.write('<br>');

document.write(typeof(texte));   //string
document.write('<br>');

document.write(typeof(numero));   //string
document.write('<br>');

document.write(typeof(choix));   //boolean
document.write('<br>');

//-------------------------------------------------
//5-Constante
//-------------------------------------------------
document.write('<h2>5-Constante</h2>');

//Définition : Les constantes sont comme des variables dont la valeur ne apeut pas être modifiée. Elles permettent de "protéjer" cette valeur nécessaire au bon développement du script.

const CHANGE_PAS = "ma constante impossible à modifier";   //par convention entre développeur on écrit les constantes en majuscules et avec un "_" si besoin.

document.write( CHANGE_PAS);   //affiche le contenu de la constante
document.write('<br>');

/* CHANGE_PAS = 'autre valeur';   //erreur bloquante de type invalid assignment to const CHANGE_PAS
document.write('<br>'); */

//-------------------------------------------------
//6- Concaténation
//-------------------------------------------------
document.write('<h2>6-Concaténation</h2>');

//En JS, on fait suivre des variables et des strings avec le symbole "+". On parle de concaténation.

var prenom = 'Bruce',
    nom = 'Wayne';

document.write(prenom + ' ' + nom + '<br>');   //Concatène la variable prenom avec un espace avec la variable nom avec la balise <br>

var personnage = prenom + ' ' + nom + '<br>';   //On peut concaténer des éléments au sein d'une variable
document.write(personnage);

//-------------------------------------------------
//7- Opérateurs arithmétiques
//-------------------------------------------------
document.write('<h2>7-Opérateurs arithmétiques</h2>');

var resultat;

resultat = 10 + 5;   //addition
resultat = 10 - 5;   //soustraction
resultat = 10 * 5;   //multiplication
resultat = 10 / 5;   //division
resultat = 3 % 2;    //modulo = au reste de la division entière. Si j'ai 3 billes réparties sur 2 personnes, il m'en reste 1 seule:3%2 vaut donc 1 (modulo de 2 pour vérifier si un chiffre est pair ou impaire, modulo de 10 si c'est un dizaine,...)


//------
//On peut appliquer les opératueurs aux variables:
var chiffre1 = 10,
    chiffre2 = 5;

resultat = chiffre1 + chiffre2;   //resultat vaut 15

var chiffre3 = 10;
chiffre3 = chiffre3 + 5;   //15
chiffre3 = chiffre3 = 5;   //20 . Mais cette syntaxe n'est pas conventionnelle. On utilise la syntaxe suivante:
chiffre3 += 5;   //cette syntaxe fait la même chose que la précédente mais c'est elle que l'on retiendra. chiffre3 vaut ici 25.

// Fonctionne avec tous les opérateurs: +=, -=, *=, /=, et %=.

//------
// Incrémenter et décrémenter :
var i = 0;
i++;   //Incrémenter i de +1. i vaut donc 1
i--;   //décrémenter 1 de -1. i vaut donc 0

// i++ et ++i on le même résultat à la différence près:
// i++ retourne la valeur de i AVANT d'effectuer l'opération
// i++ retourne la valeur de i APRES d'effectuer l'opération

var x = 5;
var y = x++;   //y prend la valeur de 5 PUIS x passe à 

document.write('y vaut ' + y);   //5
document.write('x vaut ' + x);   //6  

x = 5;
var z = ++x;    // x passe à 6 PUIS z prend la valeur de 6
document.write('z vaut ' + z);   //6
document.write('x vaut ' + x +'<br>');   //6

//------
// Exercice :
/*
L'internaute a acheté 0.8kg de pommes et 0.7kg de poires.
Vous déclarez 4 variables, une qui contient "pommes", une qui contient "poires",
une qui contient le poids des pommes et une qui contient le poids des poires .
Puis vous affichez la phrase "Vous avez acheté des pommes et des poires pour un poids total de 1.5kg." où les fruits et le poids total sont remplacés par les variables. 
 */

 var fruit1 = 'pommes',
     fruit2 = 'poires',
     poids1 = 0.8,
     poids2 = 0.7;
var poidsTotal = poids1 + poids2;

document.write('<p>Vous avez acheté des ' + fruit1 + ' et des ' + fruit2 + ' pour un poids total de ' + poidsTotal +' kg. </p>');

  
//-------------------------------------------------
//8- Conditions
//-------------------------------------------------
document.write('<h2>8- Conditions</h2>');

var a = 10,
    b = 5,
    c = 2;

//------
// La condition if / else :
if ( a > b) {
    // si la condition est évaluée à true on entre dans les accolades qui suivent :
    document.write('a est supérieur à b <br>');
} else {
    // sinon... si la condition est évaluée à false, on exécute le else :
    document.write('b est supérieur ou égal à a <br>');
}

//------
//if avec AND :
if (a > b && b > c) {
    //Si a et supérieur à b ET que dans le même temps b est supérieur à c, on entre dans les accolades qui suivent:
    document.write('Ok pour les 2 conditions <br>');
}

//------
//if avec OR :
var a = 10,
    b = 5,
    c = 2;


if ( a == 9 || b > c ) {
    //si a est égal (==) à 9 OU alors que b est supérieur à c, on entre dans les accolades qui suivent:
    document.write('Ok pour au moins une des 2 conditions <br>');
}

//------
//If...else if...else :
var a = 10,
    b = 5,
    c = 2;


if ( a == 8 ) {
    // si a vaut 8, on exécute ce sui suit:
    document.write('a est égal à 8 <br>');
}else if ( a != 10 ) {
    //sinon si a est différent de 10,on exécute ce sui suit: 
    document.write('a est différent de 10 <br>');
}else {
    //Sinon, c'est que je suis tombée ni dans le if, ni dans le else if, je me trouve donc dans le else:
    document.write('Les 2 conditions précédentes sont fausses <br>');
}

// Notes: jamais de () après le else. Le else est obligatoire si il est vide. En revanche, après le if il y a toujours une condition.


// L'opérateur NOT :
// l'opérateur NOT qui s'écrit "!" permet d'inverser quelque chose de TRUE en FALSE, ou quelque chose de FALSE en TRUE. Il s'agit d'une négation.

var test = 3 < 1;

console.log('test vaut: ' + test);   // pour vérifier que test vaut false

if (!test) {
    // le "!" est une négation qui inverse le sens du booléan : test seul valant false, !test vaut donc true. la condition finale étant donc évaluée à true, on entre dans les accolades.
    document.write('On exécute ce code ...<br>');
}

//Conclusion: les instructions d'une condition seront toujours exécutées que si la condition renvoie TRUE.

//------
//La comparaison avec le triple "===" :
var varA = 1,   //number
    varB = '1';   //string

    if ( varA == varB ) {
        // varA et varB valent tous les deux 1 en VALEUR: la condition avec "==" est donc vraie. On exécute les accolades qui suivent:
        document.write('Egalité en valeur uniquement <br>');
    } else {
        document.write('Différence en valeur uniquement <br>');
    }

if ( varA === varB ) {
    //comparaison en valeur ET en type avec le triple "===". Ici nous avons un string et un number, il n'y a donc pas strict égalité entre les 2 variables : on va dans le else
    document.write('Egalité en valeur ET en type <br>');
} else {
    document.write('Différence en valeur OU en type <br>');
}

//------
//Condition dite ternaire :
//La condition ternaire est une autre syntaxe de la condition if...else.

var voiture = 'bmw';

var origine = (voiture == 'bmw') ? 'origine allemande <br>' : 'autre origine <br>';    // la condition ternaire s'écrit avec un "?" qui remplace le "if", et un ":" qui remplace le else.

document.write(origine);


//------
//isNaN : is Not a Number
// NaN pour Not a Number est une valeur utilisée pour représenter une "quantité" qui n'est pas un nombre en JavaScript
console.log(2 * 'azerty');

// Les opérateurs d'égalité (== ou ===) ne peuvent pas être utilisés pour tester si une valeur est NaN. Il faut utiliser is NaN() :

var annee = '2018';   // string
if ( isNaN(annee) ) {
    // condition fausse car '2018'après conversion est bien un number. On entre bien dans le else
    document.write('Ce n\'est pas un number après conversion <br>');
} else {
    document.write('C\'est un number après conversion <br>');
}

// Le contraire :
var annee = 'juillet 2018';   // string
if ( isNaN(annee) ) {
    // ici la condition est vraie. On entre donc ici:
    document.write('Ce n\'est pas un number après conversion <br>');
} else {
    document.write('C\'est un number après conversion <br>');
}


//------
// Exercice :
/* Demandez l'âge de l'internaute dans un prompt.
Si la réponse est vide (on compare avec des quotes vides SANS espace), on affiche "Vous n'avez pas répondu."
Si la réponse n'est pas un nombre, on affiche "Vous n'avez pas indiqué un nombre."
Si la réponse est correcte, on affiche "Vous avez indiqué avoir X ans." où X est l'âge donné par l'internaute.
*/

var age = prompt('Quel âge avez-vous ?');

if ( age == '') {
    document.write('Vous n\'avez pas répondu');
} else if ( isNaN(age) ) {
    document.write('Vous n\'avez pas indiqué un nombre.');
}else  {
    document.write('Vous avez indiqué avoir ' + age + ' ans.');
}


//-------------------------------------------------
//9- Synthèse des opérateurs
//-------------------------------------------------
document.write('<h2>9- Synthèse des opérateurs</h2>');

// Pour tester des variables entre-elle:
/*
  == pour égal en valeur
  != pour différent en valeur

  === pour strictement égal en valeur Et en type
  !==pour strictement différent en valeur Et en type

  > pour plus grand que
  < pour plus petit que
  >= pour supérieur ou égal
  <= pour inférieur ou égal

  */

//Les opérateurs logiques :
/*
  && pour AND
  || pour OR
  !  pour NOT (négation)

Les opérations effectuées avec les opérateurs logiques ne donnent que 2 résultats possibles: TRUE ou FALSE

Exemples:
true && true     => true
true && false    => false
false && false   => false

true || true     => true
true || false    => true
false || false   =>false

!TRUE => false
!FALSE => true

 */


//-------------------------------------------------
//10- Condition switch
//-------------------------------------------------
document.write('<h2>10- Condition switch</h2>');
// La condition switch est une autre syntaxe pour écrire une condition if...elseif...else, lorsque l'on veut comparer une variables à une multitude de valeurs.

var couleur = 'jaune';
switch (couleur) {
    case 'bleu' :   // chaque case représente une valeur que peut prendre la variable. Si couleur contient 'bleu' on exécute le code qui suit ce case:
        document.write('Vous aimez le bleu. <br>');
    break;   //obligatoire pour quitter la condition un fois le case exécuté.

    case 'rouge' : 
        document.write('Vous aimez le rouge. <br>');
    break;

    case 'vert' : 
        document.write('Vous aimez le vert. <br>');
    break;

    default :   // on tombe dans default par défaut si on entre dans aucun case (cas) précédent.
        document.write('Vous n\'aimez aucune de ces couleurs. <br>');
}


//-------------------------------------------------
//11- Les boucles
//-------------------------------------------------
document.write('<h2>11- Les boucles </h2>');
//Les boucles sont destinées à répéter des lignes de codes de façon automatique.

//While : 
var i = 0;  // on initialise une variable à 0 pour compter le nombre de tours de boucles

while ( i <= 5 ) {   // ici entre parenthèse se situe la condition d'entrée dans la bouche while. Elle signifie "tant que i est supérieur ou égal à 5"

    document.write(i + '---');
    //...
    i++;   // on incrémente i de +1. On n'oublie pas d'incrémenter pour ne pas créer une boucle infinie.
}

document.write('<hr>');
// Exercice : sans modifier la condition de la boucle while précédente vous la coompléter pour ne pas afficher les "---" aprèes le 5.

var i = 0; 

while ( i <= 5 ) {     
    if ( i == 5){
    document.write(i); 
    } else {
    document.write(i + '---');   
    }
    i++;
}

document.write('<hr>');

//Correction
var i = 0;   // On n'oublie pas de réinitialiser i sinon il coserve la valeur 6 de la boucle pécédente

while ( i <= 5 ) {
    if ( i == 5 ) {
        document.write(i + ' ');
    } else {
        document.write(i + '---');
    }
    i++;
}

document.write('<hr>');

//------
// La boucle for :
// La boucle for est une autre syntaxe de la boucle while :
for (var i = 0; i <= 5; i++) {   // on met dans les () du for: initialisation de la variable suivi d'un ";", puis la condition d'entrée dans la boucle suivie d'un ";", puis l'incrémentation (ou décrémentation...) NON suivie d'un ";"
    document.write(i + '---');
    //...
}

document.write('<hr>');
//------
//Exercice :  afficher un menu déroulant avec les années de 1900 à 2020. Utiliser une boucle FOR.

document.write('<select>');
    document.write('<option>1900</option>');
    document.write('<option>...</option>');
    document.write('<option>2020</option>');
document.write('</select>');


document.write('<hr>');


// correction

document.write('<select>'); 
for (var i = 1900; i <= 2020; i++) {   
    document.write('<option>' + i + '</option>');
}
    document.write('</select>');

// Alternative

document.write('<hr>');


var affichage = '';   //Pour contenir toutes les balises html à venir

affichage += '<select>'; 
    for (var i = 1900; i <= 2020; i++) {   
     affichage += '<option>' + i + '</option>';
    }
affichage += '</select>';

console.log(affichage);

document.write(affichage);   // On affiche tout le string qui contien l'ensemble des balises du sélecteur.


// La boucle do...while existe aussi elle a la particularité de s'exécuter au moins une fois (crrespondant au "do"), puis seulement à la fi on regarde la condition du while pour savoir si on retourne dans la boucle ou pas . Exemple d'utilisation: vous posez une question obligatoire à l'internaute ("do"), puis tant qu'il n'a pas correctement répondu ("while"), vous lui reposez la question.


//-------------------------------------------------
//12- Les fonctions utilisateurs(utilisateurs = développeurs)
//-------------------------------------------------
document.write('<h2>12- Les fonctions utilisateurs</h2>');
// Des fonctions sont des morceaux de codes encapsulés dans des accolades et portant un nom. Elles sont appelées (par leur nom) quand on a besoin d'exécuter tout le code qui s'y trouve. Il est d'usage de faire des fonctions simplesqui réalisent des actions unitaires.

// A chaque fois que l'on répète une action, voir si il n'est pas possible de la mettre dans une fonction: cela s'appelle factoriser son code.

//Il existe 2 façons de déclarer un fonction en JS:
//1° Avec le mot function :
function maFonction() {
    // ici tout votre code
    document.write('<p>Nous avons une journée ensoleillée.</p>');
}

//2° Avec le mot clé var :
var maFonction2 = function () {
    //ici tout votre code
    document.write('<p>Nous avons une chaude journée.</p>');
}



// Pour qu'une fonction s'exécute il faut l'appeler :
maFonction(); // on appelle une fonction en écrivant son nom suivit d'une paire de parenthèses.
maFonction2();   // en appelant cette fonction j'exécute le code qui s'y trouve.

// Par convention nous déclarons toujours une fonction avant de l'exécuter.

//------
//Fonctions avec paramètres :
function direBonjour(prenom, nom) {   //prenom et nom sont de paramètres de la fonction, séparés par une "," et qui attente une valeur
    document.write('<p>Bonjour ' + prenom + ' ' + nom + ', comment allez-vous ? </p>');
}
direBonjour('Alice', 'Dupont');   // la valeur "Alice" qui est en première position va être affectée au paramètre prenom, et la valeur "Dupont" en seconde position va être affectée au paramètre nom. Ainsi le fontion direBonjour peut afficher un message personnalisé.


//------
function d(param) {
    document.write( param +'<hr>');
}
d('Test de notre fonction');
d('<div class="test">Test de notre fonction</div>');