<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>WebShop</title>
  </head>
  <body>

    <?php
      // Connect to the database and get the data-showThisPage
      // We dont have a database, so we fake it
      // variables in PHP starts with a $
      $aItmes = ["A", "B"];
      echo $aItmes[1];

      // How about the length of the array
      echo count($aItmes);
      echo sizeof($aItmes);

      //push letter C to the Array
      array_push($aItmes, "C");
      echo count($aItmes);

      //Now I have Array with A, B, C... How to remove B
      //unset($aItmes[1]);  //Takes out the B but it doesent move C to where the B was
      array_splice($aItmes, 1, 1);
      echo count($aItmes);

      // How to show the content of an object in the screen
      var_dump($aItmes);
      print_r($aItmes);
    ?>


    <?php
      $sLetter = 'A';
      echo "<div style='color: red;'>$sLetter</div>";
    ?>


    <!-- Print out all element Names in the array -->
    <div> Product Name : X</div>
    <?php
      $aProducts = [ 'A', 'B', 'C'];
      for ($i=0; $i < count($aProducts); $i++) {
        $aDivProduct = "<div> Product Name : $aProducts[$i] </div>";
        echo $aDivProduct;
      }
    ?>

    <!-- display info from here in a.php -->
    <div><a href="a.php" target="_blank">Take me to A</a></div>
    <div> id: 0  Name X </div>
    <?php
      $aAllProducts = [ 1,'A', 2,'B', 3,'C'];

      for ($i=0; $i < count($aAllProducts); $i+=2) {
        $sID = $aAllProducts[$i];
        $sName = $aAllProducts[$i+1];
        $sLink = strtolower($sName);
        $aDivProduct = "<div> id: $sID  Name <a href='$sLink.php'>$sName</a> </div>";

        echo $aDivProduct;
      }
    ?>


    <div>
      <!--
        ? means that variables will come
        & appears in every other variables after the first one
      -->
      <a href="a.php?name=Kata&last=Sig">Take Me to A</a>
    </div>


    <?php
      // Open the file
    	$sData = file_get_contents( 'data.txt' );
    	// Get the data and convert it to an object
    	$aData = json_decode( $sData );
    	// Show the letter
    	echo $aData[0];

    	for( $i = 0; $i < count($aData); $i+=3 ){
    		$sProductId = $aData[$i];
    		$sProductName = $aData[$i+1];
        $sProductImage = $aData[$i+2];
    		$sDivProduct = "<div><a href='product.php?id=$sProductId'>$sProductName<img src='$sProductImage'></a></div>";
    		echo $sDivProduct;
    	}
    ?>

  </body>
</html>
