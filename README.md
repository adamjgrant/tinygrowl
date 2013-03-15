tinygrowl
=========

<a href="http://cdpn.io/AyDtJ">Demo</a>

A very small js file for creating simple growl messages in Bootstrap.

Usage
=====

Create a growl message
----------------------

``$.growl({text: 'Hello world!'})``

Optional parameters
-------------------

* ``title``: ``<strong>`` formatted title
* ``container``: Where to inject the growl message formatted in CSS syntax (default: 'body')
* ``type``: type of alert (via bootstrap syntax)
* ``delay``: When to fade out alert (default is ``0``) 

If a delay is not set, it defaults to zero, which makes the growl dismissable via an "x"

    $.growl({
    	title: 'Try again'
    	, text: 'Sorry, it\'s our fault'
    })

Use HTML
--------

Text and title also accept HTML

    $.growl({ 
      title: 'Success'
      , text: 'Your request was completed <em>successfully</em>.'
      , delay: 2000 
    })``

Works great with icons

    $.growl({ 
      title: 'Success'
      , text: '<span class="glyphicon-book"></span> Entry has been added.'
      , delay: 0 
    })``