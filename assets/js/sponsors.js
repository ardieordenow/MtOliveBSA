//last updated 2021-07-28
var sponsors = [
	{
		"href": "http://www.alstedefarms.com",
		"name": "Alstede Farms",
		"img": "//my.llfiles.com/00073674/alstede_farms_310x100.png"
	},
	{
		"href": "http://www.arkadiapest.com",
		"name": "Arkadia - Eco Pest Control",
		"img": "//my.llfiles.com/00073674/arkadia-badge-logo-blue_140x150_whitebg.png"
	},
	{
		"href": "http://www.ashleyfarmsonline.com",
		"name": "Ashley Farms",
		"img": "//my.llfiles.com/00073674/ashley_farms_256x149.jpg"
	},
	{
		"href": "http://DTA-Auto.com",
		"name": "D.T.A. Automotive",
		"img": "//my.llfiles.com/00073674/dta_auto_192x150_whitebg.png"
	},
	{
		"href": "http://www.dickssportinggoods.com",
		"name": "Dick's Sporting Goods",
		"img": "//my.llfiles.com/00073674/dspLogo_258x150.png"
	},
	{
		"href": "http:////www.environmentaltransportgroupinc.com/",
		"name": "Environmental Transport Group, Inc.",
		"img": "//my.llfiles.com/00073674/etgi_banner_325x150.png"
	},
	{
		"href": "http://epicurefoodscorp.com/",
		"name": "Epicure Foods Corporation",
		"img": "//my.llfiles.com/00073674/epicure_banner_497x175.png"
	},
	{
		"href": "http://www.flandersbagels.com/",
		"name": "Flanders Bagels",
		"img": "//my.llfiles.com/00073674/flanders_bagels_243x150.png"
	},
	{
		"href": "http:////gjkeller.com/",
		"name": "George J Keller & Sons",
		"img": "//my.llfiles.com/00073674/george_j_kelller_banner_679x60.jpg"
	},
	{
		"href": "http://www.facebook.com/HomeworxPlus-102816011286318/",
		"name": "HomeworxPlus",
		"img": "//my.llfiles.com/00073674/HomeworxPlus_banner_394x150.png"
	},
	{
		"href": "http:////www.keypointmtg.com/",
		"name": "Keypoint Mortgage",
		"img": "//my.llfiles.com/00073674/keypoint_mortgage_banner_434x100.png"
	},
	{
		"href": "http:////maximumhealthpt.com",
		"name": "Maximum Health Physical Therapy",
		"img": "//my.llfiles.com/00073674/maximum_health_physical_therapy_272x80_whitebg.png"
	},
	{
		"href": "http:////millenniumtextileinc.com/",
		"name": "Millennium International Textile, Inc.",
		"img": "//my.llfiles.com/00073674/millennium_textile_278x80.png"
	},
	{
		"href": "http://www.flandersdentist.com/",
		"name": "Mount Olive Family Dental",
		"img": "//my.llfiles.com/00073674/mt_olive_dental_209x62_whitebg.png"
	},
	{
		"href": "http://petillo.com",
		"name": "Petillo Incorporated",
		"img": "//my.llfiles.com/00073674/petillo_294x95.png"
	},
	{
		"href": "http:////www.facebook.com/withsportsinmind/?rf=156774454363392",
		"name": "R&S Sports",
		"img": "//my.llfiles.com/00073674/rs_sports_224x150.jpg"
	},
	{
		"href": "http://www.flandersritas.com",
		"name": "Rita's Italian Ice",
		"img": "//my.llfiles.com/00073674/ritaslogo_171x150.jpg"
	},
	{
		"href": "http:////ashawlofhope.org/",
		"name": "Shawl of Hope",
		"img": "//my.llfiles.com/00073674/shawl_of_hope_146x150.png"
	},
	{
		"href": "http:////steelmack.com/",
		"name": "Steelmack Landscaping Contractors",
		"img": "//my.llfiles.com/00073674/steelmack_272x150.jpg"
	},
	{
		"href": "http:////sundaeicecreamparlor.wixsite.com/sundaes",
		"name": "Sundaes",
		"img": "//my.llfiles.com/00073674/sundaes_banner_496x150_whitebg.png"
	},
	{
		"href": "http://www.lawleonard.com/",
		"name": "Todd J. Leonard Law Firm",
		"img": "//my.llfiles.com/00073674/todd_j_leonard_law_firm_270x150.png"
	}
];


//Add sponsor carousel
$("<div class=\"sponsor_roll\"></div>").appendTo($("#sponsor_roll_container"));
$(sponsors).each(function(i, r){
    $("<div><a href=\"" + r.href + "\" target=\"_blank\"><img src=\"" + r.img + "\" alt=\"" + r.name + "\" /></a></div>").appendTo($(".sponsor_roll"));
});

$('.sponsor_roll').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    initialSlide: Math.floor(Math.random() * sponsors.length),
    variableWidth: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
