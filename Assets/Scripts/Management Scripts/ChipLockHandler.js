#pragma strict



var chipsNeeded : int;
var chipUnlockSound : AudioClip;

internal var gm : GameManager;
internal var inventory : InventoryController;

function Start() {

	gm = GameObject.Find("Melinda").GetComponent(GameManager);
	inventory = GameObject.Find("Inventory").GetComponent(InventoryController);

	chipsNeeded = gm.GetChipsNeeded();
}

function Activate () {

	var currentChips : int = inventory.GetChips();

	if (inventory.chipCount >= chipsNeeded) {
		
		audio.PlayOneShot(chipUnlockSound);
		
		gameObject.transform.position.y -= 100;
		
		yield WaitForSeconds(3);
		Destroy(gameObject);
		
	}
	
}
