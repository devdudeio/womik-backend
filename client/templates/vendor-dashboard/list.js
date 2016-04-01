Template.vendorlist.rendered = function () {
    $('table').tablesort();
};

Template.vendorlist.onCreated(function () {
    let instance = this;
    instance.subscribe('vendors', {
        onReady: function () {
            console.log("onReady And the Items actually Arrive");
        },
        onError: function () {
            console.log("onError");
        }
    });
});