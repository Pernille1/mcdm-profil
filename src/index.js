let anders = 1

fetch('/data/profile.json')
    .then((responce) => responce.json())
    .then((profil) => {
    function open(){

        console.log('open')
    }

    const openMe = () => {
        console.log('Open me')
    }

    open();
    openMe();
 });