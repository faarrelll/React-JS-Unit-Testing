import { Apple } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-yellow-50 text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-black">
            <Apple className="size-7" />
            <h1 className="text-xl font-bold">FURNUTA</h1>
          </div>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-black">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-700 transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-700 transition-all duration-300"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-700 transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <hr className="border-gray-900" />
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <p className="text-sm text-gray-900">
            © {new Date().getFullYear()} MyBrand. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0 text-black">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.99 3.657 9.128 8.438 9.878v-6.99H7.898v-2.887h2.54V9.797c0-2.506 1.493-3.887 3.777-3.887 1.095 0 2.238.195 2.238.195v2.457h-1.26c-1.243 0-1.632.773-1.632 1.562v1.875h2.774l-.443 2.887h-2.33v6.99C18.343 21.128 22 16.99 22 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.46 6.011c-.772.342-1.601.574-2.473.678a4.32 4.32 0 001.9-2.383 8.696 8.696 0 01-2.74 1.046A4.324 4.324 0 0015.608 4c-2.386 0-4.322 1.935-4.322 4.322 0 .339.037.67.112.987-3.59-.18-6.772-1.9-8.9-4.513-.372.638-.585 1.378-.585 2.168 0 1.497.761 2.815 1.92 3.588a4.296 4.296 0 01-1.957-.54v.054c0 2.092 1.489 3.835 3.466 4.23a4.313 4.313 0 01-1.953.073c.551 1.723 2.15 2.98 4.046 3.014a8.673 8.673 0 01-5.367 1.851c-.348 0-.691-.02-1.031-.06a12.222 12.222 0 006.59 1.931c7.907 0 12.223-6.553 12.223-12.223 0-.186-.004-.372-.013-.556A8.683 8.683 0 0022.46 6.01z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-yellow-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 2.042.245 2.51.418a5.092 5.092 0 011.741 1.12 5.092 5.092 0 011.12 1.742c.173.467.36 1.303.418 2.509.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.206-.245 2.042-.418 2.509a5.092 5.092 0 01-1.12 1.742 5.092 5.092 0 01-1.742 1.12c-.467.173-1.303.36-2.509.418-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.058-2.042-.245-2.509-.418a5.092 5.092 0 01-1.742-1.12 5.092 5.092 0 01-1.12-1.742c-.173-.467-.36-1.303-.418-2.509-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.206.245-2.042.418-2.509A5.092 5.092 0 014.662 2.65 5.092 5.092 0 016.404 2.53c.467-.173 1.303-.36 2.509-.418 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.715 0 8.33.013 7.05.072 5.708.13 4.655.285 3.798.568a7.19 7.19 0 00-2.623 1.683A7.19 7.19 0 00.492 4.875c-.283.857-.438 1.91-.496 3.252-.059 1.28-.072 1.665-.072 4.048s.013 2.768.072 4.048c.058 1.342.213 2.395.496 3.252a7.19 7.19 0 001.683 2.623 7.19 7.19 0 002.623 1.683c.857.283 1.91.438 3.252.496 1.28.059 1.665.072 4.048.072s2.768-.013 4.048-.072c1.342-.058 2.395-.213 3.252-.496a7.19 7.19 0 002.623-1.683 7.19 7.19 0 001.683-2.623c.283-.857.438-1.91.496-3.252.059-1.28.072-1.665.072-4.048s-.013-2.768-.072-4.048c-.058-1.342-.213-2.395-.496-3.252a7.19 7.19 0 00-1.683-2.623A7.19 7.19 0 0018.202.568C17.345.285 16.292.13 14.95.072 13.67.013 13.285 0 12 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
