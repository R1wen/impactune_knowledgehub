import Link from 'next/link';

const navLinks = [
  { name: 'À propos', href: '/a-propos' },
  { name: 'Dashboards', href: '/dashboards' },
  { name: 'Bibliothèque', href: '/bibliotheque' },
];

const Navbar = () => {
  return (
    <header className="bg-gray-100 border-b border-gray-200">
      <nav className="max-w-8xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-20">
          
          {/* Logo et Nom du Hub */}
          <div className="flex items-center space-x-2">
            {/* Remplacer par votre logo réel */}
            <div className="text-4xl font-extrabold text-black">
              <span className="text-black">I</span>
              <span className="text-amber-950">T</span>
            </div>
            <div className="flex flex-col text-sm leading-none">
              <span className="font-bold text-gray-700">Impact</span>
              <span className="font-bold text-amber-950">Tune</span>
            </div>
          </div>

          {/* Liens de Navigation (Visible sur Desktop) */}
          <div className="hidden md:flex items-center space-x-6 text-lg">
            <Link href="/" className="text-gray-700 hover:text-amber-700 flex items-center transition duration-150 ease-in-out">
              <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l-2 2m-7 7h7m-12 0h-3m3 0h3m4 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1z"></path></svg>
              Accueil
            </Link>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-700 hover:text-amber-700 font-medium transition duration-150 ease-in-out">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bouton pour Mobile (Menu Hamburger) - Non affiché ici pour simplicité */}
          <div className="md:hidden">
            {/* Vous pouvez ajouter ici un bouton pour ouvrir un menu mobile */}
            {/* <button type="button" className="text-gray-500 hover:text-gray-900">...</button> */}
          </div>

        </div>
      </nav>
      
      {/* Barre rouge en bas (Style de l'image) */}
      <div className="w-full h-2 bg-amber-800" />
    </header>
  );
};

export default Navbar;