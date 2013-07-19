#pragma strict

var up : String = ",";
var down : String = "o";
var left : String = "a";
var right : String = "e";

var hitSound : AudioClip;

var timer : GameObject;
internal var timerScript : Timer;

var canMove : boolean = true;

function Start () {

	timerScript = timer.GetComponent(Timer);

}

function Update () {
	
	GetDirection();
	
}


function Look (dir : Vector3) {
		
	var ray : Ray = new Ray (transform.position,transform.TransformDirection (dir));
	var hit : RaycastHit;
	
	if (Physics.Raycast(ray,hit,2)) {
		if (hit.collider.tag == "Impassible") {
				
			hit.transform.gameObject.SendMessage("Unlock",SendMessageOptions.DontRequireReceiver);		
			
		if (Physics.Raycast(ray,hit,2)) {		
		
		audio.PlayOneShot(hitSound);		
		return false;
		
		}	
			
	}
			
	
	}

	return true;

}

function GetDirection () {
	print("Getting direction");
	  
	if (canMove && Input.anyKeyDown) {
				
		if (Input.inputString == up) {

				if (Look(Vector3.forward)) {
					transform.Translate(0,0,2);
				} 
			}
			
		if (Input.inputString == down) {

				if (Look(Vector3.back)) {
					transform.Translate(0,0,-2);
				} 
			}
			
		if (Input.inputString == left) {

				if (Look(Vector3.left)) {
					transform.Translate(-2,0,0);
				} 
			}
			
		if (Input.inputString == right) {

				if (Look(Vector3.right)) {
					transform.Translate(2,0,0);	
				} 
			}			
		}
}

