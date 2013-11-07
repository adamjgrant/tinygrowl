tinygrowl
=========

<a href="http://codepen.io/ajkochanowicz/pen/bLBfr">Demo</a>

A very small ( **~0.7kb** minified) js file for creating simple growl messages in Bootstrap. Look how small it is!
    
    var growls='[class^="growl"]';(function($){$("body").append('<div id="growlContainer" style="z-index:2000;position:fixed;width:250px;top:20px;right:20px;bottom:0;overflow:auto;pointer-events:none;"></div>');
    $.extend({growl:function(options){var defaults={delay:0,type:"warning",container:"#growlContainer",text:"","class":""};var _=$.extend(defaults,options);_.fTitle=_.title?"<strong>"+_.title+"</strong>":"";
    this.id=Math.floor(Math.random()*1e3);this.html=document.createElement("div");this.html.className="growl"+this.id+" alert alert-"+_.type+" "+_.class;
    var xHtml='<a style="pointer-events: auto;" class="close" data-dismiss="alert" href="#">&times;</a>';$(this.html).html(xHtml+_.fTitle+" "+_.text);$(_.container).prepend(this.html);
    if(_.delay>0){var fn=function(delay,id){setTimeout(function(){$(".growl"+id).fadeOut()},delay)}(_.delay,this.id)}}})})(jQuery);

Seriously, you won't believe me. I'll tell you, but you'll say "Stop telling lies, you liar. Why do you lie?"

And I'll say, "no I'm telling the--"

"--No, you're a liar and a crook saying such things. Bah."

But you didn't listen. Jamie was right. You never, ever listen.

Install
=======

All you need is the default Bootstrap dependencies and tinygrowl.

    <link rel="stylesheet" href="bootstrap.css" />
    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="bootstrap.js"></script>
    <script type="text/javascript" src="tinygrowl.min.js"></script>

    <script> $.growl({ text: 'Testing.' }) </script>

Usage
=====

Create a growl message
----------------------

Javascript

``$.growl({ text: 'Hello world!' })``

Coffeescript

    $.growl
        text: 'Hello world

Optional parameters
-------------------

* ``title``: ``<strong>`` formatted title
* ``container``: Where to inject the growl message formatted in CSS syntax (default: 'body')
* ``type``: type of alert (success/error/info/warning)
* ``delay``: When to fade out alert (default is ``0``) 
* ``class``: add a custom class or classes to the growl. 

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
    
Adding additional classes
-------------------------

Adding a class to your growl is a great way to destroy it after a certain event has ocurred, or to give it its own styling.

    $('a#custom').click(function() {
      $.growl({
        title: 'Saving your document'
        , class: 'saving-document'
      })
    })
    
In this scenario, I want the growl to stay visible until the document has been saved. Now I'll destroy it.

    docFunctions.save = function() {
      // ...
      return $('.saving-document').fadeOut()
    }
    
You can also use multiple classes the same way you would in regular html.

    $('a#custom').click(function() {
      $.growl({
        title: 'Saving your document'
        , class: 'saving-document green'
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

Removing All Growls
-------------------

No need to reinvent the wheel here. Just use jQuery's native <code>remove()</code> with the <code>growls</code> variable.

    $(growls).remove()
