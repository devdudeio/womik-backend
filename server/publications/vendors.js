Meteor.publish('vendors', function(){
    if(this.userId){
        return Vendors.find({},{sort: {name: -1}});
    }else{
        return this.ready();
    }
});