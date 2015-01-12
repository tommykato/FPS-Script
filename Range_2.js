#pragma strict

var time_E : float;
var Interval_E : float = 0.5;
var Damage : float = 12.5;

function Start () {

}

function Update () {

}

function OnTriggerStay (other : Collider){
	if (other.tag == "Player"){
		time_E += Time.deltaTime;

		if(time_E >= Interval_E){
			other.gameObject.SendMessage("ApplyDamage", Damage);

			time_E = 0;
		}
	}
}
