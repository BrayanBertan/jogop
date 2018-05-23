var primeiraFaseState = {

    var: jogador=null,
    var: monstroZombie=null,
    var: cenarioPlataformas=null,
    var: cenarioGrupoArvores=null,
    var: cursors=null,
    var: cenarioGrupoNuvem=null,
    var: cenarioNuvem=null,
    var: itemGrupoJoias=null,
    var: cenarioGrupoLavas=null,
    var: cenarioLava=null,
    var: cenarioPortal=null,
    var: vida=3,
    var: txtVida='',
    var: joiasColetadas=0,
    var: txtJoiasColetadas='',


    create: function(){



        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //Tamanho total da fase;
        this.game.world.setBounds(0, 0,1250,600);

        this.game.physics.arcade.enable(this.game);

        this.game.stage.backgroundColor=0x87CEEB;



        //Plataformas
        cenarioPlataformas = this.game.add.group();

        cenarioPlataformas.enableBody = true;
        var chao = cenarioPlataformas.create(0, this.game.world.height -64, 'chao');

        chao.scale.setTo(4,4);//aumenta o item xd
        chao.body.immovable = true;


        var plataforma = cenarioPlataformas.create(400,362, 'plataformasImagem');
        plataforma.body.immovable = true;

        plataforma = cenarioPlataformas.create(-62,312, 'plataformasImagem');
        plataforma.body.immovable = true;
        plataforma = cenarioPlataformas.create(722,232, 'plataformasImagem');
        plataforma.body.immovable = true;

        plataforma = cenarioPlataformas.create(1082,422, 'plataformasImagem');
        plataforma.body.immovable = true;

        cenarioPortal = this.game.add.sprite(1192,342, 'cenarioPortal');


        this.game.physics.arcade.enable(cenarioPortal);



        cenarioPortal.animations.add('giraPortal', [0,1], 10, true);




        itemGrupoJoias = this.game.add.group();
        itemGrupoJoias.enableBody = true;


        var joia = itemGrupoJoias.create(42,242, 'joia');
        var joia = itemGrupoJoias.create(552, this.game.world.height -134, 'joia');
        var joia = itemGrupoJoias.create(792,162, 'joia');

        itemGrupoJoias.callAll('animations.add', 'animations', 'spin', [0, 1, 2], 10, true);









        cenarioGrupoLavas = this.game.add.group();
        cenarioGrupoLavas.enableBody = true;
        cenarioLava = cenarioGrupoLavas.create(this.game.world.width-450, this.game.world.height-42, 'cenarioLava');
        this.game.physics.arcade.enable(cenarioLava);
        cenarioLava.body.immovable = true;
        cenarioLava.scale.setTo(3.3);





        cenarioGrupoArvores = this.game.add.group();
        cenarioGrupoArvores.enableBody = true;
        this.game.physics.arcade.enable(cenarioGrupoArvores);
        var cenarioArvore = cenarioGrupoArvores.create(492, this.game.world.height -134, 'cenarioArvore');
        cenarioArvore.body.immovable = true;
        cenarioArvore = cenarioGrupoArvores.create(3, this.game.world.height -134, 'cenarioPlacaInicio');
        cenarioArvore.body.immovable = true;








        //==================================Zombie Normal============================================================
        monstroZombie=this.game.add.sprite(375,this.game.world.height-142,'zombieNormal');
        this.game.physics.arcade.enable(monstroZombie);
        monstroZombie.body.collideWorldBounds = true;
        monstroZombie.body.immovable = true;
        monstroZombie.body.bounce.setTo(1, 1);
        monstroZombie.body.velocity.x = 250;
        monstroZombie.animations.add('monstroAnimacaoxd', [1,1,2,3,4,5,6,7,8], 10, true);
        //============================================================





        // for (var i = 0; i < 150; i++)
        //{
        //   game.add.sprite(game.world.randomX, game.world.randomY, 'bola');
        //}


        //==================================Jogador============================================================
        // The jogador and its settings
        jogador = this.game.add.sprite(52, this.game.world.height -152, 'jogador');

        //  We need to enable physics on the jogador
        this.game.physics.arcade.enable(jogador);
        //  Player physics properties. Give the little guy a slight bounce.
        jogador.body.bounce.y = 0.2;
        jogador.body.gravity.y = 300;
        jogador.body.collideWorldBounds = true;

        //  Our two animations, walking left and right.
        jogador.animations.add('right', [0,1], 10, true);
        jogador.animations.add('left', [2,3], 10, true);
        //===========================================================






        //  The vida
        var t = txtVida = this.game.add.text(4, 42, 'Vida: 3', { fontSize: '32px', fill: '#000' });
        t.fixedToCamera = true;
        var q = txtJoiasColetadas = this.game.add.text(126,42, 'Joias:0', { fontSize: '32px', fill: '#000' });
        q.fixedToCamera = true;


        var emitter = this.game.add.emitter(-22, 122, 250);

        emitter.width = this.game.world.width;
        // emitter.angle = 30; // uncomment to set an angle for the rain.

        emitter.makeParticles('gotas');

        emitter.minParticleScale = 0.1;
        emitter.maxParticleScale = 0.5;

        emitter.setYSpeed(300, 500);
        emitter.setXSpeed(-5, 5);

        emitter.minRotation = 0;
        emitter.maxRotation = 0;

        emitter.start(false, 1600, 5, 0);


        //  Our controls.
        cursors = this.game.input.keyboard.createCursorKeys();

        this.camera.follow(jogador);










    },

    update: function() {



        //  And play them
        itemGrupoJoias.callAll('animations.play', 'animations', 'spin');

        if(jogador.position.y>this.game.world.height-122){
            this.encostouNaLava(jogador);
        }




        //  Collide the jogador and the stars with the platforms
        this.game.physics.arcade.collide(jogador, cenarioPlataformas);
        this.game.physics.arcade.collide(jogador, cenarioGrupoArvores);
        this.game.physics.arcade.collide(jogador, monstroZombie,this.encostaNoZombie,null,this);

        //  Checks to see if the jogador overlaps with any of the stars, if he does call the collectStar function
        //this.game.physics.arcade.overlap(jogador,monstroZombie, this.collectStar, null, this);
        this.game.physics.arcade.overlap(jogador,itemGrupoJoias, this.qtdJoiasCole, null, this);



        monstroZombie.animations.play('monstroAnimacaoxd');
        cenarioPortal.animations.play('giraPortal');





        //  Reset the players velocity (movement)
        jogador.body.velocity.x = 0;

        if (cursors.right.isDown)
        {
            //  Move to the right
            jogador.body.velocity.x = 150;
            jogador.animations.play('right');
        }
        else if (cursors.left.isDown)
        {
            //  Move to the right
            jogador.body.velocity.x = -150;
            jogador.animations.play('left');
        }
        else
        {
            //  Stand still
            jogador.animations.stop();

            jogador.frame = 4;
        }

        //  Allow the jogador to jump if they are touching the ground.
        if (cursors.up.isDown && jogador.body.touching.down)
        {
            jogador.body.velocity.y = -352;
            jogador.animations.play('right');
        }

    },



    encostaNoZombie: function (player, zombie) {

        //  Add and update the vida
        vida -=1;
        txtVida.text = 'Vida: ' + vida;
        if(vida<=0){
            jogador.kill();
        }

    },

    encostouNaLava: function (player) {
        jogador.kill();

    },

    qtdJoiasCole: function(player,joia) {

        joia.kill();
        joiasColetadas+=1;
        txtJoiasColetadas.text = 'Joias: ' + joiasColetadas;

    }




};
