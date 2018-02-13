<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <?php
      $sLetter = $_GET['letter'];
      //Open the file
      $sData = file_get_contents("dataFile.txt");
      //convert the text to an object / Array
      $aData = json_decode($sData);
      // Push the letter to the Array
      $aData[] = $_GET['letter'];
      $sData = json_encode($aData);
      //Save the text to the File
      file_put_contents('dataFile.txt', $sData);

      echo "<div>Letter $sLetter has been added!</div>";
    ?>
    
  </body>
</html>
