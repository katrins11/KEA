<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Product</title>
  </head>
  <body>

    <?php
      $sProductId = $_GET['id'];
      echo 'THE PRODUCT ID IS: '. $sProductId;
      $sProductName = $_GET['name'];
      echo 'THE PRODUCT Name IS: '. $sProductName;
      $aProducts = [ 1,'A',2,'B' ];
      /*
      WHEN A IS CLICKED ON THE MAIN PAGE SHOW THIS:
      <div>ID: 1 , NAME: A</div>
      WHEN b IS CLICKED ON THE MAIN PAGE SHOW THIS:
      <div>ID: 2 , NAME: B</div>
      */
       for ($i=0; $i < count($aProducts); $i++) {
         if($sProductId == $aProducts[$i]){
           $sProductName = $aProducts[$i+1];
           echo '<div>ID: '.$sProductId.', NAME:'. $sProductName.'</div>';
         }
       }

      //Another way
      $iIndexOfMatch = array_search($sProductId, $aProducts);
      $sProductName = $aProducts[$iIndexOfMatch+1];
      echo '<div>ID: '.$sProductId.', NAME:'. $iIndexOfMatch.'</div>';
    ?>

    <!-- Products and individual product from data.txt -->
    <?php
      $sProductId = $_GET['id'];
      // echo 'THE PRODUCT ID IS: '. $sProductId;
      $sProducts = file_get_contents( 'data.txt' );
      $aProducts = json_decode( $sProducts );
      $iIndexOfMatch = array_search( $sProductId , $aProducts );

      // echo $iIndexOfMatch;
      $sProductName = $aProducts[$iIndexOfMatch+1];
      $sProductImage = $aProducts[$iIndexOfMatch+2];
      echo "<div><img src='$sProductImage'>ID: $sProductId, NAME: $sProductName, </div>";
    ?>

    <!-- <div>ID: 2 , NAME: B</div> -->
    <!--
    PRETEND WE GET THE DATA FROM THE DATABASE
    THIS PAGE GETS AN ID IN THE ADDRESS BAR, SO LETS USE IT
    -->

  </body>
</html>
