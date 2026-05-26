import img1 from '../assets/products/5999101996138875266_121.jpg';
import img2 from '../assets/products/5999101996138875311_121.jpg';
import img3 from '../assets/products/6006015098189105885_121.jpg';
import img4 from '../assets/products/6010429740453841222_121.jpg';
import img5 from '../assets/products/6010429740453841223_121.jpg';
import img6 from '../assets/products/6010429740453841224_121.jpg';
import img7 from '../assets/products/6010429740453841226_121.jpg';
import img8 from '../assets/products/6010429740453841227_121.jpg';
import img9 from '../assets/products/6010429740453841228_121.jpg';
import towel01 from '../assets/products/towel-01.png';
import towel02 from '../assets/products/towel-02.png';
import towel03 from '../assets/products/towel-03.png';
import towel04 from '../assets/products/towel-04.png';
import towel05 from '../assets/products/towel-05.png';
import towel06 from '../assets/products/towel-06.png';
import towel07 from '../assets/products/towel-07.png';
import towel08 from '../assets/products/towel-08.png';
import towel09 from '../assets/products/towel-09.png';
import towel10 from '../assets/products/towel-10.png';
import towel11 from '../assets/products/towel-11.png';
import towel12 from '../assets/products/towel-12.png';
import towel13 from '../assets/products/towel-13.png';
import towel14 from '../assets/products/towel-14.png';
import towel15 from '../assets/products/towel-15.png';

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
  {
    id: 10,
    name: 'طقم فوط قطن تركي',
    price: 650,
    category: 'فوط',
    image: towel01,
    images: [towel01, towel02],
    description: 'فوط عالية الامتصاص وناعمة جداً على البشرة.',
  },
  {
    id: 11,
    name: 'طقم بشاكير حمام مطرزة',
    price: 900,
    category: 'فوط',
    image: towel08,
    images: [towel08, towel12, towel14],
    description: 'بشاكير فاخرة بتطريز أنيق مناسبة للعرايس.',
  },
  {
    id: 12,
    name: 'بشكير حمام كبير ناعم',
    price: 450,
    category: 'فوط',
    image: towel04,
    images: [towel04, towel05],
    description: 'حجم كبير وتجفيف سريع بفضل القطن الخالص.',
  },
  {
    id: 13,
    name: 'طقم فوط عرايس بالدانتيل',
    price: 1100,
    category: 'فوط',
    image: towel03,
    images: [towel03, towel06],
    description: 'طقم فوط مزين بالدانتيل الراقي لزهاز العروسة.',
  },
  {
    id: 14,
    name: 'طقم برنس حمام كامل',
    price: 2100,
    category: 'فوط',
    image: towel09,
    images: [towel09, towel11],
    description: 'طقم أرواب استحمام رجالي وحريمي مع الفوط.',
  },
  {
    id: 15,
    name: 'فوط استحمام جاكار',
    price: 750,
    category: 'فوط',
    image: towel07,
    images: [towel07],
    description: 'فوط بتصميم الجاكار المميز متينة وتدوم طويلاً.',
  },
  {
    id: 16,
    name: 'طقم فوط أطفال',
    price: 350,
    category: 'فوط',
    image: towel10,
    images: [towel10],
    description: 'فوط ناعمة مخصصة لبشرة الأطفال الحساسة.',
  },
  {
    id: 17,
    name: 'مجموعة فوط ضيوف',
    price: 250,
    category: 'فوط',
    image: towel13,
    images: [towel13],
    description: 'فوط صغيرة ومميزة للاستخدام في حمام الضيوف.',
  },
  {
    id: 18,
    name: 'طقم فوط قطن مصري',
    price: 550,
    category: 'فوط',
    image: towel15,
    images: [towel15],
    description: 'جودة القطن المصري الأصيل في طقم فوط عملي.',
  },
];
