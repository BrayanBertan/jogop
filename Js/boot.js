var bootState = {
	preload: function(){
		jogo.load.image('barraProgresso','Fontes/Carregamentos/barraProgresso.png');	
		jogo.load.image('fundoLoad','Fontes/Menu/fundo.png');	
	},
	create: function(){		
    	jogo.state.start('load');	
	}
};