#pragma strict

internal var inventory : InventoryController;

var color              : KeyColor;
var keyGetAnimation    : AnimationClip;
var keyGetSound        : AudioClip;


function Start() {

	inventory = GameObject.Find("Inventory").GetComponent(InventoryController);

}

function OnTriggerEnter(other : Collider) {

	collider.enabled = false;
	
	inventory.AddKey(color);
	
	animation.Play(keyGetAnimation.name);
	audio.PlayOneShot(keyGetSound);

	Destroy(gameObject,1);
	
}