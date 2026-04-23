import React from 'react';
import Card from './Card';
import { 
  Network, MonitorSmartphone, TrendingUp, GraduationCap, Handshake,
  Wrench, Compass, Briefcase, Landmark, Users,
  UserCheck, Heart, Baby, UsersRound, Scale, HeartPulse, PhoneCall, CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

import aboutImg1 from '../assets/work_img6.jpg';
import aboutImg2 from '../assets/work_img2.jpg';
import chooseUsImg from '../assets/work_img5.jpg';
import supportImg from '../assets/work_img6.jpg';

import srvImg1 from '../assets/work_img1.jpg';
import srvImg2 from '../assets/work_img2.jpg';
import srvImg3 from '../assets/work_img3.jpg';
import srvImg4 from '../assets/work_img12.jpeg';
import srvImg5 from '../assets/work_img13.jpg';

import spec1 from '../assets/work_img7.jpg';
import spec2 from '../assets/work_img8.jpg';
import spec3 from '../assets/work_img9.jpeg';
import spec4 from '../assets/work_img10.jpeg';

import benBg from '../assets/work_img11.jpeg';

const Sections = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="flex flex-col gap-16 py-16">
      
       {/* About Section */}
      <section id="about" className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex-1 w-full relative mb-16 md:mb-0 flex flex-col md:block md:h-[450px]">
             <div className="absolute inset-2 md:inset-4 bg-primary/10 rounded-[2.5rem] transform -rotate-3 -z-10"></div>
             <img src={aboutImg1} alt="Women Empowerment" className="relative md:absolute top-0 left-0 rounded-3xl shadow-xl w-[90%] sm:w-[80%] md:w-3/4 h-[240px] sm:h-[280px] md:h-[300px] object-cover border-4 border-white hover:z-20 transition-all duration-300 transform md:hover:scale-105" />
             <img src={aboutImg2} alt="Vocational Training" className="relative md:absolute bottom-0 right-0 rounded-3xl shadow-xl w-[90%] sm:w-[80%] md:w-2/3 h-[240px] sm:h-[280px] md:h-[260px] object-cover border-4 border-white z-10 hover:z-20 transition-all duration-300 transform md:hover:scale-105 -mt-20 sm:-mt-32 md:mt-0 self-end" />
          </motion.div>
          <div className="flex-1 w-full">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Us</h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 mb-4">The Women Entrepreneur Training and Employment Centre is dedicated to uplifting and empowering women by equipping them with practical skills and entrepreneurial knowledge. We offer structured training programs, career guidance, and business support to help women achieve financial independence and personal growth.</p>
              <p className="text-lg text-gray-700">Our centre acts as a platform where women can learn, innovate, and transform their ideas into successful ventures. By fostering confidence and providing continuous support, we aim to create a community of strong, independent women who contribute meaningfully to society.</p>
            </motion.div>
            
            <div className="grid gap-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Compass className="text-primary" /> Our Mission
                </h3>
                <ul className="text-gray-600 list-disc list-outside ml-5 space-y-2">
                  <li>To provide quality training programs that enhance entrepreneurial and vocational skills.</li>
                  <li>To create employment and self-employment opportunities for women across diverse sectors.</li>
                  <li>To support women in starting and sustaining their own businesses through mentorship and guidance.</li>
                  <li>To promote financial independence and leadership among women.</li>
                  <li>To build a strong network of women entrepreneurs for collaboration and growth.</li>
                </ul>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <TrendingUp className="text-primary" /> Our Vision
                </h3>
                <p className="text-gray-600">To empower women with the skills, confidence, and opportunities needed to become self-reliant entrepreneurs and contributors to economic and social growth.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src={benBg} alt="Background" className="w-full h-full object-cover opacity-30 mix-blend-overlay filter blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-primary/30 to-gray-900/95"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight text-center px-2">Benefits of Membership</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-center">
            {[
              { title: "Strong Networking", icon: <Network size={32} /> },
              { title: "Latest Technologies", icon: <MonitorSmartphone size={32} /> },
              { title: "Business Growth", icon: <TrendingUp size={32} /> },
              { title: "Skill Development", icon: <GraduationCap size={32} /> },
              { title: "Collaboration", icon: <Handshake size={32} /> }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 text-center text-white hover:-translate-y-3 transition-transform duration-500 hover:bg-white/20 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <div className="relative z-10 flex flex-col items-center">
                   <div className="text-primary-light mb-5 bg-white/10 p-4 rounded-full shadow-inner">{item.icon}</div>
                   <h3 className="font-bold text-xl tracking-wide">{item.title}</h3>
                 </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-24 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary-hover/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight drop-shadow-sm">Our Services</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-primary to-primary-hover mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">At the Women Entrepreneur Training and Employment Centre, we offer a wide range of programs designed to empower women with skills, opportunities, and continuous support for a successful future.</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-stretch masonry-grid">
              {[
                { 
                  title: "Skill Development Training", 
                  icon: <Wrench size={32} />,
                  img: srvImg1,
                  desc: "We provide industry-relevant, hands-on training programs to help women build practical skills and confidence. Our courses include tailoring, beauty & wellness, food processing, handicrafts, and digital skills. From beginner to advanced levels, our training focuses on real-time learning, ensuring every participant gains the expertise needed to succeed. We also include personality development and communication training to enhance overall growth. Certified programs further add value to employability." 
                },
                { 
                  title: "Entrepreneurship Guidance", 
                  icon: <Compass size={32} />,
                  img: srvImg2,
                  desc: "We support aspiring women entrepreneurs in turning their ideas into successful businesses. Our guidance covers business ideation, planning, execution, and management. Participants receive training in marketing, branding, pricing strategies, and customer engagement. We also introduce digital platforms and online business opportunities, helping women expand their reach and build sustainable ventures." 
                },
                { 
                  title: "Job Placement Assistance", 
                  icon: <Briefcase size={32} />,
                  img: srvImg3,
                  desc: "Our centre bridges the gap between training and employment by connecting women with suitable job opportunities. We collaborate with local businesses, companies, and service providers to ensure placements in relevant fields. We also assist with resume preparation, interview training, and career readiness. Regular job drives and placement support ensure that women are well-prepared to enter the workforce confidently." 
                },
                { 
                  title: "Financial & Govt Support", 
                  icon: <Landmark size={32} />,
                  img: srvImg4,
                  desc: "We guide women in accessing financial resources and government schemes designed for empowerment and entrepreneurship. Our team provides assistance with loan applications, subsidies, and grants. We also conduct awareness sessions on financial literacy, savings, and investment basics. By connecting women with banks and institutions, we help them take confident steps toward financial independence." 
                },
                { 
                  title: "Mentorship & Continuous Support", 
                  icon: <Users size={32} />,
                  img: srvImg5,
                  desc: "Our commitment doesn’t end with training. We provide ongoing mentorship and support to ensure long-term success. Experienced mentors guide women through challenges in business and employment. We also foster a strong network of women entrepreneurs for collaboration and growth. Continuous support, follow-ups, and guidance help women stay motivated and achieve their goals." 
                }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="bg-white rounded-[2rem] shadow-xl overflow-hidden group flex flex-col border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  <div className="relative h-72 overflow-hidden bg-gray-50">
                    <img src={item.img} alt={item.title} className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white flex items-center gap-4">
                       <div className="flex-shrink-0 bg-primary/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 transform group-hover:rotate-6 transition-transform duration-300">{item.icon}</div>
                       <h3 className="text-2xl font-bold leading-tight drop-shadow-md">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-8 flex-1 bg-white relative">
                    <p className="text-gray-600 leading-relaxed text-base">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 max-w-5xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-12 rounded-3xl border border-primary/20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 w-full">
              <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Us</h2>
              <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
              <ul className="space-y-4">
                {[
                  "Practical, hands-on training",
                  "Expert guidance and mentorship",
                  "Strong placement support",
                  "Assistance with financial resources",
                  "Long-term support for career and business growth"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                    <span className="text-lg text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block flex-1 w-full text-center">
              <img src={chooseUsImg} alt="Team Work" className="rounded-2xl shadow-lg object-cover h-64 w-full" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Special Support Section */}
      <section className="bg-primary/5 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight drop-shadow-sm">Special Support</h2>
            <div className="w-24 h-2 bg-gradient-to-r from-primary to-primary-hover mx-auto rounded-full mb-8"></div>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center max-w-5xl mx-auto">
            {[
              { title: "Single Parents", icon: <UserCheck size={36} /> },
              { title: "Widows", icon: <Heart size={36} /> },
              { title: "Orphan Women", icon: <Baby size={36} /> },
              { title: "Divorced Women", icon: <UsersRound size={36} /> }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <Card title={item.title} icon={item.icon} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Support & Tamil Section */}
      <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-0 rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          <img src={supportImg} alt="Support" className="w-full h-48 object-cover" />
          <div className="p-8 flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Additional Support</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-primary/10 p-3 rounded-full text-primary"><Scale size={24} /></div>
                <span className="text-lg font-medium text-gray-700">Legal Support</span>
              </li>
              <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-primary/10 p-3 rounded-full text-primary"><HeartPulse size={24} /></div>
                <span className="text-lg font-medium text-gray-700">Healthcare Assistance</span>
              </li>
              <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-primary/10 p-3 rounded-full text-primary"><PhoneCall size={24} /></div>
                <span className="text-lg font-medium text-gray-700">24/7 Women Helpline</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Tamil Section Highlighted */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-gradient-to-br from-primary to-primary-hover p-8 md:p-10 rounded-2xl shadow-xl shadow-primary/30 text-white transform hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
             <span className="bg-white/20 p-2 rounded-lg">✨</span> கூடுதல் தகவல்கள்
          </h2>
          <ul className="space-y-4">
            {[
              "இலவச/குறைந்த கட்டணப் பயிற்சிகள்",
              "தொழில் தொடங்குவதற்குத் தேவையான நடைமுறைப் பயிற்சிகள்",
              "வேலை பெறுவதற்கான படிப்புகள்",
              "தொழில் தொடங்குவதற்கான வழிகாட்டுதல், வேலை பெறுவதற்கான உதவி, நிறுவனங்களுடன் தொடர்புடைய நபர்களுக்கு மட்டுமே கிடைக்கும் சிறப்புப் பலன்களைப் பெறுதல்"
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                 <CheckCircle2 size={24} className="text-primary-light flex-shrink-0 mt-0.5" />
                 <span className="text-lg leading-relaxed text-white/95">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

    </div>
  );
};

export default Sections;
