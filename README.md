tinygrowl
=========

<a href="http://cdpn.io/AyDtJ">Demo</a>

A very small js file for creating simple growl messages in Bootstrap.

Usage
=====

Create a growl message
----------------------

``new growl({text: 'Hello world!'})``

Optional parameters
-------------------

``title``: ``<strong>`` formatted title
``container``: Where to inject the growl message formatted in CSS syntax (default: 'body')
``type``: type of alert (via bootstrap syntax)
``delay``: When to fade out alert (default is ``0`` and will is instead
dismissable)

Use HTML
--------

``new growl({ title: 'Success', text: 'Your request was completed <em>successfully</em>.', delay: 2000 })``
