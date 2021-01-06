(this.webpackJsonpcov_gn=this.webpackJsonpcov_gn||[]).push([[32],{552:function(e,t,a){"use strict";var r=a(167),n=a(168),s=a(550),o=function(){function e(){Object(r.a)(this,e)}return Object(n.a)(e,null,[{key:"info",value:function(t,a){return s.a.info(t,Object.assign(e.options,{hideAfter:a}))}},{key:"error",value:function(t,a){return s.a.error(t,Object.assign(e.options,{hideAfter:a}))}},{key:"success",value:function(t,a){return s.a.success(t,Object.assign(e.options,{hideAfter:a}))}},{key:"loading",value:function(t,a){var r=a||1;return s.a.loading(t,Object.assign(e.options,{hideAfter:r}))}},{key:"warn",value:function(t,a){return s.a.warn(t,Object.assign(e.options,{hideAfter:a}))}}]),e}();o.options={position:"top-center",hideAfter:3};t.a=o},567:function(e,t,a){"use strict";var r=a(557),n=a.n(r),s=a(558),o=a(167),i=a(168),c=a(574),l=a(579),u=a.n(l),p=function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,null,[{key:"createTrip",value:function(e){var t=c.a+c.j,a=JSON.stringify(e),r=JSON.parse(a);return u.a.post(t,r).then((function(e){return e})).catch((function(e){throw console.log("Error lors de la creation du trajet"),e}))}},{key:"updateTrip",value:function(e){var t=c.a+c.r,a=JSON.stringify(e),r=JSON.parse(a);return u.a.post(t,r).then((function(e){return e})).catch((function(e){throw console.log("Error lors de la modification du trajet"),e}))}},{key:"bookTrip",value:function(e){var t=c.a+c.c,a=JSON.stringify(e),r=JSON.parse(a);return u.a.post(t,r).then((function(e){return e})).catch((function(e){throw console.log("Error lors de la reservation du trajet"),e}))}},{key:"bookingValidation",value:function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r,s,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.a+c.b,r=JSON.stringify(t),s=JSON.parse(r),e.prev=3,e.next=6,u.a.post(a,s);case 6:return o=e.sent,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(3),console.log("Error lors de la validation de la reservation du trajet"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"cancelBooking",value:function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r,s,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.a+c.d,r=JSON.stringify(t),s=JSON.parse(r),e.prev=3,e.next=6,u.a.post(a,s);case 6:return o=e.sent,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(3),console.log("Error lors de l'annulation de la reservation"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"cancelTrip",value:function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r,s,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.a+c.e,r=JSON.stringify(t),s=JSON.parse(r),e.prev=3,e.next=6,u.a.post(a,s);case 6:return o=e.sent,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(3),console.log("Error lors de l'annulation du trajet"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"readDriverTrips",value:function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.a+c.n+"?email="+t,e.prev=1,e.next=4,u.a.get(a);case 4:return r=e.sent,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(1),console.log("erreur lors de la recherche de trajet"+e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"readPassengerTrips",value:function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.a+c.o+"?email="+t,e.prev=1,e.next=4,u.a.get(a);case 4:return r=e.sent,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(1),console.log("erreur lors de la recherche de trajet"+e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"searchTrips",value:function(){var e=Object(s.a)(n.a.mark((function e(t,a,r,s){var o,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.a+c.p+"?trip_from="+t+"&trip_to="+a+"&trip_date="+r+"&trip_place="+s,e.prev=1,e.next=4,u.a.get(o);case 4:return i=e.sent,e.abrupt("return",i);case 8:throw e.prev=8,e.t0=e.catch(1),console.log("erreur lors de la recherche de trajet"+e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a,r,n){return e.apply(this,arguments)}}()}]),e}();t.a=p},736:function(e,t,a){},823:function(e,t,a){"use strict";a.r(t);var r=a(173),n=a(167),s=a(168),o=a(172),i=a(170),c=a(169),l=a(1),u=a.n(l),p=(a(577),a(568)),d=a.n(p),m=a(171),h=a(595),f=a(738),g=a.n(f),v=a(552),E=a(739),_=a.n(E),y=a(737),k=a.n(y),M=a(740),N=a.n(M),b=a(554),O=a(555),w=a(556),j=a(653),T=a(648),C=a(649),S=a(650),B=a(641),A=a(566),D=(a(736),a(567)),U=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={modal:!1,modalAction:"",profileModal:!1,driverTrips:[],modalBodyMessage:"",updateTripModal:!1,current_passenger:{},current_trip_hour:"",current_trip_amount:"",modalHeaderMessage:"",current_trip_reference:"",current_trip_description:"",current_passenger_email:""},r.toggle=r.toggle.bind(Object(o.a)(r)),r.confirmModal=r.confirmModal.bind(Object(o.a)(r)),r.handleChange=r.handleChange.bind(Object(o.a)(r)),r.toggleProfileModal=r.toggleProfileModal.bind(Object(o.a)(r)),r.toggleUpdateTripModal=r.toggleUpdateTripModal.bind(Object(o.a)(r)),r.confirmUpdateTripModal=r.confirmUpdateTripModal.bind(Object(o.a)(r)),r}return Object(s.a)(a,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"toggleProfileModal",value:function(){this.setState({profileModal:!this.state.profileModal})}},{key:"toggleUpdateTripModal",value:function(){this.setState({updateTripModal:!this.state.updateTripModal})}},{key:"showProfilModal",value:function(e){this.setState({current_passenger:e.user}),this.toggleProfileModal()}},{key:"showUpdateModal",value:function(e){this.setState({current_trip_amount:e.price,current_trip_hour:e.startHour,current_trip_reference:e.reference,current_trip_description:e.description}),this.toggleUpdateTripModal()}},{key:"showModal",value:function(e,t,a){this.setState({current_trip_reference:e,current_passenger_email:t}),"DELETE_TRIP"===a?this.setState({modalHeaderMessage:"Suppression",modalBodyMessage:"Voulez vous vraiment supprimer ce trajet?",modalAction:a}):"CANCEL_BOOKING"===a?this.setState({modalHeaderMessage:"Annulation",modalBodyMessage:"Voulez vous vraiment annuler la r\xe9servation de ce passager?",modalAction:a}):"REFUSE_BOOKING"===a&&this.setState({modalHeaderMessage:"Refus",modalBodyMessage:"Voulez vous vraiment refuser la r\xe9servation de ce passager?",modalAction:a}),this.toggle()}},{key:"confirmModal",value:function(){var e=this.state.modalAction;"DELETE_TRIP"===e?this.cancelTrip(this.state.current_trip_reference):"CANCEL_BOOKING"===e?this.cancelBooking(this.state.current_trip_reference,this.state.current_passenger_email):"REFUSE_BOOKING"===e&&this.refuseBooking(this.state.current_trip_reference,this.state.current_passenger_email),this.toggle()}},{key:"updateBody",value:function(){return{trip_reference:this.state.current_trip_reference,trip_hour:this.state.current_trip_hour,trip_amount:this.state.current_trip_amount,trip_comment:this.state.current_trip_description}}},{key:"confirmUpdateTripModal",value:function(){var e=this.updateBody();D.a.updateTrip(e).then((function(e){v.a.success("Modifications enregistr\xe9es avec succ\xe8s",2),setTimeout((function(){window.location.reload()}),2e3)})).catch((function(e){throw v.a.error("Erreur technique: veuillez r\xe9\xe9ssayer plus tard",2),e})),this.toggleUpdateTripModal()}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(r.a)({},a,n))}},{key:"getResponseBody",value:function(e,t,a){return{trip_reference:e,trip_passenger:t,trip_driver_response:a}}},{key:"refuseBooking",value:function(e,t){var a=this.getResponseBody(e,t,"REFUSE");D.a.bookingValidation(a).then((function(e){window.location.reload()})).catch((function(e){throw e}))}},{key:"validateBooking",value:function(e,t){var a=this.getResponseBody(e,t,"VALIDE");D.a.bookingValidation(a).then((function(e){window.location.reload()})).catch((function(e){throw e}))}},{key:"cancelBody",value:function(e,t){return{trip_reference:e,trip_passenger:t}}},{key:"cancelBooking",value:function(e,t){var a=this.cancelBody(e,t);D.a.cancelBooking(a).then((function(e){window.location.reload()})).catch((function(e){throw e}))}},{key:"cancelTrip",value:function(e){var t={trip_reference:e};D.a.cancelTrip(t).then((function(e){window.location.reload()})).catch((function(e){throw e}))}},{key:"componentDidMount",value:function(){var e=this,t=this.props.cov_user.cov_mail;D.a.readDriverTrips(t).then((function(t){e.setState({driverTrips:t.data})})).catch((function(e){throw e}))}},{key:"isClose",value:function(e){return!(new Date(e)<new Date)}},{key:"render",value:function(){var e=this,t=this.state.driverTrips;return t.sort((function(e,t){return e.startDate<t.startDate?1:-1})),u.a.createElement("div",{className:"container driver-trip-content"},t.map((function(t,a){return u.a.createElement("div",{key:a,className:"trip-element"},e.isClose(t.startDate)?u.a.createElement(b.a,{className:"passenger-trip-status-open"}," ",u.a.createElement("b",null," En cours ")):u.a.createElement(b.a,{className:"passenger-trip-status-close"}," ",u.a.createElement("b",null," Termin\xe9 ")),u.a.createElement(b.a,{className:"driver-trip-header"},u.a.createElement(O.a,{className:"col-8 col-sm-10"},u.a.createElement(b.a,null," ",t.startCity," ",u.a.createElement("span",null,"\xa0 ...",u.a.createElement(k.a,null),"...\xa0 ")," ",t.endCity," "),u.a.createElement(b.a,null," Le ",d()(t.startDate,"YYYY-MM-DD").format("DD MMM YYYY")," \xa0 \xe0 ",t.startHour),u.a.createElement(b.a,null," Montant ",t.price,"gnf ")),u.a.createElement(O.a,{className:"driver-trip-edit-icon col-2 col-sm-1"},u.a.createElement(g.a,{onClick:function(){return e.showUpdateModal(t)}})),u.a.createElement(O.a,{className:"col-2 col-sm-1 driver-trip-delete-icon"},u.a.createElement(_.a,{onClick:function(){return e.showModal(t.reference,"","DELETE_TRIP")}}))),u.a.createElement(b.a,{className:"driver-trip-passenger-title"},"Liste des passagers de ce voyage"),t.passenger.length>0?u.a.createElement(b.a,{className:"driver-trip-body"},t.passenger.map((function(a,r){return u.a.createElement(O.a,{key:r,className:"driver-trip-passenger col-12 col-sm-6"},u.a.createElement(b.a,{className:"driver-trip-passenger-picture"},u.a.createElement(h.a,{className:"driver-trip-passenger-avatar",src:a.user.picture,onClick:function(){return e.showProfilModal(a)}})),u.a.createElement(b.a,{className:"driver-trip-passenger-name"},a.user.fname," ",a.user.lname),u.a.createElement(b.a,{className:"driver-trip-passenger-status"},"Statut: ",a.status,u.a.createElement("br",null)),u.a.createElement(b.a,{className:"driver-trip-passenger-body"},"VALIDE"===a.status?u.a.createElement(w.a,{className:"driver-trip-cancel",onClick:function(){return e.showModal(t.reference,a.user.email,"CANCEL_BOOKING")}}," Annuler"):u.a.createElement(b.a,null,u.a.createElement(O.a,null,u.a.createElement(w.a,{className:"driver-trip-accept",onClick:function(){return e.validateBooking(t.reference,a.user.email)}}," Accepter")),u.a.createElement(O.a,null,u.a.createElement(w.a,{className:"driver-trip-refuse",onClick:function(){return e.showModal(t.reference,a.user.email,"REFUSE_BOOKING")}}," Refuser ")))))}))):u.a.createElement(b.a,{className:"driver-trip-no-passenger"}," Vous n'avez pas encore de passager pour ce trajet..."))})),u.a.createElement(j.a,{isOpen:this.state.modal,toggle:this.toggle},u.a.createElement(T.a,{toggle:this.toggle},this.state.modalHeaderMessage),u.a.createElement(C.a,null,u.a.createElement("b",null,this.state.modalBodyMessage)),u.a.createElement(S.a,null,u.a.createElement(w.a,{color:"primary",onClick:this.confirmModal},"Oui")," ",u.a.createElement(w.a,{color:"secondary",onClick:this.toggle},"Non"))),u.a.createElement(j.a,{isOpen:this.state.profileModal,toggle:this.toggleProfileModal},u.a.createElement(T.a,{toggle:this.toggleProfileModal},u.a.createElement(h.a,{className:"driver-trip-passenger-avatar",src:this.state.current_passenger.picture})),u.a.createElement(C.a,null,u.a.createElement(b.a,{className:"passenger-profil-name"},this.state.current_passenger.fname," ",this.state.current_passenger.lname),u.a.createElement(b.a,{className:"passenger-profil-register"},"Membre depuis : ",d()(this.state.current_passenger.registerDate,"dd/MM/yyy HH:mm:ss").format("MMMM YYYY")),u.a.createElement(b.a,{className:"passenger-profil-email"},"Email v\xe9rifi\xe9 : Oui ",u.a.createElement(N.a,{className:"passenger-profil-check"})," "),u.a.createElement(b.a,{className:"passenger-profil-phone"},"Numero v\xe9rifi\xe9: Oui ",u.a.createElement(N.a,{className:"passenger-profil-check"})," "),u.a.createElement(b.a,{className:"passenger-profil-description"},this.state.current_passenger.description)),u.a.createElement(S.a,null,u.a.createElement(w.a,{color:"secondary",onClick:this.toggleProfileModal},"Retour"))),u.a.createElement(j.a,{isOpen:this.state.updateTripModal,toggle:this.toggleUpdateTripModal},u.a.createElement(T.a,{toggle:this.toggleUpdateTripModal},"Modification du trajet"),u.a.createElement(C.a,{className:"update_trip_modal_body"},u.a.createElement(b.a,{className:""},u.a.createElement(B.a,{className:"detailLabel"},"Heure de d\xe9part"),u.a.createElement(A.a,{type:"time",name:"current_trip_hour",value:this.state.current_trip_hour,className:"trip_hour",onChange:this.handleChange})),u.a.createElement(b.a,{className:""},u.a.createElement(B.a,{className:"detailLabel"},"Montant"),u.a.createElement(A.a,{type:"text",name:"current_trip_amount",value:this.state.current_trip_amount,className:"trip_amount",onChange:this.handleChange})),u.a.createElement(b.a,{className:""},u.a.createElement(B.a,{className:"detailLabel"},"Description"),u.a.createElement(A.a,{type:"text",name:"current_trip_description",value:this.state.current_trip_description,className:"trip_description",onChange:this.handleChange}))),u.a.createElement(S.a,null,u.a.createElement(w.a,{color:"primary",onClick:this.confirmUpdateTripModal},"Valider"),u.a.createElement(w.a,{color:"secondary",onClick:this.toggleUpdateTripModal},"Annuler"))))}}]),a}(u.a.Component);t.default=Object(m.b)((function(e){return{cov_user:e.cov_user,token:e.auth.token,cov_trips:e.cov_trips}}))(U)}}]);
//# sourceMappingURL=32.8c14f802.chunk.js.map