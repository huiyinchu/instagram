var Instagram={};

(function(){

 function toScreen(photos){

  $.each(photos.data, function(index, photo){

    // I'll construct the image tag on the fly.
    // The images property contains objects representing images of
    // varying quality. I'll give low_resulution a try.

    photo = "<div class='photo'" +
	"<a href='"+photo.link+"' target='_blank'>"+
	  "<img class='main' src='"+photo.images.low_resolution.url+"'width='250' height='250'/>"+
	"</a>" +
	"<img class='avatar' width='40' height='40' src='"+photo.user.profile_picture+"'/>"+
	"<span class='heart'><strong>"+photo.likes.count+"</string></span>"+
	"/div";

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
