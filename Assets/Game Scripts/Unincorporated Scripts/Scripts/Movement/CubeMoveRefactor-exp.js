#pragma strict

var up : String = ",";
var down : String = "o";
var left : String = "a";
var right : String = "e";
var hit : RaycastHit;


function Update () {
	
	GetDirection();

}

function Look (ray : Ray) {
	
	var hit : RaycastHit;
	
	if (Physics.Raycast(ray,hit,1)) {
		if (hit.collider.tag == "Wall") {
		//print("found a wall");
		return false;
		} else {
		print("found a " + hit.collider.name);
		}
	}
		
	//print("in empty space");
	return true;
}
			
function GetDirection () {

	var fRay : Ray = new Ray (transform.position,transform.TransformDirection (Vector3.forward));
	var bRay : Ray = new Ray (transform.position,transform.TransformDirection (Vector3.back));
	var lRay : Ray = new Ray (transform.position,transform.TransformDirection (Vector3.left));
	var rRay : Ray = new Ray (transform.position,transform.TransformDirection (Vector3.right));
	

// X //if movement raise warning
	  
	if (Input.anyKeyDown) {
			
		if (Input.inputString == up) {
			//print("going up!");
				if (Look(fRay)) {
					transform.Translate(0,0,1);
				} else {
					print("THOU SHALL NOT PASS");
				}
			}
			
		if (Input.inputString == down) {
			//print("going down!");	
				if (Look(bRay)) {
					transform.Translate(0,0,-1);
				} else {
					print("You must find another way around");
				}
			}
			
		if (Input.inputString == left) {
			//print("going left!");
				if (Look(lRay)) {
					transform.Translate(-1,0,0);
				} else {
					print("I'm sorry dave I cant let you go that way");
				}
			}
			
		if (Input.inputString == right) {
			//print("going right!");
				if (Look(rRay)) {
					transform.Translate(1,0,0);	
				} else {
					print("None shall pass");
				}
			}			
	}
	
}

