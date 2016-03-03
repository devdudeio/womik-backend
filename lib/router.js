// avoid 404 by sending user to root
FlowRouter.notFound = {
    action: function () {
        FlowRouter.go('/');
    }
};

// handling /admin route
FlowRouter.route('/', {
    action: function () {
        BlazeLayout.render('login');
    }
});


/*
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