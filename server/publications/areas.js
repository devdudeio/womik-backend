Meteor.publish('areas', function () {
    if (this.userId) {
        return Areas.find({}, {sort: {name: 1}});
    } else {
        return this.ready();
    }
});