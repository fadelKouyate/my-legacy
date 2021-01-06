export default {
  items: [
    {
      name: 'Mon compte',
      url: '/',
      icon: 'icon-user',
    },
    {
      title: true,
      name: 'Profil',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Mes informations',
      url: '/profile/infos',
      icon: 'icon-drop',
    },
    {
      name: 'Photo',
      url: '/profile/picture',
      icon: 'icon-camera',
    },
    {
      name: 'Véhicule',
      url: '/theme/typography',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Mes Trajets',
      wrapper: {           
        element: '',        
        attributes: {}      
      },
      class: ''             
    },
    {
      name: 'Je suis conducteur',
      url: '/profile/driver_trips',
      icon: 'icon-drop',
    },
    {
      name: 'Je suis passager',
      url: '/profile/passenger_trips',
      icon: 'icon-drop',
    },
    /*{
      title: true,
      name: 'Avis',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Avis reçus',
      url: '/theme/typography',
      icon: 'icon-envelope',
    },
    {
      name: 'Avis laissés',
      url: '/theme/typography',
      icon: 'icon-envelope',
    }, */
    {
      title: true,
      name: 'Préférences',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Mot de passe',
      url: '/profile/password/change',
      icon: 'icon-lock',
    },
    {
      name: 'Vérification',
      url: '/theme/typography',
      icon: 'icon-eye',
    }
  ],
};
