// avoid 404 by sending user to root
FlowRouter.notFound = {
    action: function () {
        FlowRouter.go('/');
    }
};

//login
FlowRouter.route('/', {
    action: function () {
        if (Meteor.userId()) {
            FlowRouter.go('events');
        } else {
            BlazeLayout.render('login');
        }
    },
    name: "index" // optional

});

//event index
FlowRouter.route('/dashboard/events', {
    // do some action for this route
    action: function () {
        if (Meteor.userId()) {
            BlazeLayout.render('DashboardLayout', {main: "events"});
        } else {
            FlowRouter.go('login');
        }
    },

    name: "events" // optional
});

//event add
FlowRouter.route('/dashboard/events/add', {
    // do some action for this route
    action: function () {
        if (Meteor.userId()) {
            BlazeLayout.render('DashboardLayout', {main: "addEvent"});
        } else {
            FlowRouter.go('login');
        }
    },

    name: "addEvent" // optional
});


//event add
FlowRouter.route('/dashboard/events/:_id/', {
    // do some action for this route
    action: function () {
        if (Meteor.userId()) {
            BlazeLayout.render('DashboardLayout', {main: "editEvent"});
        } else {
            FlowRouter.go('login');
        }
    },

    name: "editEvent" // optional
});


//vendor stuff


//vendorlist
FlowRouter.route('/vendors/', {
    // do some action for this route
    action: function () {
        if (Meteor.userId()) {
            BlazeLayout.render('DashboardLayout', {main: "vendors"});
        } else {
            FlowRouter.go('login');
        }
    },

    name: "vendors" // optional
});
