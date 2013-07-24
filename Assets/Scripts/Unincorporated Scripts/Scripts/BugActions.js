#pragma strict

class BugActions extends Actions {

function Start () {
	InvokeRepeating("BugMove",.2,.2);
}

function Update () {
}

function Fire() {
	//Enter code to deal with Fire here
	//Bugs treat Fire as a wall.



}

function Water() {
	//Enter code to deal with Water here
	Kill();

}

function Conveyer() {
	//Enter code to deal with Conveyer Floors here



}

function Ice() {
	//Enter code to deal with Ice here


}

function IceCorner() {
	//Enter code to deal with Ice Corners here


}

function Monster() {
	//Enter code to deal with Monsters here


}


//These functions are typically called internally and
//manipulate the gameObject in some manner

function Move() {
	//Moves object forward one block

	if (canMove) {
		transform.Translate(Vector3.forward * 2);
	}

}

function UpdateDirection () {

	transform.Rotate(Vector3.up * -90);

	while (!CheckAhead()) {
	//FIX THIS!!! INFINITE LOOP POSSIBLE!!!!

		transform.Rotate(Vector3.up * 90);

	}
//
//	if (CheckAhead()) {
//
//		transform.Rotate(Vector3.up * -90);
//		currentDirection = parseInt(transform.eulerAngles.y);
//		AllowMove();
//		return;
//
//	}
//	else if (!Physics.Raycast (pos,forward,2)) {
//
//		AllowMove();
//		return;
//
//	} else if (!Physics.Raycast (pos,right,2)) {
//
//		transform.Rotate(Vector3.up * 90);
//		currentDirection = parseInt(transform.eulerAngles.y);
//		AllowMove();
//		return;
//
//	} else if (!Physics.Raycast (pos,back,2)) {
//
//		transform.Rotate(Vector3.up * 180);
//		currentDirection = parseInt(transform.eulerAngles.y);
//		AllowMove();
//		return;
//
//	} else {
//
//		DisallowMove();
//
//	}

}

function BugMove() {

	UpdateCurrentBlock();
	UpdateRestrictions();

	UpdateDirection();

	Move();

}

function CheckAhead() {
	//Sends a ray one block in front of gameObject
	//If Block is detected and it is not Hero or Water it returns false
	//If Block is Hero or Water or No Block is present returns true;

	var ray : Ray = new Ray (transform.position,transform.TransformDirection (Vector3.forward));
	var hit : RaycastHit;

	if (Physics.Raycast(ray,hit,2)) {

		if (hit.collider.name != "Hero" && hit.collider.name != "Water") {

			return false;

		}

	}

		return true;


}

function OnTriggerEnter(other : Collider) {
	print("triggered by " + other.name);

	var actions :  Actions = other.GetComponent(Actions);

	if (actions != null) {

		actions.Monster();

	}
	
}
//End of class definition
}