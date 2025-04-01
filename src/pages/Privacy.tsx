
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-tamtam-light py-12">
          <div className="container-custom">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl md:text-5xl font-greneette font-bold mt-6 mb-4">Privacy Policy</h1>
            <p className="text-tamtam-gray max-w-3xl">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>

        <section className="section bg-white">
          <div className="container-custom">
            <div className="prose max-w-3xl mx-auto">
              <h2 className="text-2xl font-greneette mb-4">1. Information We Collect</h2>
              <p className="mb-6">
                At Tam Tam, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or dine at our establishments.
              </p>
              
              <h3 className="text-xl font-sweet-sans font-semibold mb-3">Personal Information</h3>
              <p className="mb-4">
                We may collect personal identification information such as your name, email address, phone number, and delivery address when you make reservations, place orders, or sign up for our newsletter.
              </p>
              
              <h2 className="text-2xl font-greneette mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                The information we collect allows us to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Process and fulfill your food orders</li>
                <li className="mb-2">Confirm your reservations</li>
                <li className="mb-2">Respond to your inquiries and provide customer support</li>
                <li className="mb-2">Send you promotional emails about specials and events (if you've opted in)</li>
                <li className="mb-2">Improve our website and services</li>
              </ul>
              
              <h2 className="text-2xl font-greneette mt-8 mb-4">3. Cookies and Tracking</h2>
              <p className="mb-6">
                We use cookies to enhance your experience on our website. These small text files help us understand how visitors interact with our site, allowing us to improve functionality and content. You can set your browser to refuse cookies, but this may limit your ability to use some features of our site.
              </p>
              
              <h2 className="text-2xl font-greneette mt-8 mb-4">4. Third-Party Disclosure</h2>
              <p className="mb-6">
                We do not sell, trade, or transfer your personally identifiable information to outside parties except to trusted third parties who assist us in operating our website, conducting our business, or serving you, so long as those parties agree to keep this information confidential.
              </p>
              
              <h2 className="text-2xl font-greneette mt-8 mb-4">5. Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Access the personal data we hold about you</li>
                <li className="mb-2">Correct any inaccurate personal data</li>
                <li className="mb-2">Request deletion of your personal data</li>
                <li className="mb-2">Object to processing of your personal data</li>
                <li className="mb-2">Request restriction of processing your personal data</li>
              </ul>
              
              <h2 className="text-2xl font-greneette mt-8 mb-4">6. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <strong>Email:</strong> privacy@tamtam.com
                <br />
                <strong>Phone:</strong> +254 123 456 789
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
