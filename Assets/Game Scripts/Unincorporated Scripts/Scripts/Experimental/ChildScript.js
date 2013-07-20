#pragma strict


class ChildScript extends ParentScript{

 function Start () {
 	
 	mood  = "giggly";
 	
 	super.Start();
}

function Move() {

	transform.Translate(.01,0.0,0);

	}
	

	
function Say() {
	print("This is the function Say() in the child class");
}
	
//End of class
}