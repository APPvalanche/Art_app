import Image from "next/image";

export default function Header() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="">
        <div className="flex gap-20">
          <div>
            <h1>Some Header Here</h1>
            <p className="max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae quia ad, quas laborum eaque corrupti consequuntur minus
              accusantium repellendus. Officia nemo libero harum aperiam, minima
              consequuntur illo dicta repellat atque itaque natus quaerat
              veritatis reiciendis. Obcaecati, enim nam neque culpa, sit
              incidunt repellat quaerat, perspiciatis impedit eaque aliquam!
              Nemo, expedita.
            </p>
          </div>
          <div>
            <Image
              src={"/amps.jpg"}
              alt="lamps image"
              width={500}
              height={500}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
