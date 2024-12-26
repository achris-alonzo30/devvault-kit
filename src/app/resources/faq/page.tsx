// Add this at the top of the file to specify that this component should run on the client side
'use client';

import Link from 'next/link';

export default function FAQ() {
  return (
    <div className="container mx-auto p-6 bg-background text-foreground max-w-3xl my-24">
      <h1 className="text-3xl font-bold mb-8 border-b pb-2">Frequently Asked Questions (FAQ)</h1>

      {/* General Questions Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#fcba28]">General Questions</h2>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">What is InterviewMaster.ai?</h3>
          <p className="mb-4">
            InterviewMaster.ai is an AI-powered platform designed to help job seekers improve their interview skills through personalized feedback, mock interviews, and AI-generated tips.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">How does it work?</h3>
          <p className="mb-4">
            Our platform uses artificial intelligence to simulate real-world interview scenarios. Users can participate in mock interviews, receive feedback on their performance, and access resources to enhance their interview techniques.
          </p>
        </div>
      </section>

      {/* Pricing and Subscription Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#fcba28]">Pricing and Subscription</h2>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Is InterviewMaster.ai free?</h3>
          <p className="mb-4">
            We offer a free plan with limited features. Premium plans are available for users who need access to advanced tools, more interview simulations, and detailed feedback reports.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">How can I upgrade to a premium plan?</h3>
          <p className="mb-4">
            You can upgrade by visiting our <Link href="/pricing" className="text-[#fcba28] hover:text-[#fcba28]/70 hover:underline">pricing page</Link> and selecting a plan that suits your needs.
          </p>
        </div>
      </section>

      {/* Account and Technical Support Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#fcba28]">Account and Technical Support</h2>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">I forgot my password. How can I reset it?</h3>
          <p className="mb-4">
            Click on the <Link href="/forgot-password" className="text-[#fcba28] hover:text-[#fcba28]/70 hover:underline">Forgot Password</Link> link on the login page and follow the instructions to reset your password.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">How can I contact customer support?</h3>
          <p className="mb-4">
            You can reach out to our support team by emailing us at <Link href="mailto:support@interviewmaster.ai" className="text-[#fcba28] hover:text-[#fcba28]/70 hover:underline">support@interviewmaster.ai</Link>. We aim to respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Data Privacy and Security Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#fcba28]">Data Privacy and Security</h2>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">How is my data protected?</h3>
          <p className="mb-4">
            We take data security seriously and implement industry-standard measures to protect your information. For more details, please review our <Link href="/privacy-policy" className="text-[#fcba28] hover:text-[#fcba28]/70 hover:underline">Privacy Policy</Link>.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Can I delete my account and data?</h3>
          <p className="mb-4">
            Yes, you can request account deletion by contacting our support team. Please note that some data may be retained for legal or regulatory purposes.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#fcba28]">Contact Us</h2>
        <p className="mb-4">
          If you have any further questions, feel free to <Link href="mailto:support@interviewmaster.ai" className="text-[#fcba28] hover:text-[#fcba28]/70 hover:underline">contact us</Link>.
        </p>
      </section>
    </div>
  );
}
