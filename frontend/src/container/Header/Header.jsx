import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from "../../wrapper";
import "./Header.scss";

const Header = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ.";
    let interval = null;
    React.useEffect(() => {
        document.getElementById("hello").onmouseover = event => {
            let iteration = 0;
            clearInterval(interval);
            interval = setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return event.target.dataset.value[index];
                        }
                        return letters[Math.floor(Math.random() * 26)]
                    })
                    .join("");

                if (iteration >= event.target.dataset.value.length) {
                    clearInterval(interval);
                }
                iteration += 1 / 3;
            }, 30);
        }
    });
    return (
        <div className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="app__header-info"
            >
                <div className="app__flex">
                    <h1 className="title">
                        <span id="hello" data-value="HELLO." className="gradient block uppercase">Hello.</span>
                        <span className="block uppercase">I&#39;m</span>
                        <span className="block uppercase">Sérgio</span>
                        <span className="block uppercase">Neves</span>
                    </h1>
                </div>

                <div className="app__flex">
                    <p className="subtitle">Full Stack Developer</p>
                </div>
            </motion.div>
        </div>
    )
};

export default AppWrap(Header, 'home');