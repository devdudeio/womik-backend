if(Meteor.users.find().count()==0){
    Accounts.createUser({username: "Robert", password: "password", email: "robert@womik.de"});
}