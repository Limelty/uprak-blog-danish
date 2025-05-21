import petanikodeIcon from "../assets/icon/footer/petanikode.png";
import facebookIcon from "../assets/icon/footer/facebook.png";
import twitterIcon from "../assets/icon/footer/twitter.png";
import telegramIcon from "../assets/icon/footer/telegram.png";
import instagramIcon from "../assets/icon/footer/instagram.png";
import youtubeIcon from "../assets/icon/footer/youtube.png";

function Footer() {
  return (
    <footer className="bg-slate-800 text-white p-10">
      <div className="max-w-7xl mx-auto flex gap-10 border-b border-slate-600 pb-10">
        <div className="md:w-1/3">
          <img src={petanikodeIcon} alt="footer icon" className="w-48 mb-4" />
          <p className="text-slate-300 text-sm leading-relaxed">
            Tempat belajar budidaya kode (coding) dengan tutorial yang gampang
            dipahami.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
          <div>
            <h4 className="font-semibold text-white mb-3">Belajar</h4>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer text-slate-300 text-sm">Artikel</li>
              <li className="hover:underline cursor-pointer text-slate-300 text-sm">Tutorial</li>
              <li className="hover:underline cursor-pointer text-slate-300 text-sm">Buku</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Popular Tutorial</h4>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer text-slate-300 text-sm">Tutorial Bahasa C</li>
              <li className="hover:underline cursor-pointer text-slate-300 text-sm">Tutorial Javascript</li>
              <li className="hover:underline cursor-pointer text-slate-300 text-sm">Tutorial Java</li>
              <li className="hover:underline cursor-pointer text-slate-300 text-sm">Tutorial PHP</li>
              <li className="hover:underline cursor-pointer text-slate-300 text-sm">Tutorial Python</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Social Media</h4>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer text-slate-300 text-sm">Facebook Page</li>
              <li className="hover:underline cursor-pointer text-slate-300 text-sm">Instagram</li>
              <li className="hover:underline cursor-pointer text-slate-300 text-sm">Twitter</li>
              <li className="hover:underline cursor-pointer text-slate-300 text-sm">Youtube Channel</li>
              <li className="hover:underline cursor-pointer text-slate-300 text-sm">Telegram Channel</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Petani Kode</h4>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer text-slate-300 text-sm">About</li>
              <li className="hover:underline cursor-pointer text-slate-300 text-sm">FAQs</li>
              <li className="hover:underline cursor-pointer text-slate-300 text-sm">Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="justify-center flex mt-4 flex-col items-center">
        <p className="text-slate-100 text-sm">Ikuti Kami di</p>
        <div className="flex gap-6 mt-4">
          <a className="rounded-full focus:outline-teal-500" href="">
            <img
              src={facebookIcon}
              alt="Facebook"
              className="w-8 h-8 p-2 rounded-full hover:bg-blue-800 bg-slate-600 cursor-pointer"
            />
          </a>
          <a className="rounded-full focus:outline-teal-500" href="">
            <img
              src={twitterIcon}
              alt="Twitter"
              className="w-8 h-8 p-2 rounded-full hover:bg-sky-500 bg-slate-600 cursor-pointer"
            />
          </a>
          <a className="rounded-full focus:outline-teal-500" href="">
            <img
              src={telegramIcon}
              alt="Telegram"
              className="w-8 h-8 p-2 rounded-full hover:bg-sky-600 bg-slate-600 cursor-pointer"
            />
          </a>
          <a className="rounded-full focus:outline-teal-500" href="">
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-8 h-8 p-2 rounded-full hover:bg-pink-600 bg-slate-600 cursor-pointer"
            />
          </a>
          <a className="rounded-full focus:outline-teal-500" href="">
            <img
              src={youtubeIcon}
              alt="Youtube"
              className="w-8 h-8 p-2 rounded-full hover:bg-red-500 bg-slate-600 cursor-pointer"
            />
          </a>
        </div>

        <p className="mt-6 font-light text-sm">
          &copy; 2025 Petani Kode . Made with ❤️ using Hugo 0.134.0
        </p>
      </div>
    </footer>
  );
}

export default Footer;