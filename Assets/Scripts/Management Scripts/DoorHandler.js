#pragma strict

internal var inventory : InventoryController;

var color : KeyColor;
var unlockSound : AudioClip;

function Start() {

	inventory = GameObject.Find("Inventory").GetComponent(InventoryController);

}

function Activate () {

	if (inventory.keyStorage[color] > 0) {

		if (color != 1) {
			inventory.SubKey(color);
		} 
		
		audio.PlayOneShot(unlockSound);

		transform.position.y -= 100;
		Destroy(gameObject,2);
		
		return true;
	}	
	return false;
}
