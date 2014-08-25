<?php
 /**
 *
 * jsencode.example.php
 *
 * @description. jsencode example in PHP
 * @version 1.0 
 * @copyright 2014 Henry ALgus. All rights reserved.
 *
 */

include "jsencode.class.php";

$d = new jsEncode();
$enc = $d->encodeString('Hello world!','123');
echo $d->encodeString($enc,'123');