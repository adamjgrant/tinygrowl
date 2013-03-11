// Growl Style
// Just to be an asshole, let's define the css in JavaScript.
var gStyle = {
  box: 'margin-bottom: 20px; padding: 0px 15px; background-color: #FFFBCF; border: 1px solid #FDF0AA;'
  , container: 'position: absolute; top: 20px; right: 20px; width: 200px; '
  , p: 'font-family: helvetica neue, helvetica, sans-serif; font-size 11pt; line-height: normal; margin-bottom: 15px;'
}

var styles = document.createElement('style')
styles.innerText = '#growlContainer p,a,em,strong,li{' + gStyle.p + '}'
styles.innerText += '#growlContainer > .look-up{' + gStyle.box + '}'
styles.innerText += '#growlContainer{' + gStyle.container + '}'
document.body.appendChild(styles)

// Growl Object
var growl = function(msg, delay) {
  var item = function(msg) {
    this.identifier = Math.floor(Math.random()*1000)
    this.messageBox = document.createElement('div')
    this.messageBox.className = 'look-up ' + this.identifier
    this.messageBox.setAttribute('aria-role','dialog')
    $(this.messageBox).html(
      '<p>' + msg + '</p>' 
    )
    return this;
  }
  var growlContainer = document.createElement('div')
  growlContainer.id = "growlContainer"
  var growlMessage = item(msg)
  $('body').append(growlContainer)
  $('#growlContainer').append(growlMessage['messageBox'])
  var fn = (function(delay, id) { 
    setTimeout(function() {
        $('.look-up.' + id).fadeOut('slow')
      }
      , (delay || 2000)
    )
  })(delay, growlMessage['identifier'])
}
