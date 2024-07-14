document.getElementById('fileUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        document.querySelector('.body_in_button').style.display = 'none';
        document.getElementById('fileName').textContent = file.name;
        document.getElementById('fileName').style.display = 'block';
    }
});