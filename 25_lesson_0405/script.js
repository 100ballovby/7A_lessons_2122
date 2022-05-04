function show_password() {
    let input = document.querySelector('#passw');
    let image = document.querySelector('#eye');
    if (input.type === 'password') {
        input.type = 'text';
        image.src = 'Eye Disabled.png';
    } else {
        input.type = 'password';
        image.src = 'Eye.png';
    }
}


