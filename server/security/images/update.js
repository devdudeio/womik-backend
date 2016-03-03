Images.allow({
    //just user can update
    'update': function (userId) {
        return !!userId;
    }
});