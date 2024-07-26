import Image from "next/image";

const EventCard = () => {
  return (
    <div className="flex flex-col space-y-4 lg:w-1/2 lg:order-2">
      <div className="flex space-y-0 flex-row space-x-4">
        <div className="w-1/3 flex flex-col space-y-4">
          <div className="w-full h-[124px] lg:h-[250px] bg-gray-200 border border-blue-300"></div>
        </div>
        <div className="w-2/3">
          <div className="w-full h-[124px] lg:h-[250px] bg-gray-200 border border-blue-300"></div>
        </div>
      </div>

      <div className="flex space-y-0 flex-row space-x-4">
        <div className="w-2/3">
          <div className="w-full h-[124px] lg:h-[250px] bg-gray-200 border border-blue-300"></div>
        </div>

        <div className="w-1/3 flex flex-col space-y-4">
          <div className="w-full h-[124px] lg:h-[250px] bg-gray-200 border border-blue-300"></div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
