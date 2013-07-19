#pragma strict

var up : String;
var down : String;
var left : String;
var right : String;

internal var lastPosition : Vector3;

var hitSound : AudioClip;

var timer : GameObject;
var timerScript : Timer;

function Start () {

	lastPosition = transform.position;
	timerScript = timer.GetComponent(Timer);

}

function Update () {
	
	
	lastPosition = transform.position;
	
	if (Input.anyKeyDown) {
	
		if (Input.inputString == up) {
				transform.Translate(0,0,2);
			}
			
		if (Input.inputString == down) {
				transform.Translate(0,0,-2);
			}
			
		if (Input.inputString == left) {
				transform.Translate(-2,0,0);
			}
			
		if (Input.inputString == right) {
				transform.Translate(2,0,0);		
			}
			
	}
}

function OnTriggerEnter(other : Collider) {
	
//	print(other.gameObject.name);
	
	if(other.gameObject.tag == "Impassible"){
		
		if(other.gameObject.name == "Wall") audio.PlayOneShot(hitSound);
		
		transform.position = lastPosition;
		
	}
	
}