import Card from "./Card";
import Footer from "./Footer";
import Nav from "./Nav";

const tutorials = [
  {
    title: "WhatsApp",
    subtitle: "Messaging basics",
    description: "Learn how to send messages, images, and voice notes securely.",
    icon: "💬",
  },
  {
    title: "Paytm",
    subtitle: "Safe digital payments",
    description: "Understand how to make secure online payments and scan QR codes.",
    icon: "💳",
  },
  {
    title: "Google Maps",
    subtitle: "Navigation help",
    description: "Get step-by-step directions and explore nearby places.",
    icon: "🗺️",
  },
];

export default function TutorialCards() {
  return (
    <>
     <Nav/>
     <div className="min-h-screen justify-center items-center  mt-32">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
      {tutorials.map((item) => (
        <Card
          key={item.title}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
        />
      ))}
    </div>

     </div>
   
    <Footer/>
    </>
   
  );
}
