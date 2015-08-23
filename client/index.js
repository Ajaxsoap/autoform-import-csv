Meteor.subscribe("students");

Template.main.helpers ({
	students:function(){
		return Students.find();
	}
});

Template.main.events({
	"change .myFileInput": function(evt, tmpl){
		FS.Utility.eachFile(evt,function(file){
			var theFile = new FS.File(file);
			Uploads.insert(theFile,function(err,fileObj){
				if(!err){
					Meteor.call('uploadFile',fileObj._id,file.name);
				}
			});
		});
	}
});

Template.mainTable.events({
  'click tbody > tr': function (event) {
		if (!$(event.target).is('td')) return;
    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data(this._id);
    Router.go('updateForm');
  }
});
