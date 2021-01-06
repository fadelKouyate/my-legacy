import {REGISTER_MAIL_URL,REGISTER_BIRTH_URL,REGISTER_CITY_URL,REGISTER_GENDER_URL,REGISTER_NAMES_URL} from './register_url'
import {REGISTER_PASSWORD_URL,REGISTER_PHONE_URL,REGISTER_SAVE_URL} from './register_url'

export const Register_Config = {
    "cov_mail": {
        "title" : "Votre adresse mail ?",
        "errorMessage": "Email incorrect ou longueur minimum non atteint",
        "index" : REGISTER_MAIL_URL,
        "redirect" : REGISTER_NAMES_URL,
        "regex": "^(.+)@(.+)$"
    },
    "cov_names": {
        "title" : "Votre prenom et nom ?",
        "errorMessage": "Saisie incorrecte veuillez saisir entre 5 à 30 caractères",
        "index" : REGISTER_MAIL_URL,
        "redirect" : REGISTER_BIRTH_URL,
        "regex": "\\w+"
    },
    "cov_birth": {
        "title" : "Votre date de naissance ?",
        "errorMessage": "Saisie incorrecte veuillez saisir la date de naissance ou ignorer le champ",
        "index" : REGISTER_MAIL_URL,
        "redirect" : REGISTER_PASSWORD_URL,
        "regex": "|^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$"
    },
    "cov_password": {
        "title" : "Votre mot de passe ?",
        "errorMessage": "Veuillez faire un mot de passe de 8 à 30 caractères",
        "index" : REGISTER_MAIL_URL,
        "redirect" : REGISTER_GENDER_URL,
        "regex": "\\w+"
    },
    "cov_gender": {
        "title" : "Vous êtes ?",
        "errorMessage": "Veuillez faire un mot de passe de 8 à 10 caractères",
        "index" : REGISTER_MAIL_URL,
        "redirect" : REGISTER_PHONE_URL,
        "regex": "\\w+"
    },
    "cov_phone": {
        "title" : "Votre numéro de téléphone ?",
        "errorMessage": "Veuillez faire un numéro de téléphone de 10 chiffres",
        "index" : REGISTER_MAIL_URL,
        "redirect" : REGISTER_CITY_URL,
        "regex": "\\w+"
    },
    "cov_city": {
        "title" : "Votre ville ?",
        "errorMessage": "Veuillez saisir un nom de ville",
        "index" : REGISTER_MAIL_URL,
        "redirect" : REGISTER_SAVE_URL,
        "regex": "\\w*"
    },
}



