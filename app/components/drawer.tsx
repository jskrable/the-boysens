function Drawer() {
  return (
    <div
      id="drawer-create-product-default"
      className="fixed top-0 left-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
      tabIndex={-1}
      aria-labelledby="drawer-label"
      aria-hidden="true"
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        New Product
      </h5>
      <button
        type="button"
        data-drawer-dismiss="drawer-create-product-default"
        aria-controls="drawer-create-product-default"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <span className="sr-only">Close menu</span>
      </button>
    </div>
  );
}

export { Drawer };
