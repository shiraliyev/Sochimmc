const message = "Salam%2C%20SOCH%C4%B0%20MMC%20il%C9%99%20%C9%99m%C9%99kda%C5%9Fl%C4%B1q%20etm%C9%99k%20ist%C9%99yir%C9%99m.";

export const Homecontactdata = [
  { 
    id: 1, 
    titleKey: "contact.callTitle", 
    content: "+994 55 977 01 01", 
    link: "tel:+994559770101", // Sadəcə zəng edir
    iconPath: "/lordicons/call.json" 
  },
  { 
    id: 2, 
    titleKey: "contact.whatsappTitle", 
    content: "+994 50 204 20 31", 
    // WhatsApp üçün avtomatik mesaj mətni
    link: `https://wa.me/+994502042031?text=${message}`, 
    iconPath: "/lordicons/vp.json" 
  },
  { 
    id: 3, 
    titleKey: "contact.emailTitle", 
    content: "Office@sochi.az", 
    // E-mail üçün mövzu və mesaj mətni
    link: `mailto:Office@sochi.az?subject=%C6%8Fm%C9%99kda%C5%9Fl%C4%B1q&body=${message}`, 
    iconPath: "/lordicons/mail.json" 
  },
];