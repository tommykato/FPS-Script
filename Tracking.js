#pragma strict

var enemyTransform : Transform;
var enemy : GameObject;
public var muzzle : Transform;

var rotationSpeed : int = 60;
public var Speed : float;

var Tracking : boolean;

function Start () {

}

function Update () {

}

function OnTriggerStay(other : Collider) {
	if (other.tag == "Player"){
		var targetPosition : Vector3 = other.transform.position - transform.position;

		var targetRotation : Quaternion = Quaternion.LookRotation(targetPosition);

		enemyTransform.rotation = Quaternion.RotateTowards(transform.rotation, targetRotation, rotationSpeed * Time.deltaTime);

		enemy.rigidbody.velocity = transform.forward * 15;
	}
}
