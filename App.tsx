import React, { useState } from 'react';
import { 
  Users, 
  Radio, 
  MessageCircle, 
  BookOpen, 
  Video, 
  Gift, 
  Heart, 
  Star, 
  ChevronDown,
  Sparkles,
  Zap,
  Feather,
  Eye,
  Globe
} from 'lucide-react';
import { Button } from './components/Button';
import { IntentionGenerator } from './components/IntentionGenerator';

const App: React.FC = () => {
  const whatsappLink = "https://chat.whatsapp.com/HqjcH2GgzL9Hqy666R0HDc";

  const handleJoin = () => {
    window.open(whatsappLink, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0518] text-white selection:bg-gold-500/30 font-sans" dir="rtl">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0f0518]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <span className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-l from-gold-300 to-purple-400">
                המסע לתקשור
              </span>
            </div>
            <div className="hidden md:block">
              <div className="mr-10 flex items-baseline space-x-8 space-x-reverse">
                <button onClick={() => scrollToSection('about')} className="hover:text-gold-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">על המרחב</button>
                <button onClick={() => scrollToSection('details')} className="hover:text-gold-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">מה מקבלים</button>
                <button onClick={() => scrollToSection('audience')} className="hover:text-gold-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">למי זה מתאים</button>
                <Button onClick={handleJoin} className="mr-4 !py-2 !px-6 text-sm font-bold">
                  הצטרפות לקבוצה
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#0f0518_100%)] z-10"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-medium text-gold-100">וובינר תקשור מעשי</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight drop-shadow-lg">
            לגלות את <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-amber-500">
              הידיעה הפנימית
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
            המסע כולל 9 מפגשים. בכל מפגש מתקיים תרגול מעשי. שוב ושוב.
          </p>
          
          <div className="mt-12 flex flex-col items-center gap-6">
            <Button onClick={handleJoin} className="text-lg px-12 py-5 shadow-2xl shadow-gold-500/20 hover:shadow-gold-500/40">
              אני רוצה להצטרף למפגש הראשון במתנה
            </Button>
            <p className="text-sm text-gray-400">לחצי כאן להצטרפות לקבוצת הוואטסאפ השקטה</p>
          </div>

          <div className="mt-20 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity" onClick={() => scrollToSection('philosophy')}>
            <ChevronDown className="mx-auto w-10 h-10 text-gold-300" />
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 bg-mystic-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-2">
                <Feather className="text-gold-400 w-6 h-6" />
                <h3 className="text-gold-300 uppercase tracking-wider font-bold text-sm">המהות</h3>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                הקשבה אמיתית היא <span className="text-gold-400">מיומנות</span>.
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                <p>
                  זוהי שפה של הנשמה. וכשמתחילים לדבר אותה החיים מקבלים בהירות, משמעות, וקסם יומיומי.
                </p>
                <p>
                  מתוך המקום הזה נפתחו מרחבי התקשור הדיגיטליים (ZOOM). זהו מרחב שנבנה כדי לאפשר לך להתקדם בלי קשר לאיפה את נמצאת בעולם, עם קבוצה תומכת, הדרכה עדינה ותרגול שמייצר שינוי אמיתי.
                </p>
                <p className="font-medium text-white p-4 border-r-4 border-gold-500 bg-white/5 rounded-l-xl">
                  רוב המשתתפות מתחילות לתקשר כבר במפגש הראשון או השני, כי כל מה שהיה צריך זה מרחב שמאפשר ומישהו שיזכיר להן.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-purple-500/20 rounded-2xl blur-xl transform rotate-3"></div>
              <div className="glass-card p-8 rounded-2xl relative z-10 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-center">איך זה עובד?</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-mystic-700 p-3 rounded-lg h-fit"><Zap className="w-6 h-6 text-gold-400" /></div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">גלי מוח איטיים</h4>
                      <p className="text-gray-400 text-sm">בכל מפגש את תכנסי למצב תודעתי המאפשר קליטה עמוקה.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-mystic-700 p-3 rounded-lg h-fit"><Users className="w-6 h-6 text-purple-400" /></div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">תרגול בזוגות</h4>
                      <p className="text-gray-400 text-sm">תקבלי מסרים ותעבירי מסרים עם שותפה לדרך.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-mystic-700 p-3 rounded-lg h-fit"><Eye className="w-6 h-6 text-blue-400" /></div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">ידיעה פנימית</h4>
                      <p className="text-gray-400 text-sm">תגלי איך הידיעה הופכת להיות ברורה, יציבה ופשוטה.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-sm italic text-gray-400">
                    "אין צורך להאמין כי ברגע שזה קורה, את מרגישה שזה אמיתי."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details (Features & Bonuses) */}
      <section id="details" className="py-24 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-mystic-800 to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">מה כולל המסלול המלא?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              עיקר ההכשרה היא פרקטיקה ותרגול. יחד עם הפרקטיקה אני מעבירה ידע וחידודים מותאמים לרמת הקבוצה.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                { icon: Star, title: "12 הדרכים - קורס תקשור", desc: "קורס דיגיטלי מוקלט ומקיף במתנה" },
                { icon: BookOpen, title: "קורס קריאה בקלפים", desc: "קורס דיגיטלי + הקלטות מאחורי הקלעים" },
                { icon: Video, title: "הקלטות של כל שיעור", desc: "כדי שתוכלי לחזור ולתרגל בזמנך" },
                { icon: Zap, title: "תוכן שמתעדכן", desc: "קורס הכשרת התקשור עם תכנים חיים" },
                { icon: MessageCircle, title: "פידבאק אישי בלייב", desc: "משוב עם כלים לגבי יכולת התקשור שלך" },
                { icon: Users, title: "ליווי קבוצתי", desc: "קבוצת וואטסאפ פעילה ותומכת לאורך כל המסע" },
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-gold-400 mb-4" />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Highlight Box */}
            <div className="glass-card border border-gold-500/30 bg-gradient-to-b from-mystic-800 to-mystic-900 p-8 rounded-2xl flex flex-col justify-center text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gold-500/40">
                <Heart className="w-8 h-8 text-mystic-900 fill-current" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">הלב של המסע</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                בכל מפגש יש תרגול מעשי. פנים אל פנים בזום.
                <br /><br />
                בכל מפגש את מקבלת תקשור ונותנת תקשור.
              </p>
              <Button onClick={handleJoin} className="w-full">
                הבטיחי את מקומך
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section id="audience" className="py-24 bg-gradient-to-t from-mystic-900 to-[#120820]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold">למי המסע הזה מתאים?</h2>
          </div>
          
          <div className="space-y-4">
            {[
              "למי שרוצה לקחת את האינטואיציה שמגיעה לה פה ושם ולהפוך אותה לתקשור מודע",
              "למי שמטפלת ורוצה להרחיב את סל הכלים שלה ולשפר את יכולת הטיפול שלה",
              "למי שרוצה להיות מתקשרת ולקבל אנשים לתקשורים אישיים",
              "למי ששואלת שאלות פנימיות ומחפשת בהירות",
              "למי שמרגישה עומק ולא יודעת איך לגשת אליו",
              "למי שמרגישה שהלב שלה מדבר והיא רוצה ללמוד להקשיב לו"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-gold-500/30 transition-all">
                <div className="flex-shrink-0">
                   <div className="w-2 h-2 bg-gold-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
                </div>
                <p className="text-lg text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Interactive Section */}
      <section id="ai-demo" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mystic-900 opacity-90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <IntentionGenerator />
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="contact" className="py-20 relative overflow-hidden text-center bg-[#0a0310]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <Globe className="w-12 h-12 text-gold-500/50 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-white">
            המסע שלך מתחיל כאן
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            ההתקדמות במרחב מתרחשת דרך ניסיון חי. הצטרפי לקבוצה ותתחילי להרגיש.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Button onClick={handleJoin} className="text-xl px-10 py-6 w-full sm:w-auto shadow-xl shadow-gold-500/20 hover:scale-105 transition-transform">
              אני רוצה להצטרף למפגש הראשון במתנה
            </Button>
            <p className="text-sm text-gray-500">
              * המפגשים מתקיימים בזום
            </p>
          </div>
        </div>
        
        <div className="mt-20 text-gray-700 text-sm">
          <p>© כל הזכויות שמורות - הכשרת תקשור</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
