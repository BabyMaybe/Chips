#pragma strict

function Start () {
	InvokeRepeating("Move",.2,.2);
}

function Update () {
	//Move();
}

function Move() {
	
	
	
	if (!Physics.Raycast (transform.position,transform.TransformDirection(Vector3.left),1)) {
		
		print("Going left! My life has meaning");
		transform.Rotate(Vector3.up*-90,Space.Self);
		transform.Translate(Vector3.forward);
	
	} else if (!Physics.Raycast (transform.position,transform.TransformDirection(Vector3.forward),1)) {
			print("Going forward! Things will get better");
			transform.Translate(0,0,1);
			
	} else {	
		print("Turning right....Why do I even bother...");
		transform.Rotate(Vector3.up*90,Space.Self);
	
	}
}

// 
//if clear move left
//else if clear move forward
//else if clear move right
//else if clear move back

//attempt forward move
//if blocked turn right

//if nothing left go left
//if something left go forward
//if something forward turn right
