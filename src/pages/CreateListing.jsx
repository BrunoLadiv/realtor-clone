export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
  });
  const { type, name, bedrooms, bathrooms } = formData;
  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
      <form action="">
        <p className="text-lg mt-6 font-semibold ">Sell / Rent</p>
        <div className="flex ">
          <button
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
            onClick={onChange}
            id="type"
            value={"sale"}
            type="button"
          >
            sell
          </button>
          <button
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "sale"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
            onClick={onChange}
            id="type"
            value={"sale"}
            type="button"
          >
            rent
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Name</p>
        <input
          placeholder="Name"
          maxLength={`32`}
          minLength={`10`}
          required
          className="w-full px-4 py-2 text-xl text-gray-700
        bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600
        mb-6"
          type="text"
          id="name"
          value={name}
          onChange={onChange}
        />
        <div className="flex space-x-6 justify-start mb-6 ">
          <div className="">
            <p className="text-lg font-semibold"> Beds</p>
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out
            focus:text-gray-700 focus:border-slate-600 text-center"
              type="number"
              name=""
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min="1"
              max="50"
              required
            />
          </div>

          <div className="">
            <p className="text-lg font-semibold"> Baths</p>
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out
            focus:text-gray-700 focus:border-slate-600 text-center"
              type="number"
              name=""
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min="1"
              max="50"
              required
            />
          </div>
        </div>
      </form>
    </main>
  );
}
