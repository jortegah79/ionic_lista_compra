"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4669],{4669:(I,o,n)=>{n.r(o),n.d(o,{Tab2Page:()=>p});var l=n(5861),e=n(6242),r=n(95),t=n(3800),d=n(1423),u=n(4525),m=n(8890);let p=(()=>{var i;class _{constructor(){this.shoppingItemsService=(0,e.f3M)(d.R),this.alertController=(0,e.f3M)(t.Br),this.newItem="",(0,u.a)({addOutline:m.s6O})}addItem(){""!==this.newItem&&(this.shoppingItemsService.existsItem(this.newItem)?this.alertError():(this.shoppingItemsService.addItem(this.newItem),this.alertSuccess()),this.newItem="")}alertSuccess(){var s=this;return(0,l.Z)(function*(){yield(yield s.alertController.create({header:"\xc9xito",message:"\xa1Item a\xf1adido!",buttons:["Ok"]})).present()})()}alertError(){var s=this;return(0,l.Z)(function*(){yield(yield s.alertController.create({header:"Error",message:"\xa1El item ya existe!",buttons:["Ok"]})).present()})()}}return(i=_).\u0275fac=function(s){return new(s||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-tab2"]],standalone:!0,features:[e.jDz],decls:12,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],["size","10"],["label","Item","type","text",3,"ngModel","ngModelChange"],["size","2"],["size","small",3,"disabled","click"],["name","add-outline"]],template:function(s,a){1&s&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," MI lista de la compra "),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-grid")(6,"ion-row")(7,"ion-col",2)(8,"ion-input",3),e.NdJ("ngModelChange",function(g){return a.newItem=g}),e.qZA()(),e.TgZ(9,"ion-col",4)(10,"ion-button",5),e.NdJ("click",function(){return a.addItem()}),e._UZ(11,"ion-icon",6),e.qZA()()()()()),2&s&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(4),e.Q6J("ngModel",a.newItem),e.xp6(2),e.Q6J("disabled",!a.newItem))},dependencies:[t.Pc,t.YG,t.wI,t.W2,t.jY,t.Gu,t.gu,t.pK,t.Nd,t.wd,t.sr,t.j9,r.u5,r.JJ,r.On],styles:["input[_ngcontent-%COMP%]{caret-color:#0707ff;caret-shape:underscore}"]}),_})()}}]);