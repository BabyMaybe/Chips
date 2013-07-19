#pragma strict

var winSound : AudioClip;

var timer : GameObject;
var timerScript : Timer;

function Start () {

	timerScript = timer.GetComponent(Timer);

}


function Update () {


}

function OnTriggerEnter(other : Collider) {
	print("entered goal");
	audio.PlayOneShot(winSound);
	
	timerScript.TimerStop();	
}