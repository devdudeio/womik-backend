Meteor.methods({
    deleteEvent: function (_id) {
        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            console.log("not-authorized user tried to delete event");
            throw new Meteor.Error("not-authorized");
        } else {
            if (Events.findOne({_id: _id})) {

                //delete image if exists
                const event_image_id = Events.findOne({_id: _id}).image_id;
                if (Images.findOne({_id: event_image_id})) {
                    Images.remove({_id: event_image_id});
                }
                //delete event
                Events.remove({_id: _id});
            } else {
                throw new Meteor.Error("event-not-found");
            }
        }

    }
});