<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <script>
        <?php
        include("open_db.php");
        $query = "select num_pokedex, nom_pokemon from POKEMON";
        $result = mysqli_query($conn, $query);
        $php_array = array();
        $php_array = $result->fetch_all(MYSQLI_ASSOC);
        $js_array = json_encode($php_array);
        echo "var pokemons = " . $js_array . ";\n";
        include("close_db.php");
        ?>
        console.log(pokemons);
    </script>

</head>

<body onkeypress="myFunction(event)">
    <div class="pantalla" id="encuentro">
        <div id="contenidor-pokemon"></div>
        <div id="trainer-back">
            <img src="./img/trainers/trainer1.png" alt="trainer" id="trainer">
        </div>
        <div id="menu">
            <button onclick="genera_pokemon()" class="btn btn-primary">Random</button>
            <img src="./img/pokeball.jpg" alt="pokeball" id="pokeball">
        </div>
    </div>

</body>
<script src="./app.js"></script>

</html>
