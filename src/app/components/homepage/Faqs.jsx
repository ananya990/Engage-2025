"use client";

import React, { useEffect, useRef } from 'react';
import Faq from "../../components/homepage/Faq.jsx";
import { Accordion } from '@/components/ui/accordion.jsx';
import { useAnimation, useInView, motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function Faqs() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5, margin: "-200px 0px -200px 0px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const faqs = [
    {
      question: "How can I register?",
      answer: "You can register through Devfolio by clicking on the button provided above.",
    },
    {
      question: "Do I need to pay any money to register for the Hackathon?",
      answer: "No. You do not have to pay anything to anyone to register yourself. It's absolutely FREE",
    },
    {
      question: "When will the hackathon take place?",
      answer: "ENGAGE 2025 will be held on 3rd November 2025. So mark your calendars now.",
    },
    {
      question: "Who can participate in the Hackathon?",
      answer: "Anyone who wants to develop their skills or want to gain experience and are passionate can participate in the hackathon.",
    },
    {
      question: "What are the rules on the Team Size?",
      answer: "You can participate as an indivisual or a team of maximum 6 members.",
    },
    {
      question: "What's in it for participants ?",
      answer: "Goodies & swag, learning new skills, networking, winning cash prizes, community building, teamwork, meeting wonderful people, having fun, and much more!",
    },
    {
      question: "What is the venue for the event?",
      answer: "The offline hackathon will be held in The North Cap University. Other details will be shared with you via email.",
    },
  ];

  return (
    <>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className='w-full h-auto md:py-10 flex items-center justify-center overflow-x-hidden md:mt-2'
      >
        <div className='flex flex-col items-center space-y-5 md:space-y-10 xl:w-2/4 md:w-3/4 w-full px-5 z-30'>
          <motion.span className='text-white font-bold text-xl sm:text-xl md:text-2xl lg:text-4xl' variants={itemVariants}>
            Frequently Asked Questions
          </motion.span>
          <div className='h-full w-full'>
            <Accordion type="single" collapsible className="w-full lg:space-y-5 space-y-2">
              {faqs.map((f, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Faq faq={f} index={index} />
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Background Image */}
        <div className='h-auto w-full absolute sm:scale-95'>
          <motion.img
            variants={itemVariants}
            src="/faq/FaqBg.webp"
            alt=""
            className='w-full object-cover'
          />
        </div>
      </motion.div>
    </>
  );
}

export default Faqs;
