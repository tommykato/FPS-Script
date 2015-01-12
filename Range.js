#pragma strict

public var bulletPrefab_E : GameObject;	//銃弾のプレハブ
public var muzzle_E : Transform;	//銃口

public var time_E : float;
public var Interval_E : float = 1;	//発射の間隔

function Start () {

}

function Update () {
	
}

function shot(){	//発射関数
	var bullet : GameObject = Instantiate(bulletPrefab_E, muzzle_E.position, transform.rotation);	//銃弾を召喚

	var direction = (muzzle_E.position - transform.position).normalized;	//発射方向の設定

	bullet.rigidbody.velocity = direction * 100;	//発射
}

function OnTriggerStay (other : Collider){	//射程内に何かが入ったら
	if (other.tag == "Player"){	//そのタグが"Player"なら
		//Interval_E秒毎に発射	
		time_E += Time.deltaTime;

		if(time_E >= Interval_E){
			shot();

			time_E = 0;
		}
	}
}
