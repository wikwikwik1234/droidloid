function showrecentpostswiththumbs(t){document.write('<ul class="recent_posts_with_thumbs">');for(var e=0;e<numposts;e++){var r,n,i=t.feed.entry[e],o=i.title.$t;if(e==t.feed.entry.length)break;for(var l=0;l<i.link.length;l++){if("replies"==i.link[l].rel&&"text/html"==i.link[l].type)var u=i.link[l].title,m=i.link[l].href;if("alternate"==i.link[l].rel){r=i.link[l].href;break}}try{n=i.media$thumbnail.url}catch(t){s=i.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),n=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"http://www.webaholic.co.in/other/no-image.jpg"}var p=i.published.$t,h=p.substring(0,4),f=p.substring(5,7),w=p.substring(8,10),g=new Array;if(g[1]="Jan",g[2]="Feb",g[3]="Mar",g[4]="Apr",g[5]="May",g[6]="Jun",g[7]="Jul",g[8]="Aug",g[9]="Sep",g[10]="Oct",g[11]="Nov",g[12]="Dec",document.write('<li class="clearfix">'),1==showpostthumbnails&&document.write('<img class="recent_thumb" src="'+n+'"/>'),document.write('<b><a href="'+r+'" target ="_top">'+o+"</a></b><br>"),"content"in i)var y=i.content.$t;else if("summary"in i)y=i.summary.$t;else y="";if(y=y.replace(/<\S[^>]*>/g,""),1==showpostsummary)if(y.length<numchars)document.write("<p>"),document.write(y),document.write("</p>");else{document.write("<p>");var v=(y=y.substring(0,numchars)).lastIndexOf(" ");y=y.substring(0,v),document.write(y+"..."),document.write("</p>")}var k="",_=0;document.write(""),1==showpostdate&&(k=k+g[parseInt(f,10)]+"-"+w+" - "+h,_=1),1==showcommentnum&&(1==_&&(k+=" | "),"1 Comments"==u&&(u="1 Comment"),"0 Comments"==u&&(u="No Comments"),k+=u='<a href="'+m+'" target ="_top">'+u+"</a>",_=1),1==displaymore&&(1==_&&(k+=" | "),k=k+'<a href="'+r+'" class="url" target ="_top">more Â»</a>',_=1),document.write(k),document.write("</li>"),1==displayseparator&&e!=numposts-1&&document.write("")}document.write("</ul>")}function labelthumbs(t){document.write('<ul id="label_with_thumbs">');for(var e=0;e<numposts;e++){var r,n,i=t.feed.entry[e],o=i.title.$t;if(e==t.feed.entry.length)break;for(var l=0;l<i.link.length;l++){if("replies"==i.link[l].rel&&"text/html"==i.link[l].type)var u=i.link[l].title,m=i.link[l].href;if("alternate"==i.link[l].rel){r=i.link[l].href;break}}try{n=i.media$thumbnail.url}catch(t){s=i.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),n=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s1600/picture_not_available.png"}var p=i.published.$t,h=(p.substring(0,4),p.substring(5,7),p.substring(8,10),new Array);h[1]="Jan",h[2]="Feb",h[3]="Mar",h[4]="Apr",h[5]="May",h[6]="June",h[7]="July",h[8]="Aug",h[9]="Sept",h[10]="Oct",h[11]="Nov",h[12]="Dec",document.write('<li class="recent-box">'),1==showpostthumbnails&&document.write('<div class="imageContainer"><a href="'+r+'" target ="_top"><img class="label_thumb" src="'+n+'" title="'+o+'" alt="'+o+'"/></a></div>'),document.write('<a class="label_title" href="'+r+'" target ="_top">'+o+"</a>");var f=0;document.write("");for(var w=[1,2,3,4,5,6,7,8,9,10,11,12],g=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],y=(p=i.published.$t).split("-")[2].substring(0,2),v=p.split("-")[1],k=p.split("-")[0],_=0;_<w.length;_++)if(parseInt(v)==w[_]){v=g[_];break}var A=y+" "+v+" "+k;if(1==showpostdate&&document.write('<div class="toe"><a href="'+r+'" class="post-date">'+A+"</a>"),1==showcommentnum&&(1==f&&" | ","1 Comments"==u&&(u="1 Comment"),"0 Comments"==u&&(u="No Comments"),u,f=1,document.write('<a class="recent-com" href="'+m+'" target ="_top">'+u+"</a></div>")),"content"in i)var $=i.content.$t;else if("summary"in i)$=i.summary.$t;else $="";if($=$.replace(/<\S[^>]*>/g,""),1==showpostsummary)if($.length<numchars)document.write(""),document.write($),document.write("");else{document.write("");var x=($=$.substring(0,numchars)).lastIndexOf(" ");$=$.substring(0,x),document.write('<p class="post-summary">'+$+"...</p>")}document.write("</li>"),e!=numposts-1&&document.write("")}document.write("</ul>")}$(document).ready(function(){$(".label_thumb").attr("src",function(t,e){return e.replace("s72-c","s1600")})}),$(document).ready(function(){$(".label_thumb").attr("src",function(t,e){return e.replace("default.jpg","mqdefault.jpg")})});