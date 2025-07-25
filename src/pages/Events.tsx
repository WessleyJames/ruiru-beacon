import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { Calendar, Clock, MapPin, Users, Heart, Droplets, Music } from 'lucide-react';

const Events = () => {
  const [filter, setFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: "Baptism Sunday",
      date: "2024-08-04",
      time: "10:00 AM",
      location: "ACK St. Michael & All Angels Church",
      description: "Join us for a special baptism service where new believers will be baptized and welcomed into the family of God.",
      category: "worship",
      icon: Droplets,
      featured: true
    },
    {
      id: 2,
      title: "Youth Leadership Camp",
      date: "2024-08-15",
      time: "9:00 AM - 5:00 PM",
      location: "Ruiru Youth Center",
      description: "A one-day intensive leadership development camp for our youth aged 13-25. Learn leadership skills, team building, and spiritual growth.",
      category: "youth",
      icon: Users,
      featured: false
    },
    {
      id: 3,
      title: "Community Charity Drive",
      date: "2024-08-20",
      time: "8:00 AM - 4:00 PM",
      location: "Church Grounds",
      description: "Help us collect food, clothing, and essential items for families in need in our community. Every donation makes a difference.",
      category: "outreach",
      icon: Heart,
      featured: false
    },
    {
      id: 4,
      title: "Choir Concert: Songs of Praise",
      date: "2024-08-25",
      time: "6:00 PM",
      location: "Church Sanctuary",
      description: "An evening of beautiful music and worship led by our church choir and special guests. Free admission, love offering appreciated.",
      category: "music",
      icon: Music,
      featured: true
    },
    {
      id: 5,
      title: "Mother's Union Monthly Meeting",
      date: "2024-09-01",
      time: "2:00 PM",
      location: "Church Hall",
      description: "Monthly fellowship and planning meeting for Mother's Union members. All women are welcome to join our sisterhood.",
      category: "fellowship",
      icon: Users,
      featured: false
    },
    {
      id: 6,
      title: "Harvest Thanksgiving Service",
      date: "2024-09-15",
      time: "8:00 AM & 10:00 AM",
      location: "Church Sanctuary",
      description: "Give thanks for God's abundant blessings with our annual harvest celebration. Bring fruits and vegetables to share.",
      category: "worship",
      icon: Heart,
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events', count: events.length },
    { id: 'worship', name: 'Worship', count: events.filter(e => e.category === 'worship').length },
    { id: 'youth', name: 'Youth', count: events.filter(e => e.category === 'youth').length },
    { id: 'outreach', name: 'Outreach', count: events.filter(e => e.category === 'outreach').length },
    { id: 'music', name: 'Music', count: events.filter(e => e.category === 'music').length },
    { id: 'fellowship', name: 'Fellowship', count: events.filter(e => e.category === 'fellowship').length }
  ];

  const filteredEvents = filter === 'all' ? events : events.filter(event => event.category === filter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-6">Upcoming Events</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join us for worship, fellowship, and community events throughout the year
          </p>
          <div className="bg-background/80 backdrop-blur rounded-lg p-8 shadow-soft">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay connected with our church family through our diverse range of events. From worship 
              services to community outreach, there's always something meaningful happening at 
              ACK St. Michael and All Angels.
            </p>
          </div>
        </div>
      </section>

      {/* Event Filters */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className="relative"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {filter === 'all' && (
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Featured Events</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {events.filter(event => event.featured).map((event) => (
                <Card key={event.id} className="shadow-warm hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <event.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                          <CardDescription className="text-sm">{formatDate(event.date)}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Featured
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button variant="church" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Events */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            {filter === 'all' ? 'All Events' : `${categories.find(c => c.id === filter)?.name} Events`}
          </h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <event.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <CardDescription className="text-sm">{formatDate(event.date)}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl mb-8 opacity-90">
            Never miss an event! Join our community and stay updated on all upcoming activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="group">
              Subscribe to Updates
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

export default Events;