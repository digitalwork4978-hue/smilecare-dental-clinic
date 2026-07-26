export default function TeethCleaning() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Teeth Cleaning</h1>
        <p className="mt-4 text-xl">
          Professional cleaning for a healthy smile.
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Why Teeth Cleaning?
        </h2>

        <p className="text-lg leading-8">
          Regular professional teeth cleaning removes plaque,
          tartar, and stains while helping prevent cavities,
          gum disease, and bad breath.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">
          Benefits
        </h2>

        <ul className="list-disc ml-6 space-y-3">
          <li>Healthier gums</li>
          <li>Whiter smile</li>
          <li>Fresh breath</li>
          <li>Prevents cavities</li>
        </ul>
      </section>
    </main>
  );
}