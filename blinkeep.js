Thoughts = new Mongo.Collection("thoughts");

//Schema using the collection2 package
Thoughts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 20
  },
  text: {
    type: String,
    label: "Thought",
    max: 200
  },
  reminderDate: {
    type: Date,
    label: "Reminder"
  }
}));

if (Meteor.isClient) {

  //helper diplay all thoughts
  Template.hey.helpers({
    thoughts: function () {
      return Thoughts.find({}, {sort: {reminderDate: -1}});
    }
  });

  Template.thought.events({
    //delete an unwanted thought!
    "click .delete": function () {
      Thoughts.remove(this._id);
    }
  });

  //accounts config
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


