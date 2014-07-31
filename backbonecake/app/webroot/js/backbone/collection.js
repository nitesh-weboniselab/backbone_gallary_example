var Album = Album || {};
Album.Gallary = Album.Gallary || {};

Album.Gallary.collection= (function(){
    return{
        listAlbumCollection  : Backbone.Collection.extend(),
        listPhotoCollection  : Backbone.Collection.extend()
    };
})();