Template.eventlist.helpers({
    events: function () {
        return Events.find({},{sort: {begin: -1}});
    }
});

Template.eventlist.onCreated(function () {
    Meteor.subscribe('events');
    Meteor.subscribe('images');
});

Template.eventlistitem.events({
    'click [data-toggle]': function (e) {
        const _id = $(e.target).data('toggle');
        Meteor.call('toggleEvent', _id, function (error) {
            if (!error) {
                //nice


            } else {
                alert("Error on toggle event");
            }
        });

    },
    'dblclick [data-delete]': function (e) {
        const _id = $(e.target).data('delete');
        Meteor.call('deleteEvent', _id, function (error) {
            if (!error) {
                //nice
            } else {
                alert("Error on delete event");
            }
        });
    }
});

Template.eventlistitem.helpers({
    isDisplayedInApp: function (begin) {
        max_diff = 13;
        const diff = moment().diff(begin, 'days');
        if (diff >= -max_diff && diff <= 0) {
            return true;
        } else {
            return false;
        }
    },
    isOutdatedEvent: function (begin) {
        max_diff = 13;
        const diff = moment().diff(begin, 'days');
        if (diff > -max_diff) {
            return true;
        } else {
            return false;
        }
    },
    formatDate: function (begin) {
        return moment(begin).format('DD.MM.YY');
    },
    timeAgo: function(begin){
        return moment(begin).fromNow();
    }
});