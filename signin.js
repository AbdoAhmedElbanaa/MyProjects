$(document).ready(function() {
    $('#signin-form').submit(function(e) {
        e.preventDefault();
        var email = $('input[name="email"]').val();
        var password = $('input[name="password"]').val();
        $.getJSON('data.json', function(data) {
            var found = false;
            $.each(data, function(index, user) {
                if (user.email == email && user.password == password) {
                    found = true;
                    $('#response').html('<div class="alert alert-success" role="alert">Sign in successful!</div>');
                    return false;
                }
            });
            if (!found) {
                $('#response').html('<div class="alert alert-danger" role="alert">Incorrect email or password.</div>');
            }
        });
    });
});