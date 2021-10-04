		$(".book-list").owlCarousel({
			items: 4,
			margin: 20,
			loop: true,
			autoplay: true,
			autoplayTimeout:2000,
			nav: true,
			navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
			responsiveClass:true,
		    responsive:{
		        0:{
		            items:2,
		            nav:true
		        },
		        601:{
		            items:3,
		            nav:true
		        },
		        768:{
		            items:4,
		            nav:true,
		            loop:true
		        },
		        1200:{
		            items:4,
		            nav:true,
		            loop:true
		        }
		    }
		});


		$(".partner-list").owlCarousel({
			items: 5,
			margin: 40,
			loop: true,
			autoplay: true,
			autoplayTimeout:2000,
			nav:false,
			responsiveClass:true,
		    responsive:{
		        0:{
		            items:3,
		            nav:false,
		            margin: 60
		        },
		        601:{
		            items:5,
		            nav:false
		        },
		        768:{
		            items:5,
		            nav:true,
		            nav:false
		        },
		        1200:{
		            items:5,
		            nav:true,
		            nav:false
		        }
		    }
		});

	