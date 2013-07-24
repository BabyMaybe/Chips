#pragma strict

var activated : boolean = false;
var xPos : int = 700;
var yPos : int = 533;
var lPosX : int = 750;
var lPosY : int = 523;
var mySkin : GUISkin;

function OnTriggerEnter(other : Collider) {

	activated = true;
	
}

function OnTriggerExit(other : Collider) {

	activated = false;

}

function OnGUI() {

	GUI.skin = mySkin;
	
	if (activated) {
		GUI.Box(Rect(xPos, yPos, 300,150), "Hint:");
		GUI.Label(Rect(lPosX, lPosY, 200,200), "Collect chips to get past the chip socket. Use keys to open doors.");
	}
	
}