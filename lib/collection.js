Students = new Meteor.Collection("students");

Students.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  contact: {
    type: Number,
    label: "Contact Number"
  },
  address: {
    type: String,
    label: "Address"
  },
  // 'address.$': {
  //   type: Object
  // },
  // 'address.$.street': {
  //   type: String,
  //   label: "Street"
  // },
  // 'address.$.city': {
  //   type: String,
  //   label: "City"
  // }
}));

TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Students = new Tabular.Table({
  name: "Students List",
  collection: Students,
  columns: [
    {data: "name", title: "Student Name"},
    {data: "contact", title: "Contact"},
    {data: "address", title: "Address"}
  ]
});

Students.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Students.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
