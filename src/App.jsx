// import { useState } from 'react'
import {BrowserRouter, Routes, Route,NavLink} from 'react-router-dom';
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css';
import { useState } from 'react';
import './components/Header';
import Header from "./components/Header";
import Home from "./Home";
const firstnews = [
  {
    id: 35,
    title: "शहर में नया सामुदायिक स्वास्थ्य केंद्र शुरू",
    description: "स्थानीय प्रशासन ने आसपास के निवासियों को सस्ती चिकित्सा सेवाएं प्रदान करने और स्वास्थ्य सुविधाओं तक पहुंच बेहतर बनाने के लिए एक नया स्वास्थ्य केंद्र शुरू किया है।",
    category: "स्थानीय समाचार",
    date: "2026-10-05",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600"
  }
];
 
  const secondnews = [
  {
    id: 36,
    title: "सरकार ने नई डिजिटल शिक्षा पहल की घोषणा की",
    description: "इस पहल का उद्देश्य देशभर के स्कूलों और कॉलेजों में ऑनलाइन शिक्षा संसाधनों की पहुंच बढ़ाना और डिजिटल उपकरण उपलब्ध कराना है।",
    category: "राजनीति",
    date: "2026-10-04",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600"
  },
  {
    id: 37,
    title: "राज्य स्तरीय टूर्नामेंट में युवा फुटबॉल खिलाड़ियों का शानदार प्रदर्शन",
    description: "अलग-अलग जिलों की टीमों के बीच आयोजित राज्य स्तरीय फुटबॉल टूर्नामेंट में युवा खिलाड़ियों ने शानदार प्रदर्शन किया।",
    category: "खेल",
    date: "2026-10-03",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600"
  },
  {
    id: 38,
    title: "स्कूलों में डिजिटल लर्निंग कक्षाओं की शुरुआत",
    description: "शिक्षण संस्थान कक्षा में पढ़ाई को अधिक रोचक और आसान बनाने के लिए स्मार्ट बोर्ड और डिजिटल उपकरण अपना रहे हैं।",
    category: "शिक्षा",
    date: "2026-10-02",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600"
  },
  {
    id: 39,
    title: "शहर में नई सार्वजनिक परिवहन सेवा शुरू",
    description: "नई सार्वजनिक परिवहन सेवा का उद्देश्य यातायात की भीड़ कम करना और शहर के लोगों के दैनिक सफर को अधिक सुविधाजनक बनाना है।",
    category: "स्थानीय समाचार",
    date: "2026-10-01",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600"
  }
];

