#pragma strict

public var playerTransform : Transform;
public var bulletPrefab_E : GameObject;
public var muzzle_E : Transform;
var enemyTransform : Transform;

public var time_E : float;
public var Interval_E : float = 1;
var rotationSpeed : float = 45;

function Start () {

}

function Update () {
	
}

function shot(){
	var bullet : GameObject = Instantiate(bulletPrefab_E, muzzle_E.position, transform.rotation);

	var direction = (muzzle_E.position - enemyTransform.position).normalized;

	bullet.rigidbody.velocity = direction * 100;
}

function OnTriggerStay (other : Collider){
	if (other.tag == "Player"){
		var targetPosition : Vector3 = playerTransform.position - transform.position;

		var targetRotation : Quaternion = Quaternion.LookRotation(targetPosition);

		enemyTransform.rotation = Quaternion.RotateTowards(enemyTransform.rotation, targetRotation, rotationSpeed * Time.deltaTime);

		time_E += Time.deltaTime;

		if(time_E >= Interval_E){
			shot();

			time_E = 0;
		}
	}
}
