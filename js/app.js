'use strict';
let $gallery = $('#photo-gallery');
let $photoTemplate = $('#photo-template');

$.ajax('./data/page-1.json').then(function (photos) {
  photos.forEach(photo => {
    let $newPhoto = $photoTemplate.clone();
    $newPhoto.removeAttr('id');
    $newPhoto[0].childNodes[1].textContent = photo.title;
    $newPhoto[0].childNodes[3].src = photo.image_url;
    $newPhoto[0].childNodes[5].textContent = photo.description;
    $gallery.append($newPhoto);
    console.log($newPhoto[0].childNodes);
  });
})

