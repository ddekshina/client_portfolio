import Navbar from "./navbar"
import Hero from './hero';

export default function Divider() {
    return (
        <div className="flex w-full flex-col">
            <div className="divider"></div>
            <div className="card grid h-20 place-items-center"><h1 className="text-5xl font-bold">Galleria</h1></div>
            
        </div>
    );
}