<?php
$firstLetter = $_REQUEST["first"];
$len = $_REQUEST["len"];
$wildCards = str_repeat(".", (int)$len);

$rex = "/^(".$firstLetter.$wildCards.")$/m";

$fileName = 'wordsEn.txt';

$words = file_get_contents($fileName);

preg_match_all($rex, $words, $matches);
// //$var_dump($matches);
$comma_separated = implode(",", $matches[0]);

echo($comma_separated);
?>