import img1 from '../assets/products/5999101996138875266_121.jpg';
import img2 from '../assets/products/5999101996138875311_121.jpg';
import img3 from '../assets/products/6006015098189105885_121.jpg';
import img4 from '../assets/products/6010429740453841222_121.jpg';
import img5 from '../assets/products/6010429740453841223_121.jpg';
import img6 from '../assets/products/6010429740453841224_121.jpg';
import img7 from '../assets/products/6010429740453841226_121.jpg';
import img8 from '../assets/products/6010429740453841227_121.jpg';
import img9 from '../assets/products/6010429740453841228_121.jpg';
import img10 from '../assets/products/6012681540267525764_121.jpg';
import img11 from '../assets/products/6012681540267525765_121.jpg';
import img12 from '../assets/products/6012681540267525768_121.jpg';
import img13 from '../assets/products/6012681540267525769_121.jpg';
import img14 from '../assets/products/6016875455572986014_121.jpg';
import img15 from '../assets/products/6016875455572986073_121.jpg';
import img16 from '../assets/products/6016875455572986101_121.jpg';
import img17 from '../assets/products/6016875455572986209_121.jpg';
import img18 from '../assets/products/6023675393824901779_121.jpg';

// استيراد صور طقم ملايات رافيتا مليكة الجديد
import ravitaBlueGrey from '../assets/products/ravita_blue_grey.jpg';
import ravitaMintGreen from '../assets/products/ravita_mint_green.jpg';
import ravitaPink from '../assets/products/ravita_pink.jpg';
import ravitaBlue from '../assets/products/ravita_blue.jpg';
import ravitaBeige from '../assets/products/ravita_beige.jpg';

export const products = [
  // أطقم سرير (Bed Sets)
  { 
    id: 1, 
    name: 'طقم ملايات رافيتا مليكة فاخر 4 قطع', 
    price: 1850, 
    category: 'أطقم سرير', 
    image: ravitaBlueGrey, 
    images: [ravitaBlueGrey, ravitaMintGreen, ravitaPink, ravitaBlue, ravitaBeige],
    colors: [
      { name: 'رمادي مزرق', hex: '#8ea2b0', image: ravitaBlueGrey },
      { name: 'أخضر نعناعي', hex: '#8fae9b', image: ravitaMintGreen },
      { name: 'وردي مغبر', hex: '#c5a3aa', image: ravitaPink },
      { name: 'أزرق متوسط', hex: '#5f7f9c', image: ravitaBlue },
      { name: 'بيج خريفي', hex: '#cbb6a3', image: ravitaBeige }
    ],
    description: 'طقم ملايات رافيتا مليكة 4 قطع الراقي؛ يجمع بين النعومة الفائقة بفضل النسيج القطني عالي الجودة والتطريز اليدوي الفاخر بنقوشات الورد المميزة. متوفر في تشكيلة من 5 ألوان جذابة تضفي رقياً ودفئاً على غرف النوم.' 
  },
  { id: 2, name: 'طقم سرير مطرز كلاسيك', price: 2200, category: 'أطقم سرير', image: img2, description: 'مفرش سرير مطرز بأناقة للمناسبات وغرف العرسان.' },
  { id: 3, name: 'طقم ملايات سادة عصرية', price: 850, category: 'أطقم سرير', image: img3, description: 'ألوان سادة وهادئة تناسب جميع الديكورات العصرية.' },
  { id: 4, name: 'طقم سرير فندقي أبيض', price: 1800, category: 'أطقم سرير', image: img4, description: 'جودة الفنادق العالمية في منزلك بنعومة فائقة.' },
  { id: 5, name: 'مفرش قطيفة شتوي دافئ', price: 2500, category: 'أطقم سرير', image: img5, description: 'دفء ونعومة في ليالي الشتاء الباردة بتصميم أنيق.' },
  { id: 6, name: 'طقم سرير ساتان حريري', price: 3000, category: 'أطقم سرير', image: img6, description: 'ملمس ناعم كالحرير بلمعان جذاب يضفي فخامة على غرفتك.' },
  { id: 7, name: 'غطاء لحاف (Duvet Cover)', price: 1200, category: 'أطقم سرير', image: img7, description: 'غطاء لحاف عملي وسهل الغسيل بألوان مميزة.' },
  { id: 8, name: 'طقم سرير أطفال 3D', price: 950, category: 'أطقم سرير', image: img8, description: 'رسومات ثلاثية الأبعاد مبهجة تناسب غرف الأطفال.' },
  { id: 9, name: 'طقم سرير تركي مطبوع', price: 1350, category: 'أطقم سرير', image: img9, description: 'خامات تركية ممتازة بطباعة ثابتة لا تتأثر بالغسيل.' },

  // فوط (Towels)
  { id: 10, name: 'طقم فوط قطن تركي', price: 650, category: 'فوط', image: img10, description: 'فوط عالية الامتصاص وناعمة جداً على البشرة.' },
  { id: 11, name: 'طقم بشاكير حمام مطرزة', price: 900, category: 'فوط', image: img11, description: 'بشاكير فاخرة بتطريز أنيق مناسبة للعرايس.' },
  { id: 12, name: 'بشكير حمام كبير ناعم', price: 450, category: 'فوط', image: img12, description: 'حجم كبير وتجفيف سريع بفضل القطن الخالص.' },
  { id: 13, name: 'طقم فوط عرايس بالدانتيل', price: 1100, category: 'فوط', image: img13, description: 'طقم فوط مزين بالدانتيل الراقي لزهاز العروسة.' },
  { id: 14, name: 'طقم برنس حمام كامل', price: 2100, category: 'فوط', image: img14, description: 'طقم أرواب استحمام رجالي وحريمي مع الفوط.' },
  { id: 15, name: 'فوط استحمام جاكار', price: 750, category: 'فوط', image: img15, description: 'فوط بتصميم الجاكار المميز متينة وتدوم طويلاً.' },
  { id: 16, name: 'طقم فوط أطفال', price: 350, category: 'فوط', image: img16, description: 'فوط ناعمة مخصصة لبشرة الأطفال الحساسة.' },
  { id: 17, name: 'مجموعة فوط ضيوف', price: 250, category: 'فوط', image: img17, description: 'فوط صغيرة ومميزة للاستخدام في حمام الضيوف.' },
  { id: 18, name: 'طقم فوط قطن مصري', price: 550, category: 'فوط', image: img18, description: 'جودة القطن المصري الأصيل في طقم فوط عملي.' },
];
