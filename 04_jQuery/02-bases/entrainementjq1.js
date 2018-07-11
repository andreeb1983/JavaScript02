// Ce fichier est en jQuery

/*
Document ready:
Les deux lignes suivantes ont la même signification: exécuter le code JS après avoir chargé le code HTML. Par conséquent, le lien vers la page JS peut se faire n'importe où dans la page HTML (dans le <head> ou avant la fermeture de <body>).

$(function(){
    // ici vous mettez tout votre code jQuery
});

Ou encore, autre syntaxe:
$(document).ready(function(){
    // ici vous mettez tout votre code jQuery
});

*/

$(function(){   // ce code s'excutera une fois le document HTML totalement chargé
    //-----------------------
    // Fonction principal de jQuery, alias $, sélecteur et évènement :
    $('#monBouton').click(function(){   // sélectionne la balise #monBouton et au clickappelle la fonction anonyme qui suit:
        $('#carre').hide();    // sélectionne la balise #care et l'efface
    });

    jQuery('#monBouton').click(function(){   
        jQuery('#carre').hide();   
    });    // En réalité, le $ remplace le mot jQuery dont il est un alias. Les deux font la même chose : ils créent un OBJET jQuery

    $('#carre').click(function(){     // sélectionne la balise #carre et au clic  => sélectionne toutes les balises h3 et les efface (sans écrire de boucle)
        $('h3').hide();
    });

    // Le contraire de hide() c'est show() :
    $('.photo').dblclick(function(){    // sélectionne la balise .photo et au double-clic => sélectionne la balise #carre et l'affiche en 1000 ms (= 1s)
        $('#carre').show(1000);     // hide() et show() peuvent prendre un argument : une durée en ms, ou encore 'slow' ou 'fast'
    });

    // Pour alterner, hide() et show() automatiquement  : toggle()
    $('#interrupteur').click(function(){
        $('#on-off').toggle();
    }); 

    //-----------------------
    // on() équivalent de addEventListener, et son contraire off() :
    $('#monBouton').on('click', function(){
        alert('Déclenchement de la méthode on()');
    })    // on() permet d'associer un évènement à un élément comme le ferait addEventListener en JS "pur". La seule différence entre la syntaxe ligne 21 et celle-ci réside dans le fait que cette dernière marche aussi avec les éléments créés dynamiquement (= ajoutés par le jQuery).

    $('#monBouton').off('click');    // En ajoutant cette ligne on dissocie les clics de l'élément #monBouton : les clics précédemment liés au bouton ne fonctionne plus ! C'est un moyen simple pour supprimer un évènement.

    //-----------------------
    // Evènement hover, modifier du CSS depuis jQuery  :
    $('#vert').hover(
        function(){
            $('#rouge').css({
                width : '300px',
                'background-color' : 'yellow'    
            });
        },
        function(){
            $('#bleu').css({
                width : '300px',
                'background-color' : 'yellow'
            });
        });

// l'évènement hover est une combinaison de mouseover et de mouseout en JS : il possède 2 fonctions anonymes qui s'éxécutent l'une quand on rentre, l'autre quand on sort de l'élément.
// La méthode css() permet de modifier des propriétés CSS écrites dans un objet : on les met entres des {} et son séparées par une ",". Notez que les propriétés CSS qui contienne un tiret s'écrivent dans les quotes.


//-----------------------
// Récupérer ou modifier la valeur d'un input  avec val() :
$('#mdp1').change(function(){
    var texte = $('#mdp1').val();      // val() sans argument retourne la valeur saisie dans le champ #mdp1 (getter)

    $('#mdp2').val(texte);      // val(argumant) permet de changer la valeur du champ #mdp2 (setter)

});


//-----------------------
// Le mot clé this :
// this est nécessaire lorsqu'on sélectionne plusieurs éléments simultanément et qu'on a besoin d'en simuler un en particulier :
$('input').focus(function(){
    $(this).css({ border :' 2px solid green' });     // this se refère à l'input sur lequel je suis en focus précisément sans sélectionner l'autre
});

$('input').blur(function(){
    $(this).css({ border :''});     // avec la méthode css() je remets la bordure à son état initial (correspondant au string vide '') de l'input duquel je viens de sortir (=this)
});


//-----------------------
// Accéder aux propriété CSS avec css() (complément) :
var position = $('#violet').css('position');

console.log('La propriété position du div est : ' + position);    // La méthode css() avec seulement une propriété sous forme de string avec une propriété en argument est ungsetter :  elle fournit la valeur de la propriété spécifiée, même si celle-ci n'est pas dans un attribut style (va chercher y compris dans les feuilles de styles)


//-----------------------
// Accéder aux attributs des balises avec attr() :
if( $('.modifAlt').attr('alt') == '' ) {   // attr() avec un seul argument est un getter: ile permet de récupérer la valeur de l'attribut préciser (ici de alt)
    $('.modifAlt').attr('alt' , 'paysage');    // attr() avec 2 arguments est un setter : il permet d'attribuer une valeur à un attribut : attr('attribut' , 'valeur').
}


//-----------------------
// Modifier le contenu d'une balise avec text() ou html() :
// html() équivaut à innerHTML :
$('.texte').eq(0).html('<span>Ceci est un texte ajouté avec la méthode html()</span>');    // les balises html sont interprétées et donc insérées dans le code HTML. La méthode eq() permet de cibler l'élément dont l'indice est spécifieé dans les (), ici la première .texte

// text() équivaut à textContent :
$('.texte').eq(1).text('<span>Ceci est un texte ajouté avec la méthode text()</span>');    // dans la méthode text() tout est considéré comme du texte brut, y compris les éventuelles balises 

// Notes : text() et  html() sans argument sont des getters : ils récupèrent le contenu de la balise sélectionnée.


//-----------------------
// Ajouter ou retirer une classe ( définie dans le CSS) à un élément :
$('#survol').mouseenter(function(){    //ici ajoute la classe "rouge" (prévu dans le CSS) à l'élément
    $(this).addClass('rouge');
})

$('#survol').mouseleave(function(){    // retire la classe "rouge" (prévu dans le CSS) à l'élément
    $(this).removeClass('rouge');
})

$('#classBleu').click(function(){    // alterne addClass() et removeClass() sur l'élément #survol (différent du bouton #classBleu : on utilise donc pas $(this) !)
    $('#survol').toggleClass('bleu');
})



//-----------------------
// Parcourrir les éléments sélectionnés avec une boucle each() :
$('h4').each(function(indice){    // each() parcour tous les h4 et exécute la fonction pr chacun d'entre eux. Cette fonction possède un paramètre (=indice) qui correspond à l'indice de l'élément sur lequel la boucle se trouve
    $(this).text('Ce <h4> a pour indice le numéro ' + indice + ' .');    // ajoute le texte au <h4> sur lequel on se trouve précisément à chaque tour de boucle (=$(this))

    // on ajoute la classe "rouge" aux h4 d'indice pair :
    if ( indice %2 == 0 ) {
        $(this).addClass('rouge');     //signifie que indice est pair : on ajoute donc la classe "rouge" à chaque élément d'indice pair
    }

});


//-----------------------
// Les pseudos-sélecteurs à jQuery :first, :last, :visible et :hidden :

// :visible et :hidden :
$('#afficher').click(function(){
    $('#galerie img:hidden').css({ opacity : 0.2});    // sélectionne les images cachées et leur met une opacité de 0.2
    $('#galerie img').show();    // puis on affiche ttes les images (pr voir le résultat)
});

$('#effacer').click(function(){
    $('#galerie img').hide();
});


// :first et :last :
$('#afficher-premier').click(function(){
    $('#galerie img:first').show();    // électionne la première image et l'affiche. Fonctionne aussi avec :last pour la dernière. Si vous voulez cibler une image au milieu, utiliser la méthode eq().

    // On peut combiner les pseudos-sélecteurs :
    console.log($('#galerie img:hidden:first').attr('src'));    // on combine :hidden:first pour afficher la source de la 1ere image cachée. Attention à l'ordre, : hidden d'abord puis :first
});

});    // fin du document ready (à ne pas supprimer)