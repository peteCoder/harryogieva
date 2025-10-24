import { ownerDetails } from "@/lib/constants";
import Image from "next/image";

export default function LiveChatAndWhatsapp() {

  return (
    <div>
      <a
        href={ownerDetails.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative">
          {/* Outer glow pulse animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"></span>

          {/* WhatsApp Icon */}
          <Image
            width={56}
            height={56}
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 relative z-10"
          />
        </div>
      </a>
    </div>
  );
}
