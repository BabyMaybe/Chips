#pragma strict

var width : int = 10;
var height : int = 10;
var floorBlock : Transform;


function Start () {

	for (var i : int = 0; i<width; i++) {
		for ( var j : int = 0; j<height; j++) {
			Instantiate(floorBlock, Vector3(i*2,0,j*2), Quaternion.identity);
		}
	}

}

function Update () {

}