#pragma strict

//This is where the bulk of Chips actions will come from.
//Subclassed from Actions
class HeroActions extends Actions {

var hitSound : AudioClip;

//Tile Specific interactions
//These get called through the OnTriggerEnter function of the triggered tile

function Fire() {
	//How Chip deals with Fire

	Kill();

}

function Water() {
	//How Chip deals with Water

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