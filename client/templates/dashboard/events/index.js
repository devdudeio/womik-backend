Template.eventlist.helpers({
    events: () => {
        return Events.find();
    }
});

Template.eventlist.onCreated(function () {
    const instance = this;
    instance.subscribe('events');
});