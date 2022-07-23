import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import Header from "../components/Header";
import Main from "../components/Main";
import Exemplo from "../components/Exemplo";

const Home: NextPage = () => {
    return (
        <>
            <Header BackGroundColorContainer="#E2DCC8" />
            <Main
                title="Crie seu LinkTree de forma facil."
                subtitle="Essa é a melhor forma de divulgar seus links, como Instagram, Facebook, Twitter, Discord e etc"
            />
            <Exemplo/>
        </>
    );
};

export default Home;
