import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef, useState, useEffect } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '../../common/Magnetic';
import { format } from 'date-fns'; // Import format function from date-fns

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

    const [localTime, setLocalTime] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const formattedTime = format(now, "h:mm a", { timeZone: 'GMT+1' }); // Format the time using date-fns
            setLocalTime(formattedTime);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handleDownload = () => {
        const resumeUrl = 'https://drive.google.com/file/d/1OwfDewZXortntYqFcPMSeox7Ol_JfSiL/view?usp=sharing';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.setAttribute('download', 'YourResume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/images/gdf.jpeg`}
                            />
                        </div>
                        <h2>Let's work</h2>
                    </span>
                    <h2>together</h2>
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{ rotate, scale: 2 }} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                    <Rounded>
                        <a className={styles["email-link"]} href="mailto:rasindu3000@gmail.com">
                            <p>rasindu3000@gmail.com</p>
                        </a>
                    </Rounded>
                    <Rounded>
                        <p>LK +94 78 65 00 492</p>
                    </Rounded>
                    <Rounded onClick={handleDownload}>
                        <p>Download My Resume</p>
                    </Rounded>
                </div>
                <div className={styles.info}>
                    <div>
                    <span> 
                        <h3>Inspired By</h3>
                        <p>Dennis Snellenberg, Olivier Larose</p>
                        </span>
                        <span>

                        </span>
                        <span>
                        <h3>Version</h3>
                        <p>2024 ©</p>
                        </span>
                        <span> 
                        
                        </span>
                        <span>
                        <h3>Local Time</h3>
                        <p>{localTime}</p>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
