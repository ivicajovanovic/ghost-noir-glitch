import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import GlowingButton from "./ui/GlowingButton";
import FloatingCard from "./ui/FloatingCard";
import GradientText from "./ui/GradientText";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from "lucide-react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const contactMethods = [
    { 
      icon: <Mail size={24} className="text-primary" />, 
      title: "Email Us",
      description: "hello@ghostnoir.studio", 
      action: "Send Email",
      href: "mailto:hello@ghostnoir.studio" 
    },
    { 
      icon: <MessageCircle size={24} className="text-secondary" />, 
      title: "Live Chat",
      description: "Available 24/7 for instant support", 
      action: "Start Chat",
      href: "#" 
    },
    { 
      icon: <Calendar size={24} className="text-accent" />, 
      title: "Schedule Call",
      description: "Book a consultation call", 
      action: "Book Now",
      href: "#" 
    },
    { 
      icon: <MapPin size={24} className="text-primary" />, 
      title: "Visit Us",
      description: "The Digital Ether, Everywhere", 
      action: "Get Directions",
      href: "#" 
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-br from-ghost-noir/95 via-purple-950/20 to-ghost-noir/95 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Let's <GradientText gradient="primary">Connect</GradientText>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          <p className="text-xl text-ghost-noir-text/80 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? Let's start a conversation about your next groundbreaking project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <FloatingCard className="p-8 md:p-10" intensity="medium">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              Start Your Project
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ghost-noir-text/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-ghost-noir-text/5 border border-ghost-noir-text/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-ghost-noir-text"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ghost-noir-text/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-ghost-noir-text/5 border border-ghost-noir-text/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-ghost-noir-text"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ghost-noir-text/80 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-ghost-noir-text/5 border border-ghost-noir-text/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-ghost-noir-text"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ghost-noir-text/80 mb-2">
                    Project Type
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-ghost-noir-text/5 border border-ghost-noir-text/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-ghost-noir-text"
                  >
                    <option value="">Select Project Type</option>
                    <option value="web3">Web3 Application</option>
                    <option value="ai">AI/ML Solution</option>
                    <option value="mobile">Mobile App</option>
                    <option value="enterprise">Enterprise Platform</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ghost-noir-text/80 mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-ghost-noir-text/5 border border-ghost-noir-text/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-ghost-noir-text resize-none"
                  placeholder="Tell us about your project vision, goals, and requirements..."
                />
              </div>

              <GlowingButton 
                type="submit"
                variant="primary" 
                glowIntensity="strong" 
                className="w-full text-lg py-4 group"
              >
                <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </GlowingButton>
            </form>
          </FloatingCard>

          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                Get In Touch
              </h3>
              <p className="text-ghost-noir-text/70 leading-relaxed mb-8">
                Choose your preferred way to connect with us. We're here to help bring your ideas to life.
              </p>
            </div>

            <div className="grid gap-6">
              {contactMethods.map((method, index) => (
                <FloatingCard 
                  key={index}
                  className="p-6 group hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300"
                  intensity="subtle"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-ghost-noir-text mb-1">
                        {method.title}
                      </h4>
                      <p className="text-ghost-noir-text/70 text-sm mb-2">
                        {method.description}
                      </p>
                      <a 
                        href={method.href}
                        className="text-primary hover:text-secondary transition-colors duration-300 text-sm font-medium"
                      >
                        {method.action} →
                      </a>
                    </div>
                  </div>
                </FloatingCard>
              ))}
            </div>

            {/* Additional info */}
            <FloatingCard className="p-6 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Response Time
              </h4>
              <p className="text-ghost-noir-text/70 text-sm">
                We typically respond within <span className="text-primary font-medium">2-4 hours</span> during business hours
              </p>
            </FloatingCard>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;