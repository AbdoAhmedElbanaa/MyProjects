$(document).ready(function() {
    $('#signup-form').submit(function(e) {
        e.preventDefault();
        var name = $('input[name="name"]').val();
        var email = $('input[name="email"]').val();
        var password = $('input[name="password"]').val();
        $.getJSON('data.json', function(data) {
            data.push({name: name, email: email, password: password});
            $.ajax({
                type: 'POST',
                url: 'savejson.php',
                data: {json: JSON.stringify(data)},
                success: function() {
                    $('#response').html('<div class="alert alert-success" role="alert">Sign up successful!</div>');
                }
            });
        });
    });
});