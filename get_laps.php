<?php
include 'db.php';

$result = $conn->query("SELECT time_recorded FROM laps ORDER BY id DESC");
$laps = [];

while ($row = $result->fetch_assoc()) {
  $laps[] = $row['time_recorded'];
}

echo json_encode($laps);
?>
