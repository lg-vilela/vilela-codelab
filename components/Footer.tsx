import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 px-4 py-8 text-center text-text-secondary text-sm font-medium w-full">
      <p>&copy; {new Date().getFullYear()} Vilela CodeLab. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;