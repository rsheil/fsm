/* This creates a pokemon with stats (1-10), only creates if stats add up to over 30; level is determined by subtracting base 30 from sum of stats (0-30);
 name generated randomly with length same as level;
if level zero : then name is 10 1's and 0's. I haven't added a way to save once created */

/* this prints everyhting from console to page*/
/*(function () {
    if (!console) {
        console = {};
    }
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + "\n"+ '<br />';
        } else {
            logger.innerHTML += message + "\n" + '<br />';
        }
    }
})();*/


var statgen = function(){
    this.at = Math.random() *10;
    this.def = Math.random() *10;
    this.spe = Math.random() *10;
    this.sa = Math.random() *10;
    this.sd = Math.random() *10;
    this.hp = Math.random() *10;
}

var statsum = function(){
    this.sum = this.at + this.def + this.spe + this.sa + this.sd + this.hp;
};


var pklevel = function(){
    this.level = this.sum - 30;
    this.level = Math.floor(this.level);
};

/* makes a random name with length of level number*/
var namegen = function(){
    this.name = "";
    var possible = "aaaaaaaaaaaaaaaaabcdeeeeeeeeeeeeeeefghiiiiiiiiiiiiiiiiijklllmnnnoooooooooopqrrrrrrrssssssssssttttttttttuuuuuuuuuuuuuuuvwwwwwwwwwxyyyyyyyyyyyyz";
    var possiblezero ="x"
    var namein = this.level
    if (namein == 0){
        for( var i=0; i < namein + 1; i++ )
        this.name += possiblezero.charAt(Math.floor(Math.random() * possiblezero.length));
    }
      
    else {
        for( var i=0; i < namein; i++ )
            this.name += possible.charAt(Math.floor(Math.random() * possible.length));
    }
};

/* creates pkmn with random stats that at least add up to 30*/
var createpkmn = function(){
    var statwhile = true
    while(statwhile = true){
        this.statgen();
        this.statsum();
        this.levelcalc();
        this.namegen();
        if (this.sum >= 30){
            statwhile = false;
            break;
        }
        else{
        
        }
    }
};


/*pkmn base template*/

function pktemp(){
    this.at = 6;
    this.def = 6;
    this.spe = 6;
    this.sa = 6;
    this.sd = 6;
    this.hp = 6;
    this.sum = 10;
    this.name = "Name";
    this.statgen = statgen;
    this.statsum = statsum;
    this.level = 1;
    this.namegen = namegen;
    this.levelcalc = pklevel;
    this.create = createpkmn;
    var hp_hid = this.hp;
    this.hpaccess = function(){
        this.hphide = hp_hid;
    };
}


/* list of created pkmn*/
var listpkmn = [];

/* creates x number of pokemon over base stat 30 and prints their names*/
var Create_random_pkmn = function(number){
    for (i = 0; i < number; i++){
        listpkmn[i] = new pktemp();
    };
    for (i = 0; i in listpkmn; i++){
        listpkmn[i].create();
    };
    /*for (i = 0; i in listpkmn; i++){
        console.log(listpkmn[i].name,listpkmn[i].level);
    };*/
}

/* create 2 random pkmn */
Create_random_pkmn(2);


/*  attack example (should be in pkmn object)*/
var attack1 = {
}
attack1.stat = 2.0;
attack1.name = "sucker punch";
attack1.type = 1;

var attack2 = {
    stat: 3,
    name: "cunt punt",   
    type: 1
}

function attacktemp(stat,name,type){
    this.stat = stat;
    this.name = name;
    this.type = type;
};

var attack8  = new attacktemp(0.8,"fire punch", 2);
var attack7  = new attacktemp(1.5,"ice punch", 2);
var attack3  = new attacktemp(2,"poo throw", 2);
var attack6  = new attacktemp(2,"ball shot", 1);
var attack4  = new attacktemp(1.2,"bitch slap", 1);
var attack5  = new attacktemp(1.1,"body slam", 1);








 
/* should make attackname a subset of attacker*/
var attack = function(a,target,attackname){
    var hitpoint = ((2 * a.level + 30)/(250)+ 1)*((a.at)/(target.def))*(attackname.stat);
    //console.log(a.name + " used" + " " + attackname.name);
    //console.log(target.name + " lost" + " " + hitpoint + " healths");
    if (hitpoint >= target.hp){
        console.log( target.name + " " + "fainted...");
    };
    target.hp -= hitpoint;
    hitpointglobal = hitpoint;
    return ((2 * a.level + 30)/(250)+ 1)*(a.at/target.def)*(attackname.stat)
    
    
    
}


document.getElementById("title").innerHTML = "User:" + " "+ listpkmn[0].name + "    " + "<br></br>Opponent:" + " " + listpkmn[1].name;

