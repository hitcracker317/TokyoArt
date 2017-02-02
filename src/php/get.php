<?php
  $url = "http://rssblog.ameba.jp/clown-happy/rss20.xml";
  $xml = file_get_contents($url);
  header("Content-type: application/xml; charset=UTF-8");
  print $xml;
?>
