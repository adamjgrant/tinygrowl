tinygrowl
=========

<a href="http://codepen.io/ajkochanowicz/pen/bLBfr">Demo</a>

A very small (~0.7kb minified) js file for creating simple growl messages in Bootstrap.

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

Appending to Containers
-----------------------

This div will be where the growl will populate

    <div class="customContainer"></div>

By default, it will occupy 100% of the width, so we'll put all the styling on this container.

    <style>
      .customContainer {
        border: 1px solid black;
        width: 300px;
        height: 200px;
      }
    </style>

Now we call ``$.growl`` and specify the ``container`` attribute. Remember to format this as you would in CSS. writing ``customContainer`` would append to ``<customContainer>`` instead of ``<div class="customContainer"></div>``

    $('a#custom').click(function() {
      $.growl({
        title: 'I\'ll hang out'
        , text: '...but just for a couple seconds'
        , type: 'info'
        , delay: 2000
        , container: '.customContainer'
      })
    })

Use HTML
--------

Text and title also accept HTML

    $.growl({ 
      title: 'Success'
      , text: 'Your request was completed <em>successfully</em>.'
      , delay: 2000 
    })

Works great with icons

    $.growl({ 
      title: 'Success'
      , text: '<span class="glyphicon-book"></span> Entry has been added.'
      , delay: 500 
    })

Handling Overflow
-----------------

Tiny Growl's eloquent way of handling overflowing messages is simply to stick the default, right-aligned container to the top and bottom of the browser and set the ``overflow`` to ``auto``. <a href="http://codepen.io/ajkochanowicz/pen/bLBfr">See the demo</a> for an example.