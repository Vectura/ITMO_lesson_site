$(function(){
	
	$(".owl-carousel").owlCarousel({
		loop:true,
		nav: true,
		responsive:{
			320:{
				items:1,
			}
		}
	});


$(".s-works-item").each(function(e) {

        var th = $(this);

        th.attr("href", "#popup-img-" + e)
            .find(".portfolio-popup")
                .attr("id", "popup-img-" + e);

    });

    $(".s-works-item").magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: 'inline',
    });


    $('.s-progress').waypoint(function(){
       $({blurRadius: 5}).animate({blurRadius: 0}, {
           duration: 1000,
           easing: 'swing',
           step: function() {
              $(".s-adv-item h2").css({
                 "-webkit-filter": "blur("+this.blurRadius+"px)",
                 "filter": "blur("+this.blurRadius+"px)"
             });
          }
      });
       var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
       $(".s-adv-item h2").each(function() {
           var tcount = $(this).data("count");
           $(this).animateNumber({ number: tcount,
              easing: 'easeInQuad',
              "font-size": "37px",
              numberStep: comma_separator_number_step},
              1000);
       });
       this.destroy();

   }, {
    offset: '70%'
});

    progressBar = new ProgressBar.Circle('#container', {
        color: '#fff',
        strokeWidth: 3,
        trailColor: '#dcdcdc',
        trailWidth: 3,
        svgStyle: {
            display: 'block',
            width: '100%'
        },
        text: {
            value: '64%',
            className: 'progressbar__label',
            style: {
                color: '#222',
                position: 'absolute',
                left: '50%',
                top: '50%',
                padding: 0,
                margin: 0,
                transform: {
                    prefix: true,
                    value: 'translate(-50%, -50%)'
                }
            },
            autoStyleContainer: true,
            alignToBottom: true
        },
        fill: null,
        duration: 300,
        easing: 'easeOut',
        from: { color: '#eee' },
        to: { color: '#000' },
        step: function(state, circle, attachment) {
            circle.path.setAttribute('stroke', state.color);
        }
    });


    progressBar.animate(0.64, {
        duration: 300,
        easing: 'easeInOut',
        from: { color: '#eee' },
        to: { color: '#000' },
        step: function(state, circle, attachment) {
            circle.path.setAttribute('stroke', state.color);}
        }, function() {
            console.log('Animation has finished');
        });
});

progressBar = new ProgressBar.Circle('#container-2', {
    color: '#fff',
    strokeWidth: 3,
    trailColor: '#dcdcdc',
    trailWidth: 3,
    svgStyle: {
        display: 'block',
        width: '100%'
    },
    text: {
        value: '22%',
        className: 'progressbar__label',
        style: {
            color: '#222',
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: 0,
            margin: 0,
            transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
        },
        autoStyleContainer: true,
        alignToBottom: true
    },
    fill: null,
    duration: 300,
    easing: 'easeOut',
    from: { color: '#eee' },
    to: { color: '#000' },
    step: function(state, circle, attachment) {
        circle.path.setAttribute('stroke', state.color);
    }
});

progressBar.animate(0.22, {
    duration: 300,
    easing: 'easeInOut',
    from: { color: '#eee' },
    to: { color: '#000' },
    step: function(state, circle, attachment) {
        circle.path.setAttribute('stroke', state.color);}
    }, function() {
        console.log('Animation has finished');
    });


progressBar = new ProgressBar.Circle('#container-3', {
    color: '#fff',
    strokeWidth: 3,
    trailColor: '#dcdcdc',
    trailWidth: 3,
    svgStyle: {
        display: 'block',
        width: '100%'
    },
    text: {
        value: '84%',
        className: 'progressbar__label',
        style: {
            color: '#222',
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: 0,
            margin: 0,
            transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
        },
        autoStyleContainer: true,
        alignToBottom: true
    },
    fill: null,
    duration: 300,
    easing: 'easeOut',
    from: { color: '#eee' },
    to: { color: '#000' },
    step: function(state, circle, attachment) {
        circle.path.setAttribute('stroke', state.color);
    }
});

progressBar.animate(0.84, {
    duration: 300,
    easing: 'easeInOut',
    from: { color: '#eee' },
    to: { color: '#000' },
    step: function(state, circle, attachment) {
        circle.path.setAttribute('stroke', state.color);}
    }, function() {
        console.log('Animation has finished');
    });

progressBar = new ProgressBar.Circle('#container-4', {
    color: '#fff',
    strokeWidth: 3,
    trailColor: '#dcdcdc',
    trailWidth: 3,
    svgStyle: {
        display: 'block',
        width: '100%'
    },
    text: {
        value: '45%',
        className: 'progressbar__label',
        style: {
            color: '#222',
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: 0,
            margin: 0,
            transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
        },
        autoStyleContainer: true,
        alignToBottom: true
    },
    fill: null,
    duration: 300,
    easing: 'easeOut',
    from: { color: '#eee' },
    to: { color: '#000' },
    step: function(state, circle, attachment) {
        circle.path.setAttribute('stroke', state.color);
    }
});

progressBar.animate(0.45, {
    duration: 300,
    easing: 'easeInOut',
    from: { color: '#eee' },
    to: { color: '#000' },
    step: function(state, circle, attachment) {
        circle.path.setAttribute('stroke', state.color);}
    }, function() {
        console.log('Animation has finished');
    });