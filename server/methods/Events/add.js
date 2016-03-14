Meteor.methods({
    addEvent: function (begin,
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
                        image_name) {

        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            console.log("not-authorized user tried to add an event");
            throw new Meteor.Error("not-authorized");
        } else {

            //check other params
            const temp = [title,
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
                image_name];

            temp.forEach(function (e) {
                check(e, String);
            });

            Events.insert({
                hidden: true,
                createdAt: moment(),
                editedAt: moment(),
                createdBy: Meteor.userId(),
                begin: moment(begin, "DD.MM.YYYY HH:mm"),
                end: moment(end, "DD.MM.YYYY HH:mm"),
                title: title,
                vendor: vendor,
                type: type,
                image_id: image_id,
                article: article,
                fee: fee,
                age: age,
                notice: notice,
                optional: optional,
                vendor_name: vendor_name,
                vendor_street: vendor_street,
                vendor_city: vendor_city,
                more_information: more_information,
                insider_name: insider_name,
                license: license,
                author: author,
                image_name: image_name
            }, function (err) {
                if (err) {
                    //er
                    console.log("Fehler beim adden")
                } else {
                    console.log("alles ok")
                }
            })
        }
    }
});