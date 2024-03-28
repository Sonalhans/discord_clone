import Servers from "../../components/server";
export default function Home() {
  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col ">
        <div className="px-3 h-12 flex items-center shadow-md font-title">
          Tailwind CSS
        </div>
        <div className=" p-3 text-gray-300 flex-1 overflow-y-scroll space-y-2">
          <p className="text-white">Channel (unread)</p>
          {[...Array(40)].map((_, i) => (
            <p>Channels {i}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-700 flex-1 flex-col flex">
        <div className="px-3 h-12 flex items-center shadow-md">General</div>
        <div className="p-3 flex-1 space-y-2 overflow-y-scroll">
          {" "}
          {[...Array(40)].map((_, i) => (
            <p>
              Message {i} .Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Maecenas at cursus odio, sit amet ultricies enim. In
              finibus, ipsum a elementum posuere. Nunc dolor neque, commodo
              vitae nisi ac, rutrum ultrices nisi. Mauris sit amet tortor sed
              elit sagittis dictum vel a libero. Suspendisse lectus
              justo.Aliquam hendrerit leo id elit scelerisque, quis tincidunt
              eros auctor. Aenean sit amet lobortis ligula.
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
