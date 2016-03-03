Meteor.publish('events', function(){
   if(this.userId){
       return Events.find();
   }else{
       return this.ready();
   }
});