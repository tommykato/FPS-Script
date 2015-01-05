#pragma strict

public var playerTransform : Transform; //プレイヤーの位置
private var enemyTransform : Transform; //敵Mobの位置
public var bulletPrefab_E : GameObject; //敵Mobの銃弾プレハブ
public var muzzle_E : Transform;  //敵Mobの銃弾が生まれる座標(銃口)

public var time_E : float;
public var Interval_E : float = 1;
var rotationSpeed : float = 5;  //敵Mobの回転速度

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider){  //射程が他のコライダーに当たったとき
	if(other.CompareTag ("Player")){  //それがプレイヤーなら
	  //プレイヤーの方に向かせる
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

function shot(){  //発射の関数
	var bullet : GameObject = Instantiate(bulletPrefab_E, muzzle_E.position, transform.rotation);

	var direction = (muzzle_E.position - enemyTransform.position).normalized;

	bullet.rigidbody.velocity = direction * 200;
}