document.getElementById("title2").innerHTML = listpkmn[0].name + "    vs.      " + listpkmn[1].name;




var counter = 0;

var attacklist = [attack1,attack2,attack3,attack4,attack5,attack6,attack7,attack8];
var attackchoose = attacklist[0];
var attackselect = function(){
    var atnumber = Math.floor(Math.random()*8);
    attackchoose = attacklist[atnumber];
}
    
    
                  
                  
 
                     
// old game 
/*
function game () {  
   setTimeout(function () { 
      attackselect();
      attack(listpkmn[0],listpkmn[1],attackchoose)
      if (listpkmn[1].hp <= 0){
        document.getElementById("battle").innerHTML = listpkmn[0].name + " " + "wins!";
        counter = 1;
      };
      attackselect();
      attack(listpkmn[1],listpkmn[0],attackchoose);
      if (listpkmn[0].hp <=0){
               document.getElementById("battle").innerHTML = listpkmn[1].name + " " + "wins!";
              counter = 1;
          
       };
       if (counter == 0){
           game();
       }
   },1000);
};
*/                             

//Image Selector
var imageselect = {
};

imageselect.one = Math.floor(Math.random()*150);
imageselect.two = Math.floor(Math.random()*150);
imageselect.three = Math.floor(Math.random()*150);
imageselect.four = Math.floor(Math.random()*150);

var linkpk = "http://images.alexonsager.net/pokemon/fused/" + imageselect.one + "/" + imageselect.one + "." + imageselect.two + ".png";
var linkpk2 = "http://images.alexonsager.net/pokemon/fused/" + imageselect.three + "/" + imageselect.three + "." + imageselect.four + ".png";

document.getElementById("myImage").src = linkpk;
document.getElementById("myImage2").src = linkpk2;

var usr = 1
var txt = ""

//Making ghostscopies of randos
var ghost = Object.create(Object.prototype, {
    hlp: { value: Object.freeze([listpkmn[0].hp, listpkmn[1].hp]) }
});



//Health Bar draw
var p1 = 200;
var p2 = 200;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.lineWidth=10;
ctx.moveTo(200,0);
ctx.lineTo(0,0);
ctx.moveTo(200,50);
ctx.lineTo(0,50);
ctx.stroke();


ctx.beginPath();


var hbar = function(){
    listpkmn[0].hpaccess();
    listpkmn[1].hpaccess();
    p1 = (listpkmn[0].hp / listpkmn[0].hphide)* 200;
    p2 = (listpkmn[1].hp /  listpkmn[1].hphide)* 200;
    ctx.beginPath();
    ctx.clearRect(0, 0, 200, 50);
    ctx.moveTo(p1,0);
    ctx.lineTo(0,0);
    ctx.moveTo(p2,0);
    ctx.lineTo(0,0);
    ctx.stroke();
    console.log(p1);
    console.log(p2);
};




//Game function
var newgame = function(){
    var usrinput = attacklist[usr]
    txt += "<br></br>" + " " + listpkmn[0].name + " "  + "used" + " " + usrinput.name;   
    attack(listpkmn[0],listpkmn[1],usrinput);
    txt += "<br></br>" + " " + listpkmn[1].name + "lost" + " " +  hitpointglobal + " healths";
    $('#message').html(txt);
    if (listpkmn[1].hp <= 0){
        hbar();
        txt += "<br></br>" + " " + listpkmn[0].name + " wins!";
        txt += "<br></br>" + " " + "USER WINS!"
        $('#message').html(txt);
        
    }
    else{
        txt += " "
        attackselect();
        setTimeout(function() {attack(listpkmn[1],listpkmn[0],attackchoose)}, 2000);
        setTimeout(function() {txt += "<br></br>" + " " + listpkmn[1].name + " "  + "used" + " " +                         attackchoose.name;
                               txt += "<br></br>" + " " + listpkmn[1].name + "lost" + " " + hitpointglobal + " healths"}, 2000);
        setTimeout(function(){$('#message').html(txt)},2000);
        
        
        txt += " ";
        setTimeout(function(){hbar()},2000);
        if (listpkmn[0].hp <= 0){
            txt += "<br></br>" + " " + listpkmn[1].name + " wins!";
            txt += "<br></br>" + " " + "USER LOST!"
            $('#message').html(txt);
        }
        else{
        };
    };
           
};



    



//Jquery game loop
$('#choice').on('change', function () {
    var $input = $(this);

    if ($input.val() === '-1') return;

    usr = ($input.val());
    if (listpkmn[0].hp > 0 && listpkmn[1].hp > 0){
        newgame();
        
        
    }
    else{
        txt = "Game Over!"
        $('#message').html(txt);
    };
       
});





    


    
      





    
    






    
    
      



