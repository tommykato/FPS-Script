#pragma strict

//ポーズモードかどうか
public var pause : boolean;

function Start () {
	pause = false;	//一時停止(ポーズ)を切にする
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Escape)	/*escが押された時*/){
		if(pause == false){
			pause = true;	//ポーズモード

			Screen.showCursor = true;	//カーソル表示
    		Screen.lockCursor = false;	//カーソル固定を解除
		}else{
			pause = false;	//ポーズモード切
		}
	}

	if(pause == false	/*ポーズモード切なら*/){
		Screen.showCursor = false;	//カーソル非表示
		Screen.lockCursor = true;	//カーソル固定
	}
}
