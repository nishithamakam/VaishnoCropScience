import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function FloatingMessageButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

    // Reset form and close modal
    setFormData({ name: '', contact: '', message: '' });
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <button 
        className="floating-message-btn" 
        onClick={() => setIsModalOpen(true)}
        data-testid="floating-message-button"
      >
        <i className="fas fa-comments"></i>
      </button>

      {/* Bootstrap Modal */}
      <div 
        className={`modal fade ${isModalOpen ? 'show d-block' : ''}`} 
        tabIndex={-1} 
        style={{ backgroundColor: isModalOpen ? 'rgba(0,0,0,0.5)' : 'transparent' }}
        data-testid="message-modal"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ borderRadius: '20px' }}>
            <div className="modal-header">
              <h5 className="modal-title" data-testid="modal-title">
                <i className="fas fa-envelope me-2"></i>Contact Us
              </h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setIsModalOpen(false)}
                data-testid="modal-close-button"
              ></button>
            </div>
            <div className="modal-body p-4">
              <p className="mb-4 text-center text-muted" data-testid="modal-description">
                Please fill out the form below and we will get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} data-testid="modal-contact-form">
                <div className="mb-3">
                  <label htmlFor="modalName" className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="modalName"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name" 
                    required
                    data-testid="input-modal-name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="modalContact" className="form-label">Email / Phone Number</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="modalContact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="Email or Phone" 
                    required
                    data-testid="input-modal-contact"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="modalMessage" className="form-label">Write to Us</label>
                  <textarea 
                    className="form-control" 
                    id="modalMessage" 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..." 
                    required
                    data-testid="textarea-modal-message"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn-custom" data-testid="button-modal-submit">
                    <i className="fas fa-paper-plane me-2"></i>Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
