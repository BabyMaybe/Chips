#pragma strict

var color : KeyColor; 
var inventory : GameObject;
var keyGetAnimation : AnimationClip;
var keyGetSound : AudioClip;

function OnTriggerEnter(other : Collider) {

	collider.enabled = false;
	
	inventory.SendMessage("AddKey",color,SendMessageOptions.DontRequireReceiver);
	
	animation.Play(keyGetAnimation.name);
	audio.PlayOneShot(keyGetSound);
	
	yield WaitForSeconds(1);
	Destroy(gameObject);
	
}