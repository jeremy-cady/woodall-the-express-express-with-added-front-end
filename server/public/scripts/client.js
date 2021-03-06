console.log('in client.js');

$(document).ready(onReady);

function onReady() {
    console.log('so freakin\' ready 🤘');

    refreshAllTrains();
    refreshFirstTrain();
    refreshLastTrain();
    $('#addTrain').on('click', newTrain);
}


function refreshAllTrains() {
    console.log('in refreshAllTrains');
    
    let ajaxOptions = {
        method: 'GET',
        url: '/trains'
    };

    $.ajax(ajaxOptions)
        .then((response) => {
            console.log('AJAX trains request complete!', response);
            render(response);
    });
}

function refreshFirstTrain() {
    let ajaxOptions = {
        method: 'GET',
        url: '/first-train'
    };

    $.ajax(ajaxOptions)
        .then((response) => {
            console.log('AJAX first-train request complete!', response);
            renderFirstTrain(response);
    });


}

function refreshLastTrain() {
    let ajaxOptions = {
        method: 'GET',
        url: '/last-train'
    };

    $.ajax(ajaxOptions)
        .then((response) => {
            console.log('AJAX last-train request complete!', response);
            renderLastTrain(response);
    });


}



function render(state) {
    $('#trainList').empty();
    
    for(let object of state) {
        $('#trainList').append(`
            <li>${object.name} is ${object.color}</li>
        `)
    }
}


function renderFirstTrain(train) {

    $('#firstTrainName').empty();

    $('#firstTrainName').append(`${train.name}`);
}


function renderLastTrain(train) {
    $('#lastTrainName').empty();

    $('#lastTrainName').append(`${train.name}`);
}



function newTrain() {
    console.log('inside newTrain');

    const newTrainInput = {
        name: $('#nameInput').val(),
        color: $('#colorInput').val()
    }

    console.log('input is: ', newTrainInput);

    $.ajax({
        method: 'POST',
        url: '/trains',
        data: newTrainInput
    })
        .then((response) => {
            console.log(response);
            refreshAllTrains();
            refreshFirstTrain();
            refreshLastTrain();
            
        })
    
}