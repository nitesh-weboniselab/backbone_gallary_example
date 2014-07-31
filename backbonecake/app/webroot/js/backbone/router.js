var Album = Album || {};
Album.Gallary = Album.Gallary || {};

Album.Gallary.router = (function(){
    return{
        AppRouter:Backbone.Router.extend({
            routes:{
                '':'index',
                'dashboard/:userId':"dashboard",
                'createAlbum/:id':"createAlbum",
                'listAlbums':"listAlbums",
                'listPhotos/:albumId':'listPhotos',
                'addPhoto/:albumId':"addPhoto"
            },
            initialize:function(){

            },
            index:function(){
                this.userLoginModel = new Album.Gallary.model.userLoginModel();
                this.userLoginView  = new Album.Gallary.view.userLoginView({
                    userLoginModel  : this.userLoginModel,
                    parent : this,
                    el     : $('#album')
                })
            },
            dashboard:function(userId) {
                this.userDashboard = new Album.Gallary.view.dashboardView({
                    el:$("#album"),
                    userId:userId
                });
            },
            createAlbum:function(id) {
                this.createAlbumModel = new Album.Gallary.model.addAlbum();
                this.cretaeAlbumView = new Album.Gallary.view.createAlbumView({
                    createAlbumModel:this.createAlbumModel,
                    parent:this,
                    el:$("#album")
                })
            },

            listAlbums:function(){

                this.listAlbumModel = new Album.Gallary.model.listAlbumModel();
                this.listAlbumView  = new Album.Gallary.view.listAlbumView({
                    listAlbumModel:this.listAlbumModel,
                    parent:this,
                    el:$("#album")
                });
                this.listAlbumModel.fetch();
            },

            listPhotos:function(albumId){
                this.listPhotoModel = new Album.Gallary.model.listPhotoModel(albumId);
                this.listPhotoView = new Album.Gallary.view.listPhotoView({
                    listPhotoModel:this.listPhotoModel,
                    parent:this,
                    el:$('#album')
                });
                this.listPhotoModel.fetch();
            },
            addPhoto:function(albumId){
                this.addPhotoModel = new Album.Gallary.model.addPhotoModel(albumId);
                this.addPhotoView  = new  Album.Gallary.view.addPhotoView({
                    addPhotoModel:this.addPhotoModel,
                    parent:this,
                    albumId:albumId,
                    el:$('#album')
                });
            }
        })

    };
})();
var app = new Album.Gallary.router.AppRouter();
Backbone.history.start();