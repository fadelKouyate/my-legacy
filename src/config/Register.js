export const Config = {
    "cov_mail": {
        "title" : "Votre adresse mail ?",
        "errorMessage": "Email incorrect",
        "regex": "^\\S+@\\S+\\.\\S+$"
    },
    "cov_names": {
        "title" : "Votre prenom et nom ?",
        "errorMessage": "Saisir entre 5 à 30 caractères",
        "regex": "^(.{5,30})$"
    },
    "cov_birth": {
        "title" : "Votre date de naissance ?",
        "errorMessage": "Saisir la date de naissance ou ignorer le champ",
        "regex": "|^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$"
    },
    "cov_password": {
        "title" : "Votre mot de passe ?",
        "errorMessage": "Saisir un mot de passe de 5 à 30 caractères",
        "regex": "^(.{5,30})$"
    },
    "cov_gender": {
        "title" : "Vous êtes ?",
        "errorMessage": "Faites un choix",
        "regex": "^(.{1,1})$"
    },
    "cov_phone": {
        "title" : "Votre numéro de téléphone ?",
        "errorMessage": "Saisir un numéro de téléphone de 10 chiffres",
        "regex": "^(\\d{10,10})$"
    },
    "cov_city": {
        "title" : "Votre ville ?",
        "errorMessage": "Saisir un nom de ville",
        "regex": "^(.{1,100})$"
    },
}



