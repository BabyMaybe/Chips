#pragma strict

var clip : AnimationClip;

function Start () {
	

}

function Update () {

}

function ShowIcon() {
	
	gameObject.transform.position.y = 25.9;

	animation[clip.name].speed = -1; 
	animation[clip.name].time = animation[clip.name].length;
	animation.Play(clip.name);

}

function HideIcon() {
	
	animation[clip.name].speed = 1; 
	animation[clip.name].time = 0;
	animation.Play(clip.name);
	
	yield WaitForSeconds(2);
	
	gameObject.transform.position.y = -5;

}