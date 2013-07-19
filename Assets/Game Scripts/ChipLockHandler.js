#pragma strict

var inventory : GameObject;
var chipsNeeded : int = 11;
var chipUnlockSound : AudioClip;

function Unlock () {

	var inventoryController : InventoryController; 
	inventoryController = inventory.GetComponent(InventoryController);
	
	if (inventoryController.chipCount >= chipsNeeded) {
		
		audio.PlayOneShot(chipUnlockSound);
		
		gameObject.transform.position.y -= 100;
		
		yield WaitForSeconds(3);
		Destroy(gameObject);
		
	}
	
}
