/**
 * Created by robertlech on 18.03.16.
 */
Meteor.methods({
    addArea: function (name, lat, long, alt) {
        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            console.log("not-authorized user tried to add an event");
            throw new Meteor.Error("not-authorized");
        } else {
            check(name, String);

            check(lat, Number);
            check(long, Number);
            check(alt, Number);
        }
    }
});