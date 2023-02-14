function App() {
  return (
    <div className="flex  h-screen items-center justify-center p-4 text-white">
      <div className="w-full max-w-lg rounded-md bg-stone-900 p-4 text-center shadow-lg">
        <h1>Hello world!</h1>
        <button className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800">
          <span className="relative rounded-md  bg-stone-900 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
            Click me
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
