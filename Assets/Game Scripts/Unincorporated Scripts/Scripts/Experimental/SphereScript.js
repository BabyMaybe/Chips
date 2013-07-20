#pragma strict

var shape : String = "Sphere";
var cubeScript : CubeScript;

function Start () {
	
	cubeScript = GameObject.Find("Cube").GetComponent(CubeScript);
	print(shape + " found a " + cubeScript.shape + "!");
	
	Destroy(gameObject, 15);
	
}

function Update () {

}