Meteor.methods({
	'uploadFile':function(fileid,filename){
		// var csv = Meteor.require('CSV');
		var fs = Npm.require('fs');
		var path = Npm.require('path');
		var file = Uploads.find({_id:fileid});
		Meteor.setTimeout(function(){
			var filepath = path.join(process.env.PWD, '/imports/uploads-' + fileid + '-' + filename);
			CSV().from.stream(
				fs.createReadStream(filepath),
				{'escape':'\\'})
				.on('record',Meteor.bindEnvironment(function(row,index){
					Students.insert({
						'name':row[0],
						'contact':row[1],
						'address':row[2]
					});
				}, function(error){
					console.log(error);
				}))
				.on('error',function(err){
					console.log(err);
				})
				.on('end',function(count){
				});
		},1000);
	}
});
