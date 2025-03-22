export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 py-6 px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-xl text-gray-300 font-bold bg-gray-800 bg-opacity-50 px-6 py-3 rounded-full transition-all duration-300 hover:bg-opacity-70 hover:text-white">
          Rick and Morty API Project
        </div>
      </div>
    </header>
  );
}
