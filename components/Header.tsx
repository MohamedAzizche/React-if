import type { NextPage } from "next";
import Link from "next/link";
import Image from "../images/statistics.svg";
import Data from "../data.json";

const Header: NextPage = () => {
    return (
        <div className='header'>
            <h2>Sauvetage</h2>
            <div>
                <Link href='/'>
                    <a className='link'>A propos</a>
                </Link>
                <Link href='/statistic'>
                    <a className='link'>Statistique</a>
                </Link>
                <Link href='/'>
                    <a className='link'>Contact</a>
                </Link>
            </div>
        </div>
    );
};

export default Header;
