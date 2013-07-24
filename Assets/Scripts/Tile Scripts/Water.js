#pragma strict

function OnTriggerEnter(other : Collider) {

	other.GetComponent(Actions).Water();
	
}