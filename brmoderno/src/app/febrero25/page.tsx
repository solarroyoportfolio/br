import Image from "next/image";
import logobr from "@/public/images/logobr.png";
import Link from "next/link";

export default function Febrero25Page() {
  return (
    <main className="min-h-screen bg-gray-100 font-[Poppins] flex flex-col items-center">
      <section className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 mt-8">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/">
            <span className="text-2xl text-blue-600 hover:underline">&#8592;</span>
          </Link>
          <Link href="/">
            <Image src={logobr} alt="logo-br" className="w-12 h-12" />
          </Link>
          <h1 className="text-3xl font-bold ml-4">Febrero 2025</h1>
        </div>
        <div className="mb-4 text-center text-pink-600 text-lg">❤️ St San Valentin</div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg text-center">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2">S3/02</th>
                <th className="px-4 py-2">S10/02</th>
                <th className="px-4 py-2">S17/02</th>
                <th className="px-4 py-2">S24/02</th>
              </tr>
            </thead>
            <tbody>
              {/* Agrega aquí el resto de las filas según el HTML original */}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
