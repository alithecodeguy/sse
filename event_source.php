<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
$time = date('r');
echo "data: The server time is: {$time}\n\n";
flush();
?>


<!--

Code explained:
  Set the "Content-Type" header to "text/event-stream"
  Specify that the page should not cache
  Output the data to send (Always start with "data: ")
  Flush the output data back to the web page

-->