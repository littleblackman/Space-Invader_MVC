
    var FondJeux          ; // le fond d'ecran de l'interface 
    var nave                ; // le joueur 
    var cursores            ; 
    var tir               ; // la balle 
    var tempsballe = 0      ; 
    var BoutonTir           ; // bouton pour tirer (espace )
    var ennemis            ; 
    var score = 0           ; // le score 
    var nbrMobs = 0         ; // le nombre de mobs restant sur l'interface 
    var abri                ; 
    var sound = false       ; 


    var resistanceAbri = 12 ; // 4 X 3 Tir = 4 images d'annimation ;  Normal, un peu desaillé, bcp dessailer, plus d'abri
    var resistanceAbri1 = 12 ; // 4 X 3 Tir = 4 images d'annimation ;  
    var resistanceAbri2 = 12 ; // 4 X 3 Tir = 4 images d'annimation ;
    var resistanceAbri3 = 12 ; // 4 X 3 Tir = 4 images d'annimation ;
    var resistanceAbri4 = 12 ; // 4 X 3 Tir = 4 images d'annimation ;


    var TirOk = 0           ; // pour ne pas tirer quand il n'y a pas de mobs 

    var Vie = 3  ;          // Si vie est a 0 on effectue game over 
    var ViePerdue = 0 ; // Si vieperdue est au dessus de zero on retire une vie   // a remettre a 0 
    var GameOver = 0 ; // Si game over est au dessus de zero on affiche un msg et le jeux s'arréte 
    var manche = 1 ; 


    var text = null; 

    
    var STATE_GAME_NONE      =0; 
    var STATE_GAME_LOADING   =1;
    var STATE_GAME_PLAYING   =2;
    var STATE_GAME_GAME_OVER =3; 
    var STATE_GAME_WIN       =4;
    
    var stateGame = STATE_GAME_NONE  ; 

