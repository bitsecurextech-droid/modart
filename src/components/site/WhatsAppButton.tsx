const WA_NUMBER = "2348078500390";
const WA_TEXT = encodeURIComponent("Hello MOD-Arts School of Music, I'd like to learn more about your programmes.");

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.39c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.62.07-.29-.14-1.21-.45-2.31-1.42-.85-.76-1.43-1.69-1.6-1.98-.17-.29-.02-.45.12-.59.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.39 0 1.41 1.02 2.77 1.16 2.96.14.19 2.01 3.07 4.87 4.31.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33zM16.02 5.33c-5.89 0-10.67 4.78-10.67 10.67 0 1.88.49 3.72 1.43 5.34L5.33 26.67l5.49-1.43c1.56.85 3.32 1.3 5.2 1.3 5.89 0 10.67-4.78 10.67-10.67S21.91 5.33 16.02 5.33zm0 19.34c-1.67 0-3.31-.45-4.74-1.3l-.34-.2-3.26.85.87-3.18-.22-.36c-.93-1.49-1.42-3.2-1.42-4.97 0-5.13 4.18-9.31 9.31-9.31s9.31 4.18 9.31 9.31-4.18 9.31-9.31 9.31z" />
      </svg>
    </a>
  );
}
