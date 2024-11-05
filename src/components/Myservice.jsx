import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Grid, Maximize, Palette, Sliders } from "lucide-react";

const Myservice = () => {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      icon: <Maximize className="h-8 w-8" />,
      title: 'Border-Radius Generator',
      description: 'Shape your elements with pixel-perfect precision',
      color: 'from-pink-400 to-purple-500',
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Color Palette Generator',
      description: 'Unleash a spectrum of harmonious hues',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: <Grid className="h-8 w-8" />,
      title: 'Background Generator',
      description: 'Craft captivating canvases for your content',
      color: 'from-green-400 to-teal-500',
    },
    {
      icon: <Sliders className="h-8 w-8" />,
      title: 'Filter Generator',
      description: 'Transform visuals with a touch of magic',
      color: 'from-blue-400 to-indigo-500',
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            DevSamad's Creative Toolkit
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Unleash your inner designer with my suite of intuitive web tools. Let's transform your ideas into pixel-perfect reality!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 p-5 md:grid-cols-2 gap-8 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div
                className={`p-6 rounded-lg shadow-lg bg-gradient-to-br ${service.color} transform transition-all duration-300 ease-in-out ${
                  hoveredService === index ? 'scale-105' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white dark:bg-gray-800 rounded-full p-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-white text-opacity-90">{service.description}</p>
                <motion.div
                  className="absolute inset-0 bg-black  dark:text-white dark:bg-gray-800 rounded-lg z-[-1]"
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredService === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-300 to-pink-300 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      </div>
    </section>
  )
}

export default Myservice;
