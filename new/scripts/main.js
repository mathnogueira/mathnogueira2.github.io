"use strict";!function(){function e(e){angular.extend(e,{positionClass:"toast-top-center"})}angular.module("app",["ui.router","mobile-angular-ui","ngAnimate","toastr"]).config(e),e.$inject=["toastrConfig"]}(),function(){function e(e,o){o.otherwise("/"),e.state({name:"Home",url:"/",templateUrl:"app/initial/home.html",controller:"HomeController",controllerAs:"home",params:{ignore:!1}}).state({name:"Logged",url:"/logged",templateUrl:"app/logged/home.html",controller:"LoggedHomeController",controllerAs:"home",params:{ignore:!1,pageName:"Todos os eventos"},resolve:{events:["EventService",function(e){return e.list()}]}}).state({name:"EventDetails",url:"/event/details/:id",templateUrl:"app/event/details.html",controller:"EventDetailsController",controllerAs:"eventCtrl",params:{event:null,pageName:"Detalhes do evento"},resolve:{event:["EventService","$stateParams",function(e,o){return e.get(+o.id)}]}}).state({name:"AddEvent",url:"/event/add",templateUrl:"app/event/add.html",controller:"EventAddController",controllerAs:"eventCtrl",params:{pageName:"Adicionar novo evento"}}).state({name:"MyFavorites",url:"/event/favorites",templateUrl:"app/logged/home.html",controller:"LoggedHomeController",controllerAs:"home",params:{event:null,pageName:"Meus eventos favoritos"},resolve:{events:["EventService",function(e){return e.listFavorites()}]}})}angular.module("app").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){function e(){function e(){return s}function o(e){var o=!0,t=!1,n=void 0;try{for(var a,r=s[Symbol.iterator]();!(o=(a=r.next()).done);o=!0){var i=a.value;if(i.id===e)return i}}catch(e){t=!0,n=e}finally{try{!o&&r.return&&r.return()}finally{if(t)throw n}}return null}function t(e){e.owner=!0,s.push(e),e.id=c++}function n(e){s.splice(s.indexOf(e),1);var o=u.indexOf(e);o>=0&&u.splice(o,1)}function a(e){u.push(e)}function r(){return u}function i(e){u.splice(u.indexOf(e),1)}function l(e){return u.indexOf(e)>=0}var s=[{id:1,nome:"Mega show de sertanejo",local:"Lavras",data:"21/05/2018",preco:"12,50",descricao:"Festa muito doida!",pontosVenda:"Paulinho do café"},{id:2,nome:"Ranxeira",local:"Lavras",data:"21/05/2018",preco:"5,50",descricao:"Festa muito doida com muita lama!",pontosVenda:"Cantina da ema"},{id:3,nome:"MC Claudinho",local:"Lavras",data:"21/05/2017",preco:"15,50",descricao:"Festa muito louca!",pontosVenda:"Jardim do jacaré banguelo"},{id:4,nome:"Festa no Apê",local:"Pouso Alegre",data:"22/08/2017",preco:"34,50",descricao:"Meus pais viajaram, vamos fazer uma festa no apê deles!",pontosVenda:"Autoposto Fernandão"},{id:5,nome:"Boliche",local:"São Paulo",data:"28/02/2017",preco:"79,99",descricao:"Bora jogar boliche!",pontosVenda:"Boliche de SP"},{id:6,nome:"Rodada de Cerveja do DCC",local:"Rep. Mamacadela",data:"01/03/2017",preco:"25,00",descricao:"Esquenta pra volta das aulas do DCC depois do carnaval!",pontosVenda:"Cantina da UFLA"}],c=s.length+1,u=[],v={};return v.list=e,v.get=o,v.add=t,v.addFavorite=a,v.removeFavorite=i,v.listFavorites=r,v.isFavorite=l,v.removeEvent=n,v}angular.module("app").service("EventService",e),e.$inject=[]}(),function(){function e(e){function o(o,t){e.success(o)}var t={};return t.show=o,t}angular.module("app").service("ToastService",e),e.$inject=["toastr"]}(),function(){function e(e,o){function t(){e.$on("$stateChangeSuccess",n),0===i.length&&"Home"!=o.current.name&&(i.push({name:"Home"}),r.hasPreviousState=!0)}function n(e,o,t,n,a){n&&n.name&&!t.ignore&&(i.push(n),r.hasPreviousState=!0),t&&t.pageName&&(r.currentPage={state:o.name,name:t.pageName})}function a(){var e=i.pop().name||"Home";0===i.length&&(r.hasPreviousState=!1),o.go(e,{ignore:!0})}var r=this;r.goBack=a,r.hasPreviousState=!1,r.currentPage=null;var i=[];t()}angular.module("app").controller("NavbarController",e),e.$inject=["$rootScope","$state"]}(),function(){function e(e,o){function t(){}function n(){o.go("Logged")}var a=this;a.login=n,t()}angular.module("app").controller("HomeController",e),e.$inject=["$scope","$state"]}(),function(){function e(e,o,t,n){function a(){}function r(e){o.go("EventDetails",{event:e,id:e.id})}function i(e){return n.isFavorite(e)}var l=this;l.viewDetails=r,l.isFavorite=i,l.events=t,a()}angular.module("app").controller("LoggedHomeController",e),e.$inject=["$scope","$state","events","EventService"]}(),function(){function e(e,o,t,n,a){function r(){}function i(){a.addFavorite(v.event),n.show("Evento adicionado aos favoritos!")}function l(){a.removeEvent(v.event),n.show("Evento removido com sucesso!"),o.go("Logged")}function s(){a.removeFavorite(v.event),n.show("Evento removido com sucesso!")}function c(){return a.isFavorite(v.event)}function u(){return!!v.event.owner}var v=this;v.event=t,v.addFavorite=i,v.removeFromFavorites=s,v.isFavorite=c,v.amIOwner=u,v.removeEvent=l,r()}angular.module("app").controller("EventDetailsController",e),e.$inject=["$scope","$state","event","ToastService","EventService"]}(),function(){function e(e,o,t,n){function a(){}function r(){t.add(i.event),n.show("Evento cadastrado com sucesso!"),o.go("Logged",{ignore:!0})}var i=this;i.add=r,a()}angular.module("app").controller("EventAddController",e),e.$inject=["$scope","$state","EventService","ToastService"]}();