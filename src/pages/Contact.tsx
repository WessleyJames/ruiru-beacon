import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground mb-8">
            We'd love to hear from you. Get in touch with our church family.
          </p>
          <div className="bg-background/80 backdrop-blur rounded-lg p-8 shadow-soft">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you have questions about our faith, want to learn more about our ministries, 
              or need pastoral care, we're here for you. Reach out to us using any of the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Visit us, call us, or send us a message. We're always here to welcome you 
                  into our church family.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="shadow-soft">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">Visit Us</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      ACK St. Michael & All Angels Church<br />
                      Near Ruiru Town<br />
                      Kiambu County, Kenya
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">Call Us</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      +254 7XX XXX XXX<br />
                      Available Monday - Friday, 9 AM - 5 PM
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">Email Us</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      ackstmichaelruiru@gmail.com<br />
                      We'll respond within 24 hours
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">Service Times</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Sunday Worship: 8:00 AM & 10:00 AM<br />
                      Sunday School: 9:15 AM<br />
                      Midweek Prayer: Wednesday 6:00 PM
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Ruiru, we're easy to find and always welcoming
            </p>
          </div>

          <Card className="shadow-warm overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground mb-6">
                  To view our exact location on the map, we'd love to connect you with Supabase 
                  for enhanced features including interactive maps.
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Address:</strong> ACK St. Michael & All Angels Church</p>
                  <p>Near Ruiru Town, Kiambu County, Kenya</p>
                  <p><strong>Landmark:</strong> Close to Ruiru Town Center</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Directions */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Directions to Our Church</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">From Nairobi</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Take Thika Road towards Ruiru</li>
                    <li>• Exit at Ruiru Town</li>
                    <li>• Follow signs to town center</li>
                    <li>• Look for church signs near the main road</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Public Transport</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Take matatu to Ruiru Town</li>
                    <li>• Alight at Ruiru stage</li>
                    <li>• Walk towards town center</li>
                    <li>• Ask locals for ACK St. Michael</li>
                  </ul>
                </div>
              </div>
              <div className="text-center pt-4 border-t">
                <p className="text-muted-foreground mb-4">
                  Need help finding us? Don't hesitate to call us for detailed directions.
                </p>
                <Button variant="church">
                  Call for Directions
                  <Phone className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;