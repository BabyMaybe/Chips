#pragma strict

//This is where the bulk of Chips actions will come from.
//Subclassed from Actions
class HeroActions extends Actions {

var hitSound : AudioClip;

//Tile Specific interactions
//These get called through the OnTriggerEnter function of the triggered tile

function Fire() {
	//How Chip deals with Fire
	print("Chip killed in a firey death!");
	Kill();

}

function Water() {
	//How Chip deals with Water
	print("Chip drowns in a watery grave!");

	Kill();

}

function Conveyer() {
	//How Chip deals with Conveyer Floors
	
	Invoke("Move",.1);

}

function Ice() {	
	//How Chip deals with Ice
	
	Invoke("Move",.1);
	

}

function IceCorner() {
	//How Chip deals with Ice Corners
	
}


function Monster () {
	//How Chip deals with Monsters
	print("Chip devoured by monsters!");
	Kill();
}


//These functions deal with the gameObject during gameplay

function Update () {
	//Executes the following commands everyframe

	UpdateCurrentBlock();
	UpdateRestrictions();
	UpdateDirection();
	
}












//End of Class definition//
}