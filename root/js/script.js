/* Author: okamuuu

*/

(function () {
// create pagenav
  $('nav#pagenav').append( '<ul>' );
  $('section').each( function(){
    var text = $(this).find('h1').text();
    var li   = $('<li>').text(text);
    $('nav#pagenav ul').append(li);
  });
  
  $('section').hide();
  $('section:first').show();
  
  $('nav#pagenav li:first').addClass('current');

  // bind
  $('nav#pagenav li').click(function() {
      var element = $(this); 
      element.siblings().removeClass('current');
      element.addClass('current');
      
      var sections = $('section');
      sections.hide();
      sections.removeClass('current');
      $( sections[element.index()] ).fadeIn("slow");
  });

  // create footer
  $('footer').append(
'<small>Copyright 2011 <a href="http://github.com/okamuuu" data-twitter="okamuuu">okamuuu</a>. All Right    s Reserved.</small>'     
  );
})();



