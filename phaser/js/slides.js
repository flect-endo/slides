var Scene = Scene || {};

// ページの順番（ページを入れ替える場合はここを変更）
var pages = ["Title", "Intro", "Motivation", "Theme",
             "PhaserLogo",
             "Phaser", "PhaserFeature",
             "Animation", "Monsters", "Future",
             "Conclusion", "End"];

Scene.Title = function(game) {
  this.game = game;
}
Scene.Title.prototype = {
  create: function() {
    game.stage.backgroundColor = color.font;

    var x = game.world.width/2 - 300;

    var text = game.add.text(x, 80, "LT");
    text.fontSize = 240;
    text.fill = "#f08080";
    text.stroke = '#ffffff';
    text.strokeThickness = 6;

    var text = game.add.text(x+260, 220, "なんかしゃべるぞ(仮)");
    text.fontSize = 40;
    text.fill = "#f08080";
    text.stroke = '#ffffff';
    text.strokeThickness = 6;

    var text = game.add.text(x+260, 260, "Lightning Talk BETA");
    text.fontSize = 32;
    text.fill = "#f08080";
    text.stroke = '#ffffff';
    text.strokeThickness = 6;

    var name = game.add.text(x+60, 400, "Takumi Endo");
    name.fontSize = 80;
    name.fill = color.font2;
  },
  update: function() {
    if (changePage("Title")) {
      game.stage.backgroundColor = color.background;
    }
  },
  render: function() {
    // game.debug.text(game.time.fps + 'fps', game.world.width-80, 20);
  }
}

Scene.Intro = function(game) {
  this.game = game;
};
Scene.Intro.prototype = {
  wakaba: null,
  preload: function() {
    game.load.image('wakaba', 'assets/wakaba.png');
  },
  create: function() {
    wakaba = game.add.sprite(game.world.width-100, 380, 'wakaba');
    wakaba.scale.x = 0.5;
    wakaba.scale.y = 0.5;
    wakaba.anchor.setTo(0.5, 0.5);

    title("自己紹介");
    items([
      "・名前",
      "    ・遠藤 匠",
      "",
      "・2015年2月入社（もうすぐ3ヶ月）"
    ]);
  },
  update: function() {
    if (isKeyDown('Z')) {
      wakaba.x += 4;
      wakaba.y -= 4;
    } else if (isKeyDown('X')) {
      wakaba.x -= 4;
      wakaba.y += 4;
    }
    changePage("Intro");
  },
};

Scene.Motivation = function(game) {
  this.game = game;
};
Scene.Motivation.prototype = {
  create: function() {
    title("Works");
    items([
      "・前職",
      "    ・業務用Webアプリ",
      "    ・Java, Ruby, JavaScriptなど",
      "    ・非クラウドな世界",
      "・今",
      "    ・モバイルアプリ",
      "    ・クラウドMIX"
    ], {fontSize: 40});
  },
  update: function() {
    changePage("Motivation");
  }
};

Scene.Theme = function(game) {
  this.game = game;
};
Scene.Theme.prototype = {
  create: function() {
    title("今日話すこと");
    // items([
    //   "＿人人人人人人人人人人＿",
    //   "＞　突然のJavaScript　＜",
    //   "￣Y^Y^Y^Y^Y^Y^Y^Y^Y￣"
    // ]);
    textCenter([
      "最近(今月)興味のあること",
      "内容は薄いです…",
      "たぶん役に立ちません…"
    ], {fontSize: 80, y: 200});
  },
  update: function() {
    changePage("Theme");
  }
};

Scene.PhaserLogo = function(game) {
  this.game = game;
};
Scene.PhaserLogo.prototype = {
  phaserLogo: null,
  preload: function() {
    game.load.image('logo', 'assets/phaser-logo.png');
  },
  create: function() {
    game.stage.backgroundColor = color.font;

    phaserLogo = game.add.sprite(game.world.width/2, game.world.height/2, 'logo');
    phaserLogo.anchor.setTo(0.5, 0.5);
  },
  update: function() {
    if (isKeyDown('Z')) {
      phaserLogo.scale.setTo(1.5, 1.5);
    } else if (isKeyDown('X')) {
      phaserLogo.scale.setTo(1, 1);
    }

    if (changePage("PhaserLogo")) {
      game.stage.backgroundColor = color.background;
    }
  }
};

Scene.Phaser = function(game) {
  this.game = game;
};
Scene.Phaser.prototype = {
  create: function() {
    // wakaba.scale.x = 0.5;
    // wakaba.scale.y = 0.5;
    // wakaba.anchor.setTo(0.5, 0.5);
    title("Phaser");
    items([
      "・HTML5製の2Dゲームフレームワーク",
      "・クロスプラットフォーム",
      "・豊富なドキュメントとサンプル",
      "・MITライセンス"
    ]);
  },
  update: function() {
    changePage("Phaser");
  }
};

Scene.PhaserFeature = function(game) {
  this.game = game;
};
Scene.PhaserFeature.prototype = {
  create: function() {
    title("Phaserの特徴");
    items([
      "・Canvas/WebGL レンダリング",
      "・フルスタック",
      "    ・アニメーション",
      "    ・物理演算エンジン",
      "    ・衝突検知",
      "    ・メインループやシーン制御",
      "・TypeScriptサポート"
    ], {fontSize: 48});
  },
  update: function() {
    changePage("PhaserFeature");
  }
};

