Template.editEvent.helpers({
    event: function () {
        return Events.findOne({_id: Session.get("event_id")});
    },
    image: function () {
        if (Session.get("image_id") == null) {
            const image_id = Events.findOne({_id: FlowRouter.current().params._id}).image_id;
            if (image_id) {
                Session.set("image_id", image_id);
            }
            return Images.findOne(image_id);
        } else {
            return Images.findOne(Session.get("image_id"));
        }
    },
    begin: function () {
        const event = Events.findOne({_id: Session.get("event_id")});
        return moment(event.begin).format("DD.MM.YYYY HH:mm");

    },
    end: function () {
        const event = Events.findOne({_id: Session.get("event_id")});
        return moment(event.end).format("DD.MM.YYYY HH:mm");
    },
    isSelected: function (a, b) {
        //if event_areas is in areas then return true else false
        b.forEach(function (item) {
            if (item == a) {
                console.log(a + " : " + item);
                return true;
            }
        });
        console.log("area nicht selected");
        return false;
    },
    areas: function () {
        return Areas.find();
    }
});

Template.editEvent.events({
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
    'click .js-save': function () {
        const event_id = Session.get("event_id");


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

        Meteor.call('editEvent',
            event_id,
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

Template.editEvent.onCreated(function () {

    const instance = this;
    instance.subscribe('events');
    instance.subscribe('images');
    instance.subscribe('areas');
    Session.set("image_id", null);
    Session.set("event_id", FlowRouter.current().params._id);
});

Template.editEvent.rendered = function () {

    const areas = Events.findOne({_id:Session.get("event_id")}).areas;

    let defaults = function(){
        $('.ui.dropdown')
            .dropdown('set selected', areas);
    };


    $('.ui.dropdown')
        .dropdown({
            maxSelections: 1
        });

    setTimeout(defaults,500);

};