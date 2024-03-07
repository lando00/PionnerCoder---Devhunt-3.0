import React from 'react'
import {getData} from "../../../../lib/data"

const Orientation = async () => {
  const res = await getData()
  let donnee = res.data

  return (
    <div className="Rg  ml-[340px]  bg-[#383838]  w-full pt-[90px] p-20 min-h-screen  flex flex-col justify-evenly items-center ">
          <h3 className="text-center">
            SELECTIONNEZ VOS MATIERES PREFEREES OU CELLES DANS LESQUELLES VOUS
            EXCELLEZ
          </h3>
          <div className="flex flex-col">
            <div className="flex gap-5 p-4 flex-wrap">
              {donnee?.map(data=>(
                <span className="p-2 bg-[#231F20] rounded-[7rem] flex gap-2">
                <input type="checkbox" id="algo" name="algo" />
                <label htmlFor="algo">{data.label}</label>
              </span>
              ))}
            </div>
          </div>

          <button className="p-2 rounded-[7rem] bg-[#02A86A] w-[15%] ">
            Suivant
          </button>
        </div>
  )
}

export default Orientation