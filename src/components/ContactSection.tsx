
import React from "react";
import SectionWrapper from "./SectionWrapper";
import GlowingButton from "./ui/GlowingButton";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  const contactDetails = [
    { icon: <Mail size={20} className="text-primary mr-3" />, text: "hello@ghostnoir.studio", href: "mailto:hello@ghostnoir.studio" },
    { icon: <Phone size={20} className="text-primary mr-3" />, text: "+1 (555) GHOST-IT", href: "tel:+15554467848" },
    { icon: <MapPin size={20} className="text-primary mr-3" />, text: "The Digital Ether, Everywhere", href: "#" },
  ];

  return (
    <SectionWrapper id="contact" className="bg-ghost-noir/80" hasFloatingCard>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="text-primary">Connect</span>
        </h2>
        <p className="text-lg text-ghost-noir-text/80 mb-8">
          Have a project in mind, or just want to say hi? We're always excited to hear about new ideas and collaborations.
          Reach out and let's create something extraordinary together.
        </p>
        <div className="space-y-4 mb-10">
          {contactDetails.map(detail => (
            <a key={detail.text} href={detail.href} className="flex items-center justify-center text-ghost-noir-text/90 hover:text-primary transition-colors">
              {detail.icon}
              <span>{detail.text}</span>
            </a>
          ))}
        </div>
        <GlowingButton variant="primary" glowIntensity="medium" onClick={() => alert('Contact form coming soon!')}>
          Send Us A Message
        </GlowingButton>
        <p className="text-sm text-ghost-noir-text/60 mt-6">
          (Contact form functionality will be implemented soon!)
        </p>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
