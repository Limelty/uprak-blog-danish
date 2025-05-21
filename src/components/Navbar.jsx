import icon from "../assets/icon/navbar/icon.png";
import homeIcon from "../assets/icon/navbar/home.png";
import playIcon from "../assets/icon/navbar/play.png";
import pepperIcon from "../assets/icon/navbar/papper.png";
import bookIcon from "../assets/icon/navbar/buku.png";
import discordIcon from "../assets/icon/navbar/discord.png";
import searchIcon from "../assets/icon/navbar/search.png";

function Navbar() {
  return (
    <div className="bg-teal-800 z-10 px-10 py-2 fixed top-0 right-0 left-0 items-center flex justify-between w-full">
      <div className="flex items-center gap-4">
        <img src={icon} className="w-8 h-8" />
        <div className="flex item-center gap-4">
            <button
              className="flex focus:outline-teal-500 gap-1 items-center p-2 hover:bg-teal-700 cursor-pointer rounded-md"
            >
              <img src={homeIcon} className="w-4 h-4" />
              <p className="text-slate-100 font-bold">Home</p>
            </button>
            <button
              className="flex focus:outline-teal-500 gap-1 items-center p-2 hover:bg-teal-700 cursor-pointer rounded-md"
            >
              <img src={playIcon} className="w-4 h-4" />
              <p className="text-slate-100 font-bold">Kelas</p>
            </button>
            <button
              className="flex focus:outline-teal-500 gap-1 items-center p-2 hover:bg-teal-700 cursor-pointer rounded-md"
            >
              <img src={pepperIcon} className="w-4 h-4" />
              <p className="text-slate-100 font-bold">Tutorial</p>
            </button>
            <button
              className="flex focus:outline-teal-500 gap-1 items-center p-2 hover:bg-teal-700 cursor-pointer rounded-md"
            >
              <img src={bookIcon} className="w-4 h-4" />
              <p className="text-slate-100 font-bold">Buku</p>
            </button>
            <button
              className="flex focus:outline-teal-500 gap-1 items-center p-2 hover:bg-teal-700 cursor-pointer rounded-md"
            >
              <img src={discordIcon} className="w-4 h-4" />
              <p className="text-slate-100 font-bold">Discord</p>
            </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img src={searchIcon} className="w-6 h-6" />
        <button className="text-slate-100 p-2 rounded-md focus:outline-teal-300 bg-teal-500 hover:bg-teal-700 cursor-pointer">
          Join Newsletter
        </button>
      </div>
    </div>
  );
}

export default Navbar;