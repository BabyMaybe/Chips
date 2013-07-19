#pragma strict

enum KeyColor {Red=0, Green=1, Blue=2, Yellow=3}

var keyStorage : int[] = [0,0,0,0];
var chipCount : int = 0;
var chipsNeeded : int = 11;
var chipsRemaining : int;
var keyIcons : GameObject[];

function Start () {
	
	chipsRemaining = chipsNeeded;

}

function Update () {

	

}

function AddKey (index : KeyColor) {
	
	if (keyStorage[index] == 0) {
		var script : KeyIconHandler;
		script = keyIcons[index].GetComponent(KeyIconHandler);
		
		script.ShowIcon();
		//keyIcons[index].ShowIcon();
	
	}
	
	keyStorage[index] ++;

}

function SubKey (index : KeyColor) {
	
	keyStorage[index] --;
	
	if (keyStorage[index] == 0) {
		var script : KeyIconHandler;
		script = keyIcons[index].GetComponent(KeyIconHandler);
		
		script.HideIcon();
		//keyIcons[index].ShowIcon();
	
	}

}

function KeyIsAvailable (index : KeyColor) {

	return keyStorage[index] > 0;
	
}

function AddChip (chipChange : int) {
	
	chipCount += chipChange;
	chipsRemaining -= chipChange;

}
