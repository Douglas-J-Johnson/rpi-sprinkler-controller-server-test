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
