#pragma strict
var beacon : GameObject;
var destroyable : boolean = false;
var hero : GameObject;

function Start () {

	hero = GameObject.Find("Hero");

}

	function Update () {

}

function Activate () {
	
	if (destroyable) {
		transform.Translate(0,-100,0);
		Destroy(gameObject,1);
	} else {
		//find currentDirection of hero
		AlignWithHero();
		//if space move in currentDirection pushed
		Move();
		//if touching water turn into mud
	}
	
}

function AlignWithHero () {

	var alignment : int;
	alignment = hero.GetComponent(Actions).currentDirection;
	transform.eulerAngles.y = alignment;

}

function Move() {
		
	var ray : Ray = new Ray (transform.position, transform.TransformDirection (Vector3.forward));
	var hit : RaycastHit;
	
	if (Physics.Raycast(ray, hit, 2)) {
	
		if (hit.transform.name == "Water") {
			
			Destroy(hit.transform.gameObject);
			renderer.material.color = Color(0,0,0);
			transform.Translate(Vector3.forward*2);
			
			destroyable = true;
		
		}
		return;
		
	}
	
	transform.Translate(Vector3.forward*2);

}