var Legion={init:function(){Login.setLogin("wow",".service-welcome","#a_login"),Common.setShare(" ","#军团再临#国服全球同步上线，期待与战友再次相聚《魔兽世界》抵御军团入侵。我玩恶魔猎手，现在就缺个奶妈了！","http://wow.nos.netease.com/1/legion/share.jpg")},mobile:function(){Common.isMobile()&&($(".video").remove(),$(".roll-pic").remove())},setPageScroll:function(){if(!Common.isMobile()){var a=$(window).height();$(".g-section-1").height(a);{$(window).scrollTop()}$(".g-section-1").on("mousewheel",function(b,c){b.preventDefault(),0>c?$("body,html").stop(!0,!1).animate({scrollTop:a+"px"},450):$("body,html").stop(!0,!1).animate({scrollTop:0},200)})}},viewArtifact:function(){var a=$(".g-artifact-1"),b=a.find(".classes li"),c=a.find(".artifact"),d=a.find(".talent-list li");b.click(function(){var b=$(this).data("class");$(this).addClass("active").siblings().removeClass("active"),a.attr("class","g-artifact-1").addClass(b),c.children(".item").hide().find(".artifact-pic img").removeClass("an"),c.find(".item-"+b).show().find(".artifact-pic img").eq(0).addClass("an")}),d.hover(function(){var a=$(this).parents(".item");index=$(this).index(),$(this).addClass("active").siblings().removeClass("active"),a.find(".intro>div").hide().eq(index).show(),a.find(".artifact-pic>img").hide().eq(index).show(),a.find(".artifact-pic>img").hide().removeClass("an").eq(index).show().addClass("an")})},viewDungeon:function(){$("#js_dungeonMenu li").click(function(){var a=$(this).index();$(this).addClass("active").siblings().removeClass("active"),$("#js_dungeonList ul").eq(a).show().siblings().hide(),0==a?($("#js_dungeonIntro>div").eq(0).show().siblings().hide(),$("#js_dungeonIntro>div").removeClass("an").eq(0).addClass("an"),$("#js_dungeonDetailList .dungeon-item").eq(0).show().siblings(".dungeon-item").hide(),$("#js_dungeonDetailList .dungeon-item").eq(0).find(".leader-pic>img").removeClass("an").eq(0).addClass("an"),$(".g-section-2").attr("class","g-section-2").addClass("dungeon-1"),$(".g-section-3").attr("class","g-section-3").addClass("dungeon-1")):($("#js_dungeonIntro>div").eq(10).show().siblings().hide(),$("#js_dungeonIntro>div").removeClass("an").eq(10).addClass("an"),$("#js_dungeonDetailList .dungeon-item").eq(10).show().siblings(".dungeon-item").hide(),$("#js_dungeonDetailList .dungeon-item").eq(10).find(".leader-pic>img").removeClass("an").eq(0).addClass("an"),$(".g-section-2").attr("class","g-section-2").addClass("dungeon-11"),$(".g-section-3").attr("class","g-section-3").addClass("dungeon-11"))}),$("#js_dungeonList li").click(function(){var a=$(this).data("index");$(this).addClass("active").siblings().removeClass("active"),$("#js_dungeonIntro>div").eq(a).show().siblings().hide(),$("#js_dungeonIntro>div").removeClass("an").eq(a).addClass("an"),$("#js_dungeonDetailList .dungeon-item").eq(a).show().siblings(".dungeon-item").hide(),$("#js_dungeonDetailList .dungeon-item").eq(a).find(".leader-pic>img").removeClass("an").eq(0).addClass("an"),$(".g-section-2").attr("class","g-section-2").addClass("dungeon-"+(a+1)),$(".g-section-3").attr("class","g-section-3").addClass("dungeon-"+(a+1))}),$(".leader-list li").click(function(){var a=$(this).index();$(this).addClass("active").siblings().removeClass("active"),$(this).parents(".dungeon-item").find(".leader-intro>div").eq(a).show().siblings().hide(),$(this).parents(".dungeon-item").find(".leader-pic>img").eq(a).show().siblings().hide(),$(this).parents(".dungeon-item").find(".leader-pic>img").removeClass("an").eq(a).addClass("an")})},setdemonhunterRole:function(){$(window).scroll(function(){var a=$(window).scrollTop();a>2150&&$("#j_role span").addClass("an")})},setDemonhunterFeature:function(){var a=$("#js_featureList li");a.hover(function(){var a=$(this).index()+1;video_webm="http://wow.nos.netease.com/1/legion/video/feature-"+a+".webm",video_mp4="http://wow.nos.netease.com/1/legion/video/feature-"+a+".mp4",videoHtml=['<div class="video"><video  loop="true"  preload="auto" autoplay="autoplay"  height="692" width="389">','<source src="'+video_webm+'" type="video/webm">','<source src="'+video_mp4+'" type="video/mp4">','</video><span class="mark"></span></div>'].join(""),$(this).prepend(videoHtml)},function(){$(this).find(".video").remove()})},setPvpField:function(){$("#js_pvpField li").hover(function(){var a=$(this).data("field");$(this).addClass("active").siblings().removeClass("active"),$(".g-section-1").attr("class","g-section-1").addClass(a)})},viewClassorderhall:function(){$("#j_classes li").click(function(){$(this).addClass("active").siblings().removeClass("active");var a=$(this).data("class");if($.browser.msie||Common.isMobile()){var b='<img src="http://wow.nos.netease.com/1/legion/classorderhall/'+a+'-centered.jpg?v1"/>';$(".threeContainer").html(b)}else{var c=document.getElementById("js_threeView");b="/images/legion/classorderhall/"+a+"-centered.jpg";{new PhotoSphereViewer({panorama:b,container:c,navbar:!1,size:{width:"100%",height:"736px"},anim_speed:"0.5rpm"})}}}),$("#j_classes li").eq(0).trigger("click")},setMapItemH:function(){if(!Common.isMobile()){var a=$(window).height();$(".g-section-1").height(980>a?"980px":a)}},setMapEvent:function(){var a=$("#brokenIsles-map"),b=$(".slider");a.find("area").hover(function(){var a=$(this).attr("id");$(".zoom-title").find("."+a).hide(),$(".zoom").find("."+a).fadeIn()},function(){$(".zoom-title li").show(),$(".zoom").children().hide()}),a.find("area").click(function(){var a=$(".g-section-1").height();$("body,html").stop(!0,!1).animate({scrollTop:a+"px"},600);var c=$(this).attr("id");b.find(".area-title>div").hide(),b.find(".area-map li").hide(),b.find(".area-pic li").hide(),b.find(".area-map ."+c).show(),b.find(".area-title ."+c).show(),b.find(".area-pic ."+c).show()});var c=b.find(".prev"),d=b.find(".next"),e=b.find(".area-map li").size();c.click(function(){var a=$(".area-map li:visible").index();0==a&&(a=e),a--,b.find(".area-title>div").hide().eq(a).show(),b.find(".area-map li").hide().eq(a).show(),b.find(".area-pic li").hide().eq(a).show()}),d.click(function(){var a=$(".area-map li:visible").index();a==e-1&&(a=-1),a++,b.find(".area-title>div").hide().eq(a).show(),b.find(".area-map li").hide().eq(a).show(),b.find(".area-pic li").hide().eq(a).show()})},setMapDungeon:function(){var a=$(".area-map");jQuery.ajax({type:"GET",async:!1,url:"http://wow.nos.netease.com/1/legion/json/brokenIsles.json",jsonp:"callback",jsonpCallback:"brokenIsles",dataType:"jsonp",success:function(b){for(var c=0;c<a.find("li").length;c++)for(var d=a.find("li").eq(c).attr("class"),e=0;e<a.find("li").eq(c).find(".fb a").length;e++)a.find("li").eq(c).find(".fb a").eq(e).data("name",b.brokenIslesList[d][e].name).data("type",b.brokenIslesList[d][e].type).data("info",b.brokenIslesList[d][e].info)}}),a.find(".fb a").hover(function(a){var b=$(this).data("name"),c=$(this).data("type"),d=$(this).data("info"),e="http://wow.nos.netease.com/1/legion/map/dungeon/"+$(this).data("dungeon")+".jpg",f=a.pageX+10+"px",g=a.pageY-300+"px",h=['<div class="dungeonInfo-pop" style="background-image:url('+e+");left:"+f+";top:"+g+'">',"<strong>"+b+"</strong>","<span>"+c+"</span>","<p>"+d+"</p>","</div>"].join("");$("body").append(h)},function(){$(".dungeonInfo-pop").remove()})},setLegendary:function(){jQuery.ajax({type:"GET",async:!1,url:"http://wow.nos.netease.com/1/legion/json/legendary.json?v1",jsonp:"callback",jsonpCallback:"legendary",dataType:"jsonp",success:function(a){var b=a.legendaryList,c=$(".legendary-list ");c.find("li span").hover(function(){var a=$(this).parents("li").index(),c=b[a].type?b[a].type:"",d=['<div class="legendary-pop">','<p class="name">'+b[a].name+"</p>",'<p class="grade">'+b[a].grade+"</p>",'<p class="bind">'+b[a].bind+"</p>",'<p class="part">'+b[a].part+"<span>"+c+"</span></p>",'<p class="effect1">'+b[a].effect1+"</p>",'<p class="effect2">'+b[a].effect2+"</p>",'<p class="effect3">'+b[a].effect3+"</p>",'<p class="effect4">'+b[a].effect4+"</p>",'<p class="effect5">'+b[a].effect5+"</p>",'<p class="equip">'+b[a].equip+"</p>",'<p class="class">'+b[a].classes+"</p>",'<p class="info">'+b[a].txt+"</p>","</div>"].join("");$(this).parents("li").css("z-index","10").append(d)},function(){$(".legendary-pop").remove(),c.find("li").css({"z-index":"1"})})}})},setTalent:function(){var a=$("#js_talent");a.find(".talent-menu a").click(function(){var b=$(this).index();$(this).addClass("active").siblings().removeClass("active"),a.find(".talent-list").hide().eq(b).show()}),jQuery.ajax({type:"GET",async:!1,url:"http://wow.nos.netease.com/1/legion/json/talentDetail.json?v1",jsonp:"callback",jsonpCallback:"talent",dataType:"jsonp",success:function(b){var c=b.talentDetail.havoc,d=b.talentDetail.vengeance;a.find("#js_havoc li span").hover(function(){var a=$(this).parents("li").index(),b=$(this).parents("li").data("rel"),d=c[a].spe_1?"<p>"+c[a].spe_1+"</p>":"",e=c[a].spe_2?"<p>"+c[a].spe_2+"<span>"+c[a].spe_2_1+"</span></p>":"",f=c[a].spe_3?"<p>"+c[a].spe_3+"<span>"+c[a].spe_3_1+"</span></p>":"",g=c[a].spe_4?"<p>"+c[a].spe_4+"</p>":"",h=c[a].spe_5?"<p>"+c[a].spe_5+"</p>":"",i=c[a].spe_6?"<p>"+c[a].spe_6+"</p>":"",j=c[a].spe_7?"<p>"+c[a].spe_7+"</p>":"",k=['<div class="talent-pop">',"<strong>"+c[a].name+"</strong>"+d+e+f+g+h,'<p class="info">'+c[a].info+"</p>"+i+j,"</div>"].join("");$(this).parents("li").css("z-index","10").append(k),b&&$(".talent-pop").css("left","-280px")},function(){a.find("#js_vengeance li").css("z-index","2"),$(".talent-pop").remove()}),a.find("#js_vengeance li span").hover(function(){var a=$(this).parents("li").index(),b=$(this).parents("li").data("rel"),c=d[a].spe_1?"<p>"+d[a].spe_1+"</p>":"",e=d[a].spe_2?"<p>"+d[a].spe_2+"<span>"+d[a].spe_2_1+"</span></p>":"",f=d[a].spe_3?"<p>"+d[a].spe_3+"<span>"+d[a].spe_3_1+"</span></p>":"",g=d[a].spe_4?"<p>"+d[a].spe_4+"</p>":"",h=d[a].spe_5?"<p>"+d[a].spe_5+"</p>":"",i=d[a].spe_6?"<p>"+d[a].spe_6+"</p>":"",j=d[a].spe_7?"<p>"+d[a].spe_7+"</p>":"",k=['<div class="talent-pop">',"<strong>"+d[a].name+"</strong>"+c+e+f+g+h,'<p class="info">'+d[a].info+"</p>"+i+j,"</div>"].join("");$(this).parents("li").css("z-index","10").append(k),b&&$(".talent-pop").css("left","-280px")},function(){a.find("#js_vengeance li").css("z-index","2"),$(".talent-pop").remove()})}})}};