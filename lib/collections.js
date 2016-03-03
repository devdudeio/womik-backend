Events = new Mongo.Collection('events');




var createDefault = function (fileObj, readStream, writeStream) {
    gm(readStream, fileObj.name()).resize('702','420').stream().pipe(writeStream);
};

var createThumb = function (fileObj, readStream, writeStream) {
    gm(readStream, fileObj.name()).resize('234','140').stream().pipe(writeStream);
};
Images = new FS.Collection("images", {
    stores: [
        new FS.Store.GridFS("thumbs", {transformWrite: createThumb}),
        new FS.Store.GridFS("default", {transformWrite: createDefault})
    ],
    filter: {
        maxSize: 2097152, // 2mb max file size
        allow: {
            contentTypes: ['image/*'] //allow only images in this FS.Collection
        },
        onInvalid: function (message) {
            if (Meteor.isClient) {
                alert(message);
            } else {
                Meteor.call("console", message);
            }
        }
    }
});