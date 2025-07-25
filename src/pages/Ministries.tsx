import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { Users, Music, Heart, Wrench, GraduationCap, Globe, ArrowRight } from 'lucide-react';

const Ministries = () => {
  const ministries = [
    {
      title: "Youth Ministry",
      description: "Empowering young people to grow in faith, develop leadership skills, and serve their community. We meet weekly for fellowship, Bible study, and fun activities.",
      icon: Users,
      activities: ["Weekly Youth Fellowship", "Leadership Training", "Community Service Projects", "Youth Camps & Retreats"],
      contact: "Youth Pastor"
    },
    {
      title: "Choir Ministry",
      description: "Lifting voices in praise and worship to glorify God through music. Our choir leads worship during services and special events.",
      icon: Music,
      activities: ["Sunday Worship Leading", "Choir Practice", "Special Event Performances", "Music Training"],
      contact: "Choir Director"
    },
    {
      title: "Mother's Union (MU)",
      description: "Supporting families and communities through prayer, service, and fellowship. A worldwide Anglican movement of mothers and women.",
      icon: Heart,
      activities: ["Prayer Meetings", "Family Support", "Community Outreach", "Women's Fellowship"],
      contact: "MU President"
    },
    {
      title: "Men's Fellowship (KAMA)",
      description: "Bringing men together for fellowship, spiritual growth, and community service. Building strong Christian men and fathers.",
      icon: Wrench,
      activities: ["Men's Bible Study", "Community Projects", "Mentorship Programs", "Men's Retreats"],
      contact: "Men's Fellowship Leader"
    },
    {
      title: "Sunday School",
      description: "Nurturing children in the faith through age-appropriate Bible lessons, activities, and fellowship. Building strong foundations for life.",
      icon: GraduationCap,
      activities: ["Children's Bible Lessons", "Creative Activities", "Memory Verse Programs", "Family Events"],
      contact: "Sunday School Coordinator"
    },
    {
      title: "Outreach & Evangelism",
      description: "Reaching our community with the Gospel of Jesus Christ through various outreach programs and evangelistic activities.",
      icon: Globe,
      activities: ["Community Evangelism", "Hospital Visits", "Prison Ministry", "Feeding Programs"],
      contact: "Outreach Coordinator"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Ministries</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover ways to grow, serve, and connect through our diverse ministry opportunities
          </p>
          <div className="bg-background/80 backdrop-blur rounded-lg p-8 shadow-soft">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At ACK St. Michael and All Angels, we believe that every person has unique gifts and talents 
              that can be used to serve God and others. Our ministries provide opportunities for spiritual 
              growth, fellowship, and meaningful service in our church and community.
            </p>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {ministries.map((ministry, index) => (
              <Card key={index} className="shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <ministry.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{ministry.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        Contact: {ministry.contact}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{ministry.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Activities & Programs:</h4>
                    <ul className="space-y-2">
                      {ministry.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-center space-x-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="church" className="w-full group">
                    Learn More & Get Involved
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Ministry Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Get Involved?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Find your place in our church family and discover how God can use your gifts and talents
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">1. Pray</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ask God to guide you to the ministry where you can best serve.</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">2. Explore</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Visit different ministries and see where your heart is drawn.</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">3. Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Speak with ministry leaders and take the first step to get involved.</p>
              </CardContent>
            </Card>
          </div>

          <Button variant="hero" size="xl" className="group">
            Contact Us to Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Ministry Times */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ministry Schedule</h2>
            <p className="text-xl text-muted-foreground">
              Regular meeting times for our various ministries
            </p>
          </div>

          <Card className="shadow-warm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Weekly Activities</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Youth Fellowship</span>
                      <span className="font-medium">Saturdays 3:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Choir Practice</span>
                      <span className="font-medium">Thursdays 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Men's Fellowship</span>
                      <span className="font-medium">Saturdays 7:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday School</span>
                      <span className="font-medium">Sundays 9:15 AM</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Monthly Activities</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mother's Union</span>
                      <span className="font-medium">First Sunday</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Outreach Ministry</span>
                      <span className="font-medium">Third Saturday</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Youth Retreat</span>
                      <span className="font-medium">Quarterly</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Ministries;