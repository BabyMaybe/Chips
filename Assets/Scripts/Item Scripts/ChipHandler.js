#pragma strict

internal var inventory : InventoryController;

var chips : int = 1;

var chipGetAnimation : AnimationClip;
var chipGetSound : AudioClip;

function Start() {

	inventory = GameObject.Find("Inventory").GetComponent(InventoryController);

}

function OnTriggerEnter (other : Collider) {
	
	collider.enabled = false;
	
	inventory.AddChip(chips);
	
	animation.Play(chipGetAnimation.name);
	audio.PlayOneShot(chipGetSound);

	Destroy(gameObject,1);

}

