import Image from "next/image";

const EventCard = () => {
  return (
    <div className="flex flex-col space-y-4 lg:w-1/2 lg:order-2">
      <div className="flex space-y-0 flex-row space-x-4">
        <div className="w-1/3 flex flex-col space-y-4">
          <div className=" relative w-full h-[124px] lg:h-[250px]  border-[5px] border-primary rounded-sm">
            <Image
              src="/assets/home/gettoknow/gtk1.jpeg" // Sesuaikan dengan path gambarmu
              alt="Event 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-2/3">
          <div className="relative w-full h-[124px] lg:h-[250px] bg-gray-200 border-[5px] border-primary rounded-sm">
            <Image
              src="/assets/home/gettoknow/gtk2.jpeg" // Sesuaikan dengan path gambarmu
              alt="Event 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div className="flex space-y-0 flex-row space-x-4">
        <div className="w-2/3">
          <div className="relative w-full h-[124px] lg:h-[250px] bg-gray-200 border-[5px] border-primary rounded-sm">
            <Image
              src="/assets/home/gettoknow/gtk3.jpeg" // Sesuaikan dengan path gambarmu
              alt="Event 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="w-1/3 flex flex-col space-y-4">
          <div className="relative w-full h-[124px] lg:h-[250px] bg-gray-200 border-[5px] border-primary rounded-sm">
            <Image
              src="/assets/home/gettoknow/gtk4.jpeg" // Sesuaikan dengan path gambarmu
              alt="Event 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
