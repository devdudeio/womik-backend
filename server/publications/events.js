Meteor.publish('events', function(){
   if(this.userId){
       return Events.find({},{sort: {begin: -1}});
   }else{
       return this.ready();
   }
});