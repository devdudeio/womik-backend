Meteor.methods({
    addVendor: function (_id) {
        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            console.log("not-authorized user tried to add a vendor");
            throw new Meteor.Error("not-authorized");
        } else {

        }
    }
});