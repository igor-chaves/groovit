import Image from "next/image"

export default function Igor() {
  return (
    <div>
      {/* HERO */}
      <div className="flex gap-4 h-screen items-center bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1531547255897-f400dc1b7de2?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="flex flex-col flex-1 pl-8 justify-center max-w-[400px] h-fit bg-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-md rounded-xl p-4 ml-10">
          <h3>
            We get you more <span className="text-green-600">CLIENTS</span> with our{" "}
            <span className="text-green-600">WEBSITES</span>
          </h3>
          <span className="max-w-[400px] text-sm text-black">Grow up your business by getting online.</span>
          <span className="max-w-[400px] text-sm text-black">
            When you're on the internet you atract more costumers.
          </span>
          <p className="bg-gray-700 w-fit px-4 py-2 rounded-full text-white">Contact us</p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="w-full bg-gray-300 py-10">
        <h1 className="text-center">OUR SERVICES</h1>

        <div className="flex flex-col gap-8 mx-10 my-20 md:flex-row md:px-30">
          <div className="flex-1 flex items-center justify-start">
            <Image
              src="/ses.avif"
              alt="SES image"
              width={450}
              height={450}
              className="rounded-xl object-cover object-center w-full !h-[150px] md:!h-[350px] md:!w-[450px]"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="!m-0 !p-0">SES</h2>
            <p className="!m-0 !p-0 !mb-5">システムエンジニアリングサービス</p>
            <p className="!m-0 !p-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut odio, aliquam ratione placeat magnam? Quam
              odio voluptatem autem rem voluptates hic quidem natus fuga molestias voluptas, impedit quas error.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
