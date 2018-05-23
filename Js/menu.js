var menuState = {
	create: function(){
		var txtNome = jogo.add.text(jogo.world.centerX,175,'O JOGO MESMO',{font:'25px Verdana', fill:'#fff'});
			txtNome.anchor.set(.5);
		var botao   = jogo.add.button((Math.random() * (800 - 0) + 0),(Math.random() * (400 - 0) + 0),'botaoJogar',this.menuFases,this);

		jogo.add.tween(botao).to({y:jogo.world.centerY,x:325},1000).start();
        
	},
	menuFases: function() {
        jogo.state.start('menuFases');
    }

};