GamePlayManager = {

// ******************************************************
// ************ INIT
// ******************************************************
    init: function() {
   //   game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true ; 
    game.scale.pageAlignVertically= true ;
    },
  
// ******************************************************
// ************ PRELOAD
// ******************************************************
    preload: function() {
        stateGame = STATE_GAME_LOADING  ; 
        game.load.image('background', 'Contenu/images/background.jpg') ; // XX x XX 
        game.load.image('shooter', 'Contenu/images/shooter1modif.png') ; // XX x XX  
        game.load.image('laser' , 'Contenu/images/tir.png')  ;
        game.load.image('enemigo', 'Contenu/images/mobs1modif.png') ; // XX x XX
        game.load.image('abri', 'Contenu/images/Abri1.PNG' , 65,65,2 ) ; // XX x XX  

        // Button Play 
        game.load.spritesheet('buttonPlay', 'Contenu/images/buttonPlay.png' , 65,65,2 ) ; // XX x XX  


        // sound 
        game.load.audio('loopMusic','Contenu/sounds/sound2.mp3');  // song 
        //button sound 
        game.load.spritesheet('buttonSound', 'Contenu/images/buttonSoundonnoff.png' , 65,65,2 ) ; // XX x XX  
    
    },    
   
// ******************************************************
// ************ CREATE
// ******************************************************



    create: function() {
        FondJeux = game.add.sprite(0,0,'background') ; 

        // Sound 
        this.loopMusic = game.add.audio('loopMusic');	

        // Bouton pause music 
        this.buttonSound = game.add.button(20 , 580, 'buttonSound',this.Soundfunction,
        this, 1,0,1,0) ; 
       // this.buttonSound.setTo(0.2) ; 

    
        //Button Play
        this.buttonPlay = game.add.button(game.width/2 , game.height/2, 'buttonPlay',this.startGame,
        this, 1,0,1,0) ; 
        this.buttonPlay.anchor.setTo(0.5) ; // place le buttonplay au centre 
        this.buttonPlay.scale.setTo(2);  // Augmante la taille du bouton play 

        // NAVE 
        nave = game.add.sprite(game.width/2, 600,'shooter') ;
        nave.anchor.setTo(0.5) ; 
        nave.scale.setTo(0.1);  // rattrecie le shooter 0.3 pour le shooter normal 

    //    nave.checkWorldBounds = false;

        // detecter la colision A voir 
        nave.enableBody = true ;  
        nave.physicBodyType = Phaser.Physics.ARCADE ; 

        cursores = game.input.keyboard.createCursorKeys() ; 


        // ABRI */ 
        /*
        abri = game.add.sprite(130,450,'abri') ;  // 130 , 450  First abri 
          
           abri.scale.setTo(1);  // rattrecie  
           abri.enableBody = true ;  // detecter la colision AV     
           abri.physicBodyType = Phaser.Physics.ARCADE ;  


         abri1 = game.add.sprite(330,450,'abri') ;  // 130 , 450  First abri 
          
           abri1.scale.setTo(1);  // rattrecie  
           abri1.enableBody = true ;  // detecter la colision AV     
           abri1.physicBodyType = Phaser.Physics.ARCADE ; 

         abri2 = game.add.sprite(530,450,'abri') ;  // 130 , 450  First abri 
          
           abri2.scale.setTo(1);  // rattrecie  
           abri2.enableBody = true ;  // detecter la colision AV     
           abri2.physicBodyType = Phaser.Physics.ARCADE ; 

        abri3 = game.add.sprite(730,450,'abri') ;  // 130 , 450  First abri 
          
           abri3.scale.setTo(1);  // rattrecie  
           abri3.enableBody = true ;  // detecter la colision AV     
           abri3.physicBodyType = Phaser.Physics.ARCADE ; 

        abri4 = game.add.sprite(930,450,'abri') ;  // 130 , 450  First abri 
          
           abri4.scale.setTo(1);  // rattrecie  
           abri4.enableBody = true ;  // detecter la colision AV     
           abri4.physicBodyType = Phaser.Physics.ARCADE ; 
*/
    
     
    
        abri = game.add.group() ;
        abri.scale.setTo(1);  // rattrecie   
        abri.enableBody = true ;  // detecter la colision AV 
        abri.physicBodyType = Phaser.Physics.ARCADE ;     
        abri.x = 130 ; 
        abri.y = 470 ;
        for(var y = 0 ; y < 1 ; y++)
        {
            for(var x = 0 ; x < 5 ; x++)
            {
               abri.create(x*200, y*110 , 'abri')  // distance entre eux 
            }
        }
     
        // TIR 


        BoutonTir =  game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR) ; 
        tir = game.add.group();
        tir.enableBody = true ;  // detecter la colision AV 
        tir.physicBodyType = Phaser.Physics.ARCADE ; 
        tir.createMultiple(20, 'laser')   ; 

        tir.setAll('anchor.x' , 0.5 ) ; 
        tir.setAll('anchor.y' , 1 ) ; 
        tir.setAll('outOfBoundsKill' , true ) ; 
        tir.setAll('checkWorldBounds', true) ; 


        // enemis 
        ennemis = game.add.group();
        ennemis.scale.setTo(0.4);  // rattrecie 
         
        ennemis.enableBody = true ;  // detecter la colision AV 
        ennemis.physicBodyType = Phaser.Physics.ARCADE ; 


    }, // fin de créate 

    Soundfunction : function() {
        // au clic sur le bouton son on stop la musique
        if(sound = true ) {
            this.loopMusic.pause();	  

            sound = false ;   

            console.log("Pause") ; 
            console.log(sound) ;  

            // mettre le sprite de la croix 
        }

        if (sound = false) {

            this.loopMusic.play();  
            sound = true ; 
            console.log("Play") ;  
            
            // mettre le sprite de la voix
        }
       
    },
    startGame: function() {
        stateGame = STATE_GAME_PLAYING  ; 
        this.buttonPlay.visible = false ; 
        console.log("Click") ;
        
        // Sound 
        this.loopMusic.loop = true;
        
        this.loopMusic.play();	
        sound = true ; 
        console.log(sound) ; 
    },
// ******************************************************
// ************ UPDATE
// ******************************************************
    update: function() {
        switch(stateGame) {
            case STATE_GAME_NONE:

                break;
            case STATE_GAME_LOADING:

                break; 
            case STATE_GAME_PLAYING:

            if(cursores.right.isDown)
            {
                nave.position.x += 10 ; 
            }
            else if (cursores.left.isDown)
            {
                nave.position.x -= 10 ; 
            }
   

            var bala ; 
            if(BoutonTir.isDown && TirOk >= 0 )      // Gestion du tir 
            {
                if(game.time.now > tempsballe )
                {
                   bala = tir.getFirstExists(false)  ; 
                }
                if(bala)
                {
                   bala.reset(nave.x , nave.y) ;
                   bala.body.velocity.y = -500 ;  // vitesse de la balle   // -300 
                   tempsballe = game.time.now + 50 ;  // temps entre les balles  // +100 

                }
            }

            // Colision entre enemis et la balle 
            game.physics.arcade.overlap(tir , ennemis , colision , null , this ) ;  // execution de la collision()

            // colision entre balle et abri 
            game.physics.arcade.overlap(tir , abri , colisionabri , null , this ) ;  // execution de la collisionabri()
      //      game.physics.arcade.overlap(tir , tababri[0] , colisionabri0 , null , this ) ;  // execution de la collisionabri0()


     //       game.physics.arcade.overlap(tir , abri1 , colisionabri , null , this ) ;  // execution de la collisionabri1()

            // colision loose
            game.physics.arcade.overlap(ennemis , nave , loose1 , null , this ) ;  
            game.physics.arcade.overlap(ennemis , abri , loose2 , null , this ) ; 
     
            // Faire apparaitre un nouveau groupe de mobs 
            if (nbrMobs === 0 )  
            {
                nbrMobs = +54 ; 
          //      console.log(nbrMobs) ; 
                TirOk = -2 ; 
                
            // Function de text 



            textManche() ;
            setTimeout(stopText,2500)      
            setTimeout(mancheSuivante, 3000) //On attend 3 secondes avant d'exécuter la fonction

            }  // Fin de la recreation de mobs 

            if (Vie == 0 ) {
                // Afficher game Over et arreter le jeux / button play // et mettre le score 
                // ecran de score 
            }



                break; 
            case STATE_GAME_GAME_OVER:
                // quand on perd, on envoie le score dans la base de donné 

                break; 
            case STATE_GAME_WIN:

                break;
        } // fin du switch 




    }, // fin de update  



} ;  // fin du gameplaymanager 

