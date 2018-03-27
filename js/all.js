$(document).ready(function() {
    $('.open').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $('.open').toggleClass('active');
        $('.op').slideToggle();
    });
});
$(document).ready(function() {
    $('.open1').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $('.open1').toggleClass('active');
        $('.op1').slideToggle();
    });
});
$(document).ready(function() {
    $('.open2').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $('.open2').toggleClass('active');
        $('.op2').slideToggle();
    });
});
$(document).ready(function() {
    $('.open3').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $('.open3').toggleClass('active');
        $('.op3').slideToggle();
    });
});
$(document).ready(function() {
    $('.open4').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $('.open4').toggleClass('active');
        $('.op4').slideToggle();
    });
});
$(document).ready(function() {
    $('.open5').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $('.open5').toggleClass('active');
        $('.op5').slideToggle();
    });
});




function initMap() {
    var map;
    // var position = ;
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 23.006655, lng: 120.1483192 },
        zoom: 10
    });
    // var marker = new google.maps.Marker({
    //     position: position,
    //     map: map,
    //     title: 'Hello World!'
    // });
    // var data = [{
    //             position: { lat: 22.6048695, lng: 120.299119 },
    //             map: map,
    //             title: 'Hello World!'
    //         },
    //         {
    //             position: { lat: 22.6148695, lng: 120.299119 },
    //             map: map,
    //             title: 'Hello World!2'
    //         }
    //     ]
    var data = [{
            position: { lat: 23.0015142, lng: 120.1584304 },
            map: map,
            title: '安平古堡'
        },
        {
            position: { lat: 23.1554306, lng: 120.1033133 },
            map: map,
            title: '台灣鹽業博物館'
        },
        {
            position: { lat: 23.2657191, lng: 120.1222217 },
            map: map,
            title: '北門遊客中心'
        },
        {
            position: { lat: 23.3052093, lng: 120.4053958 },
            map: map,
            title: '西拉雅觀光國家風景區'
        }
    ]
    for (i = 0; i < data.length; i++) {
        new google.maps.Marker(data[i]);
    }
}