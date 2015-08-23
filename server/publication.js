Meteor.publish("students", function(argument){
  return Students.find({},{limit:1000});
});
