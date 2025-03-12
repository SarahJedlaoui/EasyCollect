"use client";
import { useState } from "react";

const LoanApplicationForm = () => {
  const [hasCurrentLoan, setHasCurrentLoan] = useState(false);
  const [hasPassedHalfPeriod, setHasPassedHalfPeriod] = useState(false);
  const [selectedLoanType, setSelectedLoanType] = useState("");
  const [requestedLoanType, setRequestedLoanType] = useState("");

  const gouvernorats = [
    "Tunis",
    "Ariana",
    "Ben Arous",
    "Manouba",
    "Nabeul",
    "Zaghouan",
    "Bizerte",
    "Béja",
    "Jendouba",
    "Le Kef",
    "Siliana",
    "Sousse",
    "Monastir",
    "Mahdia",
    "Sfax",
    "Kairouan",
    "Kasserine",
    "Sidi Bouzid",
    "Gabès",
    "Médenine",
    "Tataouine",
    "Gafsa",
    "Tozeur",
    "Kébili",
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-200">
        Demande de Crédit
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-center mb-6">
        Remplissez le formulaire pour soumettre votre demande
      </p>

      <form className="space-y-4">
        {/* Nom et prénom */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Nom et prénom</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 dark:bg-gray-700 dark:text-white" required />
        </div>

        {/* Genre */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Genre</label>
          <select className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 dark:bg-gray-700 dark:text-white" required>
            <option>Homme</option>
            <option>Femme</option>
          </select>
        </div>

        {/* Numéro de téléphone (readonly) */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Numéro de téléphone</label>
          <input type="tel" value="+216 98 765 432" readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white" />
        </div>

        {/* Date de naissance */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Date de naissance</label>
          <input type="date" className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 dark:bg-gray-700 dark:text-white" required />
        </div>

        {/* Gouvernorat */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Gouvernorat</label>
          <select className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 dark:bg-gray-700 dark:text-white" required>
            {gouvernorats.map((g, index) => (
              <option key={index}>{g}</option>
            ))}
          </select>
        </div>

        {/* Statut */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Statut</label>
          <select className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 dark:bg-gray-700 dark:text-white" required>
            <option>Titulaire</option>
            <option>Non Titulaire</option>
          </select>
        </div>

        {/* Salaire net mensuel */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Salaire net mensuel (TND)</label>
          <input type="number" className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 dark:bg-gray-700 dark:text-white" required />
        </div>

        {/* Avez-vous des cessions sur salaire ? */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Avez-vous des cessions sur salaire ?</label>
          <select className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 dark:bg-gray-700 dark:text-white" required>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>

        {/* Avez-vous un crédit en cours ? */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Avez-vous un crédit en cours ?</label>
          <select className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 dark:bg-gray-700 dark:text-white" required onChange={(e) => setHasCurrentLoan(e.target.value === "Oui")}>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>

        {/* Si Oui */}
        {hasCurrentLoan && (
          <>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium">Type de crédit en cours</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 dark:bg-gray-700 dark:text-white" required>
                <option>Conso</option>
                <option>Auto</option>
                <option>Immobilier</option>
                <option>Micro crédit</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium">A-t-il dépassé la moitié de la période ?</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 dark:bg-gray-700 dark:text-white" required onChange={(e) => setHasPassedHalfPeriod(e.target.value === "Oui")}>
                <option>Oui</option>
                <option>Non</option>
              </select>
            </div>
          </>
        )}

        {/* Type de crédit demandé */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Type de crédit demandé</label>
          <select className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 dark:bg-gray-700 dark:text-white" required>
            <option>Consommation</option>
            <option>Auto</option>
            <option>Immobilier</option>
          </select>
        </div>

        {/* Montant demandé */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Montant demandé (TND)</label>
          <input type="number" className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 dark:bg-gray-700 dark:text-white" required />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
            Soumettre la demande
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoanApplicationForm;
