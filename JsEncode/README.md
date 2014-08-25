JsEncode
==========

Simple bitwise XOR encoding for JavaScript and PHP

How to use?
--------------

**For JavaScript:**

Load jsencode.js into your project. You can encode the "Hello world!" with a key "123" like this:

var e = jsEncode.encode("Hello world!","123");

You can decode string while calling exactly same method:

var d = jsEncode.encode(e,"123");

**For PHP:**

Include jsencode.class.php into your project.

You can encode the "Hello world!" with a key "123" like this:

$d = new jsEncode();
$enc = $d->encodeString('Hello world!','123');

You can decode string while calling exactly same method:

echo $d->encodeString($enc,'123');