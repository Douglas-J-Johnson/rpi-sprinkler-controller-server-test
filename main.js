const ON = "ON";
const OFF = "OFF"

let relayStatuses = {
    CH1: 1,
    CH2: 1,
    CH3: 1,
    CH4: 1,
    CH5: 1,
    CH6: 1,
    CH7: 1,
    CH8: 1
};

function setButtonClasses() {
    let relayButton = null;

    Object.keys(relayStatuses).forEach(relayIdentifier => {
        relayButton = document.getElementById(relayIdentifier);

        if (relayStatuses[relayIdentifier] === 1) {
            relayButton.classList.remove(ON);
            relayButton.classList.add(OFF);
        }
        else if (relayStatuses[relayIdentifier] === 0) {
            relayButton.classList.remove(OFF);
            relayButton.classList.add(ON);
        }
    });
}

function getState () {
    console.log('Getting State');

    fetch(relaysURL, {
        method: 'GET',
        mode: 'no-cors'
    })
    .then(response => {
        console.log(response);
    });
}

function sendState () {
    const requestBody = new URLSearchParams();

    Object.keys(relayStatuses).forEach(relayIdentifier => {
        requestBody.append(relayIdentifier, relayStatuses[relayIdentifier]);
    })

    fetch(relaysURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: requestBody.toString()
    })
    .then(setButtonClasses);
}

function initializeState() { 
    console.log('Initializing State');
    getState();
}

function buttonClick(relayIdentifier) {
    if(relayStatuses[relayIdentifier] === 1) { relayStatuses[relayIdentifier] = 0; }
    else if(relayStatuses[relayIdentifier] === 0) { relayStatuses[relayIdentifier] = 1; }
    
    setButtonClasses()
    sendState();
}

initializeState();