// ******************************************************
// ************ MANCHE SUIVANTE
// ******************************************************
function mancheSuivante ()  {    
    manche = manche + 1 ; 
    console.log("manche " + manche )


     TirOk = TirOk + 2  ; 

    for(var y = 0 ; y < 6 ; y++)
    {
        for(var x = 0 ; x < 9 ; x++)
        {
            var enemigo = ennemis.create(x*200, y*110 , 'enemigo'); // distance entre eux  // 130 et 110
            enemigo.anchor.setTo(0.5) ; 
        }
    }


    ennemis.x = 50 ; 
    ennemis.y = 60 ; 

    // on annime le groupe 
    var annim = game.add.tween(ennemis).to({x:430} , 5000 ,  // x= axe pour bouger 430 , 5000 = time ,  */ 
    Phaser.Easing.Linear.None , true , 0, 1000, true ) ; 

    annim.onRepeat.add(descender,this) ; // et pas onloop 
   
     //   console.log(annim) ; 
}

function textManche() {
    text = game.add.text(game.world.centerX, game.world.centerY,"manche " + manche);
    //  Centers the text
    text.anchor.set(0.5);
    text.align = 'center';

    //  Our font + size
    text.font = 'Arial';
    text.fontWeight = 'bold';
    text.fontSize = 70;

    //  Here we create a linear gradient on the Text context.
    //  This uses the exact same method of creating a gradient as you do on a normal Canvas context.
    var grd = text.context.createLinearGradient(0, 0, 0, text.height);

    //  Add in 2 color stops
    grd.addColorStop(0, '#8ED6FF');   
    grd.addColorStop(1, '#004CB3');

    //  And apply to the Text
    text.fill = grd;
    
}
function stopText() {
    text.destroy();
}
// ******************************************************
// ************ colision  
// ******************************************************
function loose1(nave,enemigo) {
    console.log("colision nave enemis ") ; 
}

function loose2(abri,enemigo) {
    console.log("colision abri enemis ") ;

    Vie = Vie -1 ; 
    console.log(Vie) ; 

}


function colisionabri(bala,abri) {
    bala.kill() ; 
    // si resistance abri = .. on chang le sprite X3 

    if(resistanceAbri == 0 )
    {
        abri.kill() ; 
        resistanceAbri = resistanceAbri + 12 ; 
    }


    resistanceAbri = resistanceAbri-1 ;

    console.log(resistanceAbri) ; 
}


/*
function colisionabri0(bala,tababri[0]) {
console.log("aatab0") ;
}
*/



function colision(bala , enemigo) {
    bala.kill() ; 
    enemigo.kill() ; 

    score = score+5  ; 

    document.getElementById("score").innerHTML = " SCORE : " + score  + "       LIFE : " + Vie   ; 

    nbrMobs = nbrMobs-1 ;
//     console.log(nbrMobs) ; 
   // console.log(nbrMobs + "  nombre de mobs restant") ;
   // console.log(score + "  Votre Score") ; 
}

// ******************************************************
// ************ DESCENDER 
// ******************************************************
function descender() {
        ennemis.y +=10; 

}


// positionement de l'interface dans la div id="interface"  A voir uniquement dans cette div 
var game = new Phaser.Game (1136 , 640, Phaser.AUTO,'interface') ; 

game.state.add('gameplay' , GamePlayManager) ; 

game.state.start('gameplay') ; 

