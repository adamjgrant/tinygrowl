tinygrowl
=========

<a href="http://cdpn.io/AyDtJ">Demo</a>

A very small js file for creating simple growl messages.
Just use this with jquery and you're good.

Usage
=====

Create a growl message
----------------------

``new growl('Hello world!')``

Set delay
---------

Declare the second parameter in milliseconds. Omitted, the default is 1000ms (1 second)

``new growl('Hello world!', 2000)``

Use HTML
--------

``new growl('<strong>Success</strong><p>Your request was completed successfully.</p>')``
