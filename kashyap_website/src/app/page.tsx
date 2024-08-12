import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-6">
          <div className="text-green-600 text-2xl font-bold">
            <h1>MediSins</h1>
          </div>
          <nav className="w-full lg:w-auto mt-4 lg:mt-0">
            <ul className="flex flex-wrap justify-center lg:justify-end space-x-6">
              <li><a href="#" className="text-green-600 hover:text-green-800">Home</a></li>
              <li><a href="#" className="text-green-600 hover:text-green-800">Products</a></li>
              <li><a href="#" className="text-green-600 hover:text-green-800">About Us</a></li>
              <li><a href="#" className="text-green-600 hover:text-green-800">Contact Us</a></li>
            </ul>
          </nav>
          <div className="flex flex-wrap justify-end space-x-4 mt-4 lg:mt-0">
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="border border-green-600 rounded px-4 py-2 focus:outline-none focus:border-green-800 w-full lg:w-auto"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 w-full lg:w-auto">Search</button>
          </div>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" className="text-green-600 hover:text-green-800">Login</a>
            <a href="#" className="text-green-600 hover:text-green-800">Cart</a>
          </div>
        </div>
      </header>

      <section className="relative bg-green-600 text-white text-center py-20">
        <div className="absolute inset-0">
          <Image src="/banner.jpg" alt="Banner Image" layout="fill" objectFit="cover" className="opacity-50" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold">Welcome to MediSins</h2>
          <p className="mt-4 text-lg">Your trusted online pharmacy for medicines and healthcare products.</p>
          <a href="#" className="inline-block mt-6 bg-white text-green-600 px-6 py-3 rounded hover:bg-green-800 hover:text-white">Shop Now</a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-green-600 mb-8">Shop by Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Image src="/images (2).jpeg" alt="Medicines" width={400} height={200} className="rounded-lg" />
              <h4 className="mt-4 text-green-600 font-semibold">Medicines</h4>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images (3).jpeg" alt="Supplements" width={900} height={300} className="rounded-lg" />
              <h4 className="mt-4 text-green-600 font-semibold">Supplements</h4>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/category3.jpg" alt="Health Devices" width={500} height={200} className="rounded-lg" />
              <h4 className="mt-4 text-green-600 font-semibold">Health Devices</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-green-600 mb-8">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image src="/nexium-2.jpg" alt="Product Image" width={400} height={200} className="rounded-lg" />
              <h4 className="mt-4 text-green-600 font-semibold">Premium Medicine</h4>
              <p className="mt-2 text-gray-600">$19.99</p>
              <a href="#" className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800">Add to Cart</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image src="/download (1).jpeg" alt="Product Image" width={300} height={100} className="rounded-lg" />
              <h4 className="mt-4 text-green-600 font-semibold"> Ayurvedic Herbal Medicine</h4>
              <p className="mt-2 text-gray-600">$29.99</p>
              <a href="#" className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800">Add to Cart</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-green-600 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold">About Medisins</h4>
            <p className="mt-4">Medisins is your trusted online pharmacy offering a wide range of medicines and healthcare products.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Customer Service</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
