var Instagram={};

(function(){

 function toScreen(photos){

  // Using jQuery's generic iterator function:
  // jQuery.each http://api.jquery.com/jQuery.each/

  $.each(photos.data, function(index, photo){

    // I'll construct the image tag on the fly.
    // The images property contains objects representing images of
    // varying quality. I'll give low_resulution a try.

    photo = "<img src='"+ photo.images.low_resolution.url + "' />";

    $('div#photos-wrap').append(photo);
  });
}
 function search(tag){
  var url="https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=c7a1642079c64875abee8da55ea65c10"
  $.getJSON(url,toScreen);
 }
 Instagram.search=search;
})();

Instagram.search('cats');
