if(Meteor.users.find().count()==0){
    Accounts.createUser({username: "Robert", password: "womik-backend-2016", email: "robert@womik.de"});
    Accounts.createUser({username: "Theresa", password: "womik_88", email: "theresa.farrack@womik.de"});
    Accounts.createUser({username: "Heiko", password: "womik_88", email: "heiko.roch@womik.de"});
}