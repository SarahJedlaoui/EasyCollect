"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
export const Navbar = () => {
  const navigation = [
    "Home",
    "FAQ"
    
  ];
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add authentication logic here
    router.push("/form"); // Redirect to the form page
    setIsModalOpen(false);
  };
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-green-500 dark:text-gray-100">
            <span>
              <Image
                src="/img/easy.jpg"
                width="48"
                alt="N"
                height="48"
                className="w-28"
              />
            </span>

          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item">
            <button
              onClick={openModal}
              className="px-6 py-2 text-white bg-green-600 rounded-md md:ml-5"
            >
              SigIn
            </button>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-green-500 focus:text-green-500 focus:bg-green-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link key={index} href="/" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-green-500 focus:text-green-500 focus:bg-green-100 dark:focus:bg-gray-800 focus:outline-none">
                      {item}
                    </Link>
                  ))}
                  <button
                    onClick={openModal}
                    className="px-6 py-2 text-white bg-green-600 rounded-md md:ml-5"
                  >
                    SigIn
                  </button>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-green-500 focus:text-green-500 focus:bg-green-100 focus:outline-none dark:focus:bg-gray-800">
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 text-center">
              Connexion à EasyCollect
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-4">
              Entrez vos identifiants pour accéder à votre espace.
            </p>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Votre numéro"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Votre mot de passe"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Se connecter
              </button>
            </form>

            <button
              onClick={closeModal}
              className="mt-4 w-full text-center text-gray-500 dark:text-gray-400 hover:underline"
            >
              Annuler
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

