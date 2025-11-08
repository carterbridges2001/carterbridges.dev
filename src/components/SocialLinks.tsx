import { FiGithub, FiLinkedin, FiMail, FiBriefcase } from 'react-icons/fi';

const socialLinks = [
  {
    icon: <FiGithub className="w-5 h-5" />,
    href: 'https://github.com/carterbridges2001',
    label: 'GitHub',
  },
  {
    icon: <FiLinkedin className="w-5 h-5" />,
    href: 'https://www.linkedin.com/in/carterbridges2001/',
    label: 'LinkedIn',
  },
  {
    icon: <FiBriefcase className="w-5 h-5" />,
    href: 'https://app.joinhandshake.com/profiles/carterb',
    label: 'Handshake',
  },
  {
    icon: <FiMail className="w-5 h-5" />,
    href: 'mailto:carter@carterbridges.dev',
    label: 'Email',
  },
];

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export default function SocialLinks({ className = '', iconClassName = '' }: SocialLinksProps) {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-600 hover:text-primary transition-colors ${iconClassName}`}
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