const random = [
  {
    id: 11,
    title: "शहर में नई सार्वजनिक परिवहन सेवा शुरू",
    description: "स्थानीय प्रशासन ने लोगों के दैनिक सफर को आसान, तेज और किफायती बनाने के लिए एक नई सार्वजनिक परिवहन सेवा शुरू की है।",
    category: "स्थानीय समाचार",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600"
  }
];
  const news = [
  {
    id: 1,
    title: "शहर में नई विकास परियोजनाओं की घोषणा",
    description: "स्थानीय प्रशासन ने सड़कों और सार्वजनिक सुविधाओं को बेहतर बनाने के लिए नई परियोजनाओं की घोषणा की है।",
    category: "मनोरंजन",
    date: "2026-10-25",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600"
  },
  {
    id: 2,
    title: "स्कूलों में नए शिक्षा कार्यक्रम शुरू होंगे",
    description: "स्थानीय स्कूलों ने विद्यार्थियों के सीखने के अनुभव को बेहतर बनाने के लिए नए कार्यक्रम शुरू करने की योजना बनाई है।",
    category: "शिक्षा",
    date: "2026-10-18",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600"
  },
  {
    id: 3,
    title: "रिहायशी इलाकों में नई सड़कों का निर्माण होगा",
    description: "स्थानीय प्रशासन परिवहन व्यवस्था को बेहतर बनाने और यातायात कम करने के लिए नई सड़कों का निर्माण करने की योजना बना रहा है।",
    category: "मनोरंजन",
    date: "2026-10-27",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=600"
  },
  {
    id: 4,
    title: "सरकार ने रोजगार के नए अवसरों की घोषणा की",
    description: "सरकार ने युवाओं के लिए रोजगार के अवसर पैदा करने के उद्देश्य से नई योजनाओं की घोषणा की है।",
    category: "राजनीति",
    date: "2026-10-12",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600"
  },
  {
    id: 5,
    title: "स्कूलों में वार्षिक विज्ञान प्रदर्शनी का आयोजन",
    description: "विद्यार्थियों ने वार्षिक विज्ञान प्रदर्शनी के दौरान अपने नए और रचनात्मक विज्ञान प्रोजेक्ट प्रस्तुत किए।",
    category: "शिक्षा",
    date: "2026-10-22",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600"
  },
  {
    id: 6,
    title: "स्थानीय क्रिकेट टीम ने चैंपियनशिप जीती",
    description: "रोमांचक फाइनल मुकाबले में शानदार जीत हासिल करने के बाद स्थानीय क्रिकेट टीम ने जश्न मनाया।",
    category: "खेल",
    date: "2026-10-15",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600"
  },
  {
    id: 7,
    title: "शहर के अस्पताल में नई स्वास्थ्य सेवाएं शुरू",
    description: "स्थानीय अस्पताल ने मरीजों को बेहतर इलाज और सुविधाएं प्रदान करने के लिए नई स्वास्थ्य सेवाएं शुरू की हैं।",
    category: "राजनीति",
    date: "2026-10-29",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600"
  },
  {
    id: 8,
    title: "बोर्ड परीक्षाओं में विद्यार्थियों ने शानदार परिणाम हासिल किए",
    description: "स्थानीय स्कूलों के विद्यार्थियों ने अपनी वार्षिक बोर्ड परीक्षाओं में शानदार प्रदर्शन किया।",
    category: "शिक्षा",
    date: "2026-10-20",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600"
  },
  {
    id: 9,
    title: "नगर परिषद में नई विकास योजनाओं पर चर्चा",
    description: "परिषद के सदस्यों ने आगामी विकास परियोजनाओं और सार्वजनिक सुविधाओं में सुधार को लेकर चर्चा की।",
    category: "राजनीति",
    date: "2026-10-10",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600"
  },
  {
    id: 10,
    title: "युवा खिलाड़ी राज्य स्तरीय प्रतियोगिता की तैयारी में जुटे",
    description: "स्थानीय खिलाड़ियों ने आगामी राज्य स्तरीय खेल प्रतियोगिता के लिए गहन प्रशिक्षण शुरू कर दिया है।",
    category: "खेल",
    date: "2026-10-28",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600"
  }
];
const weeks = [
  {
    id: 11,
    title: "शहर में पर्यावरण संरक्षण अभियान की शुरुआत",
    description: "स्थानीय प्रशासन ने प्रदूषण कम करने और शहर को स्वच्छ रखने के लिए लोगों को जागरूक करने के उद्देश्य से एक अभियान शुरू किया है।",
    category: "स्थानीय समाचार",
    date: "2026-10-27",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600"
  },
  {
    id: 12,
    title: "सरकार ने विद्यार्थियों के लिए छात्रवृत्ति योजना शुरू की",
    description: "सरकार ने विभिन्न पृष्ठभूमि के विद्यार्थियों को अपनी शिक्षा जारी रखने में मदद करने के लिए नई छात्रवृत्ति योजनाओं की घोषणा की है।",
    category: "शिक्षा",
    date: "2026-10-26",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600"
  },
  {
    id: 13,
    title: "स्थानीय फुटबॉल टीम राष्ट्रीय टूर्नामेंट की तैयारी में जुटी",
    description: "आगामी राष्ट्रीय फुटबॉल टूर्नामेंट में अपने शहर का प्रतिनिधित्व करने के लिए खिलाड़ियों ने कड़ा अभ्यास शुरू कर दिया है।",
    category: "खेल",
    date: "2026-10-24",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600"
  },
  {
    id: 14,
    title: "शहर में नया टेक्नोलॉजी सेंटर खुलेगा",
    description: "नया टेक्नोलॉजी सेंटर युवाओं को प्रशिक्षण कार्यक्रम और डिजिटल कौशल विकसित करने के अवसर प्रदान करेगा।",
    category: "राजनीति",
    date: "2026-10-22",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
  },
  {
    id: 15,
    title: "स्थानीय अस्पताल में निःशुल्क स्वास्थ्य जांच शिविर का आयोजन",
    description: "सामुदायिक कल्याण पहल के तहत स्वास्थ्य विशेषज्ञों ने लोगों के लिए निःशुल्क चिकित्सा जांच और स्वास्थ्य जागरूकता सत्र आयोजित किए।",
    category: "स्थानीय समाचार",
    date: "2026-10-20",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600"
  }
];

