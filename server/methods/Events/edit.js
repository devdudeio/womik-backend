Meteor.methods({
    editEvent: function (event_id,
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
                         more_information,
                         insider_name,
                         license,
                         author,
                         image_name,
                         image_id,
                         areas) {

        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            console.log("not-authorized user tried to edit an event");
            throw new Meteor.Error("not-authorized");
        } else {

            //check other params
            const temp = [event_id, begin,
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
                more_information,
                insider_name,
                license,
                author,
                image_name];

            temp.forEach(function (e) {
                check(e, String);
            });


            unix_begin = moment(begin, "DD.MM.YYYY HH:mm").subtract(2, 'hours').unix() * 1000;
            unix_end = moment(end, "DD.MM.YYYY HH:mm").subtract(2, 'hours').unix() * 1000;

            Events.update({_id: event_id}, {
                hidden: true,
                createdAt: Date.now(),
                editedAt: Date.now(),
                begin: unix_begin,
                end: unix_end,
                title: title,
                vendor: vendor,
                type: type,
                article: article,
                fee: fee,
                age: age,
                notice: notice,
                vendor_name: vendor_name,
                vendor_street: vendor_street,
                vendor_streetnr: vendor_streetnr,
                vendor_zipcode: vendor_zipcode,
                vendor_city: vendor_city,
                more_information: more_information,
                insider_name: insider_name,
                license: license,
                author: author,
                image_name: image_name,
                image_id: image_id,
                areas: areas

            }, function (err) {
                if (err) {
                    //er
                    console.log("Fehler beim editieren")
                } else {
                    console.log("alles ok beim edit")
                }
            })
        }
    }
});