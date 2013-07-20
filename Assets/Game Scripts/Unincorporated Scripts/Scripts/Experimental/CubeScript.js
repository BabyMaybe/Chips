#pragma strict

var shape : String = "Cube";

function Start () {
	
	GetMood();
	Destroy(gameObject, 10);

}

function Update () {

}

function GetMood() {

	GetComponent(ObjectScript).mood = "angry!";

	print(shape + " is " + GetComponent(ObjectScript).mood);

}