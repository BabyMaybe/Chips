#pragma strict

var mood : String = "Happy";

function Start () {

	print(gameObject.name + " is " + mood);

}

function Update () {

	//Move();

}

function Move() {

	transform.Translate(0,0,.01);

}

function Say() {

	print ("This is the Say method from the ParentScript class");
	
}
