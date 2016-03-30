Meteor.methods({
    copyEvent: function (_id) {
        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            console.log("not-authorized user tried to copy an event");
            throw new Meteor.Error("not-authorized");
        } else {
            var original = Events.findOne({_id: _id});
            console.log(original._id);
            original._id = Date.now() + "_copy";
            console.log(original._id);
            Events.insert(original);
        }
    }
});