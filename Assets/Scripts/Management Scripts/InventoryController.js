#pragma strict

enum KeyColor {Red=0, Green=1, Blue=2, Yellow=3}

internal var chipCount = 0;
internal var keyStorage : int[] = [0,0,0,0];
var keyIcons : KeyIconHandler[];

internal var gm : GameManager;

function Start () {

	gm = GameObject.Find("Melinda").GetComponent(GameManager);
	keyIcons = [GameObject.Find("RedKeyIcon").GetComponent(KeyIconHandler),
				GameObject.Find("GreenKeyIcon").GetComponent(KeyIconHandler),
				GameObject.Find("BlueKeyIcon").GetComponent(KeyIconHandler),
				GameObject.Find("YellowKeyIcon").GetComponent(KeyIconHandler)];

}

function AddKey (index : KeyColor) {
	
	if (keyStorage[index] == 0) {

		keyIcons[index].ShowIcon();
	}
	
	keyStorage[index] ++;
}

function SubKey (index : KeyColor) {
	
	keyStorage[index] --;
	
	if (keyStorage[index] == 0) {

		keyIcons[index].HideIcon();
	}
}

function KeyIsAvailable (index : KeyColor) {

	return keyStorage[index] > 0;
	
}

function AddChip (chipChange : int) {
	
	chipCount += chipChange;

}

function GetChips() {

	return chipCount;

}