#pragma strict
var beacon : GameObject;

function Start () {

}

function Update () {

}

function Activate () {
	
	//find currentDirection of hero
	FindHero();
	//if space move in currentDirection pushed
	//if touching water turn into mud
	
}

function FindHero () {

	
	var i : int = 0;
	//Physics.Raycast(ray,hit,1);
	////Physics.Raycast (transform.position,transform.TransformDirection(Vector3.left),1)
	
	while (i < 4) {
		print ("looking for hero...");
		
		var ray : Ray = new Ray (transform.position,transform.TransformDirection (Vector3.left));
		var hit : RaycastHit;
		transform.Rotate(Vector3.up * 90,Space.World);
//		transform.Translate(Vector3.forward);
//		yield WaitForSeconds(.5);
//		transform.Translate(Vector3.back);
		
		
		if (Physics.Raycast(ray,hit,1)) {
		
			print("found something! - " + hit.transform.name + " at " + hit.transform.position);
			transform.Translate(Vector3.forward);
			break;
			
				}
				

		
		i ++;

//		if (i > 8) {
//			
//			print("Could not locate hero");
//			break;
//			}
		}
		
	//eprint(hit.transform.name + " found!");

}