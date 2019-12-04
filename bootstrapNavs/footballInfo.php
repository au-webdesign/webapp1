<?php
     if ( !isset( $_REQUEST['TEAM'])) {
            show_usage();
     } else {
         $team = $_REQUEST['TEAM'];
         if ( $team == "Bears") {
            $wins = "6";
            $loss = "6";
            $descr = "The bears play in chicago and are looking for a real quarterback";
            $image = "images/bears.png";
            print ( "Bears;" . "$wins:$loss" . ";$image;$descr" );
         } else if ( $team == "Lions") {
            $wins = "2";
            $loss = "4";
            $descr = "The lions play in detroit and man are they bad";
            $image = "images/lions.png";
            print ( "Lions;" . "$wins:$loss" . ";$image;$descr" );
         } else {
            print("Team not found");
         }
     }
     function show_usage(){
          print("<br /> footballInfo.php?TEAM=XXX");
          print("<br /> Where XXX is a football team");
     }
?>