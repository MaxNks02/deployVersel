// components/ZakyatCalculator.tsx
import React from 'react';
import Link from 'next/link';

const ZakyatCalculator: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Zakyat Calculator</h1>
        <Link href="/">Back to Portfolio</Link>
      </header>
      <div className="container">
        <section>
          <h2>Zakyat Calculator</h2>
          <p>This project is a Zakyat calculator to calculate Zakyat.</p>
        </section>
      </div>
    </div>
  );
};

export default ZakyatCalculator;
