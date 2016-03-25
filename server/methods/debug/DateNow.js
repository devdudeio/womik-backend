Meteor.methods({
    dateNow: function() {
        console.log(moment(Date.now()));
    }
});