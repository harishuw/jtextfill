/*
**************************************
******jTextFill 1.0.1*****************
******jTextFill.js*********************
******Created by Harish U Warrier*****
******Created on 01-06-2015***********
******Modified on 18-06-2015**********
******info@jformslider.com************
******www.jformslider.com*************
**************************************
*/
!function(t){t.fn.jTextFill=function(i){function e(t){return Number(t.replace("px",""))}function a(i,e,a){var l=i.length<a?i.length:a,r=document.createElement("div");t(r).addClass("jtextfill"),t(r).attr("id",e);for(var s=document.createElement("ul"),n=0;l>n;n++){var d=i[n];i[n].hasOwnProperty("html")?d=i[n].html:i[n].hasOwnProperty("value")&&(d=i[n].value);var c=document.createElement("li");c.innerHTML=d,t(c).attr("data-id",n),t(s).append(c)}t("#"+e).length<=0?(t(r).append(s),t("body").append(r)):t("#"+e).html(s)}function l(i,a){var l=a.height(),r=a.width(),s=a.offset(),n=e(a.css("border-right-width"))+e(a.css("border-left-width")),d=e(a.css("margin-right"))+e(a.css("margin-left")),c=e(a.css("padding-right"))+e(a.css("padding-left")),o=e(a.css("padding-bottom"))+e(a.css("padding-top")),f=n+d+c+r,h=s.left+"px",v=s.top+l+o+"px";t("#"+i).css("top",v),t("#"+i).css("left",h),t("#"+i).css("width",f+"px"),t("#"+i).show()}function r(i,e){var a=Array();return t.each(i,function(i,l){l.hasOwnProperty("value")?0===t.trim(l.value).toLowerCase().indexOf(e.toLowerCase())&&a.push(l):0===t.trim(l).toLowerCase().indexOf(e.toLowerCase())&&a.push(l)}),a}function s(i,e){var a=3==arguments.length?arguments[2]:!0,l=t("#"+i+" li.active"),r=l.text();a&&t("#"+i).hide();var s=l.attr("data-id");void 0!=n[s]&&(r=n[s].hasOwnProperty("value")?n[s].value:n[s]),t('[data-fill="'+i+'"]').val(r),e.filled(n[s])}var n,d={list:[],minlength:1,limit:10,filled:function(){},clicked:function(){}};i=t.extend(d,i),t(this).each(function(){t(this).attr("autocomplete","off"),t(this).keyup(function(e){var d=e.which,c=[37,38,39,40,13],o=t(this).val();if(!(o.length<i.minlength)){var f=Array(),h=t(this),v=(new Date).valueOf(),u=typeof i.list;t(this)[0].hasAttribute("id")&&""!=t(this).attr("id")||t(this).attr("id","jtextfill"+v),t(this)[0].hasAttribute("data-fill")&&""!=t(this).attr("data-fill")||t(this).attr("data-fill","jtextfilllist"+v);var p=t(this).attr("data-fill");if(-1==t.inArray(d,c)){if("string"==u){var m={key:o};t.getJSON(i.list,m,function(t){var e=r(t,o);n=e,a(e,p,i.limit),l(p,h)})}else if("object"==u||"array"==u){var f=r(i.list,o);n=f,a(f,p,i.limit),l(p,h)}}else if(38==d){var g=t("#"+p+" li.active").prev();g.length>0?(t("#"+p+" li").removeClass("active"),g.addClass("active")):(t("#"+p+" li").removeClass("active"),t("#"+p+" li:first").addClass("active"))}else if(40==d){var x=t("#"+p+" li.active").next();x.length>0?(t("#"+p+" li").removeClass("active"),x.addClass("active")):(t("#"+p+" li").removeClass("active"),t("#"+p+" li:first").addClass("active")),s(p,i,!1)}else if(13==d){{h[0].hasAttribute("data-fill")?h.attr("data-fill"):""}""!=p&&(s(p,i),i.clicked(n[t("#"+p+" li.active").attr("data-id")]))}}})}),t("body").on("mouseenter",".jtextfill li",function(){var e=t(this).parents(".jtextfill").attr("id");t("#"+e+" li").removeClass("active"),t(this).addClass("active"),s(e,i,!1)}),t("body").on("click",".jtextfill li",function(){var e=t(this).parents(".jtextfill").attr("id");s(e,i),i.clicked(n[t("#"+e+" li.active").attr("data-id")])}),t("body").click(function(i){t(i.target).css("z-index");t(".jtextfill").hide()})}}(jQuery);