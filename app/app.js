$(document).ready(function () {
    // Display the login modal when the login button is clicked
    $('#loginButton').click(function () {
        $('#loginModal').css('display', 'block');
    });

    // Close the login modal when the close button is clicked
    $('.close').click(function () {
        $('#loginModal').css('display', 'none');
    });

    // Submit the login form
    $('#loginForm').submit(function (e) {
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();

        // For demonstration purposes, just show an alert indicating signed-in
        alert('Signed in as ' + username);
        $('#loginModal').css('display', 'none');
    });
});