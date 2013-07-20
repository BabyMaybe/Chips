#pragma strict

var speed : float = 5;
var speed2 : float = 20;

function Start () {

}

function Update () {

	transform.Rotate(Vector3.right * Time.deltaTime * speed2);
	transform.Rotate(Vector3.up * Time.deltaTime * speed);

}