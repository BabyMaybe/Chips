#pragma strict

var skin : GUISkin;

var level : int;
var chipsNeeded : int;
var timeToComplete : int;


internal var chipsRemaining : int;

internal var restarting : boolean = false;
internal var advancing  : boolean = false;

internal var hero  : HeroActions;
internal var timer : Timer;
 var inventory : InventoryController;


function Start () {

	chipsRemaining = chipsNeeded;

	hero = GameObject.Find("Hero").GetComponent(HeroActions);
	timer = GameObject.Find("Timer").GetComponent(Timer);
	inventory = GameObject.Find("Inventory").GetComponent(InventoryController);
}


function Update () {
	var chipsHeld : int = inventory.GetChips();
	chipsRemaining = chipsNeeded - chipsHeld;

}

function RestartLevel() {

	timer.StopTimer();
	hero.DisallowMove();

	GUI.Label(Rect(0,50,200,100), "Oooops! Out of time!");

	if (GUI.Button (Rect (50,100,100,20), "Restart")){
		restarting = false;
    	Application.LoadLevel("Level1.1");
	}

}

function NextLevel() {

	timer.StopTimer();
	hero.DisallowMove();

	GUI.Label(Rect(0,50,200,100), "Level Complete!");

	if (GUI.Button (Rect (50,100,100,20), "Onwards!")){
		advancing = false;
		Application.LoadLevel("Level1.2");
	}

}

function OnGUI() {

	GUI.skin = skin;

	var winSize = 200;
	var	windowRect : Rect = Rect(Screen.width/2-winSize*1.25,Screen.height/2-winSize/2,winSize,winSize);

	if (restarting) {
		GUI.Window(0,windowRect,RestartLevel,"My Window");
	}

	if (advancing) {
		GUI.Window(0,windowRect,NextLevel,"My Window");
	}

}

function GetChipsNeeded() {

	return chipsNeeded;

}

function GetChipsRemaining() {

	return chipsRemaining;

}

function GetLevel() {

	return level;

}

function GetTimeToComplete() {

	return timeToComplete;

}