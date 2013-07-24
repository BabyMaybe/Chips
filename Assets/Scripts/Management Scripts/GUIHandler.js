#pragma strict



var  levelX : int = 695;
var  levelY : int = 85;

var  timeX : int = 695;
var  timeY : int = 205;

var  chipsX : int = 695;
var  chipsY : int = 371;

internal var level : int;

internal var timer : Timer;
internal var gm : GameManager;

var mySkin : GUISkin;
	
function Start() {
	
	gm = GameObject.Find("Melinda").GetComponent(GameManager);
	timer = GameObject.Find("Timer").GetComponent(Timer);

	level = gm.GetLevel();
}

function Update() {

	//print(timerScript.timeDisplay.ToString());

}
		
function OnGUI() {

	GUI.skin = mySkin;
	var	time : String = timer.GetTimeDisplay();
	var chips : int = gm.GetChipsRemaining();
	
	GUI.Label(Rect(levelX,levelY,100,100),level.ToString());
	GUI.Label(Rect(timeX,timeY,100,100),time);
	GUI.Label(Rect(chipsX,chipsY,100,100), chips.ToString());
	
}