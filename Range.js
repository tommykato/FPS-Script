#pragma strict

public var playerTransform : Transform;	//プレイヤーの座標
public var bulletPrefab_E : GameObject;	//銃弾のプレハブ
public var muzzle_E : Transform;	//銃口
var enemyTransform : Transform;	//敵Mobの座標

public var time_E : float;
public var Interval_E : float = 1;	//発射の間隔
var rotationSpeed : float = 52.5;	//回転(振り向く)速度

function Start () {

}

function Update () {
	
}

function shot(){	//発射関数
	var bullet : GameObject = Instantiate(bulletPrefab_E, muzzle_E.position, transform.rotation);	//銃弾を召喚

	var direction = (muzzle_E.position - enemyTransform.position).normalized;	//発射方向の設定

	bullet.rigidbody.velocity = direction * 50;	//発射
}

function OnTriggerStay (other : Collider){	//射程内に何かが入ったら
	if (other.tag == "Player"){	//そのタグが"Player"なら
	
		//プレイヤーの方を向く
		var targetPosition : Vector3 = playerTransform.position - transform.position;

		var targetRotation : Quaternion = Quaternion.LookRotation(targetPosition);

		enemyTransform.rotation = Quaternion.RotateTowards(enemyTransform.rotation, targetRotation, rotationSpeed * Time.deltaTime);

		//Interval_E秒毎に発射	
		time_E += Time.deltaTime;

		if(time_E >= Interval_E){
			shot();

			time_E = 0;
		}
	}
}
