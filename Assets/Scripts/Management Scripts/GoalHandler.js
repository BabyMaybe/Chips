#pragma strict

var winSound : AudioClip;

internal var timer : Timer;
internal var gm : GameManager;

function Start() {

	timer = GameObject.Find("Timer").GetComponent(Timer);
	gm = GameObject.Find("Melinda").GetComponent(GameManager);

}

function OnTriggerEnter(other : Collider) {
	print("entered goal");
	audio.PlayOneShot(winSound);
	
	timer.StopTimer();
	gm.advancing = true;
}