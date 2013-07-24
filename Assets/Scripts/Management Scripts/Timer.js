#pragma strict


internal var running : boolean = false;

internal var timeRemaining : float;
internal var timeDisplay : int;

internal var gm : GameManager;


function Start () {

	gm = GameObject.Find("Melinda").GetComponent(GameManager);

	timeRemaining = gm.GetTimeToComplete() + 1;

	StartTimer();

}

function Update () {
		
	if (running) {
	
		timeRemaining -= Time.deltaTime;
		
		timeDisplay = parseInt(timeRemaining);
		
		if (timeDisplay <= 0) {
			gm.restarting = true;
		}
	}

}

function StartTimer() {

	running = true;

}

function StopTimer() {
	
	running = false;

}

function GetTimeDisplay() {

	return timeDisplay.ToString();

}