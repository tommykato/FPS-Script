#pragma strict

var enemyTransform : Transform;
var enemy : GameObject;

var rotationSpeed : float = 60;

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

		enemy.rigidbody.velocity = targetPosition * 0.5;
	}
}

function Begin() {

}

function Stop() {

}
