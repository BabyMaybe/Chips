#pragma strict

//This file is intended to be an outline for subclassing
//Common functions are outlined here to be overwritten in subclasses

var canMove : boolean = true;
var canMoveHorizontal : boolean = true;
var canMoveVertical : boolean = true;

var currentBlock : String = "Floor";

enum Facing {Up = 0, Right = 90, Down = 180, Left = 270};
var currentDirection : Facing;

//Tile Specific interactions
//These get called through the OnTriggerEnter function of the triggered tile

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
function DisallowMove() {
	//Stops ability to move

	canMove = false;
	
}

function AllowMove() {
	//Starts ability to move

	canMove = true;
	
}

function Move() {
	//Moves object forward one block
	
	if (canMove) {
		transform.Translate(Vector3.forward * 2);
	}
	
}

function KeyMove(dir : Facing) {
	//Movement induced by key press

	transform.eulerAngles.y = parseInt(dir);
	currentDirection = dir;
	
	Invoke("CheckAhead", .1);
	Invoke("Move", .1);
	

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
    //Turns keypress into rotation currentDirection
    //Moves forward if clear ahead

	if (Input.anyKeyDown) {
		
		if (canMoveVertical) { 
		
	    	if (Input.GetAxisRaw("Vertical") > 0) 
	    		KeyMove(Facing.Up);
	         
	        if (Input.GetAxisRaw("Vertical") < 0) 
		        KeyMove(Facing.Down);
        }
        
	    if (canMoveHorizontal) {
	    
	        if (Input.GetAxisRaw("Horizontal") > 0)
		    	KeyMove(Facing.Right);
	        
	    	if (Input.GetAxisRaw("Horizontal") < 0) 
		    	KeyMove(Facing.Left);
		}
		
    }
    
}


function CheckAhead() {
	//Sends a ray one block in front of gameObject
	//if object in the way is tagged as impassible Activate() sent to object and second ray sent
	//if object still in way prevents movement in that currentDirection
		
	var ray : Ray = new Ray (transform.position,transform.TransformDirection (Vector3.forward));
	var hit : RaycastHit;
	
	if (Physics.Raycast(ray,hit,2)) {

		hit.transform.gameObject.SendMessage("Activate",SendMessageOptions.DontRequireReceiver);
		Physics.Raycast(ray,hit,2);
		print(hit);

		//either change the method for detecting immovable objects or further exand tagging system
		//i dont like this solution right now...

		if (hit.collider != null && hit.collider.tag == "Impassible") {

			DisallowMove();
			return;
		}
	}

	AllowMove();
	
}


function Kill() {
	//Destroys current object
	
	Destroy(gameObject);
	
}

function Hide() {
	//Draws object below floor - useful when sound needs to play on object destruction
	//or object needs to complete some action before it is destroyed

	transform.Translate(0,-100,0);
	
}