// defini le jeux 

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


        this.cursors = game.input.keyboard.createCursorKeys() ; 
        this.pressEnable = true ; 
    },

// ******************************************************
// ************ PRELOAD
// ******************************************************

    preload: function() {
        stateGame = STATE_GAME_LOADING  ; 
        game.load.image('background', 'Contenu/images/background.jpg') ; // XX x XX 
        game.load.image('shooter', 'Contenu/images/shooter1.png') ; // XX x XX 
        game.load.image('mobs1', 'Contenu/images/mobs1.png') ; // XX x XX

        game.load.spritesheet('buttonPlay', 'Contenu/images/buttonPlay.png' , 65,65,2 ) ; // XX x XX  


        // sound 
        game.load.audio('loopMusic','Contenu/sounds/sound1.mp3');  // song 
        game.load.audio('sfxHit', 'assets/sounds/sfxHit.mp3');
        game.load.audio('sfxGameOver', 'assets/sounds/sfxGameOver.mp3');
    },    

// ******************************************************
// ************ CREATE
// ******************************************************

    create: function() {
        game.add.sprite(0,0,'background') ; 


        // Sound 
        this.sound1 = game.add.audio('sound1');
        this.sfxHit = game.add.audio('sfxHit');
        this.loopMusic = game.add.audio('loopMusic');		


        //shooter
      
        this.shooter = game.add.sprite(530,540 ,'shooter') ;  // 530_540 
        this.shooter.anchor.setTo(0.5) ; 
        this.shooter.scale.setTo(0.3);  // rattrecie le shooter 
            //  this.shooter.collideWorldBounds = true ;
            //  this.shooter.angle = 45 ; 
            // this.shooter.alpha = 0.8 ; // pour la transparance 
 

        // Mobs 1 
        this.mobs1 = game.add.sprite(50,50,'mobs1') ; 
        this.mobs1.scale.setTo(0.5) ;  // ratrécie le mobs 1 

        //Button Play
        this.buttonPlay = game.add.button(game.width/2 , game.height/2, 'buttonPlay',this.startGame,
        this, 1,0,1,0) ; 
        this.buttonPlay.anchor.setTo(0.5) ; // place le buttonplay au centre 
        this.buttonPlay.scale.setTo(2);  // Augmante la taille du bouton play 
    },

    startGame: function() {
        stateGame = STATE_GAME_PLAYING  ; 
        this.buttonPlay.visible = false ; 
        console.log("Click") ; 


        // Sound 
		this.loopMusic.loop = true;
        this.loopMusic.play();		
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

                if(this.cursors.left.isDown && this.pressEnable ){
                    console.log("Goleft") ;
                    this.pressEnable = true ; // pour avoir un clic en continue 
                     this.shooter.x = this.shooter.x-5;  // deplace shooter vers la gauche  
                    
                     
                }

                else if(this.cursors.right.isDown && this.pressEnable ){
                    console.log("Goright") ;
                    this.pressEnable = true ; // pour avoir un clic en continue 
                    this.shooter.x = this.shooter.x+5; // deplace shooter vers la droite 
                     
                    
                }

               if(this.cursors.left.isUp && this.cursors.right.isUp){
                   this.pressEnable = true ;                     
               }

                break; 
            case STATE_GAME_GAME_OVER:

                break; 
            case STATE_GAME_WIN:

                break;



        } // fin du switch 
     //   this.shooter.angle ++ ; 
        
    } // fin de update 

}  // fin du gameplaymanager 

// positionement de l'interface dans la div id="interface"  A voir uniquement dans cette div 
var game = new Phaser.Game (1136 , 640, Phaser.AUTO,'interface') ; 

game.state.add('gameplay' , GamePlayManager) ; 
game.state.start('gameplay') ; 