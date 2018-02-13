<!-- var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var aDataFromServer = JSON.parse( this.responseText);
  }
}
ajax.open("GET", "api-get.php", true);
ajax.send(); -->


<?php
  $sData = file_get_contents('exame.txt');
  $aData = json_decode($sData);
  echo $aData[0];
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div id="divName">
      Katrin
    </div>
    <script>
      var aUsers = [{},{},{}];
      aUsers[2].name = "Katrin";
      console.log(aUsers);
      aUsers.splice(0,1);
      aValues = [1,2];
      aUsers[0].test = aValues;
      console.log(aUsers);

    </script>
  </body>
</html>
