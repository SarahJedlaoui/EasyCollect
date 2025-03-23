// Revised Loan Application Form with Conditional Sections + Questions + Document Upload + Progress Bar
"use client";
import { useState } from "react";

interface DocumentScores {
  [key: string]: number;
}
const LoanApplicationForm = () => {
  const [step, setStep] = useState(0);
  const [residency, setResidency] = useState("");
  const [hasCurrentLoan, setHasCurrentLoan] = useState(false);
  const [documents, setDocuments] = useState<DocumentScores>({});
  const [loanType, setLoanType] = useState<string>("");
  // New states to store all user input
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [salary, setSalary] = useState("");
  const [foreignCountry, setForeignCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [foreignSalary, setForeignSalary] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [hasCessions, setHasCessions] = useState("");
  const [currentLoanType, setCurrentLoanType] = useState("");
  const [currentLoanAmount, setCurrentLoanAmount] = useState("");
  const [passedHalfPeriod, setPassedHalfPeriod] = useState("");
  const gouvernorats = [
    "Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan",
    "Bizerte", "Béja", "Jendouba", "Le Kef", "Siliana", "Sousse",
    "Monastir", "Mahdia", "Sfax", "Kairouan", "Kasserine", "Sidi Bouzid",
    "Gabès", "Médenine", "Tataouine", "Gafsa", "Tozeur", "Kébili",
  ];

  const countries: string[] = [
    "France", "Allemagne", "Italie", "Canada", "USA", "Qatar", "Arabie Saoudite", "Émirats Arabes Unis", "Royaume-Uni", "Belgique", "Espagne", "Libye", "Autre"
  ];

  const currencies: string[] = [
    "EUR", "USD", "CAD", "GBP", "QAR", "SAR", "TND", "AED", "LYD"
  ];
  const documentWeights: DocumentScores = {
    cin: 5,
    facture: 5,
    attestationTravail: 15,
    attestationSalaire: 15,
    fichesPaie: 10,
    cnss: 10,
    releveBancaire: 10,
    devis: 30,
    devisVoiture: 30,
    titreFonciers: 10,
    permisBatir: 10,
    devisConstruction: 10
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof DocumentScores): void => {
    const file = e.target.files?.[0];
    setDocuments((prev) => ({
      ...prev,
      [name]: file ? documentWeights[name] : 0,
    }));
  };


  const progress: number = Object.values(documents).reduce((acc: number, val: number): number => acc + (typeof val === "number" ? val : 0), 0);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const getRequiredDocuments = (): { key: keyof DocumentScores, label: string }[] => {
    const baseDocs = [
      { key: 'cin', label: "Carte d'identité nationale" },
      { key: 'facture', label: "Facture STEG ou SONED" },
      { key: 'attestationTravail', label: "Attestation de Travail" },
      { key: 'attestationSalaire', label: "Attestation de salaire" },
      { key: 'fichesPaie', label: "Les trois derniers fiches de paie" },
      { key: 'cnss', label: "Historique CNSS ou CNRPS" },
      { key: 'releveBancaire', label: "Relevé bancaire des 3 derniers mois" },
    ];

    if (loanType === "Crédit de Consommation" || loanType === "Micro-crédit") {
      return [...baseDocs, { key: 'devis', label: "Devis (Conso ou Micro crédit)" }];
    }
    if (loanType === "Crédit Auto") {
      return [...baseDocs, { key: 'devisVoiture', label: "Devis voiture (Crédit auto)" }];
    }
    if (loanType === "Crédit immobilié" || loanType === "Achat d'un logement" || loanType === "Achat d'un terrain") {
      return [
        ...baseDocs,
        { key: 'titreFonciers', label: "Titre foncier / logement" },
        { key: 'devisConstruction', label: "Devis promoteur appartement" }
      ];
    }
    if (loanType === "Construction d'un logement") {
      return [
        ...baseDocs,
        { key: 'titreFonciers', label: "Titre foncier (Lot + logement)" },
        { key: 'permisBatir', label: "Permis de bâtir" },
        { key: 'devisConstruction', label: "Devis global de construction" },
      ];
    }
    return baseDocs;
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-200">
        Demande de Crédit
      </h2>
      <form className="space-y-4">
        {/* Step 0: Residency */}
        {step === 0 && (
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Résidez-vous en Tunisie ?
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => { setResidency("Tunisien"); nextStep(); }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Oui
              </button>
              <button
                type="button"
                onClick={() => { setResidency("Tunisien à l'étranger"); nextStep(); }}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Non
              </button>
            </div>
          </div>
        )}

        {/* Step 1: Données personnelles */}
        {step === 1 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-600 dark:text-gray-300">
              Données personnelles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>1. Nom & Prénom<input type="text" required className="p-2 border rounded w-full" /></label>
              <label>2. Numéro de téléphone<input type="tel" required className="p-2 border rounded w-full" /></label>
              {residency === "Tunisien" ? (
                <>
                  <label>3. Gouvernorat<select required className="p-2 border rounded w-full">{gouvernorats.map((g, i) => <option key={i}>{g}</option>)}</select></label>
                  <label>4. Salaire net (TND)<input type="number" required className="p-2 border rounded w-full" /></label>
                </>
              ) : (
                <>
                  <label>3. Lieu de résidence<select required className="p-2 border rounded w-full">{countries.map((c, i) => <option key={i}>{c}</option>)}</select></label>
                  <label>4. Devise de résidence<select required className="p-2 border rounded w-full">{currencies.map((c, i) => <option key={i}>{c}</option>)}</select></label>
                  <label>5. Revenu mensuel en devise<input type="number" required className="p-2 border rounded w-full" /></label>
                </>
              )}

            </div>
            <div className="flex justify-between mt-6">
              <button onClick={prevStep} type="button" className="px-4 py-2 bg-gray-500 text-white rounded">Retour</button>
              <button onClick={nextStep} type="button" className="px-4 py-2 bg-green-600 text-white rounded">Suivant</button>
            </div>
          </div>
        )}

        {/* Step 2: Crédit demandé */}
        {step === 2 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-600 dark:text-gray-300">
              Informations sur le crédit demandé
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>1. Type de crédit demandé
                <select required className="p-2 border rounded w-full" onChange={(e) => setLoanType(e.target.value)}>
                  {residency === "Tunisien" ? (
                    <>
                      <option>Crédit immobilié</option>
                      <option>Crédit de Consommation</option>
                      <option>Crédit Auto</option>
                      <option>Micro-crédit</option>
                    </>
                  ) : (
                    <>
                      <option>Achat d'un logement</option>
                      <option>Construction d'un logement</option>
                      <option>Achat d'un terrain</option>
                    </>
                  )}
                </select></label>
              <label>2. Montant du crédit demandé (TND)<input type="number" required className="p-2 border rounded w-full" /></label>
              {residency === "Tunisien" ? (
                <>
                  <label>3. Avez-vous des cessions sur salaire ?<select className="p-2 border rounded w-full"><option>Oui</option><option>Non</option></select></label>
                  <label>4. Avez-vous un crédit en cours ?
                    <select onChange={(e) => setHasCurrentLoan(e.target.value === "Oui")} className="p-2 border rounded w-full">
                      <option>Oui</option><option>Non</option>
                    </select>
                  </label>
                  {hasCurrentLoan && (
                    <>
                      <label>5. Type du crédit obtenu<select className="p-2 border rounded w-full"><option>Crédit immobilié</option><option>Crédit de Consommation</option><option>Crédit Auto</option><option>Micro-crédit</option></select></label>
                      <label>6. Montant du crédit obtenu<input type="number" className="p-2 border rounded w-full" /></label>
                      <label>7. Dépassé la moitié de la période ?<select className="p-2 border rounded w-full"><option>Oui</option><option>Non</option></select></label>
                    </>
                  )}
                </>
              ) : (
                <>
                  <label>4. Avez-vous un crédit en cours ?<select  className="p-2 border rounded w-full"><option>Oui</option><option>Non</option></select></label>
                </>
              )}
            </div>
            <div className="flex justify-between mt-6">
              <button onClick={prevStep} type="button" className="px-4 py-2 bg-gray-500 text-white rounded">Retour</button>
              <button onClick={nextStep} type="button" className="px-4 py-2 bg-green-600 text-white rounded">Suivant</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-600 dark:text-gray-300">
              Suivi des documents du client
            </h3>

            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div
                  className="bg-green-500 h-4 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                Progression: {progress}%
              </p>
            </div>

            <div className="space-y-4">
              {getRequiredDocuments().map((doc) => (
                <div key={doc.key} className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <label className="w-full sm:w-1/2 text-sm font-medium text-gray-700 dark:text-gray-200">
                    {doc.label}
                  </label>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, doc.key as keyof DocumentScores)}
                    className="w-full sm:w-1/2 border border-gray-300 rounded px-2 py-1 text-sm"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button onClick={prevStep} type="button" className="px-4 py-2 bg-gray-500 text-white rounded">Retour</button>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                Soumettre la demande
              </button>
            </div>


          </div>
        )}

      </form>
    </div>
  );
};

export default LoanApplicationForm;