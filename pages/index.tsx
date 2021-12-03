import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Landing from "../components/Landing";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: NextPage = () => {
    return (
        <div>
            <Header />
            <Landing />
            <Footer />
        </div>
    );
};

export default Home;
