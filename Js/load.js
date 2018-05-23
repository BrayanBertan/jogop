var loadState = {
	preload: function(){
	    jogo.add.sprite(0,0,'fundoLoad');
	    var txtCarregando  = jogo.add.text(jogo.world.centerX,175,'Carregando...',{font:'25px Verdana'});
	    	txtCarregando.anchor.set(.5);
		var barraProgresso = jogo.add.sprite(jogo.world.centerX,200,'barraProgresso');
			barraProgresso.anchor.set(.5);
		jogo.load.setPreloadSprite(barraProgresso);

		jogo.load.image('botaoJogar','Fontes/Menu/BotaoJogar.png');
		jogo.load.image('fundoMenuFases','Fontes/MenuDeFases/fundoFases.png');
		jogo.load.image('tituloFases','Fontes/MenuDeFases/tituloFases.png');
		jogo.load.image('btnFase1','Fontes/MenuDeFases/btnFase1.png');
		jogo.load.image('btnFase2','Fontes/MenuDeFases/btnFase2.png');
		jogo.load.image('btnFase3','Fontes/MenuDeFases/btnFase3.png');
		jogo.load.image('btnFase4','Fontes/MenuDeFases/btnFase4.png');
		jogo.load.image('btnFase5','Fontes/MenuDeFases/btnFase5.png');
		jogo.load.image('btnFase6','Fontes/MenuDeFases/btnFase6.png');
		jogo.load.image('btnFase7','Fontes/MenuDeFases/btnFase7.png');
		jogo.load.image('btnFase8','Fontes/MenuDeFases/btnFase8.png');


        jogo.load.image('gotas', 'Fontes/particulas/gotaDeChuva.png');
        jogo.load.image('menuFundo', 'Fontes/menu/menuFundo.png');
        jogo.load.image('botaoJogar', 'Fontes/menu/botaoJogar.png');
        jogo.load.spritesheet('cenarioPortal', 'Fontes/folhas/portalSheet.png',62,82);
        jogo.load.spritesheet('joia', 'Fontes/folhas/joiaSheet.png',43,37);
        jogo.load.image('cenarioArvore', 'Fontes/cenario/arvore.png');
        jogo.load.image('chao', 'Fontes/cenario/chao.png');
        jogo.load.image('plataformasImagem', 'Fontes/cenario/plataforma.png');
        jogo.load.spritesheet('zombieNormal', 'Fontes/folhas/zombieSheet.png',94,74);
        jogo.load.spritesheet('jogador', 'Fontes/folhas/playerSheet.png',38,69);
        jogo.load.image('nuvem', 'Fontes/cenario/Nuvem.png',222,82);
        jogo.load.image('cenarioLava', 'Fontes/cenario/lava.png',222,82);
        jogo.load.image('cenarioPlacaInicio', 'Fontes/cenario/placainicio.png');

	},
	create: function(){
		jogo.state.start('menu');
	}
};