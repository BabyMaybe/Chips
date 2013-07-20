#pragma strict

var myObject : GameObject;

function Start () {

	myObject = GameObject.Find("Cube");
	print(myObject.GetComponent(CubeScript).name + "is about to get cloned!!!");
	InvokeRepeating("MakeRandomObject", 1, .01);

}

function Update () {

	
	
}



function MakeRandomObject() {

	var rx = Random.Range(-50,50);
	var ry = Random.Range(-50,50);
	var rz = Random.Range(-50,50);
	
	Instantiate(myObject, Vector3(rx, ry, rz), Quaternion.identity); 

}