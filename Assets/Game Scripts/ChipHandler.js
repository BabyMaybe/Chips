#pragma strict

var inventory : GameObject;
var chips : int = 1;
var chipGetAnimation : AnimationClip;
var chipGetSound : AudioClip;


function OnTriggerEnter (other : Collider) {
	
	collider.enabled = false;
	
	inventory.SendMessage("AddChip", chips, SendMessageOptions.DontRequireReceiver);
	
	animation.Play(chipGetAnimation.name);
	audio.PlayOneShot(chipGetSound);
	
	
	
	Destroy(gameObject,1);
}