const months = [
  {
    id: 16,
    title: "शहर में स्मार्ट ट्रैफिक प्रबंधन प्रणाली शुरू",
    description: "प्रशासन ने सड़कों पर जाम कम करने और दैनिक परिवहन व्यवस्था को बेहतर बनाने के लिए स्मार्ट ट्रैफिक प्रणाली शुरू की है।",
    category: "स्थानीय समाचार",
    date: "2026-10-29",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=600"
  },
  {
    id: 17,
    title: "सरकार ने नई डिजिटल शिक्षा पहल की घोषणा की",
    description: "नई डिजिटल शिक्षा पहल का उद्देश्य विद्यार्थियों को ऑनलाइन शैक्षिक संसाधनों तक बेहतर पहुंच प्रदान करना है।",
    category: "शिक्षा",
    date: "2026-10-28",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600"
  },
  {
    id: 18,
    title: "भारतीय क्रिकेट टीम ने टूर्नामेंट की तैयारी शुरू की",
    description: "खिलाड़ियों ने आगामी महत्वपूर्ण अंतरराष्ट्रीय क्रिकेट टूर्नामेंट के लिए अभ्यास सत्र शुरू कर दिए हैं।",
    category: "खेल",
    date: "2026-10-26",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600"
  },
  {
    id: 19,
    title: "स्नातक युवाओं के लिए नई रोजगार योजना की घोषणा",
    description: "नई सरकारी योजना का उद्देश्य हाल ही में स्नातक हुए युवाओं को कौशल विकास और रोजगार के अवसर प्रदान करना है।",
    category: "राजनीति",
    date: "2026-10-25",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600"
  },
  {
    id: 20,
    title: "विश्वविद्यालय में वार्षिक टेक्नोलॉजी महोत्सव का आयोजन",
    description: "विद्यार्थियों और तकनीक के प्रति उत्साही लोगों ने प्रतियोगिताओं में भाग लिया और अपने नए तकनीकी प्रोजेक्ट प्रदर्शित किए।",
    category: "शिक्षा",
    date: "2026-10-24",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
  }
];

const thistime = [
  {
    id: 21,
    title: "शहर में नया सार्वजनिक खेल परिसर शुरू",
    description: "निवासियों को खेल के मैदानों और फिटनेस क्षेत्रों सहित आधुनिक खेल सुविधाओं का लाभ मिलेगा।",
    category: "स्थानीय समाचार",
    date: "2026-10-23",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600"
  },
  {
    id: 22,
    title: "सरकार ने नए बुनियादी ढांचे के विकास की योजना बनाई",
    description: "अधिकारियों ने सड़कों, परिवहन और सार्वजनिक सेवाओं में सुधार पर केंद्रित आगामी विकास परियोजनाओं पर चर्चा की।",
    category: "राजनीति",
    date: "2026-10-21",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600"
  },
  {
    id: 23,
    title: "विद्यार्थियों ने राष्ट्रीय विज्ञान प्रतियोगिता जीती",
    description: "प्रतिभाशाली विद्यार्थियों के एक समूह को राष्ट्रीय प्रतियोगिता में अपने नए विज्ञान प्रोजेक्ट के लिए सम्मानित किया गया।",
    category: "शिक्षा",
    date: "2026-10-19",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600"
  },
  {
    id: 24,
    title: "स्थानीय फुटबॉल चैंपियनशिप में उमड़ी भारी भीड़",
    description: "रोमांचक स्थानीय फुटबॉल चैंपियनशिप के दौरान खेल प्रेमी अपनी पसंदीदा टीमों का समर्थन करने के लिए बड़ी संख्या में पहुंचे।",
    category: "खेल",
    date: "2026-10-17",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600"
  },
  {
    id: 25,
    title: "अस्पताल में आधुनिक चिकित्सा उपकरण लगाए गए",
    description: "स्थानीय स्वास्थ्य केंद्र ने बेहतर जांच और उपचार सेवाएं प्रदान करने के लिए अपनी चिकित्सा सुविधाओं को आधुनिक बनाया है।",
    category: "स्थानीय समाचार",
    date: "2026-10-15",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600"
  }
];

const recommend = [
  {
    id: 26,
    title: "स्थानीय बास्केटबॉल टीम ने क्षेत्रीय टूर्नामेंट जीता",
    description: "क्षेत्रीय टूर्नामेंट में कई टीमों को हराने के बाद स्थानीय बास्केटबॉल टीम ने शानदार जीत का जश्न मनाया।",
    category: "खेल",
    date: "2026-10-05",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600"
  }
];

