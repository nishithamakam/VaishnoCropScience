import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const { toast } = useToast();
  const nameRegex = /^[a-zA-Z\s]{2,50}$/;  
  const contactRegex = /^(?:\d{10}|[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,})$/;

  const messageRegex = /^.{10,500}$/;
    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate Name
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your full name.",
        variant: "destructive"
      });
      return;
    }
    if (!nameRegex.test(formData.name.trim())) {
      toast({
        title: "Validation Error",
        description: "Name must be 2-50 characters and contain only letters and spaces.",
        variant: "destructive"
      });
      return;
    }

    // Validate Contact
    if (!formData.contact.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your email or phone number.",
        variant: "destructive"
      });
      return;
    }
    if (!contactRegex.test(formData.contact.trim())) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email or phone number.",
        variant: "destructive"
      });
      return;
    }

    // Validate Message
    if (!formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please write your message.",
        variant: "destructive"
      });
      return;
    }
    if (!messageRegex.test(formData.message.trim())) {
      toast({
        title: "Validation Error",
        description: "Message must be between 10 and 500 characters.",
        variant: "destructive"
      });
      return;
    }

   
    // Simulate form submission
    console.log('Contact form submission:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', contact: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div data-testid="contact-page">
      <section className="section contact-section" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h2 className="section-title" data-testid="contact-title">Call Us or Write to Us</h2>
                <p className="lead text-muted" data-testid="contact-subtitle">
                  Get in touch with our agricultural experts for personalized solutions.
                  <br></br>
                  We will get back to you as soon as possible.
                </p>
              </div>
              
              <div className="card shadow-lg border-0" style={{ borderRadius: '20px' }}>
                <div className="card-body p-5">
                  <form onSubmit={handleSubmit} data-testid="contact-form">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name" 
                          required
                          data-testid="input-name"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="contact" className="form-label">Email / Phone Number</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="contact"
                          name="contact"
                          value={formData.contact}
                          onChange={handleInputChange}
                          placeholder="Email or Phone" 
                          required
                          data-testid="input-contact"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">Write to Us</label>
                      <textarea 
                        className="form-control" 
                        id="message" 
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your agricultural needs..." 
                        required
                        data-testid="textarea-message"
                      />
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn-custom" data-testid="button-submit">
                        <i className="fas fa-paper-plane me-2"></i>Get in Touch
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
