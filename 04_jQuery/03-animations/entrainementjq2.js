// Les animations jQuery


$(function(){
    // Déclaration d'une function callback qui annonce la fin d'une animation (on s'en servira plus loin) :
    function finAnim() {
        alert('Animation finale !');
    }

    //-------------------------------
    // Les animation FADE : fadeIn(), fadeOut(), fadeToggle() et fadeTo() :
    $('#fadein').click(function(){
        $('#rouge').fadeIn();    // fait apparaître un élément en fondu (en jouant sur l'opacité) pdt la durée spécifiée en ms. Sans argumant, jQuery prend une valeur par défaut.
        $('#bleu').fadeIn(2000);    // même éffet en 2s
        $('#vert').fadeIn(1000).delay(1000).fadeOut(1000, finAnim);     // on peut enchaîner les animations à la suite des autres. On appelle la fonction callback finAnim à la fin du fadeOut(). Attention : pas de () sinon elle s'exécute sans attendre l'ordre du fadeOut.
    });

    // Au click sur le vouton #fadeout, l'image #imageDisp disparaît en fondu en S :
    $('#fadeout').click(function(){
        $('#imageDisp').fadeOut(1000);
    });

    // Alterner fadeIn() et fadeOut() avec fadeToggle() :
    $('#interr').click(function(){
        $('#black').fadeToggle(1000);    // alterne fadeIn() et fadeOut() en 1s
    });

    // fadeTo() :
    $('#exo1').click(function(){
        $('#orange').fadeTo(2000, 0.2);
        $('#violet').fadeTo(2000, 0.5);    // fait une transition jusqu'à l'opacité indiquée en 2s
    });


    //-------------------------------
    // Les aniamtions SLIDE : slideDown(), slideUp() et slideToggle() :
    $('#barre').click(function(){
       // $('#rideau').slideDown(1000);    // fait apparaître l'élément avec un mouvement de glissement vers le bas. Pour aller vaers le haut : slideUp().
       // $('#rideau').slideUp(1000);

        $('#rideau').stop().slideToggle(1000);    //   stop() permet d'arrêter une animation en cours lorsqu'on reclique avent son exécution totale ( sinon les animations s'exécute autant de fois que de clics) , et enchaîne sur l'animation suivante.      
    });


    //-------------------------------
    // Les animations ANIMATE :
    // Les animations de type "animate" agissent sur les propriétés CSS numériques telles que la positionnement top, left, right, bottom, ou encore les tailles, l'opacité, etc. Comme par défaut les éléments HTML ont une position "static" en CSS, nous sommes obligés de leur mettre une position "relative" ou "absolute" pour pouvoir les déplacer avec animate().

    //  Animation 1 : une animation simple :
    $('#anim1').click(function(){
        $('#un').animate({ top : '-200px' }, 1000);    // les propriétés CSS se mettent dans un objet entre accolades ( et entre quotes si elles contiennet un tiret). -200px est exprimé par rapport à la position d'origine de l'élément. Notez que l'on n'est pas obligé de précisez "px" car c'est l'unité par défaut.
    });

    //  Animation 2 : 2 propriétés CSS dans la même animation :
    $('#anim2').click(function(){
        $('#deux').animate({ top:'-150px',  left :'100px' }, { duration : 1000, easing : 'linear' });    // on obtient une diagonale entre la position d'origine et la position finale : -150px et 100px sont par rapport à la position d'origine. On peut mettre les options de l'animation dans un second objet entre des {}. "duration" = durée en ms, "easing" = accélération/ ralentissement de l'animation (valeur "linear" ou "swing" dans la version de base de jQuery, sinon utiliser une bibliothèque complémentaire)
    });


    // Animation 3 : 2 animations consécutives :
    $('#anim3').click(function(){
        $('#trois').animate({ top : '+=100px', left : '+=100px '}, 1000)
                   .animate({ top : '-=100px', left : '+=100px' }, 1000 );     // on peut passer un opérateur += ou -= en valeur d'une propriété CSS dans animate(), ce qui pousuit indéfiniment l'animation = variation en relatif par rapport à la dernière position
    });


    // Animation 4 : una animation continue :
    function anim4() {
        $('#quatre').animate({ left: '400px' }, 3000 )
                    .animate({ left : '0px' }, 3000, anim4);    // 0px signifie 0 par rapport à la position d'origine = revient à gauche du navigateur (position d'origine). On aurait pu mettre -=400px à la place. On peut mettre une fonction callback dans animate(), elle s'exécute une faois l'animation complètement terminée. Ainsi, ici on appelle la fonction elle-même à chaque fin d'animation.                    
    }

    $('#anim4').click(anim4);    // on appelle la fonction anim4 lors du clic sur le bouton. Pas de () à celle-ci pour qu'elle attendre l'ordre du click.

    
});  // fin du document ready