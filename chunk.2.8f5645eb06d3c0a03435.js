webpackJsonp([2],{293:function(e,t,n){"use strict";var r=n(102),i=n(572),s=n(155),l=n(103),o=n(44),_=n(573),h=n(100),a=n(424),c=n(33);n.d(t,"NglDemoSupportModuleNgFactory",function(){return p});var u=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},d=function(e){function t(t){e.call(this,t,[_.a],[])}return u(t,e),Object.defineProperty(t.prototype,"_NgLocalization_3",{get:function(){return null==this.__NgLocalization_3&&(this.__NgLocalization_3=new o.c(this.parent.get(h.a))),this.__NgLocalization_3},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ROUTES_4",{get:function(){return null==this.__ROUTES_4&&(this.__ROUTES_4=[[{path:"",component:a.a}]]),this.__ROUTES_4},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new s.a,this._RouterModule_1=new l.b(this.parent.get(l.c,null)),this._NglDemoSupportModule_2=new i.a,this._NglDemoSupportModule_2},t.prototype.getInternal=function(e,t){return e===s.a?this._CommonModule_0:e===l.b?this._RouterModule_1:e===i.a?this._NglDemoSupportModule_2:e===o.b?this._NgLocalization_3:e===c.c?this._ROUTES_4:t},t.prototype.destroyInternal=function(){},t}(r.a),p=new r.b(d,i.a)},424:function(e,t,n){"use strict";var r=n(0);n.d(t,"a",function(){return l});var i=this&&this.__decorate||function(e,t,n,r){var i,s=arguments.length,l=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(l=(s<3?i(l):s>3?i(t,n,l):i(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(){}return e=i([n.i(r._1)({template:n(652),changeDetection:r._2.OnPush}),s("design:paramtypes",[])],e)}()},572:function(e,t,n){"use strict";var r=n(0),i=n(2),s=n(255),l=n(574),o=n(424);n.d(t,"a",function(){return a});var _=this&&this.__decorate||function(e,t,n,r){var i,s=arguments.length,l=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(l=(s<3?i(l):s>3?i(t,n,l):i(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l},h=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return e=_([n.i(r.u)({imports:[i.b,s.a.forChild(l.a)],declarations:[o.a]}),h("design:paramtypes",[])],e)}()},573:function(e,t,n){"use strict";var r=n(424),i=n(94),s=n(18),l=n(62),o=n(31),_=n(30),h=n(42);n.d(t,"a",function(){return p});var a=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},c=function(){function e(){this._changed=!1,this.context=new r.a}return e.prototype.ngOnDetach=function(e,t,n){},e.prototype.ngOnDestroy=function(){},e.prototype.ngDoCheck=function(e,t,n){var r=this._changed;return this._changed=!1,r},e.prototype.checkHost=function(e,t,n,r){},e.prototype.handleEvent=function(e,t){var n=!0;return n},e.prototype.subscribe=function(e,t){this._eventHandler=t},e}(),u=s.createRenderComponentType("",0,l.b.None,[],{}),d=function(e){function t(n,r,i,s){e.call(this,t,u,o.a.HOST,n,r,i,s,_.b.CheckAlways)}return a(t,e),t.prototype.createInternal=function(e){return this._el_0=s.selectOrCreateRenderHostElement(this.renderer,"ng-component",s.EMPTY_INLINE_ARRAY,e,null),this.compView_0=new m(this.viewUtils,this,0,this._el_0),this._SupportComponent_0_3=new c,this.compView_0.create(this._SupportComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new h.b(0,this,this._el_0,this._SupportComponent_0_3.context)},t.prototype.injectorGetInternal=function(e,t,n){return e===r.a&&0===t?this._SupportComponent_0_3.context:n},t.prototype.detectChangesInternal=function(e){this._SupportComponent_0_3.ngDoCheck(this,this._el_0,e)&&this.compView_0.markAsCheckOnce(),this.compView_0.internalDetectChanges(e)},t.prototype.destroyInternal=function(){this.compView_0.destroy()},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t}(i.a),p=new h.a("ng-component",d,r.a),g=[],f=s.createRenderComponentType("",0,l.b.None,g,{}),m=function(e){function t(n,r,i,s){e.call(this,t,f,o.a.COMPONENT,n,r,i,s,_.b.CheckOnce)}return a(t,e),t.prototype.createInternal=function(e){var t=this.renderer.createViewRoot(this.parentElement);return this._el_0=s.createRenderElement(this.renderer,t,"div",new s.InlineArray2(2,"class","slds-container--medium slds-container--center slds-m-top--large slds-p-around--x-large"),null),this._text_1=this.renderer.createText(this._el_0,"\n  ",null),this._el_2=s.createRenderElement(this.renderer,this._el_0,"div",new s.InlineArray2(2,"class","slds-text-heading--large"),null),this._text_3=this.renderer.createText(this._el_2,"Need help?",null),this._text_4=this.renderer.createText(this._el_0,"\n  ",null),this._el_5=s.createRenderElement(this.renderer,this._el_0,"hr",s.EMPTY_INLINE_ARRAY,null),this._text_6=this.renderer.createText(this._el_0,"\n  ",null),this._el_7=s.createRenderElement(this.renderer,this._el_0,"p",s.EMPTY_INLINE_ARRAY,null),this._text_8=this.renderer.createText(this._el_7,"\n    If you have discovered a bug or have a feature suggestion, feel free to ",null),this._el_9=s.createRenderElement(this.renderer,this._el_7,"a",new s.InlineArray2(2,"href","https://github.com/ng-lightning/ng-lightning/issues"),null),this._text_10=this.renderer.createText(this._el_9,"create an issue",null),this._text_11=this.renderer.createText(this._el_7," on GitHub.",null),this._el_12=s.createRenderElement(this.renderer,this._el_7,"br",s.EMPTY_INLINE_ARRAY,null),this._text_13=this.renderer.createText(this._el_7,"Otherwise, you can use any of the following methods to find somenone available to answer your questions.\n  ",null),this._text_14=this.renderer.createText(this._el_0,"\n  ",null),this._el_15=s.createRenderElement(this.renderer,this._el_0,"div",new s.InlineArray2(2,"class","slds-text-heading--medium slds-m-top--large"),null),this._text_16=this.renderer.createText(this._el_15,"Stack Overflow",null),this._text_17=this.renderer.createText(this._el_0,"\n  ",null),this._el_18=s.createRenderElement(this.renderer,this._el_0,"div",new s.InlineArray2(2,"class","slds-m-vertical--small"),null),this._text_19=this.renderer.createText(this._el_18,"\n    Members of our community should use Stack Overflow to ask questions about how something works or how to contribute. \n    Read through the ",null),this._el_20=s.createRenderElement(this.renderer,this._el_18,"a",new s.InlineArray8(6,"href","https://stackoverflow.com/questions/tagged/ng-lightning","rel","noopener noreferrer","target","_blank"),null),this._text_21=this.renderer.createText(this._el_20,"existing questions ",null),this._text_22=this.renderer.createText(this._el_18,"tagged with ",null),this._el_23=s.createRenderElement(this.renderer,this._el_18,"b",s.EMPTY_INLINE_ARRAY,null),this._text_24=this.renderer.createText(this._el_23,"ng-lightning ",null),this._text_25=this.renderer.createText(this._el_18,"or don't hesitate to ",null),this._el_26=s.createRenderElement(this.renderer,this._el_18,"a",new s.InlineArray8(6,"href","https://stackoverflow.com/questions/ask?tags=ng-lightning","rel","noopener noreferrer","target","_blank"),null),this._text_27=this.renderer.createText(this._el_26,"ask your own",null),this._text_28=this.renderer.createText(this._el_18,"!\n  ",null),this._text_29=this.renderer.createText(this._el_0,"\n  ",null),this._el_30=s.createRenderElement(this.renderer,this._el_0,"div",new s.InlineArray2(2,"class","slds-text-heading--medium slds-m-top--large"),null),this._text_31=this.renderer.createText(this._el_30,"Chat",null),this._text_32=this.renderer.createText(this._el_0,"\n  ",null),this._el_33=s.createRenderElement(this.renderer,this._el_0,"div",new s.InlineArray2(2,"class","slds-m-vertical--small"),null),this._text_34=this.renderer.createText(this._el_33,"\n    Join our online chat at ",null),this._el_35=s.createRenderElement(this.renderer,this._el_33,"a",new s.InlineArray8(6,"href","https://gitter.im/ng-lightning/ng-lightning","rel","noopener noreferrer","target","_blank"),null),this._text_36=this.renderer.createText(this._el_35,"Gitter channel",null),this._text_37=this.renderer.createText(this._el_33,".\n  ",null),this._text_38=this.renderer.createText(this._el_0,"\n",null),this._text_39=this.renderer.createText(t,"\n",null),this.init(null,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._el_2,this._text_3,this._text_4,this._el_5,this._text_6,this._el_7,this._text_8,this._el_9,this._text_10,this._text_11,this._el_12,this._text_13,this._text_14,this._el_15,this._text_16,this._text_17,this._el_18,this._text_19,this._el_20,this._text_21,this._text_22,this._el_23,this._text_24,this._text_25,this._el_26,this._text_27,this._text_28,this._text_29,this._el_30,this._text_31,this._text_32,this._el_33,this._text_34,this._el_35,this._text_36,this._text_37,this._text_38,this._text_39],null),null},t}(i.a)},574:function(e,t,n){"use strict";var r=n(424);n.d(t,"a",function(){return i});var i=[{path:"",component:r.a}]},652:function(e,t){e.exports='<div class="slds-container--medium slds-container--center slds-m-top--large slds-p-around--x-large">\n  <div class="slds-text-heading--large">Need help?</div>\n  <hr/>\n  <p>\n    If you have discovered a bug or have a feature suggestion, feel free to <a href="https://github.com/ng-lightning/ng-lightning/issues">create an issue</a> on GitHub.<br/>Otherwise, you can use any of the following methods to find somenone available to answer your questions.\n  </p>\n  <div class="slds-text-heading--medium slds-m-top--large">Stack Overflow</div>\n  <div class="slds-m-vertical--small">\n    Members of our community should use Stack Overflow to ask questions about how something works or how to contribute. \n    Read through the <a href="https://stackoverflow.com/questions/tagged/ng-lightning" target="_blank" rel="noopener noreferrer">existing questions </a>tagged with <b>ng-lightning </b>or don\'t hesitate to <a href="https://stackoverflow.com/questions/ask?tags=ng-lightning" target="_blank" rel="noopener noreferrer">ask your own</a>!\n  </div>\n  <div class="slds-text-heading--medium slds-m-top--large">Chat</div>\n  <div class="slds-m-vertical--small">\n    Join our online chat at <a href="https://gitter.im/ng-lightning/ng-lightning" target="_blank" rel="noopener noreferrer">Gitter channel</a>.\n  </div>\n</div>\n'}});