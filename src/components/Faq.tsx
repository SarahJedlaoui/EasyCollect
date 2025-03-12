"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-green-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-green-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Qui peut utiliser EasyCollect ?",
    answer: "EasyCollect est un service exclusivement réservé aux collaborateurs de Leoni souhaitant obtenir un prêt bancaire en toute simplicité.",
  },
  {
    question: " Comment puis-je accéder à la plateforme ?",
    answer: "Nos experts vous enverront des identifiants de connexion par email ou SMS. Une fois reçus, vous pourrez vous connecter à EasyCollect et renseigner vos informations.",
  },
  {
    question: "Quels types de prêts puis-je obtenir via EasyCollect ? ",
    answer:
      "Nous facilitons l’accès à différents types de crédits : Prêt personnel, Crédit immobilier, Crédit auto, Autres financements selon vos besoins et l’offre des banques partenaires",
  },
  {
    question: "EasyCollect garantit-il l’obtention du prêt ?",
    answer:
      "EasyCollect vous accompagne dans la constitution d’un dossier solide et facilite la mise en relation avec les banques partenaires. Cependant, l’octroi du prêt dépend des critères de la banque et de votre situation financière.",
  },
  {
    question: "Mes informations sont-elles sécurisées ?",
    answer:
      "Oui ! EasyCollect utilise des protocoles de sécurité avancés pour protéger vos données personnelles et garantir leur confidentialité.",
  },
];
