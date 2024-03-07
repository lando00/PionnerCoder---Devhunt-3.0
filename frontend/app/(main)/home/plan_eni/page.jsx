import Image from "next/image";
const Page = () => {
  return (
    <div className=" text-white parent flex flex-col  bg-[#383838] max-h-screen overflow-hidden">
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
              src={"../assets/NavIcon/logout.svg"}
              width={30}
              height={30}
              alt="info"
            />
          </button>
        </div>
      </div>
      <div className="center ">
        <div className="top absolute z-20 top-0 right-0 left-[90px] bg-[#1E1E1E] border-b-2 border-[#424242] flex justify-between">
          <p className="p-5">Carte de Fianarantsoa</p>
          <div className="flex gap-2 justify-center items-center pr-4">
            <div>
              <p>hdsjshdjsh</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="RiGth p-4 flex fixed flex-col gap-4 ml-[90px] pt-[90px] w-[250px]  bg-[#1E1E1E]  h-screen">
          <div className="flex flex-col gap-5">
            <h1>PLAN DE L'ENI</h1>
            <div className="flex flex-col gap-2">
              <p className="font-bold  bg-[#4f4f4f] rounded-[4px] pl-1">
                # Salle de classe
              </p>
              <p># 001 - 002</p>
              <p># 001 - 002</p>
              <p># 001 - 002</p>
              <p># 001 - 002</p>
              <p># 001 - 002</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold  bg-[#4f4f4f] rounded-[4px] pl-1">
                # Administration
              </p>
              <p># Sécurité</p>
              <p># Scolarité</p>
              <p># Responsable mention</p>
              <p># Secrétariat principale</p>
              <p># Bibliothèque</p>
            </div>
          </div>
        </div>
        <div className="Rg border ml-[340px]  w-full pt-[190px] p-20 min-h-screen flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            {" "}
            <h3>Liste des salles</h3>
            <div className="flex justify-between gap-8 ">
              <div className="flex flex-col gap-2">
                <p># Salle 001 - 002</p>
                <Image
                  src={"../assets/NavIcon/ENI.svg"}
                  width={200}
                  height={200}
                  alt="info"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p># Salle 001 - 002</p>
                <Image
                  src={"../assets/NavIcon/ENI.svg"}
                  width={200}
                  height={200}
                  alt="info"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p># Salle 001 - 002</p>
                <Image
                  src={"../assets/NavIcon/ENI.svg"}
                  width={200}
                  height={200}
                  alt="info"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p># Salle 001 - 002</p>
                <Image
                  src={"../assets/NavIcon/ENI.svg"}
                  width={200}
                  height={200}
                  alt="info"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p># Salle 001 - 002</p>
                <Image
                  src={"../assets/NavIcon/ENI.svg"}
                  width={200}
                  height={200}
                  alt="info"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {" "}
            <h3>Administration</h3>
            <div className="flex justify-between gap-8 ">
              <div className="flex flex-col gap-2">
                <p># Sécutité</p>
                <Image
                  src={"../assets/NavIcon/ENI.svg"}
                  width={200}
                  height={200}
                  alt="info"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p># Scolarité</p>
                <Image
                  src={"../assets/NavIcon/ENI.svg"}
                  width={200}
                  height={200}
                  alt="info"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p># Responsable mention</p>
                <Image
                  src={"../assets/NavIcon/ENI.svg"}
                  width={200}
                  height={200}
                  alt="info"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p># Secrétariat principale</p>
                <Image
                  src={"../assets/NavIcon/ENI.svg"}
                  width={200}
                  height={200}
                  alt="info"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p># Bibliothèque</p>
                <Image
                  src={"../assets/NavIcon/ENI.svg"}
                  width={200}
                  height={200}
                  alt="info"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
