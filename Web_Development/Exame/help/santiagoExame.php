<?php

  // Create backend that echo's your name with PHP
  $sMyName = 'Katrín D. Sigurðardóttir';
  echo $sMyName;
  // WHY dobble quots and why single quots???
  // "" - You can use it for string and variables at the same time. (Takes more space)
  // '' - Is used only for string



  //ajax and get throgth address bar
  $name = $_GET['name'];
  $theFile = file_get_contents('santiagoExameQuestions.txt');

  $atheFile = json_decode($theFile);
  for ($i=0; $i < count($atheFile); $i++) {
    if( $atheFile[$i]->name == $name){
      var_dump($atheFile[$i]);
    }
  }

  //Got throgth txt find, name and print it out as many time's as the ID is
  // [{"id": 2, "name": "Katrin"}, {"id": 3, "name": "Birna"},{"id": 4, "name": "Jon"}]
  $sData = file_get_contents('exame.txt');
  $aData = json_decode($sData);

  $sGetName = "Jon";
  // $sName = $_GET['name'];

  for ($i=0; $i < count($aData); $i++) {
    if($aData[$i]->name == $sGetName){
      for ($j=0; $j < $aData[$i]->id; $j++) {
        echo $aData[$i]->name;
      }
    }
  }



  // //Create a text file, this has text that looks like array,  this array contains json objects , the key is name a and the other is name b
  // // TXT FILE CONTAINS THIS:
  // [{"name": "A"},{"name" : "B"}];
  // //with php, take out of the file print out name
  // $sList = file_get_contents('list.txt');
  // $jList = json_decode($sList);
  // for ($i=0; $i<count($jList); $i++) {
  //   echo $jList[$i]->name;
  // }



  //create empty array for users
  $aUsers = [];
  $jUser = json_decode('{}');
  $jUser->userId = '23';
  $jUser->userName = 'John';
  array_push($aUsers, $jUser);
  var_dump($aUsers);


  //HERDIS
    // þurtfi í edit product að láta útkomuna alltaf vera X sama hvað ég setti inn i input
    // siðan átti ég að gera string sem leit ut eins og json
    // og kalla á það í öðru skjal

  //SARA
    //at first he made me change some things in the project - something with the sign up part.
    // and then he made me use get and pass my name and last name in the address bar.
    // at last i should save something in the localstorage

?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <button type="button" name="button" id="btnShow">Show!</button>
    <div id="divAllNames"></div>

    <script type="text/javascript">
      //create empty array for users
      var aUsers = [];
      //create empty object with users
      var jUser = {}
      //Enter your name
      jUser.name = "katrin";
      //add opject to yhe array
      aUsers.push(jUser);
      //Delete
      aUsers.splice(0,1);




      //Create ajax what prints out from txt fieldset
      btnShow.addEventListener("click", function(){
        console.log("clicked");
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function(){
          var toDiv = '';
          if(this.readyState == 4 && this.status == 200){
            var aDataFromServer = JSON.parse( this.responseText);
            console.log(aDataFromServer);
            for (var i = 0; i < aDataFromServer.length; i++) {
              toDiv += '<p>'+aDataFromServer[i].name+'</p>';
            }
            divAllNames.innerHTML = toDiv;
          }
        }
        ajax.open("GET", "api-get.php", true);
        ajax.send();

      });
        // IN api-get.php:
        //$people = file_get_contents('santiagoExameQuestions.txt');
        //echo $people;

      // if you didn't use ajax what can you use??
      //form ?? php ??


      //Delete the element with the id 2 from the array
      var aUsers = [{"id":1, "name": "B"}, {"id":2, "name": "A"}];
      //console.log("first", aUsers);
      var itemToFind = 2;
      for (var i = 0; i < aUsers.length; i++) {
        //console.log("first", aUsers[i]);
        if(aUsers[i].id == itemToFind){
          //console.log("her");
          aUsers.splice(i,1);

        }
      }
      console.log("second:", aUsers);


    </script>
  </body>
</html>