const othernews = [
  {
    id: 27,
    title: "सरकार ने युवा कौशल विकास कार्यक्रम शुरू किया",
    description: "नई पहल का उद्देश्य युवाओं को व्यावहारिक प्रशिक्षण और तकनीकी कौशल प्रदान करना है, ताकि उन्हें रोजगार पाने में मदद मिल सके।",
    category: "राजनीति",
    date: "2026-10-13",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600"
  },
  {
    id: 28,
    title: "स्कूलों में अंतर-विद्यालय खेल प्रतियोगिता का आयोजन",
    description: "कई स्कूलों के विद्यार्थियों ने अपनी खेल प्रतिभा दिखाने के लिए विभिन्न खेल प्रतियोगिताओं में भाग लिया।",
    category: "खेल",
    date: "2026-10-12",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600"
  },
  {
    id: 29,
    title: "कॉलेज के विद्यार्थियों ने बनाए नए मोबाइल ऐप",
    description: "कॉलेज के तकनीकी कार्यक्रम में विद्यार्थियों ने रोजमर्रा की समस्याओं को हल करने के लिए अपने रचनात्मक मोबाइल ऐप प्रस्तुत किए।",
    category: "शिक्षा",
    date: "2026-10-11",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
  },
  {
    id: 30,
    title: "शहर में नए रेलवे स्टेशन का निर्माण शुरू",
    description: "नई रेलवे स्टेशन परियोजना का उद्देश्य यात्रियों को बेहतर सुविधाएं देना और परिवहन संपर्क को मजबूत बनाना है।",
    category: "राजनीति",
    date: "2026-10-10",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600"
  }
];

const footerPosts=[{
  id: 31,
  title: "शहर में नई सड़क निर्माण परियोजना को मंजूरी",
  description: "नगर प्रशासन ने यातायात व्यवस्था को बेहतर बनाने और लोगों की आवाजाही आसान करने के लिए नई सड़क परियोजना को मंजूरी दी है।",
  category: "स्थानीय समाचार",
  date: "2026-10-12",
  image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600"
},
{
  id: 32,
  title: "सरकारी स्कूलों में डिजिटल शिक्षा को मिलेगा बढ़ावा",
  description: "छात्रों को आधुनिक शिक्षा उपलब्ध कराने के लिए सरकारी स्कूलों में स्मार्ट क्लास और डिजिटल सुविधाएं विकसित की जाएंगी।",
  category: "शिक्षा",
  date: "2026-10-13",
  image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600"
},
{
  id: 33,
  title: "युवाओं के लिए रोजगार मेले का आयोजन",
  description: "स्थानीय युवाओं को रोजगार के अवसर उपलब्ध कराने के लिए विभिन्न कंपनियों की भागीदारी के साथ रोजगार मेले का आयोजन किया जाएगा।",
  category: "रोजगार",
  date: "2026-10-14",
  image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600"
}
];
const localNews=[{
  id: 41,
  title: "शहर में नई बस सेवा शुरू करने की तैयारी",
  description: "यात्रियों की सुविधा को ध्यान में रखते हुए प्रशासन शहर के विभिन्न इलाकों में नई बस सेवा शुरू करने की योजना बना रहा है।",
  category: "स्थानीय समाचार",
  date: "2026-11-01",
  image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600"
},
{
  id: 43,
  title: "महिला सुरक्षा को लेकर पुलिस ने शुरू की नई पहल",
  description: "महिलाओं की सुरक्षा मजबूत करने के उद्देश्य से पुलिस प्रशासन ने शहर के प्रमुख स्थानों पर निगरानी बढ़ाने की योजना बनाई है।",
  category: "अपराध",
  date: "2026-11-03",
  image: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=600"
},
{
  id: 44,
  title: "स्थानीय खिलाड़ियों को मिलेगा आधुनिक खेल प्रशिक्षण",
  description: "युवा खिलाड़ियों की प्रतिभा को निखारने के लिए खेल विभाग ने आधुनिक प्रशिक्षण सुविधाएं उपलब्ध कराने की योजना बनाई है।",
  category: "खेल",
  date: "2026-11-04",
  image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600"
},
{
  id: 45,
  title: "शहर में पौधारोपण अभियान की शुरुआत",
  description: "पर्यावरण संरक्षण और हरियाली बढ़ाने के उद्देश्य से विभिन्न सार्वजनिक स्थानों पर पौधारोपण अभियान चलाया जाएगा।",
  category: "स्थानीय समाचार",
  date: "2026-11-05",
  image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600"
},
{
  id: 46,
  title: "अस्पतालों में मुफ्त स्वास्थ्य जांच शिविर आयोजित",
  description: "नागरिकों को बेहतर स्वास्थ्य सुविधाएं देने के लिए विभिन्न अस्पतालों में मुफ्त स्वास्थ्य जांच शिविर आयोजित किए जाएंगे।",
  category: "स्वास्थ्य",
  date: "2026-11-06",
  image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600"
},
]


