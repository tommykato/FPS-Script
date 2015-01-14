#pragma strict

var speed : float = 6.0;
var jumpSpeed : float = 8.0;
var gravity : float = 20.0;
var jump : boolean = false;
var jumpSpeed2 : float = 12.0;
private var moveDirection : Vector3 = Vector3.zero;
private var controller : CharacterController;
var time : float = 0;

function Start () {
  controller = GetComponent(CharacterController);
}

function Update () {
  if(controller.isGrounded) {
	  //移動方向を取得
	  moveDirection = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
	  moveDirection = transform.TransformDirection(moveDirection);
	  moveDirection *= speed;
    
	  //ジャンプ
	  if(Input.GetButton ("Jump")) {
	    time += Time.deltaTime;
	    jump = true;
	  }
  }else if(!controller.isGrounded){
	  if(Input.GetButtonDown ("Jump") && jump){
		  if(time > 0 && time < 2.0){
			  moveDirection.y = jumpSpeed2;
			  jump = false;
		  }
	  }
  }else if(time <= 2.0){
	  time = 0;
  }
  
  // 重力を計算
  moveDirection.y -= gravity * Time.deltaTime;
  
  // 移動
  controller.Move(moveDirection * Time.deltaTime);
}
