#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
#include <signal.h>
#include <unistd.h>


#define CHAR_SIZE 20

typedef enum state{
	STANDING = (0x1<<0),
	WALKING = (0x1<<1)
} state_t;

//do actions
typedef enum action{
	STAND 	= (0x1<<0),
	WALK 	= (0x1<<1),
	RUN 	= (0x1<<2),
	POOP 	= (0x1<<3)	
} action_t;


typedef enum {
	MANA	= (0x1<<0),
	MAGIC	= (0x1<<1),
	HEALTH 	= (0x1<<2)
} ATTR_T;


typedef struct{
	unsigned int curr_exp;
	unsigned int next_lvl_exp;		//need to have some external file to determine levels
} exp_t;

typedef struct {
	unsigned int level; 	
	exp_t exp;
	unsigned int mana;
	unsigned int magic;
	unsigned int health;
	unsigned int stamina;
	unsigned int poop;		
} attribute_t;	


typedef struct{
	int lat;
	int longi;//change these
} loc_t;

typedef enum{
	NORTH 	= (0x1<<0),
	SOUTH	= (0x1<<1),
	EAST	= (0x1<<2),
	WEST	= (0x1<<3)	
} dir_t;

typedef struct {
	char name[CHAR_SIZE];
	loc_t loc;
	state_t state;
	action_t action;
	attribute_t attr;
	
} char_t;




//attributes


/*
	need some type of simple command parser - can do flag and action
	\example WALK 	<NORTH,SOUTH,EAST,WEST> 	<DIR>
	\example RUN 	<
*/


/* 
	need to create a dictionary of events
	<STATE>, <ACTION>
	STANDING, WALKING
	STANDING, 
*/

void init_attribute(attribute_t *p_attr){
	p_attr->mana = 1;
	p_attr->health = 1;
	p_attr->stamina = 1;
	p_attr->poop = 1;
}

void init_location(loc_t *loc){
	loc->lat=0;
	loc->longi=0;
}

void init_char(char_t *p_char, char *name){
	memset(p_char,0,sizeof(char_t));
	memcpy(p_char->name,name,CHAR_SIZE);
	init_attribute(&p_char->attr);
	init_location(&p_char->loc);
	
}

void print_char_stats(char_t *p_char){
	attribute_t *p_attr = &p_char->attr;
	loc_t *p_loc = &p_char->loc;
	printf("-----CHARACTER STATS-----\n");	
	printf("name:%s\n",p_char->name);
	printf("location: %d, %d\n",p_loc->lat, p_loc->longi);
	printf("mana: %d, health: %d, stamina: %d, poop: %d\n",p_attr->mana,
		p_attr->health, p_attr->stamina, p_attr->poop);
	printf("-------------------------\n");
}


char action_commands[] ="\
\twalk		\n\
\trun		\n\
\tpoop		\n\
\tstats		\n";


void sig_handler(int sig){
	switch(sig){
	case SIGINT:
		printf("caught SIGINT\n");
		break;
	default:
		printf("caught %d\n",sig);
		break;
	}
	abort();

}


/*
	\note
	
	\feature request - tab competion
	
		example commands:
		run WEST 10
		walk NORTH 10
		stats
		stats	add	hello
		
*/

///FIND COMMAND 

void cmd_parser(char *cmd){
	char *token;
	char cmd_cpy[100];	

	
	strcpy(cmd_cpy,cmd);

		
	token=strtok(cmd_cpy," ");
	while(token!=NULL){
		printf("token = %s\n",token);
			
		token=strtok(NULL," ");
	}
	printf("cmd: %s",cmd);	
	printf("cmd_cpy:%s\n",cmd_cpy);
	
}



void walk(char_t *p_char, dir_t direction){
	loc_t *p_loc = &p_char->loc;
	switch (direction){
	case NORTH:
		p_loc->lat++;
		break;
	case SOUTH:
		p_loc->lat--;
		break;
	case EAST:
		p_loc->longi++;
		break;
	case WEST:
		p_loc->longi--;
		break;
	default:
		break;

	}
	//add something here to check if the character landed on something awesome.
}

/*
	\brief charcter will walk a direction until stamina is out
	\note this might be dumb.
*/
void run(char_t *p_char, dir_t direction){
	
}


void print_help(){
	printf("you can do these actions:\n");
	printf("%s",action_commands);
}



//while loop and then parse 
void init_game(){
	char input[100];

	while(1){
		printf("what do you want to do? (walk, run, stats)\n");
		fgets(input, 100, stdin);
		//parse string
		cmd_parser(input);
	}
}

int main(){
	char_t *p_char;
	char name[] = "JAMES";	
	
	if(signal(SIGINT,sig_handler)==SIG_ERR); printf("error on sigint\n");
	init_char(p_char,name);
	print_char_stats(p_char);



	//What do you want to do now? - should put ourselves into a loop
	print_help();

	walk(p_char,NORTH);
	walk(p_char,WEST);
	print_char_stats(p_char);
		
	init_game();

return 0;





}
