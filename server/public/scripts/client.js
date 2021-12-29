console.log('in client.js');

$(document).ready(onReady);

function onReady() {
    console.log('so freakin\' ready 🤘');

    refreshAllTrains();
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



function render(trains) {
    $('#trainList').empty();
    
    for(let train of trains) {
        $('#trainList').append(`
            <li>${train.name} is ${train.color}</li>
        `)
    }
}
