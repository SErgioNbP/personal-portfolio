import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://www.linkedin.com/in/sergionevespinheiro/" target="_blank">
                    <FaLinkedin />
                </a>
            </div>
            <div>
                <a href="https://www.github.com/SErgioNbP" target="_blank">
                    <FaGithub />
                </a>
            </div>
        </div>
    )
};

export default SocialMedia;