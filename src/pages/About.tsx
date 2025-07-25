import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { Users, Heart, BookOpen, Award } from 'lucide-react';

const About = () => {
  const leadership = [
    {
      name: "Rev. Canon John N. Kamau",
      position: "Vicar",
      description: "Leading our parish with wisdom and dedication, Rev. Kamau brings years of pastoral experience and a heart for community service.",
    },
    {
      name: "Lay Readers",
      position: "Ministry Leaders",
      description: "Our committed lay readers support worship services and provide spiritual guidance to our community members.",
    },
    {
      name: "Youth Leaders",
      position: "Next Generation",
      description: "Passionate leaders dedicated to nurturing and guiding our young people in their faith journey.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "We show Christ's love through our actions and care for one another and our community."
    },
    {
      icon: Users,
      title: "Fellowship",
      description: "Building strong relationships and supporting each other as one family in Christ."
    },
    {
      icon: BookOpen,
      title: "Scripture & Tradition",
      description: "Grounded in God's Word and the rich Anglican tradition of worship and service."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for excellence in all we do as an offering to God and service to others."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-6">About Our Church</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A faithful Anglican community serving Ruiru and surrounding areas since our founding
          </p>
          <div className="bg-background/80 backdrop-blur rounded-lg p-8 shadow-soft">
            <p className="text-lg text-muted-foreground leading-relaxed">
              ACK St. Michael and All Angels Church in Ruiru stands as a beacon of faith, hope, and love 
              in our community. As part of the Anglican Church of Kenya and the Diocese of Mt. Kenya South, 
              we are committed to the Great Commission - making disciples, baptizing believers, and teaching 
              God's Word to all nations.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our History & Growth</h2>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Our church began as a small fellowship of believers who gathered to worship and 
                  support one another in their faith journey. Over the years, we have grown from 
                  a humble beginning to a thriving parish that serves hundreds of families in 
                  Ruiru and the greater Kiambu County area.
                </p>
                <p className="text-muted-foreground">
                  As part of the Anglican Church of Kenya, we maintain the historic traditions of 
                  Anglican worship while embracing contemporary expressions of faith that resonate 
                  with our diverse community. Our growth has been marked by God's faithfulness and 
                  the dedication of generations of church members.
                </p>
                <p className="text-muted-foreground">
                  Today, ACK St. Michael and All Angels continues to be a place where people from 
                  all walks of life come together to worship, learn, grow, and serve. We are proud 
                  of our heritage and excited about our future as we continue to impact lives for 
                  Christ in our community.
                </p>
              </div>
            </div>
            <div className="lg:pl-8">
              <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Church Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Denomination</h4>
                    <p className="text-muted-foreground">Anglican Church of Kenya (ACK)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Parish</h4>
                    <p className="text-muted-foreground">Ruiru Parish</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Diocese</h4>
                    <p className="text-muted-foreground">Diocese of Mt. Kenya South</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Near Ruiru Town, Kiambu County, Kenya</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Theme Verse</h4>
                    <p className="text-muted-foreground italic">"But as for me and my house, we will serve the Lord" - Joshua 24:15</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Leadership</h2>
            <p className="text-xl text-muted-foreground">
              Dedicated servants leading our church family with wisdom and love
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="shadow-soft hover:shadow-warm transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{leader.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our faith and community life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-warm transition-shadow duration-300">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Become Part of Our Story</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in writing the next chapter of faith, fellowship, and service in our community. 
            Your story matters, and we'd love to be part of your journey.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;