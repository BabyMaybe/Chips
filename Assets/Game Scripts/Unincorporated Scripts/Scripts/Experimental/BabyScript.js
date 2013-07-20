#pragma strict

class BabyScript extends ChildScript {


function Say() {

	print("This is baby calling Say()");

}


//End of Class
}

class PuppyScript extends BabyScript {


	function Say() {
	
		print("woof");
		
		}

}

class KittenScript extends ChildScript {

	function Say() {
		
		print("meow");
		
		}
		
}