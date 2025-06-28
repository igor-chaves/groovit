export default function Home() {
  return (
    <>
      {/* <section className="container-md">
        <h1>SECTION 1 - mid</h1>
      </section> */}
      {/* <section className="container-lg">
        <h1>SECTION 2 - large</h1>
      </section> */}
      <section
        className="container-lg bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}>
        <div className="min-h-[400px] flex gap-2">
          <div className="border-pink-700 border-8 flex flex-col flex-1 justify-center m-8 p-8">
            <h3 className="text-white text-4xl font-bold">Bem-vindo ao site</h3>
            <p>AKSODKAOSDKO</p>
          </div>
          <div className="border-pink-700 border-8 flex-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, consectetur illo? Fugiat distinctio nam
              esse, deserunt atque impedit recusandae neque modi, voluptates soluta, architecto dolorum vitae delectus
              aut dignissimos error.
            </p>
          </div>
        </div>
      </section>
      {/* SERVICES SECTION */}
      <section className="container-md">
        <h2 className="text-center">Our Services</h2>
        <div className="flex gap-16 justify-center items-center text-center">
          <div className="flex flex-col gap-6">
            <h3>システムエンジニアリングサービス (SES)</h3>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <ul className="text-sm text-left flex  flex-col  gap-2">
              <li>
                <span>必要に応じて迅速に技術支援を提供可能です。</span>
              </li>
              <li>
                <span>繁忙期におけるチーム強化に最適です。</span>
              </li>
              <li>
                <span>専門スキルを持つエンジニアを柔軟に活用できます。</span>
              </li>
              <li>
                <span>業務遂行に特化した柔軟な契約形態に対応します。</span>
              </li>
              <li>
                <span>クライアントチームと高い連携性を確保します。</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-16 justify-center items-center text-center">
            <div className="flex flex-col gap-6">
              <h3>システムインテグレーター (SIER)</h3>
              <img
                src="https://images.unsplash.com/photo-1617529497471-9218633199c0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />

              <ul className="text-sm text-left flex flex-col gap-2">
                <li>
                  <span>プロジェクト全体の責任を一括で担います。</span>
                </li>
                <li>
                  <span>要件定義から運用保守まで一貫した計画を実施します。</span>
                </li>
                <li>
                  <span>お客様の業務に最適化されたシステムを構築します。</span>
                </li>
                <li>
                  <span>品質・納期・範囲を一元管理します。</span>
                </li>
                <li>
                  <span>多分野に対応可能な専門チームを編成します。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
