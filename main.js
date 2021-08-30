const ON = "ON";
const OFF = "OFF"

let relayStatuses = {
    Relay1: 1,
    Relay2: 1,
    Relay3: 1,
    Relay4: 1,
    Relay5: 1,
    Relay6: 1,
    Relay7: 1,
    Relay8: 1
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

function sendState () {
    console.log(`Sending to ${relaysURL}`, relayStatuses);

    $.post(
        relaysURL,
        relayStatuses,  
    ).always(setButtonClasses);
}

function initializeState() {
    console.log('synch');
    sendState();
    setButtonClasses();
}

function buttonClick(relayIdentifier) {
    if(relayStatuses[relayIdentifier] === 1) { relayStatuses[relayIdentifier] = 0; }
    else if(relayStatuses[relayIdentifier] === 0) { relayStatuses[relayIdentifier] = 1; }
    
    setButtonClasses()
    sendState();
}

initializeState();
