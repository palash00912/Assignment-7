import React from "react";

const SelectedPlayer = ({ player,handleDelete}) => {
  const { name, img, role,id } = player;

  return (
    <div>
      <div className="overflow-x-auto border rounded-lg">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <div className="flex items-center ie gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{role}</div>
                  </div>
                </div>
              </td>
              <th className="flex justify-end">
                <button onClick={()=>handleDelete(player)} className=" rounded-xl btn "><img  className="w-7 h-7" src="https://i.ibb.co.com/tJHVfS7/recycle-bin.png" alt="" /></button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
     
    </div>
  );
};

export default SelectedPlayer;
