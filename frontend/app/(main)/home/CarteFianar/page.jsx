import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
const NavBar = () => {
  return (
    <div className=" text-white parent flex flex-col  bg-[#272727] min-h-screen">
      <div className="left w-[90px] p-5 bg-[#1E1E1E] h-screen flex flex-col justify-between fixed border-r-2 border-[#424242]">
        <div className="top flex flex-col items-center gap-6">
          <p className="flex">ENI</p>
          <div className="flex flex-col   gap-5 ">
            <button className="bouton1 p-2  bg-[#02A86A] rounded-lg">
              <Image
                src={"../assets/NavIcon/info.svg"}
                width={30}
                height={30}
                alt="info"
              />
            </button>
            <button className="bouton2 p-2 bg-[#4f4f4f] rounded-lg">
              {" "}
              <Image
                src={"../assets/NavIcon/carte.svg"}
                width={30}
                height={30}
                alt="info"
              />
            </button>
            <button className="bouton3 p-2 bg-[#4f4f4f] rounded-lg">
              {" "}
              <Image
                src={"../assets/NavIcon/message.svg"}
                width={30}
                height={30}
                alt="info"
              />
            </button>
            <button className="bouton4 p-2 bg-[#4f4f4f] rounded-lg">
              <Image
                src={"../assets/NavIcon/autre.svg"}
                width={30}
                height={30}
                alt="info"
              />
            </button>
          </div>
        </div>
        <div className="bottom flex flex-col gap-5 ">
          <button className="bouton4 p-2 bg-[transparent] rounded-lg">
            <Image
              src={"../assets/NavIcon/info.svg"}
              width={30}
              height={30}
              alt="info"
            />
          </button>
          <button className="bouton4 p-2  bg-[#02A86A] rounded-lg">
            <Image
              src={"../assets/NavIcon/info.svg"}
              width={30}
              height={30}
              alt="info"
            />
          </button>
        </div>
      </div>
      <div className="center ">
        <div className="top absolute top-0 right-0 left-[90px] bg-[#1E1E1E] border-b-2 border-[#424242] flex justify-between">
          <p className="p-5">Carte de Fianarantsoa</p>
          <div className="flex gap-2 justify-center items-center pr-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
      <div className="right ml-[90px] pt-[90px] w-[250px] bg-[#1E1E1E] h-screen">
        <div className="top p-2 flex flex-col gap-2">
          <div className=" bg-[#4f4f4f] p-2 rounded-[5px] ">
            <p className=""># Plan de l'ENI</p>
          </div>
          <div className=" bg-[#02a86a] p-2 rounded-[5px] ">
            <p className="">Carte de Fianarantsoa</p>
          </div>
        </div>
        <div className="text-xs">
          <p>L'ENDROIT A NOTE ICI</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
