<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $time = $_POST['time'];
  $stmt = $conn->prepare("INSERT INTO laps (time_recorded) VALUES (?)");
  $stmt->bind_param("s", $time);
  $stmt->execute();
  echo "Lap saved.";
}
?>
