Meteor.methods({
    deleteEvent: function (_id) {
        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            console.log("not-authorized user tried to toggle visibility of an event");
            throw new Meteor.Error("not-authorized");
        } else {
            if (Events.findOne({_id: _id})) {
                Events.remove({_id: _id});
            } else {
                throw new Meteor.Error("event-not-found");
            }
        }

    }
});