Scene.Animation = function(game) {
  this.game = game;
};
Scene.Animation.prototype = {
  monster: null,
  hone: null,
  kabocha: null,
  rotating: false,
  angle: 0.5,
  mode: 0,
  speed: 3,
  preload: function() {
    game.load.image('monster', 'assets/pipo-enemy016.png');
    game.load.spritesheet('hone', 'assets/hone.png', 32, 32, 12);
    game.load.spritesheet('kabocha', 'assets/kabocha.png', 32, 32, 12);
  },
  create: function() {
    title("アニメーション");

    // monster = game.add.sprite(game.world.width/2, game.world.height/2, 'monster');
    // monster.anchor.setTo(0.5, 0.5);

    var hone = game.add.sprite(40, 120, 'hone', 1);
    hone.scale.set(4);
    hone.smoothed = false;
    game.physics.arcade.enable(hone);
    this.hone = hone;

    var repeat = true;
    hone.animations.add('down', [0, 1, 2], 5, repeat);
    hone.animations.add('left', [3, 4, 5], 5, repeat);
    hone.animations.add('right', [6, 7, 8], 5, repeat);
    hone.animations.add('up', [9, 10, 11], 5, repeat);

    hone.animations.play('down');

    var kabocha = game.add.sprite(game.world.width/2, game.world.height/2, 'kabocha', 1);
    kabocha.anchor.setTo(0.5, 0.5);
    kabocha.scale.set(4);
    kabocha.smoothed = false;
    // game.physics.arcade.enable(hone);
    this.kabocha = kabocha;

    kabocha.animations.add('walk', [0, 1, 2], 5, repeat);
    // kabocha.animations.play('walk');
  },
  update: function() {
    var speed = this.speed;
    if (isKeyDown('J')) {
      this.hone.animations.play('down');
      this.hone.y += speed;
    } else if (isKeyDown('H')) {
      this.hone.animations.play('left');
      this.hone.x -= speed;
    } else if (isKeyDown('L')) {
      this.hone.animations.play('right');
      this.hone.x += speed;
    } else if (isKeyDown('K')) {
      this.hone.animations.play('up');
      this.hone.y -= speed;
    } else if (isKeyDown('A')) {
      this.speed = 6;
    } else if (isKeyDown('S')) {
      this.hone.angle += 1;
    }

    // Zを押すごとに回転が早くなる（やりすぎ注意）
    // Xで回転停止（回転速度もリセット）
    if (isKeyDown('Z')) {
      if (!this.rotating) {
        this.angle = 1;
      }
      this.rotating = true;
      this.angle += 0.5;
    } else if (isKeyDown('X')) {
      this.rotating = false;
      this.angle = 0;
    } else if (isKeyDown('C')) {
      this.hone.scale.setTo(8, 8);
      this.kabocha.scale.setTo(8, 8);
    }

    if (this.rotating) {
      this.kabocha.angle += this.angle;
    } else {
      this.kabocha.angle += 1;
    }
    changePage("Animation");
  }
};

Scene.Monsters = function(game) {
  this.game = game;
};
Scene.Monsters.prototype = {
  monsterGroup: null,
  monsters: [],
  preload: function() {
    game.load.image('monster1', 'assets/pipo-enemy009.png');
    game.load.image('monster2', 'assets/pipo-enemy012.png');
    game.load.image('monster3', 'assets/pipo-enemy016.png');
    game.load.image('monster4', 'assets/pipo-enemy002a.png');
  },
  create: function() {
    title("物理演算エンジン");

    // monsterGroup = game.add.group();
    // monsterGroup.enableBody = true; // 物理演算をオン
    // monsterGroup.physicsBodyType = Phaser.Physics.ARCADE;
    this.monsterGroup = game.add.physicsGroup(Phaser.Physics.ARCADE);

    var names = ["monster1", "monster2", "monster3", "monster4"];
    for (var i=0; i<12; i++) {
      var monster = this.monsterGroup.create(180+i*68, 80, names[i%4]);
      monster.body.collideWorldBounds = true;
      monster.body.gravity.setTo(0, 0);
      monster.body.bounce.setTo(0.9, 0.9);
      this.monsters.push(monster);
    }
  },
  update: function() {
    if (isKeyDown("Z")) {
      this.monsters.forEach(function(monster) {
        // monster.body.bounce.setTo(0.6, 0.6);
        monster.body.gravity.x = game.rnd.integerInRange(-50, 50);
        monster.body.gravity.y = 100 + Math.random() * 100;
      });
    }

    // game.physics.arcade.collide(this.monsterGroup);
    changePage("Monsters");
  }
};

Scene.Future = function(game) {
  this.game = game;
};
Scene.Future.prototype = {
  create: function() {
    title('ゲームUI × "何か"');
    items([
      '・"何か" is ...',
      "      Heroku",
      "      Salesforce",
      "      WebSocket",
      "      Ionic",
      "・JavaScriptなので応用範囲は広い"
    ], {fontSize: 50});
  },
  update: function() {
    changePage("Future");
  }
};

Scene.Conclusion = function(game) {
  this.game = game;
};
Scene.Conclusion.prototype = {
  create: function() {
    title("まとめ");
    items([
      "・Phaserというライブラリの紹介",
      "    ・個人で遊ぶならとてもいい感じ",
      "・Presentation as Code",
      "    ・1回やってみたかった",
      "    ・やっぱりパワポは便利"
    ]);
  },
  update: function() {
    changePage("Conclusion");
  }
};

Scene.End = function(game) {
  this.game = game;
};
Scene.End.prototype = {
  create: function() {
    textCenter([
      "ありがとうございました",
      "　　　　m(_ _)m"
    ], {fontSize: 80, y: (game.world.height/2)});
  },
  update: function() {
    changePage("End");
  }
};