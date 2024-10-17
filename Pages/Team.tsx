import React from 'react';
import Image from 'next/image';
import Member from "../components/Member.js";
import Header from "../components/Header";
import Footer from "../components/Footer.js";
import MobileHeader from "../components/MobileHeader";
import MobileFooter from "../components/MobileFooter";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import "../styles/Team.css";
import "../app/globals.css";



export default function Team() {
    const [isMobile, setIsMobile] = useState(false);

    const homeRef = useRef(null);
    const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: youtubeRef, inView: youtubeInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 762); // This matches Tailwind's 'md' breakpoint
        };
        handleResize();
        const handleScroll = () => {
            const elements = document.querySelectorAll('.hidden');
            elements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    element.classList.add('visible');
                }
            });
        };

        handleResize(); // Check initial size
        window.addEventListener("resize", handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (isMobile) {
        return (
            <>
                <MobileHeader />
                <section
                    id='team'
                    className='min-h-screen flex flex-col items-center justify-center text-white'>
                    <p className='text-7xl sm:text-2xl lg:text-6xl text-center mt-[13%]'>
                        Our Team
                    </p>
                    <p className='text-4xl sm:text-2xl lg:text-4xl text-center mt-[5%]'>
                        Excecutive Committee
                    </p>
                    <div className='mobile-member-card-container'>

                        <div className='pt-[-16%]'>
                            <Member
                                picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                                name='Srivani Kollu'
                                role='President'

                            />
                        </div>
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Raghav Sharma'
                            role='Vice President'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Advaith Tontalapur'
                            role='Events and Meetings Chair | Dev'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Ram Rao'
                            role='Treasurer | Developer'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Jeevan Rao'
                            role='Social Media and PR Chair'

                        />
                    </div>
                    <p className='text-4xl sm:text-2xl lg:text-4xl text-center mt-8 mb-8'>
                        Events Committee
                    </p>
                    <div className='mobile-member-card-container'>
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Rupa V Gowda'
                            role='Events Coordinator'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Diya Patel'
                            role='GBM Coordinator'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Adeti Krishnan'
                            role='GBM Coordinator'

                        />

                    </div>
                    <p className='text-4xl sm:text-2xl lg:text-4xl text-center mt-8 mb-8'>
                        Social Media and Public Relations Committee
                    </p>
                    <div className='mobile-member-card-container'>
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Yogi Marella'
                            role='Student Ambassador'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Tarun Vadapalli'
                            role='Graphic Designer | Developer'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Aarya Manoj'
                            role='Social Media Coordinator'

                        />

                    </div>
                </section>
                <MobileFooter />
            </>
        );
    }
    else {
        return (
            <div>
                <Header />
                <section
                    id='team'
                    className='min-h-screen flex flex-col items-center justify-center text-white'>
                    <p className='text-4xl sm:text-2xl lg:text-6xl text-center mt-[13%]'>
                        Our Team
                    </p>
                    <p className='text-2xl sm:text-2xl lg:text-4xl text-center mt-[5%]'>
                        Excecutive Committee
                    </p>
                    <div className='team-page-container'>

                        <div className='pt-[-16%]'>
                            <Member
                                picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                                name='Srivani Kollu'
                                role='President'

                            />
                        </div>
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Raghav Sharma'
                            role='Vice President'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Advaith Tontalapur'
                            role='Events and Meetings Chair | Dev'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Ram Rao'
                            role='Treasurer | Developer'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Jeevan Rao'
                            role='Social Media and PR Chair'

                        />
                    </div>
                    <p className='text-2xl sm:text-2xl lg:text-4xl text-center mt-8 mb-8'>
                        Events Committee
                    </p>
                    <div className='team-page-container'>
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Rupa V Gowda'
                            role='Events Coordinator'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Diya Patel'
                            role='GBM Coordinator'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Adeti Krishnan'
                            role='GBM Coordinator'

                        />

                    </div>
                    <p className='text-2xl sm:text-2xl lg:text-4xl text-center mt-8 mb-8'>
                        Social Media and Public Relations Committee
                    </p>
                    <div className='team-page-container'>
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Yogi Marella'
                            role='Student Ambassador'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Tarun Vadapalli'
                            role='Graphic Designer | Developer'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Aarya Manoj'
                            role='Social Media Coordinator'

                        />

                    </div>
                </section>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}