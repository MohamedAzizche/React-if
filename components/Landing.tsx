import type { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const Header: NextPage = () => {
    return (
        <div className='landing'>
            <div className='top'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <p style={{ fontSize: "60px" }}>
                        Restez en sécurité, votre vie est{" "}
                        <span style={{ color: "#63A0FF" }}>importante</span>
                    </p>
                </motion.div>
                <motion.div
                    initial={{ x: -500 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <img src='/lifeguard.svg' />
                </motion.div>
            </div>

            {/*
            <video width='400' controls>
                <source src='/NI2021.mp4' type='video/mp4' />
                <source src='/Ni2021.ogg' type='video/ogg' />
                Your browser does not support HTML video.
            </video>
            */}
            <div className='video'>
                <ReactPlayer url='https://www.youtube.com/watch?v=K0Rnclx6QlQ' />
            </div>
            <div className='facts'>
                <div>
                    <p>
                        Chaque année aux États-Unis, il y a environ : 3 960* noyades non
                        intentionnelles mortelles, y compris les noyades liées à la navigation de
                        plaisance, soit une moyenne de 11 décès par noyade par jour
                    </p>
                    <img src='/statistics.svg' />
                </div>
                <div>
                    <img src='/advice.svg' />
                    <p>
                        La plage est un endroit merveilleux. Si vous vous dirigez vers la côte,
                        jetez un œil à nos conseils et astuces pour vous aider à vous amuser et à
                        rester en sécurité.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
