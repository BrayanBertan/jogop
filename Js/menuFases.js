var menuFasesState = {
	create: function(){
		jogo.add.sprite(0,0,'fundoMenuFases');
		var botaoFase1   = jogo.add.button(75,100,'btnFase1',this.fase1,this);
		var botaoFase2   = jogo.add.button(250,100,'btnFase2',this.fase2,this);
		var botaoFase3   = jogo.add.button(425,100,'btnFase3',this.fase3,this);
		var botaoFase4   = jogo.add.button(600,100,'btnFase4',this.fase4,this);
		var botaoFase5   = jogo.add.button(75,250,'btnFase5',this.fase5,this);
		var botaoFase6   = jogo.add.button(250,250,'btnFase6',this.fase6,this);
		var botaoFase7   = jogo.add.button(425,250,'btnFase7',this.fase7,this);
		var botaoFase8   = jogo.add.button(600,250,'btnFase8',this.fase8,this);
		var textoFase    = jogo.add.sprite(jogo.world.centerX,50,'tituloFases');
			textoFase.anchor.set(.5);
	},
	fase1: function(){

        jogo.state.start('primeiraFase');

	},
	fase2: function(){

	},
	fase3: function(){

	},
	fase4: function(){

	},
	fase5: function(){

	},
	fase6: function(){

	},
	fase7: function(){

	},
	fase8: function(){

	}							
};