function App(){
    const [search,setSearch]=useState("");
  return(
    <BrowserRouter>
        <div className='contact'>
          <div className='contact-info'></div>
          <a href='#'>Contact</a>
          <div className='form'>
          <a href ='#'>Login</a>
              <p>/</p>
          <a href='#'>Register</a> 
              <p>&#x263E;</p>
          </div>
          </div>
        <Header search={search} setSearch={setSearch} localNews={localNews}/>
        <Routes>
        <Route path="/" element={<Home search={search} setSearch={setSearch} firstnews={firstnews} secondnews={secondnews}
         random={random} news={news} weeks={weeks} 
         months={months} thistime={thistime}  recommend={recommend} othernews={othernews}/>}></Route>
        {/* <Route path="/" element={<Home search={search} setSearch={setSearch}/>}></Route> */}
        <Route path="/local-news" element={<LocalNews/>}></Route>
        <Route path="/politics" element={<Politics/>}></Route>
        <Route path="/literature" element={<Literature/>}></Route>
        <Route path="jobs" element={<Jobs/>}></Route>
        <Route path="/sports" element={<Sports/>}></Route>
        <Route path="/Health" element={<Health/>}></Route>
        <Route path="education" element={<Education/>}></Route>
        <Route path="/entertainment" element={<Entertainment/>}></Route>
        <Route path="/crime" element={<Crime/>}></Route>
        </Routes>
        <Footer/>
            </BrowserRouter>
      )}



function Footer(){
  return(
   <footer className="footer">
            <div className="footer-container">

              <div className="footer-about">
                <img src='\Janvani News Logo_2 with Microphone.png' alt="Janvani News Logo" className='bottom-logo'></img>
                  <p>Your trusted source<br />
                  for reliable and local<br/>
                  news updates.</p>
              </div>

              <div className="footer-links">
                  <h3>RANDOM POSTS</h3>
                  <div className='footer-news'>
                  {footerPosts.map((posts)=>(
                  <div className="footer-post-item" key={posts.id}>
                  <img src={posts.image} alt={posts.title} />
                   <div className="footer-post-details">
                     <h4>{posts.title}</h4>
                   </div>
              </div>
      ))}
    </div>
              </div>

              <div className="footer-contact">
                  <h3>SOCIAL MEDIA</h3>
                    <ul className='btn'>
                      <li><a href='https://www.facebook.com'>f</a></li>
                      <li><a href='#'> </a></li>
                    </ul>

                    <input type='email' placeholder='Email Address' className='email-address' />
                    <button className='subscribe'>Subscribe</button>
                  
              </div>


            </div>

            <div className="footer-bottom">
                <p>© 2026 जनवाणी. All Rights Reserved.</p>
                <a href='#'>Terms & Conditions</a>
            </div>
        </footer>
  )
}

function LocalNews(){
  return(
    <div>
      <p>Local news</p>
    </div>
  )
}

function Politics(){
  return(
    <div>
      <p>politics</p>
    </div>
  )
}
function Literature(){
    return(
    <div>
      <p>Education</p>
    </div>
  )
}
function Jobs(){
  return(
    <div>
      <p>Jobs</p>
    </div>
  )
}
function  Sports(){
    return(
    <div>
      <p>Sports</p>
    </div>
  )
}
function Health(){
  return(
  <div>
    <p>Health</p>
  </div>
  )
}

function Education(){
  return(
    <div>
      <p>Education</p>
    </div>
  )
}

function Entertainment(){
    return(
    <div>
      <p>Entertainment</p>
        
    </div>
  )
}

function Crime(){
  return(
    <div>
      <p>Crime</p>
    </div>
  )
}


export default App;