#pragma strict

var inventory : GameObject;
var color : KeyColor;
var unlockSound : AudioClip;

function Unlock () {
	
	var inventoryController : InventoryController; 
	inventoryController = inventory.GetComponent(InventoryController);

	if (inventoryController.keyStorage[color] > 0) {
		//print("key available");
		
		audio.PlayOneShot(unlockSound);
		
		if (color != 1) {
			inventory.SendMessage("SubKey", color,SendMessageOptions.DontRequireReceiver);
		} 
		
		gameObject.transform.position.y -= 100;
		
		Destroy(gameObject,2);
		
		return true;
	}	
	return false;
}
