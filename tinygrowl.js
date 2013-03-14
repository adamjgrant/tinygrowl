var growl = function(opts) {
  // OPTS
  // ====
  //
  // REQUIRED 
  // --------
  // text: The html/text content to show under the title or by itself.
  //
  // OPTIONAL
  // --------
  // title: Bold-faced html/text content to appear to the left of the text.
  // type: Either success/warning/info/error (Info is default)
  // delay: Milliseconds before growl disappears. (0 is default and creates
  // a dismissable growl.)
  // container: css-formatted (e.g. ".container") container in which to
  // populate growls. Default is "body"

  // EXTEND
  this.opts = opts

  // FALLBACKS
  var _ = this.opts
  _.type = ( opts.type || 'info')
  _.delay = ( opts.delay || 0 )
  _.container = ( opts.container || 'body')

  // FORMATTING
  _.fTitle =  ( _.title ? '<strong>' + _.title + '</strong>' : '')

  // UNIQUE IDENTIFICATION
  this.id = Math.floor(Math.random()*1000)

  // CREATE FULL DOM OBJECT
  this.html = document.createElement('div')
  this.html.className = 'growl' + this.id + ' alert alert-' + _.type
  this.html.setAttribute( 'aria-role', 'dialog' )
  var xHtml = '<a class="close" data-dismiss="alert" href="#">&times;</a>'
  $(this.html).html( 
    (_.delay == 0 ? xHtml : '') 
    + _.fTitle + ' ' + _.text
  )

  // APPEND ALERT TO CONTAINER
  $(_.container).append(this.html)

  // SET DELAYS
  if ( _.delay > 0 ) { 
    var fn = (function(delay, id) { 
      setTimeout(function() {
        $('.growl' + id).fadeOut('slow')
        }
        , delay
      )
    })(_.delay, this.id) 
  }
} 
