"use strict";(self.webpackChunkgatitobook=self.webpackChunkgatitobook||[]).push([[249],{1249:(ut,A,r)=>{r.r(A),r.d(A,{AnimaisModule:()=>lt});var T=r(4117),c=r(6444),l=r(9808),t=r(1223);let I=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez]]}),n})();var s=r(2382),y=r(8746),f=r(520),v=r(2340),N=r(9646),F=r(2843),b=r(4004),U=r(262),J=r(5024);const u=v.N.apiURL;let g=(()=>{class n{constructor(o,e){this.http=o,this.tokenService=e}listaDoUsuario(o){return this.http.get(`${u}/${o}/photos`)}buscaPorId(o){return this.http.get(`${u}/photos/${o}`)}excluiAnimal(o){return this.http.delete(`${u}/photos/${o}`)}curtir(o){return this.http.post(`${u}/photos/${o}/like`,{},{observe:"response"}).pipe(function O(n){return(0,b.U)(()=>n)}(!0),(0,U.K)(e=>"304"===e.status?(0,N.of)(!1):(0,F._)(e)))}upload(o,e,a){const m=new FormData;return m.append("description",o),m.append("allowComments",e?"true":"false"),m.append("imageFile",a),this.http.post(`${u}/photos/upload`,m,{observe:"events",reportProgress:!0})}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(f.eN),t.LFG(J.B))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var C=r(6341);const L=v.N.apiURL;let h=(()=>{class n{constructor(){this.urlOriginal="",this.descricao=""}set url(o){this.urlOriginal=o.startsWith("data")?o:`${L}/imgs/${o}`}get url(){return this.urlOriginal}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-animal"]],inputs:{descricao:"descricao",url:"url"},decls:1,vars:2,consts:[[1,"img-thumbnail","d-flex",3,"src","alt"]],template:function(o,e){1&o&&t._UZ(0,"img",0),2&o&&t.Q6J("src",e.url,t.LSH)("alt",e.descricao)},styles:[""]}),n})();function M(n,i){1&n&&t._UZ(0,"app-mensagem",18)}function S(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"div",6)(1,"button",13),t.NdJ("click",function(){return t.CHM(o),t.MAs(4).click()}),t._UZ(2,"i",14),t.qZA(),t.TgZ(3,"input",15,16),t.NdJ("change",function(a){return t.CHM(o),t.oxw().gravaArquivo(a.target)}),t.qZA(),t.YNc(5,M,1,0,"app-mensagem",17),t.qZA()}if(2&n){const o=t.oxw();let e;t.xp6(5),t.Q6J("ngIf",!(null==(e=o.formularioAnimal.get("file"))||null==e.errors||!e.errors.required))}}function Y(n,i){if(1&n&&t._UZ(0,"app-animal",19),2&n){const o=t.oxw();t.Q6J("url",o.preview)}}function q(n,i){1&n&&t._UZ(0,"app-mensagem",20)}function E(n,i){if(1&n&&(t.TgZ(0,"div")(1,"button",21),t._uU(2,"Enviar"),t.qZA(),t.TgZ(3,"a",22),t._uU(4,"Cancelar"),t.qZA()()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("disabled",o.formularioAnimal.invalid)}}function $(n,i){if(1&n&&(t.TgZ(0,"div",23),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.hij(" Percentual de upload ",o.percentualConcluido," % ")}}let Q=(()=>{class n{constructor(o,e,a){this.animaisService=o,this.formBuilder=e,this.router=a,this.percentualConcluido=0}ngOnInit(){this.formularioAnimal=this.formBuilder.group({file:["",s.kI.required],description:["",s.kI.maxLength(300)],allowComments:[!0]})}upload(){var o,e,a,m;const p=null!==(e=null===(o=this.formularioAnimal.get("allowComments"))||void 0===o?void 0:o.value)&&void 0!==e&&e,ct=null!==(m=null===(a=this.formularioAnimal.get("description"))||void 0===a?void 0:a.value)&&void 0!==m?m:"";this.animaisService.upload(ct,p,this.file).pipe((0,y.x)(()=>{this.router.navigateByUrl("animais")})).subscribe(d=>{var _;if(d.type===f.dt.UploadProgress){const pt=null!==(_=d.total)&&void 0!==_?_:1;this.percentualConcluido=Math.round(d.loaded/pt*100)}},d=>console.log(d))}gravaArquivo(o){const[e]=null==o?void 0:o.files;this.file=e;const a=new FileReader;a.onload=m=>this.preview=m.target.result,a.readAsDataURL(e)}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(g),t.Y36(s.qu),t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-novo-animal"]],decls:17,vars:6,consts:[[1,"container"],[1,"row",3,"formGroup","submit"],[1,"col-md-6","text-center"],["class","form-group",4,"ngIf","ngIfElse"],["previewImage",""],[1,"col-md-6"],[1,"form-group"],["formControlName","description","placeholder","Descri\xe7\xe3o do animal",1,"form-control","form-control-sm"],["mensagem","Tamanaho m\xe1ximo do campo \xe9 de 300 caracteres",4,"ngIf"],[1,"text-muted"],["type","checkbox","formControlName","allowComments"],[4,"ngIf","ngIfElse"],["uploaddiv",""],["type","button",1,"btn","btn-primary",3,"click"],[1,"fa","fa-image","fa-4x","align-middle"],["type","file","hidden","","formControlName","file","accept","image/*",3,"change"],["fileInput",""],["mensagem","Por favor selecione a foto",4,"ngIf"],["mensagem","Por favor selecione a foto"],["title","Preview",3,"url"],["mensagem","Tamanaho m\xe1ximo do campo \xe9 de 300 caracteres"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"],["routerLink","animais",1,"btn","btn-secondary","btn-block"],[1,"text-center","display-4"]],template:function(o,e){if(1&o&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("submit",function(){return e.upload()}),t.TgZ(2,"div",2),t.YNc(3,S,6,1,"div",3),t.YNc(4,Y,1,1,"ng-template",null,4,t.W1O),t.qZA(),t.TgZ(6,"div",5)(7,"div",6),t._UZ(8,"textarea",7),t.YNc(9,q,1,0,"app-mensagem",8),t.qZA(),t.TgZ(10,"div",6)(11,"label",9),t._uU(12," Permite coment\xe1rio "),t._UZ(13,"input",10),t.qZA()(),t.YNc(14,E,5,1,"div",11),t.YNc(15,$,2,1,"ng-template",null,12,t.W1O),t.qZA()()()),2&o){const a=t.MAs(5),m=t.MAs(16);let p;t.xp6(1),t.Q6J("formGroup",e.formularioAnimal),t.xp6(2),t.Q6J("ngIf",!e.preview)("ngIfElse",a),t.xp6(6),t.Q6J("ngIf",!(null==(p=e.formularioAnimal.get("description"))||null==p.errors||!p.errors.maxLength)),t.xp6(5),t.Q6J("ngIf",!e.percentualConcluido)("ngIfElse",m)}},directives:[s._Y,s.JL,s.sg,l.O5,s.Fj,s.JJ,s.u,C.c,h,s.Wl,c.yS],styles:[""]}),n})();var x=r(3900),k=r(5698),D=r(620);let P=(()=>{class n{constructor(o,e){this.animaisService=o,this.usuarioService=e}resolve(o,e){return this.usuarioService.retornaUsuario().pipe((0,x.w)(a=>{var m;const p=null!==(m=a.name)&&void 0!==m?m:"";return this.animaisService.listaDoUsuario(p)}),(0,k.q)(1))}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(g),t.LFG(D.i))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var R=r(8505);const Z=v.N.apiURL;let G=(()=>{class n{constructor(o){this.http=o}buscaComentario(o){return this.http.get(`${Z}/photos/${o}/comments`)}incluiComentario(o,e){return this.http.post(`${Z}/photos/${o}/comments`,{commentText:e})}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(f.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function B(n,i){if(1&n&&(t.TgZ(0,"li")(1,"p",11),t._uU(2),t.qZA(),t.TgZ(3,"em"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"p",12),t._uU(7),t.qZA()()),2&n){const o=i.$implicit;t.xp6(2),t.Oqu(o.userName),t.xp6(2),t.Oqu(t.xi3(5,3,o.date,"dd-MM-yyyy HH:mm")),t.xp6(3),t.Oqu(o.text)}}function z(n,i){1&n&&t._UZ(0,"app-mensagem",13)}function H(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"div",1)(1,"ul",2),t.YNc(2,B,8,6,"li",3),t.qZA(),t.TgZ(3,"div",4)(4,"form",5),t.NdJ("submit",function(){return t.CHM(o),t.oxw().gravar()}),t.TgZ(5,"div",6)(6,"textarea",7),t._uU(7,"\n        "),t.qZA(),t.TgZ(8,"div",8)(9,"button",9),t._uU(10,"Publicar"),t.qZA()()(),t.YNc(11,z,1,0,"app-mensagem",10),t.qZA()()()}if(2&n){const o=i.ngIf,e=t.oxw();let a;t.xp6(2),t.Q6J("ngForOf",o),t.xp6(2),t.Q6J("formGroup",e.comentarioForm),t.xp6(5),t.Q6J("disabled",e.comentarioForm.invalid),t.xp6(2),t.Q6J("ngIf",!(null==(a=e.comentarioForm.get("comentario"))||null==a.errors||!a.errors.maxLength))}}let j=(()=>{class n{constructor(o,e){this.comentarioService=o,this.formBuilder=e}ngOnInit(){this.comentarios$=this.comentarioService.buscaComentario(this.id),this.comentarioForm=this.formBuilder.group({comentario:["",s.kI.maxLength(300)]})}gravar(){var o,e;const a=null!==(e=null===(o=this.comentarioForm.get("comentario"))||void 0===o?void 0:o.value)&&void 0!==e?e:"";this.comentarios$=this.comentarioService.incluiComentario(this.id,a).pipe((0,x.w)(()=>this.comentarioService.buscaComentario(this.id)),(0,R.b)(()=>{this.comentarioForm.reset(),alert("Comentario Salvo")}))}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(G),t.Y36(s.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-comentarios"]],inputs:{id:"id"},decls:2,vars:3,consts:[["class","",4,"ngIf"],[1,""],[1,"list-unstyled","comentario-list"],[4,"ngFor","ngForOf"],[1,"mt-4"],[3,"formGroup","submit"],[1,"input-group"],["formControlName","comentario",1,"form-control"],[1,"input-group-append"],[1,"btn","btn-primary","pull-left",3,"disabled"],["mensagem","tamanhoMaximo de 300 carateres",4,"ngIf"],[1,"text-dark","font-weight-bold","mr-1"],[1,"break-world","mb-2"],["mensagem","tamanhoMaximo de 300 carateres"]],template:function(o,e){1&o&&(t.YNc(0,H,12,4,"div",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,e.comentarios$))},directives:[l.O5,l.sg,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,C.c],pipes:[l.Ov,l.uU],styles:[".comentario-list[_ngcontent-%COMP%]{height:50vh;overflow-y:auto;margin:20px}"]}),n})();function X(n,i){if(1&n&&t._UZ(0,"app-comentarios",11),2&n){const o=t.oxw(2);t.Q6J("id",o.animalId)}}function W(n,i){1&n&&(t.TgZ(0,"p"),t._uU(1,"USU\xc1RIO N\xc3O PODE COMENTAR O ANIMAL!!!"),t.qZA())}function K(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"div",1)(1,"div")(2,"div",2),t._UZ(3,"app-animal",3),t.qZA(),t.TgZ(4,"div",4)(5,"small")(6,"p",5),t._uU(7),t.qZA(),t.TgZ(8,"i",6),t.NdJ("click",function(){return t.CHM(o),t.oxw().curtir()}),t._uU(9),t.qZA(),t.TgZ(10,"i",7),t._uU(11),t.qZA(),t.TgZ(12,"i",8),t.NdJ("click",function(){return t.CHM(o),t.oxw().excluir()}),t.qZA()(),t.YNc(13,X,1,1,"app-comentarios",9),t.YNc(14,W,2,0,"ng-template",null,10,t.W1O),t.qZA()()()}if(2&n){const o=i.ngIf,e=t.MAs(15);t.xp6(3),t.Q6J("url",o.url)("descricao",o.description),t.xp6(4),t.Oqu(o.description),t.xp6(2),t.Oqu(o.likes),t.xp6(2),t.Oqu(o.comments),t.xp6(2),t.Q6J("ngIf",o.allowComments)("ngIfElse",e)}}let V=(()=>{class n{constructor(o,e,a){this.animaisService=o,this.activatedRoute=e,this.router=a}ngOnInit(){this.animalId=this.activatedRoute.snapshot.params.animalId,this.animal$=this.animaisService.buscaPorId(this.animalId)}curtir(){this.animaisService.curtir(this.animalId).subscribe(o=>{o&&(this.animal$=this.animaisService.buscaPorId(this.animalId))})}excluir(){this.animaisService.excluiAnimal(this.animalId).subscribe(()=>{this.router.navigateByUrl("/animais/")},o=>console.log(o))}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(g),t.Y36(c.gz),t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-detalhe-animal"]],decls:2,vars:3,consts:[["class","bg-white border",4,"ngIf"],[1,"bg-white","border"],[1,"col-8"],[3,"url","descricao"],[1,"col-4"],[1,"text-left","break-word"],[1,"fa","fa-heart-o","fa-2x","mr-2","pull-left",3,"click"],[1,"fa","fa-comment-o","fa-2x","mr-2","ml-2"],[1,"fa","fa-trash-o","fa-2x","pull-right","trash",3,"click"],[3,"id",4,"ngIf","ngIfElse"],["warning",""],[3,"id"]],template:function(o,e){1&o&&(t.YNc(0,K,16,7,"div",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,e.animal$))},directives:[l.O5,h,j],pipes:[l.Ov],styles:[".trash[_ngcontent-%COMP%]{cursor:pointer}"]}),n})();function tt(n,i){if(1&n&&(t.TgZ(0,"h4",3),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Oqu(o.titulo)}}const ot=["*"];let nt=(()=>{class n{constructor(){this.titulo=""}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cartao"]],inputs:{titulo:"titulo"},ngContentSelectors:ot,decls:4,vars:1,consts:[[1,"card","text-center"],["class","card-header",4,"ngIf"],[1,"card-block","text-justify"],[1,"card-header"]],template:function(o,e){1&o&&(t.F$t(),t.TgZ(0,"div",0),t.YNc(1,tt,2,1,"h4",1),t.TgZ(2,"div",2),t.Hsn(3),t.qZA()()),2&o&&(t.xp6(1),t.Q6J("ngIf",e.titulo))},directives:[l.O5],styles:[""]}),n})();function et(n,i){1&n&&(t.TgZ(0,"p",3),t._uU(1," Desculpe, n\xe3o h\xe1 animais cadastrados\n"),t.qZA())}const it=function(n){return["/animais",n]};function at(n,i){if(1&n&&(t.TgZ(0,"div",4)(1,"a",5)(2,"app-cartao"),t._UZ(3,"app-animal",6),t.TgZ(4,"i",7),t._uU(5),t.qZA(),t.TgZ(6,"i",8),t._uU(7),t.qZA()()()()),2&n){const o=i.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(5,it,o.id)),t.xp6(2),t.Q6J("url",o.url)("descricao",o.description),t.xp6(2),t.Oqu(o.likes),t.xp6(2),t.hij(" ",o.comments," ")}}let rt=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-grade-fotos-animais"]],inputs:{animais:"animais"},decls:3,vars:2,consts:[["class","text-center text-muted",4,"ngIf"],[1,"row"],["class","col-3 card-animal",4,"ngFor","ngForOf"],[1,"text-center","text-muted"],[1,"col-3","card-animal"],[3,"routerLink"],[3,"url","descricao"],["aria-hidden","true",1,"fa","fa-heart-o","fa-1x","mr-2"],["aria-hidden","true",1,"fa","fa-comment-o","fa-1x","mr-2"]],template:function(o,e){1&o&&(t.YNc(0,et,2,0,"p",0),t.TgZ(1,"div",1),t.YNc(2,at,8,7,"div",2),t.qZA()),2&o&&(t.Q6J("ngIf",!e.animais.length),t.xp6(2),t.Q6J("ngForOf",e.animais))},directives:[l.O5,l.sg,c.yS,nt,h],styles:[".row-card[_ngcontent-%COMP%]{text-align:center}"]}),n})();const st=[{path:"",component:(()=>{class n{constructor(o){this.activatedRoute=o}ngOnInit(){this.activatedRoute.params.subscribe(o=>{this.animais=this.activatedRoute.snapshot.data.animais})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(c.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-lista-animais"]],decls:2,vars:1,consts:[[3,"animais"]],template:function(o,e){1&o&&(t.TgZ(0,"div"),t._UZ(1,"app-grade-fotos-animais",0),t.qZA()),2&o&&(t.xp6(1),t.Q6J("animais",e.animais))},directives:[rt],styles:[""]}),n})(),resolve:{animais:P}},{path:"novo",component:Q},{path:":animalId",component:V}];let mt=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(st)],c.Bz]}),n})(),lt=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,mt,I,c.Bz,T.m]]}),n})()}}]);