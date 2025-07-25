import type { FC } from "react";
import { useState } from "react";

interface DropDownListContent {
  name: string;
  list: string[];
  setFunction: (listItem: string) => void;
  defaultValue: string;
  currentSelectedValue: string | null | undefined;
}

const DropdownList: FC<DropDownListContent> = ({
  name,
  list,
  defaultValue,
  setFunction,
  currentSelectedValue,
}) => {
  const [isModal, setIsModal] = useState(false);
  const handleModal = () => setIsModal(!isModal);

  return (
    <div className="relative text-white z-[2000] w-full">
      <p
        className="bg-blue-400 hover:bg-blue-600 px-4 py-2 rounded-xl cursor-pointer w-full"
        onClick={handleModal}
      >
        {name} {currentSelectedValue ?? defaultValue}
      </p>

      {isModal && (
        <div className="h-[600px] bg-cyan-900 absolute w-[80px] text-center translate-y-3 rounded-md overflow-auto">
          {list.map((listItem) => (
            <div
              onClick={() => {
                setFunction(listItem);
                handleModal();
              }}
              className="px-2 py-2 cursor-pointer bg-cyan-950 hover:bg-cyan-900"
              key={listItem}
            >
              {listItem}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownList;
