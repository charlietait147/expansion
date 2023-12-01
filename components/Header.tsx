import Image from "next/image";
import Logo from "../public/images/expansion-logo.png";
function Header() {
    return ( 
        <header className="flex justify-between pb-2 pl-4 md:pl-8">
            <h1 className=" text-2xl font-semibold text-title pt-4 tracking-wider md:text-3xl">expansion</h1>
            <Image src = {Logo} alt="expansion logo" className="w-20 md:w-24" />
        </header>
     );
}

export default Header;