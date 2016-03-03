Meteor.publish('images', function(){
    if(this.userId){
        return Images.find();
    }else{
        return this.ready();
    }
});