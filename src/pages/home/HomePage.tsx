export default function HomePage() {
  return (
    <div className="flex flex-col h-full">
      <div className="text-center flex-grow flex flex-col justify-center">
        <h1 className="text-7xl md:text-9xl">VAPOR</h1>
        <p className="text-gray-2 text-lg md:text-2xl">Not Steam</p>
      </div>
      <footer className="text-center text-gray-2 bg-gray-3 text-sm rounded-xl w-52 mx-auto px-6 py-3 mt-10 mb-6 md:mb-8">
        Made with{" "}
        <a className="border-b hover:text-white" href="_blank" target="_blank">
          RAWG
        </a>
      </footer>
    </div>
  );
}
