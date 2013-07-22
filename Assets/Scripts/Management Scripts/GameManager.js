#pragma strict

var skin : GUISkin;

internal var restarting : boolean = false;
internal var advancing  : boolean = false;

internal var hero  : HeroActions;
internal var timer : Timer;



function Start () {

	hero = GameObject.Find("Hero").GetComponent(HeroActions);
	timer = GameObject.Find("Timer").GetComponent(Timer);

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