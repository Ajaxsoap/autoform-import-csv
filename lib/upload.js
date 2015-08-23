Uploads = new FS.Collection('uploads', {
	stores:[new FS.Store.FileSystem("uploads",{path: "~/Documents/Meteor-Labs/vermongo-import/imports"})]
});

Uploads.allow({
	insert:function(){
		return true;
	},
	update:function(){
		return true;
	},
	remove:function(){
		return true;
	},
	download:function(){
		return true;
	}
});
