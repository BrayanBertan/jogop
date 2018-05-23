var jogo = new Phaser.Game(800,400,Phaser.CANVAS,'jogo');
    
    jogo.state.add('boot',bootState);
    jogo.state.add('load',loadState);
    jogo.state.add('menu',menuState);
    jogo.state.add('menuFases',menuFasesState);
    jogo.state.add('primeiraFase',primeiraFaseState);

    jogo.state.start('boot');
