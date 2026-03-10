import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import siteConfig from "../data/site-config.json";

const sitemap = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Corporate Gifting", href: "/corporate-gifting" },
  { label: "Earn With Us", href: "/earn-with-us" },
  { label: "Contact Us", href: "/contact" },
];

const { social } = siteConfig;

export default function Footer() {
  return (
    <footer className="mx-4 mt-12 pb-8 sm:mx-6 lg:mx-10">
      <div className="mx-auto w-full max-w-[110rem] rounded-[2rem] border border-[#d7b0b0]/55 bg-slate-900 px-6 py-8 text-slate-100 shadow-[0_24px_60px_rgba(15,23,42,0.35)] sm:px-8 sm:py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Image
              src="/assets/dietethics-logo.png"
              alt="DietEthics"
              width={280}
              height={72}
              className="h-18 w-auto"
            />
            <p className="mt-3 max-w-xs text-sm text-slate-300">
              Pure, honest nutrition with premium nuts, seeds, and thoughtful gifting.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f0d7d7]">Site Map</p>
            <div className="mt-3 space-y-2">
              {sitemap.map((item) => (
                <Link key={item.href} href={item.href} className="block text-sm text-slate-200 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f0d7d7]">Policies</p>
            <div className="mt-3 space-y-2">
              <Link href="/terms-and-conditions" className="block text-sm text-slate-200 hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className="block text-sm text-slate-200 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/return-policy" className="block text-sm text-slate-200 hover:text-white">
                Return Policy
              </Link>
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#f0d7d7]">Follow Us</p>
            <div className="mt-3 flex items-center gap-3">
              <Link
                href={social.instagramUrl}
                aria-label="Instagram"
                className="rounded-full border border-[#d7b0b0]/50 p-2 text-[#f0d7d7] hover:bg-slate-800"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href={social.facebookUrl}
                aria-label="Facebook"
                className="rounded-full border border-[#d7b0b0]/50 p-2 text-[#f0d7d7] hover:bg-slate-800"
              >
                <Facebook className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f0d7d7]">Order Via WhatsApp</p>
            <div className="mt-3 flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-[#d7b0b0]" />
              <span className="text-sm text-slate-200">By scanning below</span>
            </div>
            <div className="mt-3 flex">
              <div className="overflow-hidden rounded-xl border border-dashed border-[#d7b0b0]/60 bg-white p-1">
                <Image
                  src="/assets/whatsapp-qr.png"
                  alt="WhatsApp order QR code"
                  width={112}
                  height={112}
                  className="block h-28 w-28 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-12 text-center text-xs tracking-[0.12em] text-slate-500">
        © {new Date().getFullYear()} Diet Ethics <sup>TM</sup> - Crafted with Love.
      </p>
    </footer>
  );
}
