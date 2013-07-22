#pragma strict
var EntryPoint1 : GameObject;

function OnTriggerEnter(other : Collider) {
	print(other.name + " entered EntryPoint2");
	//Vector3.RotateTowards(other.transform.position,gameObject.GetComponent("EntryPoint2").transform.position,90,0.0);
	other.transform.Rotate(Vector3.up * -90);
	
	EntryPoint1.collider.isTrigger = false;
	yield WaitForSeconds(.2);
	EntryPoint1.collider.isTrigger = true;
}