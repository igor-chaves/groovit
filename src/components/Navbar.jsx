const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center p-8 fixed z-100 shadow w-full bg-amber-200">
      <h1>GROOVIT</h1>
      <nav>
        <ul className="flex justify-between items-center gap-8">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#recruit">Recruit</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
