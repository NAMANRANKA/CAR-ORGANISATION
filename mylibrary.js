function color1(){
var d1=(0.5*weight*speed1*speed1)/22500;
if (d1>180){
car.shapeColor="red";
}
if (d1<180 && d1>100){
car.shapeColor="yellow";
}
if (d1<100){
car.shapeColor="green";
}
}



function colorie2(){
  var dada=(0.5*weight*speed2*speed2)/22500;
  if (dada>180){
    car1.shapeColor="red";
  }
  if (dada<180&&dada>100){
    car1.shapeColor="yellow";
  }
  if (dada<100){
    car1.shapeColor="green"
  }
}


function cadar3(){
  var dardar=(0.5*weight*speed3*speed3)/22500;
  if (dardar>180){
    car2.shapeColor="red";
  }
  if (dardar<180&&dardar>100){
    car2.shapeColor="yellow";
  }
  if (dardar<100){
    car2.shapeColor="green";
  }
}

function corucelt4(){
  var dadagiri=(0.5*weight*speed4*speed4)/22500;
  if (dadagiri>180){
    car3.shapeColor="red";
  }
  if (dadagiri<180&&dadagiri>100){
    car3.shapeColor="yellow";
  }
  if (dadagiri<100){
    car3.shapeColor="green";
  }
}