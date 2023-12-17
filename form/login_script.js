

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("container").addEventListener("keyup", function(event) {

        if (event.key === "Enter") {

            checkCredentials();
        }
    });

});



function checkCredentials() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;


    if (false)
    {

    }
    else {
        document.getElementById('result').innerHTML = 'Invalid username or password.';
        document.getElementById('result').classList.remove('hidden');
        document.getElementById('name').style.borderColor = "#b31919";
        document.getElementById('password').style.borderColor = "#b31919";
    }

    
}


