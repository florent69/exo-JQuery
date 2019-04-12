console.log("exercice 6");

$(document).ready(function () {
    // 1. créez un formulaire en HTML avec un champ pour un email et un champ pour un mot de passe.
    // Ajouter un bouton avec le titre **'Se connecter'**;
    // 2. nous voulons contrôler les données lorsque l'utilisateur clique sur le bouton 'Se connecter'.
    // Faites en sorte de réagir à cet événement en utilisant un alert dans un premier temps;
    // 3. nous devons maintenant récupérer les valeurs des champs email
    // et mot de passe dans la fonction déclenchée par l'événement (et donc appelée) déclaré à la question précédente.
    // Ecrivez du code JQuery permettant de récupérer la valeur de ces inputs.
    // Affichez ces valeurs dans la console dans un premier temps.
    // Nous allons maintenant ajouter des contrôles :
    //
    //     1. vérifiez que le champ email est non vide.
    // Si ce n'est pas le cas, afficher une div avec la classe bootstrap
    // ['alert alert warning'](https://www.w3schools.com/bootstrap/bootstrap_alerts.asp)
    // en précisant dedans le texte email obligatoire;
    //     2. vérifiez la même chose pour le champ mot de passe;
    //     3. ajoutez un contrôle supplémentaire sur le champ mot de passe pour obliger l'utilisateur
    // à rentrer au minimum 6 lettres. Ajustez le message en fonction;
    //     4. vérifiez maintenant que le champ email comporte bien une adresse email,
    // sinon afficher un message à l'utilisateur.
    // ( Remarque : il va falloir trouver comment vérifier qu'une chaine de charactères est un email...
    // google est votre ami... );
    //     5. Maintenant faites en sorte que si l'utilisateur rentre 'hello@me.com' dans l'email
    // et 'secret8' dans le mot de passe alors un message de confirmation apparait :
    // **'Vous êtes connecté'**

    let $button = $('input[type="button"]');
    let $alert = $('<div></div>').addClass('alert alert-warning').text('Your email and your password are empty !!');
    let $alertEmailEmpty = $('<div></div>').addClass('alert alert-warning').text('Your email is empty !!');
    let $alertPassword = $('<div></div>').addClass('alert alert-warning').text('Your password is empty or too short !! Enter at minimun 6 characters !!');
    let $alertEmailFalse = $('<div></div>').addClass('alert alert-warning').text('Invalid Email Address !! Please, retry to enter it !!!');
    let $alertSecret = $('<div></div>').addClass('alert alert-info').text('**\'Vous êtes connecté\'**');
    let $end = $('form');
    let minLength = 6;

    let removeAlert = () => {
        $alert.remove(),
            $alertEmailEmpty.remove(),
            $alertPassword.remove(),
            $alertEmailFalse.remove()
    };

    let validateEmail = (sEmail) => {
        const filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) {
            return true;
        } else {
            return false;
        }
    }

    $button.on('click', () => {
        let $email = $('input[type="email"]').val();
        let $password = $('input[type="password"]').val();
        console.log($email);
        console.log($password);
        if ($.trim($email) === "" && $.trim($password) === "") {
            removeAlert(),
            $end.after($alert)
        } else if ($.trim($email) === "") {
            removeAlert(),
            $end.after($alertEmailEmpty)
        } else if ($.trim($password) === "") {
            removeAlert(),
            $end.after($alertPassword)
        } else if ($.trim($password).length < minLength) {
            removeAlert(),
            $end.after($alertPassword)
        } else if (validateEmail($.trim($email)) === false) {
            removeAlert(),
            $end.after($alertEmailFalse)
        } else if ($.trim($email) === "hello@me.com" && $.trim($password) === "secret8") {
            removeAlert(),
            $end.after($alertSecret),
            console.log($email),
            console.log($password)
        }else{
            removeAlert(),
            alert($.trim($email) + ' ' + $.trim($password))
        };

    });

});