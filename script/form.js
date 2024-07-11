function toggleFields() {
    var acceptFields = document.getElementById('acceptFields');
    var declineFields = document.getElementById('declineFields');
    var acceptRadio = document.getElementById('acceptBtn');
    var declineRadio = document.getElementById('rejectBtn');

    if (acceptRadio.checked) {
        acceptFields.classList.add('show');
        declineFields.classList.remove('show');
    } else if (declineRadio.checked) {
        acceptFields.classList.remove('show');
        declineFields.classList.add('show');
    }
}


//JavaScript to set focus
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('rsvpModal');
    modal.addEventListener('shown.bs.modal', function() {
        document.querySelector('.rsvpName').focus();
    });
});
