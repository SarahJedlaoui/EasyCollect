import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Pourquoi EasyCollect"
        title="Pourquoi choisir EasyCollect ?"
      >
        EasyCollect est une solution digitale développée par EasyBank pour accompagner les clients d&apos;EasyBank dans la préparation et la soumission de leur demande de prêt bancaire. Avec une approche simple, rapide et sécurisée, nous vous aidons à rassembler les documents nécessaires et à maximiser vos chances d&apos;obtenir un financement adapté à vos besoins.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="EasyCollect"
        title="Qui peut bénéficier d’EasyCollect ?"
      >
        Ce service est exclusivement réservé aux clients d&apos;EasyBank souhaitant accéder plus facilement à un crédit bancaire.
      </SectionTitle>

      <Video videoId="AYsySXh3oHU" />
{/** 
      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />
*/}
      <SectionTitle preTitle="FAQ" title="Foire aux Questions (FAQ)">
      FAQ d&apos;EasyCollect afin de répondre aux principales questions des collaborateurs de Leoni.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
