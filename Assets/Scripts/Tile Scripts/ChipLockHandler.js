#pragma strict

internal var inventory : InventoryController;

var chipsNeeded : int = 11;
var chipUnlockSound : AudioClip;

function Start() {

	inventory = GameObject.Find("Inventory").GetComponent(InventoryController);

}

function Activate () {

	if (inventory.chipCount >= chipsNeeded) {
		
		audio.PlayOneShot(chipUnlockSound);
		
		gameObject.transform.position.y -= 100;
		
		yield WaitForSeconds(3);
		Destroy(gameObject);
		
	}
	
}
