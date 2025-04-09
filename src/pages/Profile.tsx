
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  // Mock order history
  const orders = [
    { id: "#TT-1234", date: "2024-04-05", total: "$47.99", status: "Delivered" },
    { id: "#TT-5678", date: "2024-03-20", total: "$32.50", status: "Delivered" },
    { id: "#TT-9012", date: "2024-02-15", total: "$85.75", status: "Delivered" },
  ];

  // Mock reservation history
  const reservations = [
    { id: "R-1234", date: "2024-04-15", time: "7:00 PM", guests: 4, status: "Confirmed" },
    { id: "R-5678", date: "2024-03-10", time: "6:30 PM", guests: 2, status: "Completed" },
  ];

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // This would call an API in a real application
    toast({
      title: "Profile updated",
      description: "Your information has been saved",
    });
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 bg-tamtam-light">
        <div className="container-custom">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-8">Your Profile</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
            {/* Sidebar */}
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-tamtam-orange-200 mx-auto mb-4 flex items-center justify-center">
                    <span className="font-bold text-2xl text-tamtam-orange-600">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  <h2 className="font-medium text-lg">{user.name}</h2>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Main content */}
            <div>
              <Tabs defaultValue="profile">
                <TabsList className="mb-8">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="reservations">Reservations</TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Update your account details</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleUpdateProfile} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        
                        <Button type="submit" className="bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white">
                          Save Changes
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="orders">
                  <Card>
                    <CardHeader>
                      <CardTitle>Order History</CardTitle>
                      <CardDescription>Your previous orders with Tam Tam</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {orders.length > 0 ? (
                        <div className="border rounded-md overflow-hidden">
                          <table className="w-full">
                            <thead className="bg-muted/50">
                              <tr>
                                <th className="text-left p-3 font-medium">Order ID</th>
                                <th className="text-left p-3 font-medium">Date</th>
                                <th className="text-left p-3 font-medium">Total</th>
                                <th className="text-left p-3 font-medium">Status</th>
                                <th className="text-left p-3 font-medium"></th>
                              </tr>
                            </thead>
                            <tbody className="divide-y">
                              {orders.map((order) => (
                                <tr key={order.id}>
                                  <td className="p-3">{order.id}</td>
                                  <td className="p-3">{order.date}</td>
                                  <td className="p-3">{order.total}</td>
                                  <td className="p-3">
                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                                      {order.status}
                                    </span>
                                  </td>
                                  <td className="p-3">
                                    <Button variant="ghost" size="sm">Details</Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="text-center py-8 text-muted-foreground">
                          You haven't placed any orders yet.
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="reservations">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Reservations</CardTitle>
                      <CardDescription>Upcoming and past reservations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {reservations.length > 0 ? (
                        <div className="border rounded-md overflow-hidden">
                          <table className="w-full">
                            <thead className="bg-muted/50">
                              <tr>
                                <th className="text-left p-3 font-medium">Reservation ID</th>
                                <th className="text-left p-3 font-medium">Date</th>
                                <th className="text-left p-3 font-medium">Time</th>
                                <th className="text-left p-3 font-medium">Guests</th>
                                <th className="text-left p-3 font-medium">Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y">
                              {reservations.map((reservation) => (
                                <tr key={reservation.id}>
                                  <td className="p-3">{reservation.id}</td>
                                  <td className="p-3">{reservation.date}</td>
                                  <td className="p-3">{reservation.time}</td>
                                  <td className="p-3">{reservation.guests}</td>
                                  <td className="p-3">
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                      {reservation.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="text-center py-8 text-muted-foreground">
                          You haven't made any reservations yet.
                        </div>
                      )}
                      
                      <Button
                        className="mt-4 bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white"
                        onClick={() => navigate("/reservations")}
                      >
                        Make a New Reservation
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
