import React, { useState } from 'react';
import { HiX } from 'react-icons/hi';
import { BiMenu } from 'react-icons/bi';

import { motion } from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleDownload = () => {
        fetch('/pdfs/Sérgio-Neves-resume-2023.pdf')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Sérgio-Neves-resume-2023.pdf');
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            })
            .catch(error => {
                console.error('Error fetching PDF file:', error);
            });
    };

    return (
        <nav className='app__navbar'>
            <ul className='app__navbar-links'>
                {["home", "work", "skills", "contact"].map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div></div>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <button className='app__navbar-download' onClick={handleDownload}>Download CV</button>

            <div className="app__navbar-menu">
                <BiMenu onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {['home', 'work', 'skills', 'contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
};

export default Navbar;