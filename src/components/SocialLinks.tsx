import { FiGithub, FiLinkedin, FiMail, FiBriefcase, FiFileText } from 'react-icons/fi';
import { SiIndeed } from 'react-icons/si';

const socialLinks = [
  // Professional
  {
    icon: <FiLinkedin className="w-5 h-5" />,
    href: 'https://www.linkedin.com/in/carterbridges2001/',
    label: 'LinkedIn',
  },
  {
    icon: <FiFileText className="w-5 h-5" />,
    href: 'https://drive.google.com/file/d/1DSArMoLreWH64E68uK11EUP9El4HazVV/view?usp=sharing',
    label: 'Resume',
  },
  {
    icon: <SiIndeed className="w-5 h-5" />,
    href: 'https://profile.indeed.com/p/carterb-YOUR_PROFILE',
    label: 'Indeed',
  },
  {
    icon: <FiBriefcase className="w-5 h-5" />,
    href: 'https://app.joinhandshake.com/profiles/carterb',
    label: 'Handshake',
  },
  // Development & Contact
  {
    icon: <FiGithub className="w-5 h-5" />,
    href: 'https://github.com/carterbridges2001',
    label: 'GitHub',
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
