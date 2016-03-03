Template.login.rendered = function () {
    //form validation
    $('.ui.form')
        .form({
            fields: {
                email: {
                    identifier: 'email',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Bitte gib deine Email oder deinen Benutzernamen an.'
                        }
                    ]
                },
                password: {
                    identifier: 'password',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Bitte gib dein Passwort ein'
                        },
                        {
                            type: 'length[6]',
                            prompt: 'Dein Passwort ist zu kurz.'
                        }
                    ]
                }
            }
        })
};

Template.login.events({
    'click .js-login': function () {
        const emailOrUsername = $('#email').val();
        const password = $('#password').val();

        if (emailOrUsername && password && password.length >= 6) {
            Meteor.loginWithPassword(emailOrUsername, password, function (err, res) {
                if (err) {
                    Meteor.call("console", "login attempt failed for: " + emailOrUsername + " --> " + err);
                } else {
                    Meteor.call("console", "login succeed for: " + emailOrUsername);
                    FlowRouter.go('events');
                }
            });
        }
    }
});