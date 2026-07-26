export default function FloatingButtons() {
  return (
    <>
      <a
        href="tel:+917995026604"
        className="fixed bottom-24 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 z-50"
      >
        📞
      </a>

      <a
        href="https://wa.me/917995026604"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 z-50"
      >
        💬
      </a>
    </>
  );
}