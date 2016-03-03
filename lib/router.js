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

//event index
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


/*

old iron router code


 Router.configure({
 // the default layout
 layoutTemplate: 'DashboardLayout'
 });


 Router.route('/', {
 name: 'login',
 layoutTemplate: null,
 onBeforeAction: function () {
 if (Meteor.userId()) {
 Router.go("dashboard.index")
 } else {
 this.next();
 }
 }
 });

 Router.route('/dashboard', {
 layoutTemplate: 'DashboardLayout',
 name: 'dashboard.index',
 template: 'events',
 onBeforeAction: function () {
 if (!Meteor.userId()) {
 Meteor.call("console", "anonymous user tried to access backend: backend.index");
 Router.go("login");
 } else {
 Session.set("dimmerHeader", "Hallo "+ Meteor.user().username);
 Session.set("dimmerMessage", "Lade Datenbank");
 Session.set("activeMenu", "dashboard");
 this.next();
 }
 }
 });

 Router.route('/dashboard/events/add', {
 name: 'dashboard.events.add',
 template: 'addEvent'
 });

 Router.route('/dashboard/events/edit/:_id', {
 name: 'dashboard.events.edit',
 template: 'editEvent'
 });
 */