import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { Heart, Users, Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import churchHero from '@/assets/church-hero.jpg';

const Index = () => {
  const ministries = [
    {
      title: "Youth Ministry",
      description: "Empowering young people to grow in faith and serve their community.",
      icon: Users,
    },
    {
      title: "Choir Ministry",
      description: "Lifting voices in praise and worship to glorify God through music.",
      icon: Heart,
    },
    {
      title: "Mother's Union",
      description: "Supporting families and communities through prayer and service.",
      icon: Heart,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${churchHero})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            ACK St. Michael
            <span className="block text-4xl md:text-5xl text-church-gold">& All Angels</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200">Ruiru Parish</p>
          <p className="text-lg md:text-xl mb-8 italic text-church-gold max-w-2xl mx-auto">
            "But as for me and my house, we will serve the Lord" - Joshua 24:15
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Join Us This Sunday
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 text-white border-white hover:bg-white hover:text-black">
              Learn More
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Sundays: 8:00 AM & 10:00 AM</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Ruiru Town, Kenya</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Serving God and our community with love, faith, and dedication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be a Christ-centered community that worships God with reverence, 
                  grows in faith through fellowship and learning, and serves our neighbors 
                  with compassion and love, reflecting the Anglican tradition of 
                  worship, witness, and service.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be a beacon of hope and transformation in Ruiru and beyond, 
                  where all people experience God's love, find their purpose, 
                  and are equipped to make a positive difference in their 
                  families, communities, and the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Ministries</h2>
            <p className="text-xl text-muted-foreground">
              Growing together in faith through diverse ministries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {ministries.map((ministry, index) => (
              <Card key={index} className="hover:shadow-warm transition-shadow duration-300">
                <CardHeader className="text-center">
                  <ministry.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{ministry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {ministry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="church" size="lg">
              Explore All Ministries
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Join Our Church Family</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the warmth of our community, grow in your faith, and make lasting friendships. 
            All are welcome at ACK St. Michael and All Angels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="group">
              Plan Your Visit
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
