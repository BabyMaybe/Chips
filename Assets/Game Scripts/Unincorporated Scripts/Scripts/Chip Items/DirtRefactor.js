#pragma strict
var beacon : GameObject;
var destroyable : boolean;

function Start () {

}

function Update () {

}

function Activate () {
	
	if (destroyable) {
		transform.Translate(0,-100,0);
		Destroy(gameObject);
	} else {
		//find currentDirection of hero
		AlignWithHero();
		//if space move in currentDirection pushed
		Move();
		//if touching water turn into mud
	}
	
}

function AlignWithHero () {

	for (var i : int = 0; i < 8; i++) {
		
		var ray : Ray = new Ray (transform.position,transform.TransformDirection (Vector3.back));
		var hit : RaycastHit;
		
		if (Physics.Raycast(ray, hit, 1) && hit.transform.name == "Hero") {
			
			transform.Rotate(Vector3.zero);
			break;
			
				}
				
		transform.Rotate(Vector3.up * 90,Space.World);

		}

}

function Move() {
		
	var ray : Ray = new Ray (transform.position, transform.TransformDirection (Vector3.forward));
	var hit : RaycastHit;
	
	if (Physics.Raycast(ray, hit, 1)) {
	
		print(hit.transform.name);
	
		if (hit.transform.name == "Water") {
			
			Destroy(hit.transform.gameObject);
			renderer.material.color = Color(0,0,0);
			transform.Translate(Vector3.forward);
			
			destroyable = true;
		
		}
		return;
		
	}
	
	transform.Translate(Vector3.forward);

}