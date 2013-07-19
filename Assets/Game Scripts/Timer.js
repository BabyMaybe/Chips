#pragma strict

var timeRemaining : float = 101.0;
var timeDisplay : int = 101;
var running : boolean = false;
var restarting : boolean = false;
var skin : GUISkin;
var hero : BlockMovementRefactor;

function Start () {
	
	hero = GameObject.Find("Hero").GetComponent(BlockMovementRefactor);
	print(hero.canMove.ToString());
	TimerStart();
}

function Update () {
		
	if (running) {
	
		timeRemaining -= Time.deltaTime;
		
		timeDisplay = parseInt(timeRemaining);
		
		if (timeDisplay <= 0) {
			restarting = true;
		}
	}
	
	
}

function TimerStart() {

	running = true;

}

function TimerStop() {
	
	running = false;

}

function RestartLevel() {
		GUI.Label(Rect(0,50,200,100), "Oooops! Out of time!");
		TimerStop();
		hero.canMove = false;
	 if (GUI.Button (Rect (50,100,100,20), "Restart")){
     	
		Application.LoadLevel("Level1.1");
	}
}

function OnGUI() {
	
	
	if (restarting) {
	GUI.skin = skin;

	var winSize = 200;
	var	windowRect : Rect = Rect(Screen.width/2-winSize*1.25,Screen.height/2-winSize/2,winSize,winSize);
	GUI.Window(0,windowRect,RestartLevel,"My Window");
	
	}

}