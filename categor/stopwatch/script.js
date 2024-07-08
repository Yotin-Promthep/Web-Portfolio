let timer;
let startTime;
let elapsedTime = 0;
let running = false;

const stopwatchDisplay = document.getElementById('stopwatch');
const startStopButton = document.getElementById('startStopButton');
const detailInput = document.getElementById('detailInput');
const saveButton = document.getElementById('saveButton');
const savedTimesTableBody = document.getElementById('savedTimesTable').getElementsByTagName('tbody')[0];

startStopButton.addEventListener('click', () => {
    if (running) {
        clearInterval(timer);
        elapsedTime += Date.now() - startTime;
        running = false;
        startStopButton.textContent = 'Start';
        detailInput.style.display = 'block';
    } else {
        startTime = Date.now();
        timer = setInterval(updateDisplay, 1000);
        running = true;
        startStopButton.textContent = 'Stop';
        detailInput.style.display = 'none';
    }
});

saveButton.addEventListener('click', () => {
    const details = document.getElementById('details').value;
    const timestamp = new Date().toLocaleString();
    saveTimeToTable(elapsedTime, details, timestamp);
    elapsedTime = 0;
    updateDisplay();
    detailInput.style.display = 'none';
    document.getElementById('details').value = '';
});

function updateDisplay() {
    const time = running ? Date.now() - startTime + elapsedTime : elapsedTime;
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    stopwatchDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function saveTimeToTable(time, details, timestamp) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    const newRow = savedTimesTableBody.insertRow();
    const timeCell = newRow.insertCell(0);
    const detailsCell = newRow.insertCell(1);
    const timestampCell = newRow.insertCell(2);

    timeCell.textContent = formattedTime;
    detailsCell.textContent = details;
    timestampCell.textContent = timestamp;
}

function saveTimeToDatabase(time, details) {
    // This function represents saving data to a NoSQL database.
    // Replace this with actual database saving code, e.g., using Firebase Firestore.
    console.log(`Saving time: ${time}ms with details: ${details}`);

    // Example using Firebase Firestore (uncomment and configure your Firestore instance):
    /*
    const db = firebase.firestore();
    db.collection('stopwatchTimes').add({
        time: time,
        details: details,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        console.log('Time saved successfully!');
    }).catch(error => {
        console.error('Error saving time: ', error);
    });
    */
}
