#pragma strict

//体力, ライフ
private var life : float = 200;

//リスポーン地点
var playerRespawn : Vector3;
var cameraRespawn : Vector3 = new Vector3(playerRespawn.x, playerRespawn.y + 1, playerRespawn.z);

var playerCamera : GameObject;  //カメラのプレハブ

function Start () {
  Instantiate(gameObject, playerRespawn, transform.rotation);	//プレイヤーの召喚
	Instantiate(playerCamera, cameraRespawn, transform.rotation);	//カメラの召喚
}

function FixedUpdate () {
	var mouseX = Input.GetAxis("Mouse X");	//
						//マウスによるカメラ操作(上下)
	transform.Rotate(0, mouseX * 3, 0);	//

	if(life <= 0	//倒された){
		Destroy(gameObject);	//プレイヤー削除

		//リスポーンする
		Instantiate(gameObject, playerRespawn, transform.rotation);
		Instantiate(playerCamera, cameraRespawn, transform.rotation);
	}
}

function ApplyDamage(Damage : float){	//
	life -= Damage;			//銃弾からのダメージメッセージを受け取る
}					//
