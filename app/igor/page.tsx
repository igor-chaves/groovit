"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

const ImageCard = ({ serviceType, position }: { serviceType: "ses" | "sier"; position: "start" | "end" }) => {
  return (
    <div className={`flex-1 flex items-center justify-${position}`}>
      <Image
        src={serviceType === "ses" ? "/ses.avif" : "/sier.avif"}
        alt={`${serviceType} image`}
        width={450}
        height={450}
        className="rounded-xl object-cover object-center w-full !h-[150px] md:!h-[350px] md:!w-[450px]"
      />
    </div>
  )
}

const TextCard = () => {
  return (
    <div className="flex-1 flex flex-col justify-center">
      <h2 className="!m-0 !p-0">SIER</h2>
      <p className="!m-0 !p-0 !mb-5">システムインテグレーター</p>
      <ul className="text-sm">
        <li>→ プロジェクト全体の責任を一括で担います。</li>
        <li>→ 要件定義から運用保守まで一貫した計画を実施します。</li>
        <li>→ お客様の業務に最適化されたシステムを構築します。</li>
        <li>→ 品質・納期・範囲を一元管理します。</li>
        <li>→ 多分野に対応可能な専門チームを編成します。</li>
      </ul>
    </div>
  )
}

export default function Igor() {
  const [windowSize, setWindowSize] = useState(0)

  useEffect(() => {
    // For some reason the following below doesn't work.
    // 1. const screenSize = window.innerWidth
    // 2. const handleResize = () => setWindowSize(screenSize)
    const handleResize = () => setWindowSize(window.innerWidth)

    // by default all components are render on SERVER SIDE.
    // this component is render on CLIENT SIDE.
    // all CLIENT SIDE components are pre-render on SERVER SIDE.
    // "window" object does not exist on the SERVER SIDE.
    // when used inside the useEffect hook, the problem "window not defined" is solved.
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => removeEventListener("resize", handleResize)
  }, [])

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
            When you`&apos;re on the internet you atract more costumers.
          </span>
          <p className="bg-gray-700 w-fit px-4 py-2 rounded-full text-white">Contact us</p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="w-full bg-gray-300 py-10">
        <h1 className="text-center">OUR SERVICES</h1>

        <div className="flex flex-col gap-8 mx-10 my-20 md:flex-row md:px-30">
          <ImageCard serviceType="ses" position="start" />

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="!m-0 !p-0">SES</h2>
            <p className="!m-0 !p-0 !mb-5">システムエンジニアリングサービス</p>
            <ul className="text-sm">
              <li>→ 必要に応じて迅速に技術支援を提供可能です。</li>
              <li>→ 繁忙期におけるチーム強化に最適です。</li>
              <li>→ 専門スキルを持つエンジニアを柔軟に活用できます。</li>
              <li>→ 業務遂行に特化した柔軟な契約形態に対応します。</li>
              <li>→ クライアントチームと高い連携性を確保します。</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8 mx-10 my-20 md:flex-row md:px-30">
          {windowSize > 768 ? (
            <>
              <TextCard />
              <ImageCard serviceType="sier" position="end" />
            </>
          ) : (
            <>
              <ImageCard serviceType="sier" position="end" />
              <TextCard />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
