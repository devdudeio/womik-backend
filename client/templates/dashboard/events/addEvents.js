Template.addEvent.events({
    'input #begin': function () {
        const begin = moment($('#begin').val(), "DD.MM.YYYY HH:mm");
        Session.set("startsIn", moment(begin).fromNow());
    },
    'input #end': function () {
        const end = moment($('#end').val(), "DD-MM-YYYY HH:mm");
        const begin = moment($('#begin').val(), "DD-MM-YYYY HH:mm");
        Session.set("duration", moment.duration(end.diff(begin, 'hours'), "hours").humanize());
    },
    'click .js-save': function(){
    }
});

Template.addEvent.helpers({
    startsIn: function () {
        return "Startet in " + Session.get("startsIn");
    },
    duration: function () {
        return "Dauert ca. " + Session.get("duration");
    }
});