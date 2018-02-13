<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <style media="screen">
    h1{
      text-align: center;
    }
      .chooseOne{
        width: 80%;
        margin-left: 10%;
        display: inline-flex;
      }
      .divABC{
        width: 30%;
        height: 200px;
        margin: 20px;
        background-color: #4a4a4a;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
      }
      a{
        color: #9a9a9a;
        text-decoration: none;
      }
    </style>
  </head>
  <body>

    <h1>Add Letters to the DataBase</h1>
    <div class="chooseOne">
      <div class="divABC">
        <a href="pageTwo.php?letter=A">A</a>
      </div>
      <div class="divABC">
        <a href="pageTwo.php?letter=B">B</a>
      </div>
      <div class="divABC">
        <a href="pageTwo.php?letter=C">C</a>
      </div>
    </div>

  </body>
</html>
