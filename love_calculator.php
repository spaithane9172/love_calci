<?php
    $fname=$_POST["inputv1"];
    $sname=$_POST["inputv2"];
    $conn=mysqli_connect("localhost","root","","fb_database");
  
    $q="INSERT INTO `Love_Calculator` (`First Name`, `Second Name`) VALUES ( '$fname', '$sname')";
    if($conn->query($q) == true){} 
?>