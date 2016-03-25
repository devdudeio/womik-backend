Template.addEvent.events({
    'input #begin': function () {
        const _begin = $('#begin').val();
        const begin = moment(_begin, "DD.MM.YYYY HH:mm");
        Session.set("startsIn", moment(begin).fromNow());
        Session.set("begin", _begin);
    },
    'input #end': function () {
        const _end = $('#end').val();
        const end = moment(_end, "DD.MM.YYYY HH:mm");
        Session.set("end", _end);
        const begin = moment($('#begin').val(), "DD.MM.YYYY HH:mm");
        Session.set("duration", moment.duration(end.diff(begin, 'hours'), "hours").humanize());
    },
    'change #image_upload': function () {
        console.log("fired");
        //$('#image_upload').val("");
        FS.Utility.eachFile(event, function (file) {
            Images.insert(file, function (err, fileObj) {
                if (err) {
                    console.log("crazy err");
                    console.log(err);
                } else {
                    Session.set("image_id", fileObj._id);
                }
            });
        });
        console.log("fired2");
    },
    'input #article': function () {
        const string = $('#article').val();
        Session.set('article', string);
    },

    'input #notice': function () {
        const string = $('#notice').val();
        Session.set('notice', string);

    },
    'click .js-save': function () {

        const begin = $('#begin').val();
        const end = $('#end').val();


        const title = $('#title').val();
        const vendor = $('#vendor').val();
        const type = $('#type').val();
        const article = $('#article').val();
        const fee = $('#fee').val();
        const age = $('#age').val();
        const notice = $('#notice').val();
        const vendor_name = $('#vendor_name').val();
        const vendor_street = $('#vendor_street').val();
        const vendor_streetnr = $('#vendor_streetnr').val();
        const vendor_zipcode = $('#vendor_zipcode').val();
        const vendor_city = $('#vendor_city').val();
        const more_information = $('#more_information').val();
        const insider_name = $('#insider_name').val();
        const license = $('#license').val();
        const author = $('#author').val();
        const image_name = $('#image_name').val();
        const image_id = Session.get("image_id");
        const areas = $('#areas').val();

        Meteor.call('addEvent',
            begin,
            end,
            title,
            vendor,
            type,
            article,
            fee,
            age,
            notice,
            vendor_name,
            vendor_street,
            vendor_streetnr,
            vendor_zipcode,
            vendor_city,
            more_information,               //is website link
            insider_name,
            license,
            author,
            image_name,
            image_id,
            areas
        );
        FlowRouter.go('events');
    }
});

Template.addEvent.helpers({
    startsIn: function () {
        return "Startet in " + Session.get("startsIn");
    },
    duration: function () {
        return "Dauert ca. " + Session.get("duration");
    },
    image: function () {
        if (Session.get("image_id") != null) {
            return Images.findOne(Session.get("image_id"));
        }
    },
    article: function () {
        return Session.get("article");
    },
    notice: function () {
        return Session.get("notice");
    },
    areas: function () {
        return Areas.find();
    }
});


Template.addEvent.onCreated(function () {
    Session.keys = {};

    const instance = this;
    instance.subscribe('events');
    instance.subscribe('images');
    instance.subscribe('areas');

});

Template.addEvent.rendered = function () {
    $('.ui.dropdown')
        .dropdown({
            maxSelections: 1
        });
};