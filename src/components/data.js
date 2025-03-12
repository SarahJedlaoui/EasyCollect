import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/icon1.svg";
import benefitTwoImg from "../../public/img/icon3.svg";

const benefitOne = {
  title: "Comment ça marche ?",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Inscription rapide",
      desc: "Connectez-vous à notre plateforme en utilisant vos identifiant",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Complétez votre profil",
      desc: "Renseignez vos informations personnelles et financières en quelques clics.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Accompagnement personnalisé",
      desc: "Nos experts vous guident dans la constitution d’un dossier solide.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Transmission aux banques partenaires",
      desc: "Nous envoyons votre demande aux établissements bancaires les plus adaptés à votre profil.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Réponse rapide et financement",
      desc: "Recevez une réponse de la banque et accédez à votre prêt en toute sérénité.",
      icon: <CursorArrowRaysIcon />,
    },
    
  ],
};

const benefitTwo = {
  title: "Les avantages d’EasyCollect",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Gain de temps",
      desc: "Évitez les démarches complexes et laissez-nous gérer votre dossier.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Accompagnement expert",
      desc: "Profitez d’un suivi personnalisé pour optimiser votre demande.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: " Sécurisation des données",
      desc: "Vos informations sont protégées et traitées en toute confidentialité. ",
      icon: <SunIcon />,
    },
    {
      title: "Accès privilégié aux banques partenaires",
      desc: "Augmentez vos chances d’obtenir un financement.",
      icon: <DevicePhoneMobileIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
