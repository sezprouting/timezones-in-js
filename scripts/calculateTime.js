document.getElementById('submitButton').onclick = function() {
    obsvrTimeZone = document.getElementById('observer-zone-selector');
    obsvrStartDate = document.getElementById('observer-start-date');
    obsvrStartTime = document.getElementById('observer-start-time');

    playerTimeZone = document.getElementById('player-zone-selector');
    playerStartDate = document.getElementById('player-start-date');
    playerStartTime = document.getElementById('player-start-time');

    obsvrStartDate.textContent = 'Date: ' + playerStartDate.value;
    obsvrStartTime.textContent = 'Time: ' + playerStartTime.value;
}