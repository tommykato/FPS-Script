#pragma strict

var Explosion : GameObject; //敵Mobを倒した際にでる爆発のエフェクト

private var life : float = 50;

function Start () {

}

function Update () {
	if(life <= 0){
		Instantiate(Explosion, transform.position, transform.rotation); //敵Mobを倒した際に爆発のエフェクトを出す

		Destroy(gameObject);ゲームオブジェクトを削除
	}
}

function ApplyDamage(Damage : float){//
	life -= Damage;			//銃弾からのダメージメッセージを受け取る
}					//
