$(function(){

    //---------------------
    // Naviguer dans le DOM

    // Les méthodes next() et children() :
    // au clic sur un <h3> "effacer galerie ...", la galerie qui suit efface :

    $('#galeries h3').click(function(){
        //$(this).next().fadeOut(1000);   // la méthode next() permet de sélectionnée la balise directment suivante, ici le <viv.galerie> qui suit le <h3> sur lequel on a cliqué. Ainsi quelque soit le H3> cliqué, seule la balise qui suit s'efface. next() peut prendre un sélecteur en argument pour ne sélectionner que les balises suivantes répondant à celui-ci.

        // cependant on voudrait effecer les <img> contenues dans les <div.galerie> :
        $(this).next().children().fadeOut(1000);   // la méthode children() permet de sélectionner TOUS les éléments enfants directs d'une balise, ici toutes les balises <img> qui se trouvent dans <div.galerie> qui suit directement le <h3> que l'on a cliqué. Sans argument, children() sélectionne les enfants directs sans distinction.

    });

    // La méthode paren() :
    // Au clic sur une image, la bordure du parent devient rouge :
    $('#galeries img').click(function(){
        $(this).parent('.galerie').css({ border : '2px solid red'});    // la méthode parent() permet de sélectionner l'élément parent direct, ici le <div.galerie> dont on met la bordure en rouge. Sans argument parent() sélectionne le parent direct sans distinction.
    });


    // La méthode prev() (pour previous), le contraire de next() :
    // 
    $('#galeries p').click(function(){
        $(this).prev().css({ border : ''});    // prev( ) permet de sélectionner l'élément directement précédent, ici le <div.galerie> précédent dont on réinitialise la bordure. prev() peut prendre un sélecteur en argument pour ne sélectionner que les balises précédentes répondant à celui-ci
    });

    // La méthode find() :

   // au clic sur le bouton "effacer toutes les galeries", les <img> descendantes de #galeries sont effacés :

   $('button').eq(0).click(function(){
        $('#galeries').find('img').fadeOut(1000);   //find() permet de sélectionner tous les descendants directs ou indirects correspondants au sélecteur précisé, ici "trouve" toutes les balises <img> qui se situent dans la balises #galeries.
    }); 
    
    /// Exercice "accordéon" : vous rendez fonctionelle l'accordéon du HTML : au clic sur "section1" ou "section2" ou "section3" le <div> qu'on quitte se ferme, alors que le <div> de la nouvelle s'ouvre. Utilisez la classe "on" pour ouvrir un élément, et la classe "off" pour fermer un élément.

    $('#accordion h3').click(function(){
        $('.on').addClass('off').removeClass('on');
        $(this).next().addClass('on').removeClass('off');
    });   


    //-----------------------------
    // Convertir un élément du DOm en élément jQuéry :
    // Utile si l'on veut utiliser des méthodes de jQuery sur les éléments du DOM.

    var elementDOM = document.getElementsByClassName('galerie')[0];   // on sélectionne en JS un élément du DOM, ici le premier div.galerie
    console.log(elementDOM);


    // Puis je le tranforme en un objet jQuery :
    var objetJquery = $(elementDOM);   // on utilise la fonction principale jQuery alias $, pour transformes un élément du DOM en élément jQuery : vous pouvez donc lui appliquer n'importe quelle méthode spécifique à jQuery (fedeIn, animate,...)
    console.log(objetJquery);

    objetJquery.click(function(){
        alert('Ce <div> est un objet jQuery sur lequel on applique une syntaxe propre à jQuery.');
    });

    // Convertir un objet jQuery en un élément du DOM :
    var autreObjetJquery = $('.galerie');   // on sélectionne toutes les classes .galerie

    // Puis je transforme cet objet jQuery en un élé ment du DOM :
    var autreElementDOM = autreObjetJquery.get();  // get tranforme un objet jQuery en un array contenant tous les éléments du DOM
    console.log(autreElementDOM);     // on voit cet array

    autreElementDOM[1].addEventListener('click',function(){     // dans l'array, on cible un élément en mettant un indice entre crochets
        alert('Ce <div> est devenu un élément du DOM sur lequel on applique une syntaxe propre à JS.');
    });

    // 
    autreElementDOM = $('.galerie')[1];  // en utilisant la notation entre crochets, nous avons transformé l'objet jQuery en un objet du DOM classique. Attention : on ne peut donc plus lui appliquer des méthodes jQuery, mais uniquement du JavaScript ! Pour cibler l'indice 1 en jQuery, nous aurions utilisé eq(1) à la place de [1].


    



















});    // fin du doc ready