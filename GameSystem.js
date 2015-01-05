#pragma strict

public var pause : boolean;

function Start () {
	pause = false;
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Escape)){
		if(pause == false){
			pause = true;

			Screen.showCursor = true;
    		Screen.lockCursor = false;
		}else{
			pause = false;
		}
	}

	if(pause == false){
		Screen.showCursor = false;
		Screen.lockCursor = true;
	}
}
