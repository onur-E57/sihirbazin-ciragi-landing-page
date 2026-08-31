// src/data/mockData.js

export const mockData = {
  hero: {
    title: "Hayalleriniz 3 Boyutlu Gerçekliğe Dönüşüyor",
    subtitle: "Sihirbazın Çırağı 3D Tasarım Stüdyosu'na hoş geldiniz. Masalarınızı renklendirecek ve tarzınızı yansıtacak sihirli dokunuşlar burada!",
    ctaText: "Siparişe Başla",
    instagramUrl: "https://www.instagram.com/sihirbazin.ciragi.3d/"
  },
  
  about: {
    title: "Biz Kimiz?",
    description: "Sıradan objeleri sihirli dokunuşlarla kişiselleştirilmiş sanat eserlerine dönüştürüyoruz. Yüksek kaliteli 3D baskı teknolojimizle, hayalinizdeki figürleri, taraftar ürünlerini ve çok daha fazlasını üretiyoruz."
  },

  features: [
    {
      id: 1,
      icon: "Wand2",
      title: "Sihirli Tasarımlar",
      description: "İstediğiniz figürü veya hayalinizdeki tasarımı 3D modellere dönüştürüyoruz."
    },
    {
      id: 2,
      icon: "Printer",
      title: "Kusursuz Baskı",
      description: "Göz alıcı renkler ve pürüzsüz yüzeyler için en kaliteli malzemeleri kullanıyoruz."
    },
    {
      id: 3,
      icon: "Sparkles",
      title: "Kişiye Özel",
      description: "Sadece size veya sevdiklerinize özel, eşi benzeri olmayan hediyeler üretiyoruz."
    }
  ],

  categories: [
    { id: "all", name: "Tümü" },
    { id: "keychain", name: "Figür Anahtarlıklar" },
    { id: "fan", name: "Taraftar Ürünleri" },
    { id: "decor", name: "Masaüstü Dekor" }
  ],

  products: [
    {
      id: 1,
      title: "Orka ve Deniz Kaplumbağası",
      category: "keychain",
      description: "Denizlerin sevimliliğini cebinize taşıyan, detaylı ve canlı renkli anahtarlıklar.",
      image: "/images/orka-turtle.png",
      badge: "Yeni"
    },
    {
      id: 2,
      title: "Süper Kahramanlar",
      category: "fan",
      description: "Mahallemizin dostu Örümcek Adam anahtarlığı işte karşınızda.",
      image: "/images/spiderman.jpg",
      badge: "Çok Satan"
    },
    {
      id: 3,
      title: "Nostaljik Karakterler",
      category: "keychain",
      description: "Pikachu, çocukluğumuzun kahramanı en tatlı halleriyle anahtarlarınıza eşlik ediyor.",
      image: "/images/pikachu.png",
      badge: null
    },
    {
      id: 4,
      title: "Milli Takım Konsepti",
      category: "fan",
      description: "Ay yıldızlı forma ve kupa tasarımıyla gurur verici detaylara sahip anahtarlık seti.",
      image: "/images/fbgs.png",
      badge: "Özel Tasarım"
    }
  ],

  footer: {
    brandName: "Sihirbazın Çırağı 3D",
    tagline: "Hayalden Baskıya...",
    instagramHandle: "@sihirbazin.ciragi.3d",
    copyrightText: "© 2026 Sihirbazın Çırağı 3D Tasarım Stüdyosu. Tüm hakları saklıdır."
  }
};