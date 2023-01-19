// Scroll Top
$(document).ready(function () {
    initializePage();
    scrollButton();
    datepicker('#depDate1');
    datepicker('#depDate2');
    datepicker('#arrDate2');
});

function initializePage() {
    setRecomended();
    setOffers();
    setDestinations();
    setRoutes();
    setTestimonials();
    setDate();

    initializeFormFromTo();
    initializeFormOneRoundAndPassengersNumber();
    initializeEnquireNow();
    initializeContactUsEvent();
}

function initializeFormFromTo() {
    let content = '';
    airports.map(el => {
        content += `<option value=${el}>`;
    });
    $('#datalistOptions').append(content);
}

function initializeFormOneRoundAndPassengersNumber() {
    $('.oneOrRound1').hide();
    $('.oneOrRound').click( function(e) {
        e.preventDefault();
        let selected = $(this).attr('aria-controls');
        if (selected.includes('one')) {
            $('.oneOrRound1').show();
            $('.oneOrRound2').hide();
        } else {
            $('.oneOrRound1').hide();
            $('.oneOrRound2').show();
        }
    });
    
    $('.passengers').change(function(e) {
        let content = '';
        e.preventDefault();
        content = parseInt($('#adultNum').val().trim()) + parseInt($('#childNum').val().trim()) + parseInt($('#infanNumt').val().trim());
        $('.passengersNum').html('- ' + content);
    });
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function isPhone(phone) {
  var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  return regex.test(phone);
}


function initializeEnquireNow() {
     $('.enquire-now').click( function(e) {
        e.preventDefault();
        let email = $('#email').val().trim();
        let phone = $('#phone').val().trim();
        let depFrom = $('#depFrom').val().trim();
        let arrTo = $('#arrTo').val().trim();

        let selectedOne = $('.oneOrRound1').is(":visible");
        let chose = '';
        let depArrDate = '';
        if (selectedOne) {
            chose = 'One Way';
            depArrDate = $('#depDate1').val().trim();
        } else {
            chose = 'Round Trip';
            depArrDate = $('#depDate2').val().trim() + ' - ' + $('#arrDate2').val().trim();
        }

        let adultNum = $('#adultNum').val().trim();
        let childNum = $('#childNum').val().trim();
        let infantNum = $('#infanNumt').val().trim();
        let total = parseInt($('#adultNum').val().trim()) + parseInt($('#childNum').val().trim()) + parseInt($('#infanNumt').val().trim());

        let classMode = $('#class_mode').prop('checked');
        let stopMode = $('#stop_mode').prop('checked');
        let classType = 'Economy'; 
        if (classMode) {
            classType = 'Premium';
        }
        let stopType = 'Stop';
        if (stopMode) {
            stopType = 'Non Stop';
        }

        if ((isEmail(email) || isPhone(phone)) && depFrom && arrTo && 
            ((selectedOne && depArrDate.length > 10) || (!selectedOne && depArrDate.length > 20)) &&
            total > 0 && classType && stopType) {
            swal(
                "Are you sure?",
                "Want to receive tickets prices within filled dates?",
                 "warning", 
                {
                    cancel: true,
                    buttons: {
                        cancel: true,
                        ok: {
                            text: 'Ok'
                        }
                    }
                }
            ).then((result) => {
                if (result === 'ok') {
                    sendMail(email, phone, depFrom, arrTo, depArrDate, adultNum, childNum, infantNum, stopType, classType, chose);
                    swal({
                        title: "Please wait...",
                        text: "while sending your request to our customer service",
                        icon: "warning",
                        closeOnEsc: false,
                        closeOnClickOutside: false,
                        buttons: false,
                    });
                }
            });
        } else {
            swal(
                "Form not complete",
                 " ",
                 "warning", 
                {
                    button: "Ok"
                }
            );
            $('.swal-text').append('Please fill all the fields to proceed: <br> 1) Correct Email or Phone<br>2) Depart From/Arrival To <br> 3) Departure Date/Arrival Date <br> 4) Travellers');
        }
    });
}

function initializeContactUsEvent() {
    $('.contact-us').click( function(e) {
        e.preventDefault();
        window.location.href = '#';
    });
}

function setRecomended() {
    let data = [
        {a: 'Best Deal 2', b: 'The Montcalm At Brewery London City 2', c: 'Westminster Borough, London 2', d: '4.8', e: 'Exceptional 2', f: '3,014 reviews', g: 'Starting from US$72', h: 'assets/images/recommended/offers02.png'},
        {a: 'Best Deal 3', b: 'The Montcalm At Brewery London City 3', c: 'Westminster Borough, London 3', d: '4.7', e: 'Exceptional 3', f: '3,015 reviews', g: 'Starting from US$73', h: 'assets/images/recommended/offers03.png'},
        {a: 'Best Deal 4', b: 'The Montcalm At Brewery London City 4', c: 'Westminster Borough, London 4', d: '4.6', e: 'Exceptional 4', f: '3,016 reviews', g: 'Starting from US$74', h: 'assets/images/recommended/offers04.png'},
        {a: 'Best Deal 5', b: 'The Montcalm At Brewery London City 5', c: 'Westminster Borough, London 5', d: '4.5', e: 'Exceptional 5', f: '3,017 reviews', g: 'Starting from US$75', h: 'assets/images/recommended/offers01.png'}
    ];
    let content = '';
    data.map(el => {
        content += `<div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div class="card-wrap">
                <div class="con-img-wrap m-auto">
                    <img src=${el.h} class="img-fluid mx-auto d-block"
                        alt="product picture">
                    <div class="offer-tag  bg-info">${el.a}</div>
                    <span class="wishlist-tag"><i class="bi bi-heart"></i></span>
                </div>
                <div class="con-wrap mt-4">
                    <h2 class="fs-6 mt-4 fw-bold text-truncate">${el.b}</h2>
                    <p class="mb-2 theme-text-accent-two small">${el.c}</p>
                    <div class="d-flex bottom mb-2">
                        <div class="rating-cover">
                            <span class="p-1 small rounded-1 bg-danger theme-text-white">${el.d}</span>
                            <span class="me-2 small theme-text-accent-one">${el.e}</span>
                            <span class="small">${el.f}</span>
                        </div>
                    </div>
                    <p class="mb-0 theme-text-accent-one">${el.g}</p>
                </div>
            </div>
        </div>`;
    });

    $('.recomended-section').append(content);
}

function setOffers() {
    let data = [{a: 'Things to do on trip', b: 'Learn More', c: 'product01'}, {a: 'Enjoy Summer Deals', b: 'View Deal', c: 'product02'}];
    let content = '';
    data.map(el => {
        content += `
        <div class="col-12 col-md-6 mb-3 mb-md-0 overflow-hidden hoverShine">
            <div class="box ${el.c}">
                <div class="content">
                    <p class="fs-1 theme-heading theme-text-white mb-4">${el.a}</p>
                    <div class="custom-button">
                        <a href="javascript:void(0)" class="btn btn-shop small">
                            ${el.b}
                            <i class="bi bi-arrow-up-right fs-6 ms-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
    });
    $('.offers-section').append(content);
}

function setDestinations() {
    let data = [
        {a: 'assets/images/destinations/destination01.jpg', b: 'Hawai', c: '12,683 Hotels'},
        {a: 'assets/images/destinations/destination02.jpg', b: 'Turkey', c: 'product02'},
        {a: 'assets/images/destinations/destination03.jpg', b: 'Australia', c: '12,683 Hotels'},
        {a: 'assets/images/destinations/destination04.jpg', b: 'Rome', c: '12,683 Hotels'},
        {a: 'assets/images/destinations/destination05.jpg', b: 'London', c: '12,683 Hotels'},
        {a: 'assets/images/destinations/destination06.jpg', b: 'Zealand', c: '12,683 Hotels'},
        {a: 'assets/images/destinations/destination07.jpg', b: 'Paris', c: '12,683 Hotels'},
    ];
    let content = '';
    data.map(el => {
        content += `<div class="col-12 col-lg-3">
        <div class="theme-bg-white mb-5">
            <div class="row g-0 align-items-center">
                <div class="col-4 col-xxl-2 overflow-hidden rounded-circle">
                    <div class="overflow-hidden">
                        <figure class="mb-0 img-effect">
                            <img src=${el.a} class="img-fluid" alt="flight-destination" title="flight-destination">
                        </figure>
                    </div>
                </div>
                <div class="col-8 col-xxl-10">
                    <div
                        class="mt-2 mt-xxl-0 ps-3 d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-column">
                            <span class="d-flex fs-6">${el.b}</span>
                            <span class="d-flex small fw-normal theme-text-accent-one">${el.c}</span>
                        </div>
                        <div class="d-flex">
                            <a href="#" class="link-btn"><span><i class="bi bi-arrow-up-right"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    });
    $('.destination-section').append(content);
    
}

function setRoutes() {
    let data = [
        {a: 'assets/images/icons/1.png', b: '14:00', c: '4h 05m- Nonstop', d: 'LHR', e: 'assets/images/icons/2.png', f: '15:00', g: 'ABD', h: '2h 00m- Nonstop', i: '17:00', j: 'AEH', k: 'US$934', l: '16 deals', m: 'View Deal'}, 
        {a: 'assets/images/icons/3.png', b: '14:00', c: '4h 05m- Nonstop', d: 'LHR', e: 'assets/images/icons/4.png', f: '15:00', g: 'ABD', h: '2h 00m- Nonstop', i: '17:00', j: 'AEH', k: 'US$934', l: '16 deals', m: 'View Deal'}, 
        {a: 'assets/images/icons/5.png', b: '14:00', c: '4h 05m- Nonstop', d: 'LHR', e: 'assets/images/icons/1.png', f: '15:00', g: 'ABD', h: '2h 00m- Nonstop', i: '17:00', j: 'AEH', k: 'US$934', l: '16 deals', m: 'View Deal'}, 
        {a: 'assets/images/icons/2.png', b: '14:00', c: '4h 05m- Nonstop', d: 'LHR', e: 'assets/images/icons/3.png', f: '15:00', g: 'ABD', h: '2h 00m- Nonstop', i: '17:00', j: 'AEH', k: 'US$934', l: '16 deals', m: 'View Deal'}, 
    ];
    let content = '';
    data.map(el => {
        content += `<div class="col-12 mb-3">
        <div class="p-3 theme-border-radius border">
            <div class="row justify-content-between align-items-center">
                <div class="col-xl-4 col-lg-6">
                    <div class="row align-items-center">
                        <div class="col-sm-auto">
                            <img class="size-40" src=${el.a} alt="image">
                        </div>
                        <div class="col">
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <div class="fs-6">${el.b}</div>
                                    <div class="small theme-text-accent-one">DEL</div>
                                </div>
                                <div class="col text-center">
                                    <div class="flightLine">
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div class="small theme-text-accent-two">${el.c}</div>
                                </div>
                                <div class="col-auto">
                                    <div class="fs-6">22:00</div>
                                    <div class="small theme-text-accent-one">${el.d}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 my-5 my-lg-0">
                    <div class="row align-items-center">
                        <div class="col-sm-auto">
                            <img class="size-40" src=${el.e} alt="image">
                        </div>
                        <div class="col">
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <div class="fs-6">${el.f}</div>
                                    <div class="small theme-text-accent-one">${el.g}</div>
                                </div>
                                <div class="col text-center">
                                    <div class="flightLine">
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div class="small theme-text-accent-two">${el.h}</div>
                                </div>
                                <div class="col-auto">
                                    <div class="fs-6">${el.i}</div>
                                    <div class="small theme-text-accent-one">${el.j}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="d-flex justify-content-between">
                        <div class="me-4">
                            <div class="fs-6">${el.k}</div>
                            <div class="small theme-text-accent-one">${el.l}</div>
                        </div>
                        <a href="#" class="theme-btn-outline p-2">
                            ${el.m} <i class="bi bi-arrow-up-right ms-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    });
    $('.routes-section').append(content);
}

function setTestimonials() {
    let data = [
        {a: 'Hotel Equatorial Jwelqc', b: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore sunt explicabo."`, c: 'assets/images/customer/avatar01.png', d: 'Client Johna', e: 'Expert Guide'},
        {a: 'Holiday Places ptx', b: `"Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic."`, c: 'assets/images/customer/avatar02.png', d: 'Courtney Henry', e: 'Water Coolers'},
        {a: 'Flight Wdaatorial Melaka', b: `"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."`, c: 'assets/images/customer/avatar03.png', d: 'Mustafa Ahamad', e: 'Travel World'}
    ];
    let content = '';
    data.map(el => {
        content += `<div class="col-12 col-lg-4 position-relative">
        <div class="client-con p-5 mt-5 mt-lg-0 theme-box-shadow">
            <h4 class="mb-3 fs-6 theme-text-primary">${el.a}</h4>
            <p class="mb-0 theme-text-accent-two lh-lg small">${el.b}</p>
            <div class="d-flex flex-column justify-content-center mt-3 pt-3 border-top">
                <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                        <figure class="mb-0 avatar">
                            <img src=${el.c} class="img-fluid"
                                alt="client review">
                        </figure>
                    </div>
                    <div class="flex-grow-1 ms-3">
                        <span class="mt-2 theme-text-accent-one">${el.d}</span>
                        <p class="mb-0 theme-text-accent-two small">${el.e}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    });
    $('.testimonials-section').append(content);
    
}

function setDate() {
    document.getElementById('copyright-year').innerHTML = `${new Date().getFullYear()} FairoCheap All rights reserved.`;
}

function scrollButton() {
    var ScrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() < 500) {
            ScrollTop.removeClass("active");
        } else {
            ScrollTop.addClass("active");
        }
    });
    $('.scrollToTop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
}

function sendMail(email, phone, depFrom, arrTo, depArrDate, adultNum, childNum, infantNum, stopType, classType, oneWayRound) {
    var data = {
        service_id: 'service_anfkdec',
        template_id: 'template_px4i2lf',
        user_id: 'm9YvzMj0HDLG1qHK_',
        template_params: { email, phone, depFrom, arrTo, depArrDate, adultNum, childNum, infantNum, stopType, classType, oneWayRound }
    };
    console.log(data);

    /*$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        swal(
            "Thanks - Request sent",
            "Our customer service will reply to you as soon as possible",
             "success", 
            {
                button: "Ok"
            }
        ).then((result) => {
            let elements = document.getElementsByTagName("input");
            for (let ii=0; ii < elements.length; ii++) {
              if (elements[ii].type == "text") {
                elements[ii].value = "";
              }
            }
        });
    }).fail(function(error) {
        swal(
            "Oops...",
            "There was a problem with our services. Retry later.",
             "error", 
            {
                button: "Close"
            }
        );
    });*/
}

function defaultFunc() {
    let data = [{a: 'Things to do on trip', b: 'Learn More', c: 'product01'}, {a: 'Enjoy Summer Deals', b: 'View Deal', c: 'product02'}];
    let content = '';
    data.map(el => {
        content += `
        <div class="col-12 col-md-6 mb-3 mb-md-0 overflow-hidden hoverShine">
        </div>`;
    });
    $('.offers-section').append(content);
}