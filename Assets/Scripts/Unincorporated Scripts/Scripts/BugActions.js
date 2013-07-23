#pragma strict

class BugActions extends Actions {

function Start () {
	InvokeRepeating("BugMove",.2,.2);
}

function Update () {
}

function Fire() {
	//Enter code to deal with Fire here

	Kill();

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

function UpdateCurrentBlock() {
	//Detects the name of the first block found up to one block beneath gameObject

	var ray : Ray = new Ray (transform.position,transform.TransformDirection(Vector3.down));
	var hit : RaycastHit;
	
	if (Physics.Raycast(ray,hit,2)) {
	
    	currentBlock = hit.collider.name;
        print(currentBlock);

    }
	
}

function UpdateRestrictions() {
	
	switch (currentBlock) {
		
		case "Water":
			canMove = false;
			break;

		case "Fire":
			canMove = false;
			break;

		case "Ice":
			canMove = false;
			break;

		case "Ice Corner":
			canMove = false;
			break;
			
		case "Conveyer":
		//need to update this to canMovePerpendicular somehow
			canMove = false;
			break;
			
		case "Floor":
			canMove = true;
			break;
			
		default:
			canMove = true;
			break;
			
		}

}

function UpdateDirection () {

	var pos : Vector3 = transform.position;

	var left : Vector3 = transform.TransformDirection (Vector3.left);
	var forward : Vector3 = transform.TransformDirection (Vector3.forward);
	var right : Vector3 = transform.TransformDirection (Vector3.right);
	var back : Vector3 = transform.TransformDirection (Vector3.back);

	if (!Physics.Raycast (pos,left,2)) {

		transform.Rotate(Vector3.up * -90);
		currentDirection = parseInt(transform.eulerAngles.y);
		AllowMove();
		return;

	}
	else if (!Physics.Raycast (pos,forward,2)) {

		AllowMove();
		return;

	} else if (!Physics.Raycast (pos,right,2)) {

		transform.Rotate(Vector3.up * 90);
		currentDirection = parseInt(transform.eulerAngles.y);
		AllowMove();
		return;

	} else if (!Physics.Raycast (pos,back,2)) {

		transform.Rotate(Vector3.up * 180);
		currentDirection = parseInt(transform.eulerAngles.y);
		AllowMove();
		return;

	} else {

		DisallowMove();

	}

}

function BugMove() {



	UpdateCurrentBlock();
	UpdateRestrictions();

	UpdateDirection();

	Move();

}

//End of class definition
}