Template.eventlist.helpers({
    events: () => {
        return Events.find();
    }
});

Template.eventlist.onCreated(function () {
    Meteor.subscribe('events');
    Meteor.subscribe('images');
});