Router.route('/', {
  name: 'main',
  waitOn:function(){
  	Meteor.subscribe('students');
  	return [];
  }
});
 Router.route("/update",{
   name: 'updateForm',
   waitOn: function() {
     Meteor.subscribe("students");
     return [];
   }
 });
