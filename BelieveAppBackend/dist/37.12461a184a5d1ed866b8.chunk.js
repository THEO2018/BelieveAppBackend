webpackJsonp([37],{NP8s:function(l,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n("LMZF"),u=(n("6Xbx"),n("Un6q")),o=n("UHIZ"),d=n("Mjcc"),a=function(){function l(l,t){this.router=l,this.authService=t,this.filterQuery="",this.rowsOnPage=10,this.sortOrder="asc"}return l.prototype.loadData=function(){throw new Error("Method not implemented.")},l.prototype.ngOnInit=function(){this.managers()},l.prototype.managers=function(){var l=this;console.log("manager lsit"),this.authService.getManagers().then(function(t){console.log(t),l.res=t,1==l.res.status?(l.data=l.res.data,console.log(l.data)):console.log("erorr")},function(l){console.log(l)})},l}(),i=function(){},c=(n("gOac"),n("XBG0"),n("0nO6")),r=function(){},s=e["\u0275crt"]({encapsulation:0,styles:[[".clear[_ngcontent-%COMP%]{clear:both;height:0}.content_area[_ngcontent-%COMP%]{padding:15px 15px 35px 15px;min-height:100%;position:relative}.tables_area[_ngcontent-%COMP%]   .white_box[_ngcontent-%COMP%]{padding:0;box-shadow:0 0 6px rgba(0,0,0,.2);margin-top:15px}.blue_btn[_ngcontent-%COMP%]{background:#f78c6a;border-radius:5px;color:#fff!important;text-decoration:none!important;font-size:14px;border:none;padding:5px 22px;display:inline-block;line-height:26px;margin-top:20px;font-weight:600}.blue_btn[_ngcontent-%COMP%]:hover{background:#eb7650}.blue_btn.black_btn[_ngcontent-%COMP%]{background:#2c2c2c}.top_form[_ngcontent-%COMP%]{padding-bottom:20px}.top_form[_ngcontent-%COMP%]   .yellow_btn[_ngcontent-%COMP%]{height:39px;margin:0;vertical-align:middle;padding:6px 35px;font-size:18px}.custom_select[_ngcontent-%COMP%]   .fstElement[_ngcontent-%COMP%]{display:block;font-size:12px;border-radius:5px}.custom_select[_ngcontent-%COMP%]   .fstElement[_ngcontent-%COMP%]   .fstControls[_ngcontent-%COMP%]{width:100%}.custom_select[_ngcontent-%COMP%]   .fstElement[_ngcontent-%COMP%]   .fstControls[_ngcontent-%COMP%]   .fstQueryInput[_ngcontent-%COMP%]{color:#000;padding:5px}.custom_select[_ngcontent-%COMP%]   .fstChoiceItem[_ngcontent-%COMP%], .custom_select[_ngcontent-%COMP%]   .fstResultItem.fstFocused[_ngcontent-%COMP%], .custom_select[_ngcontent-%COMP%]   .fstResultItem.fstSelected[_ngcontent-%COMP%]{background-color:#2e4485;border-color:#2e4485}.white_box[_ngcontent-%COMP%]{background:#fff;padding:15px;border-radius:2px}.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#2e4485;font-size:14px;font-weight:700;border-bottom:2px solid #2e4485;text-transform:uppercase;padding:10px}.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#242424;font-size:14px;border-bottom:1px solid #ccc;border-right:1px solid #ccc;padding:12px 10px}.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-right:none}.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n)   td[_ngcontent-%COMP%]{background:#eeeef3}.action_btn[_ngcontent-%COMP%]{color:#242424;font-size:18px;display:inline-block;margin:0 5px}.action_btn[_ngcontent-%COMP%]:hover{color:#f1a732}"]],data:{}});function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Enabled"]))],null,null)}function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Disabled"]))],null,null)}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,54,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](2,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](3,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](8,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](9,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](12,16384,null,0,u.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](15,16384,null,0,u.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](17,0,null,null,15,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](20,0,null,null,9,"a",[["class","action_btn"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](22,0,null,null,6,"i",[["aria-hidden","true"],["class","fa fa-edit"]],null,[[null,"click"]],function(l,t,n){var u=!0;return"click"===t&&(u=!1!==e["\u0275nov"](l,23).onClick()&&u),u},null,null)),e["\u0275did"](23,16384,[[3,4]],0,o.m,[o.l,o.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](24,2),e["\u0275did"](25,1720320,null,2,o.n,[o.l,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,3,{links:1}),e["\u0275qud"](603979776,4,{linksWithHrefs:1}),e["\u0275pad"](28,1),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\n\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](34,0,null,null,19,"div",[["aria-labelledby","myModalLabel"],["class","modal fade"],["id","request"],["role","dialog"],["tabindex","-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](36,0,null,null,16,"div",[["class","modal-dialog"],["role","document"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](38,0,null,null,13,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](40,0,null,null,10,"div",[["class","modal-body text-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](42,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Are you sure you want to Delete?"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](45,0,null,null,1,"a",[["class","blue_btn"]],null,[[null,"click"]],function(l,t,n){var e=!0;return"click"===t&&(e=!1!==l.component.RemoveComm()&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Yes"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](48,0,null,null,1,"a",[["class","blue_btn"],["data-dismiss","modal"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["No"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\n\t\t\t\t\t\t"]))],function(l,t){l(t,12,0,"A"==t.context.$implicit.status),l(t,15,0,"D"==t.context.$implicit.status),l(t,23,0,l(t,24,0,"/adminedit",t.context.$implicit._id)),l(t,25,0,l(t,28,0,"router-link-active"))},function(l,t){l(t,3,0,t.context.$implicit.name),l(t,6,0,t.context.$implicit.email),l(t,9,0,t.context.$implicit.phone)})}function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,54,"div",[["class","content_area"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n\t"])),(l()(),e["\u0275eld"](2,0,null,null,51,"div",[["class","tables_area"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t"])),(l()(),e["\u0275eld"](4,0,null,null,1,"h2",[["class","pull-left"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Managers"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t"])),(l()(),e["\u0275eld"](7,0,null,null,6,"a",[["class","blue_btn yellow_btn pull-right text-uppercase"],["href","add_fleet.html"],["routerLink","/addmanager"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,t,n){var u=!0;return"click"===t&&(u=!1!==e["\u0275nov"](l,8).onClick(n.button,n.ctrlKey,n.metaKey,n.shiftKey)&&u),u},null,null)),e["\u0275did"](8,671744,[[2,4]],0,o.o,[o.l,o.a,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275did"](9,1720320,null,2,o.n,[o.l,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,1,{links:1}),e["\u0275qud"](603979776,2,{linksWithHrefs:1}),e["\u0275pad"](12,1),(l()(),e["\u0275ted"](-1,null,["Add New"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t"])),(l()(),e["\u0275eld"](15,0,null,null,0,"div",[["class","clear"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t"])),(l()(),e["\u0275eld"](18,0,null,null,34,"div",[["class","white_box"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(l()(),e["\u0275eld"](20,0,null,null,31,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t"])),(l()(),e["\u0275eld"](22,0,null,null,28,"table",[["cellpadding","0"],["cellspacing","0"],["id","example"],["width","100%"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(l()(),e["\u0275eld"](24,0,null,null,19,"thead",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](26,0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](28,0,null,null,1,"th",[["width","15%"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Name"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](31,0,null,null,1,"th",[["width","10%"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Email"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](34,0,null,null,1,"th",[["width","35%"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Phone"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](37,0,null,null,1,"th",[["width","15%"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Status"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),e["\u0275eld"](40,0,null,null,1,"th",[["width","15%"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Action"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(l()(),e["\u0275eld"](45,0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t\t"])),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](48,802816,null,0,u.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275ted"](-1,null,["\n\n\t\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t"])),(l()(),e["\u0275ted"](-1,null,["\n\n"]))],function(l,t){var n=t.component;l(t,8,0,"/addmanager"),l(t,9,0,l(t,12,0,"router-link-active")),l(t,48,0,n.data)},function(l,t){l(t,7,0,e["\u0275nov"](t,8).target,e["\u0275nov"](t,8).href)})}var _=e["\u0275ccf"]("app-managers",a,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-managers",[],null,null,null,m,s)),e["\u0275did"](1,114688,null,0,a,[o.l,d.a],null,null)],function(l,t){l(t,1,0)},null)},{},{},[]),b=n("MRtE"),C=n("tCmA");n.d(t,"ManagersModuleNgFactory",function(){return h});var h=e["\u0275cmf"](r,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[_]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,u.NgLocalization,u.NgLocaleLocalization,[e.LOCALE_ID,[2,u["\u0275a"]]]),e["\u0275mpd"](4608,c.B,c.B,[]),e["\u0275mpd"](512,u.CommonModule,u.CommonModule,[]),e["\u0275mpd"](512,b.DataTableModule,b.DataTableModule,[]),e["\u0275mpd"](512,o.p,o.p,[[2,o.u],[2,o.l]]),e["\u0275mpd"](512,i,i,[]),e["\u0275mpd"](512,c.y,c.y,[]),e["\u0275mpd"](512,c.j,c.j,[]),e["\u0275mpd"](512,C.a,C.a,[]),e["\u0275mpd"](512,r,r,[]),e["\u0275mpd"](1024,o.j,function(){return[[{path:"",component:a}]]},[])])})}});