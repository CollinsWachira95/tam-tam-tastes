import React from "react";
import Layout from "@/components/Layout";
import { PageSection, PageHeader } from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <PageSection background="light" spacing="sm">
        
        <PageHeader 
          title="Privacy Policy" 
          description="Learn how we collect, use, and protect your personal information."
          badge="Last Updated: April 15, 2023"
        />
      </PageSection>
      
      <PageSection>
        <div className="prose prose-lg max-w-3xl">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              At Tam Tam, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or dine at our restaurants.
            </p>
            <p className="mt-4">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p>
              We may collect information about you in various ways. The information we may collect via the Site includes:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, telephone number, and home address that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.</li>
              <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</li>
              <li><strong>Mobile Device Data:</strong> Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Create and manage your account.</li>
              <li>Process your orders and manage your billing.</li>
              <li>Email you regarding your account or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
              <li>Send you promotional offers and marketing communications.</li>
              <li>Respond to your inquiries and customer service requests.</li>
              <li>Administer sweepstakes, promotions, and contests.</li>
              <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
              <li>Deliver targeted advertising, newsletters, and other information regarding promotions and the Site to you.</li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              <li>Notify you of updates to the Site.</li>
              <li>Request feedback and contact you about your use of the Site.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
              <li><strong>Marketing Communications:</strong> With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes.</li>
              <li><strong>Interactions with Other Users:</strong> If you interact with other users of the Site, those users may see your name, profile photo, and descriptions of your activity.</li>
              <li><strong>Online Postings:</strong> When you post comments, contributions or other content to the Site, your posts may be viewed by all users and may be publicly distributed outside the Site in perpetuity.</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4">
              <p><strong>Tam Tam Restaurant</strong></p>
              <p>123 Kimathi Street, Nairobi</p>
              <p>Email: privacy@tamtam.com</p>
              <p>Phone: +254 123 456 789</p>
            </div>
          </section>
        </div>
      </PageSection>
    </Layout>
  );
};

export default Privacy;
