<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex, nofollow">
    <title>Web Colors</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen"/>
</head>
<body oncontextmenu="return false">
  <div id="container">
    <h1 class="logo">Web Colors</h1>
    <div id="form-box">
      <i id="prev-btn" class="fas fa-arrow-left"></i>
      <i id="next-btn" class="fas fa-arrow-right"></i>
      <div id="input-group">
        <input id="input-field" onKeyUp="normalizar()" required>
        <label id="input-label"></label>
        <div id="input-progress"></div>
        <div id="error_msg"></div>
      </div>
      <div id="progress-bar"></div>
    </div>
  </div>
  <script type="text/javascript" src="js/clrs.js"> </script>
</body>
</html>
