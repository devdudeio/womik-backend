Template.eventlist.helpers({
    events: function () {
        return Events.find();
    }
});

Template.eventlist.onCreated(function () {
    Meteor.subscribe('events');
    Meteor.subscribe('images');
});

Template.eventlistitem.events({
    'click [data-toggle]': function (e) {
        const _id = $(e.target).data('toggle');
        Meteor.call('toggleEvent', _id, function(error){
            if(!error){
                //nice


            }else{
                alert("Error on toggle event");
            }
        });

    }
});