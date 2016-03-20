/**
 * Created by robertlech on 18.03.16.
 */
Meteor.methods({
    addArea: function (name, lat, long) {
        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            console.log("not-authorized user tried to add an area");
            throw new Meteor.Error("not-authorized");
        } else {
            check(name, String);

            check(lat, Number);
            check(long, Number);

            if (Areas.findOne({name: name})) {
                console.log("cant add dublicate areas");
                throw new Meteor.Error("area-exists");
            } else {
                console.log("added area: "+name);
                Areas.insert({name: name, latitude: lat, longitude: long});
            }
        }
    }
});