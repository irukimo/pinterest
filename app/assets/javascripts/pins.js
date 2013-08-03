// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
jQuery(function() {
  $('#pins').imagesLoaded(function() {});
  return $('#pins').masonry({
    itemSelector: ".box"
  });
});