import React from 'react';
import LearnMorePage from '../../components/LearnMorePage';

/**
 * BlindnessLearnPage Component
 * Learn More page for Color Blindness accessibility
 * Uses the reusable LearnMorePage component
 */
function MotorImpairmentsLearnPage() {
  // Custom content for Color Blindness
  const motorImpairmentsContent = (
    <div>
      {/* Main Educational Content */}
      <div className="bg-white border rounded p-5 mb-4">
        <h3 className="mb-4">Understanding Motor Impairments</h3>
        <p className="mb-3">
          Color blindness ....
        </p>
        
        <h4 className="mt-4 mb-3">Design Principles for Motor Impairments</h4>
        <ul className="mb-3">
          <li className="mb-2">
            ...
          </li>
          <li className="mb-2">
            ...
          </li>
          <li className="mb-2">
            ...
          </li>
        </ul>

      </div>
    </div>
  );

  return (
    <LearnMorePage
      title="Implementing Accessibility:"
      subtitle="Designing for Motor Impairment and More"
      imagePath="/images/motorimpairment-illustration.png"
      content={motorImpairmentsContent}
    />
  );
}

export default MotorImpairmentsLearnPage;