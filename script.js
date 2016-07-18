$('a').on('click', function(event) {
   event.preventDefault();
   $('#my-div').toggle('fast');
});
