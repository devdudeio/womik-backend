Template.addEvent.events({
    'input #begin': function () {
        const begin = moment($('#begin').val(), "DD.MM.YYYY HH:mm");
        Session.set("startsIn", moment(begin).fromNow());
        Session.set("begin", $('#begin').val());
    },
    'input #end': function () {
        const end = moment($('#end').val(), "DD-MM-YYYY HH:mm");
        Session.set("end", $('#end').val());

        const begin = moment($('#begin').val(), "DD-MM-YYYY HH:mm");
        Session.set("duration", moment.duration(end.diff(begin, 'hours'), "hours").humanize());
    },
    'input #title': function () {
        Session.set("title", $('#title').val());
    },
    'input #vendor': function () {
        Session.set("vendor", $('#vendor').val());
    },
    'input #type': function () {
        Session.set("type", $('#type').val());
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
        Session.set("article", $('#article').val());
    },
    'input #fee': function () {
        Session.set("fee", $('#fee').val());
    },
    'input #age': function () {
        Session.set("age", $('#age').val());
    },
    'input #notice': function () {
        Session.set("notice", $('#notice').val());
    },
    'input #optional': function () {
        Session.set("optional", $('#optional').val());
    },
    'input #vendor_name': function () {
        Session.set("vendor_name", $('#vendor_name').val());
    },
    'input #vendor_street': function () {
        Session.set("vendor_street", $('#vendor_street').val());
    },
    'input #vendor_city': function () {
        Session.set("vendor_city", $('#vendor_city').val());
    },
    'input #more_information': function () {
        Session.set("more_information", $('#more_information').val());
    },
    'input #insider_name': function () {
        Session.set("insider_name", $('#insider_name').val());
    },
    'input #license': function () {
        Session.set("license", $('#license').val());
    },
    'input #author': function () {
        Session.set("author", $('#author').val());
    },
    'input #image_name': function () {
        Session.set("image_name", $('#image_name').val());
    },
    'click .js-save': function () {
        const begin = Session.get("begin");
        const end = Session.get("end");
        const title = Session.get("title");
        const vendor = Session.get("vendor");
        const type = Session.get("type");
        const image_id = Session.get("image_id");
        const article = Session.get("article");
        const fee = Session.get("fee");
        const age = Session.get("age");
        const notice = Session.get("notice");
        const optional = Session.get("optional");
        const vendor_name = Session.get("vendor_name");
        const vendor_street = Session.get("vendor_street");
        const vendor_city = Session.get("vendor_city");
        const more_information = Session.get("more_information");
        const insider_name = Session.get("insider_name");
        const license = Session.get("license");
        const author = Session.get("author");
        const image_name = Session.get("image_name");

        Meteor.call('addEvent',
            begin,
            end,
            title,
            vendor,
            type,
            image_id,
            article,
            fee,
            age,
            notice,
            optional,
            vendor_name,
            vendor_street,
            vendor_city,
            more_information,
            insider_name,
            license,
            author,
            image_name)
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
    }
});


Template.addEvent.onCreated(function () {
    //Sessionvars
    Session.setDefault("begin", "");
    Session.setDefault("end", "");
    Session.setDefault("title", "");
    Session.setDefault("vendor", "");
    Session.setDefault("type", "");
    Session.setDefault("image_id", "");
    Session.setDefault("article", "");
    Session.setDefault("fee", "");
    Session.setDefault("age", "");
    Session.setDefault("notice", "");
    Session.setDefault("optional", "");
    Session.setDefault("vendor_name", "");
    Session.setDefault("vendor_street", "");
    Session.setDefault("vendor_city", "");
    Session.setDefault("more_information", "");
    Session.setDefault("insider_name", "");
    Session.setDefault("license", "");
    Session.setDefault("author", "");
    Session.setDefault("image_name", "");

});


//TODO not nice
Template.addEvent.onCreated(function () {
    const instance = this;
    instance.subscribe('events');
    instance.subscribe('images');
});