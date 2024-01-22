export default function HomePage() {
  return (
    <>
      <div className="text-center my-[30vh] mx-auto">
        <h1 className="text-7xl">VAPOR</h1>
        <p className="text-gray-2 text-lg">Not Steam</p>
      </div>
      <footer className="text-center text-gray-2 bg-gray-3 text-sm rounded-xl w-1/2 mx-auto px-6 py-3">
        Made with{" "}
        <a className="border-b hover:text-white" href="_blank" target="_blank">
          RAWG
        </a>
      </footer>
    </>
  );
}
