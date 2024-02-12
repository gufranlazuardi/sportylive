import { MoonStar } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between pb-6 sticky">
      <div className="flex items-center gap-4">
        <img
          src="https://static.vecteezy.com/system/resources/previews/013/362/736/non_2x/football-soccer-transparent-free-png.png"
          alt="ball"
          className="h-10 w-10"
        />
        <p className="font-semibold ">
          <span className="text-cyan-500 text-2xl">Sporty</span>
          <span className="text-2xl">live</span>
        </p>
      </div>
      <MoonStar />
    </div>
  );
};

export default Navbar;
