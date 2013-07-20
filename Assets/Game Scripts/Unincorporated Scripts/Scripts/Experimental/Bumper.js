#pragma strict

function OnTriggerEnter(other : Collider) {
	
	//print(other.gameObject.name);

	other.gameObject.GetComponent(ParentScript).Say();

}