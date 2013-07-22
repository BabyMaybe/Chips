#pragma strict

var inventory : GameObject;
private var inventoryController : InventoryController;
 
var  levelX : int = 695;
var  levelY : int = 85;

var  timeX : int = 695;
var  timeY : int = 205;

var  chipsX : int = 695;
var  chipsY : int = 371;



var timer : GameObject;
private var timerScript : Timer; 

var mySkin : GUISkin;
	
function Start() {
	
	inventoryController = inventory.GetComponent(InventoryController);
	timerScript = timer.GetComponent(Timer);
	
}

function Update() {

	//print(timerScript.timeDisplay.ToString());

}
		
function OnGUI() {

	GUI.skin = mySkin;
	
	//GUI.Box(Rect(levelX,levelY,100,100), "Level:");
	GUI.Label(Rect(levelX,levelY,100,100),"1");
	//GUI.Box(Rect(timeX,timeY,100,100), "Time:");
	GUI.Label(Rect(timeX,timeY,100,100),timerScript.timeDisplay.ToString());
	//GUI.Box(Rect(chipsX,chipsY,100,100), "Chips:");
	GUI.Label(Rect(chipsX,chipsY,100,100), inventoryController.chipsRemaining.ToString());
	
}