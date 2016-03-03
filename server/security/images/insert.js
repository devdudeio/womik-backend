Images.allow({
    //just user can insert
    'insert': function (userId) {
        return !!userId;
    }
});