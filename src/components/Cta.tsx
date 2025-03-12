import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-green-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
          Commencez dès maintenant !
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
          Ne perdez plus de temps avec des démarches administratives complexes. Inscrivez-vous dès aujourd&apos;hui et facilitez votre accès au prêt bancaire en quelques clics.
          EasyCollect, votre allié pour un financement sans stress !
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="/"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-green-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            S&apos;inscrire maintenant
          </a>
        </div>
      </div>
    </Container>
  );
};
