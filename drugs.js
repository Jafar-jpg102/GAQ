// ملف drugs.js - قاعدة بيانات الأدوية
const drugs = {
    // 💊 المسكنات ومضادات الالتهاب
    "باراسيتامول": { active: "Paracetamol", use: "مسكن وخافض للحرارة", side: "قد يسبب حساسية عند بعض الأشخاص" },
    "paracetamol": { active: "Paracetamol", use: "Painkiller and antipyretic", side: "May cause allergic reactions" },
    "بندول": { active: "Panadol (Paracetamol)", use: "مسكن للصداع وآلام الجسم", side: "آمن بالجرعات العادية، تجنب زيادة الجرعة" },
    "panadol": { active: "Panadol", use: "Headache and body pain reliever", side: "Safe in normal doses" },
    "سيتامول": { active: "Cetamol (Paracetamol)", use: "خافض حرارة ومسكن ألم واسع الاستخدام", side: "قد يؤثر على الكبد بالجرعات المفرطة" },
    "إيبوبروفين": { active: "Ibuprofen", use: "مسكن ومضاد التهاب لآلام الأسنان والمفاصل", side: "قد يسبب اضطراب أو ألم بالمعدة" },
    "ibuprofen": { active: "Ibuprofen", use: "Analgesic and anti-inflammatory for teeth and joints", side: "May cause stomach upset" },
    "بروفين": { active: "Brufen (Ibuprofen)", use: "مسكن قوي للآلام والالتهابات والحمى", side: "تجنبه على معدة فارغة" },
    "brufen": { active: "Brufen", use: "Strong pain and inflammation reliever", side: "Avoid on an empty stomach" },
    "فولتارين": { active: "Voltaren (Diclofenac)", use: "مسكن قوي جداً لآلام العظام والمفاصل والظهر", side: "قد يؤثر على المعدة والكلى بجرعات عالية" },
    "voltaren": { active: "Voltaren", use: "Strong painkiller for bones and joints", side: "May affect stomach and kidneys" },
    "أسبرين": { active: "Aspirin", use: "مسكن آلام ومميع للدم لمنع الجلطات", side: "قد يسبب تهيج أو نزيف بالمعدة" },
    "aspirin": { active: "Aspirin", use: "Pain reliever and blood thinner", side: "May cause stomach irritation" },
    "بونستان": { active: "Ponstan (Mefenamic Acid)", use: "مسكن لآلام الدورة الشهرية وآلام الأسنان", side: "قد يسبب إسهال أو ألم بطن" },
    "ponstan": { active: "Ponstan", use: "For menstrual and dental pain", side: "May cause diarrhea" },

    // 🤒 أدوية الفلو والنشلة والسعال (شائعة بالعراق)
    "فلو آوت": { active: "Flu Out", use: "لعلاج أعراض البرد، النشلة، واحتقان الأنف", side: "قد يسبب النعاس" },
    "flu out": { active: "Flu Out", use: "For cold symptoms, runny nose, and congestion", side: "May cause drowsiness" },
    "فلوستوب": { active: "Flu-Stop", use: "مضاد لاحتقان الأنف وأعراض الفلو والرشح", side: "قد يسبب جفاف الفم أو النعاس" },
    "ساميلين": { active: "Samilin", use: "شراب لعلاج السعال والبلغم وتخفيف الحساسية", side: "يسبب خمول ونعاس واضح" },
    "توسكان": { active: "Tussivan", use: "شراب مهدئ للسعال الجاف والمستمر", side: "قد يسبب دوار طفيف" },

    // 🦠 المضادات الحيوية (Antibiotics)
    "أموكسيسيلين": { active: "Amoxicillin", use: "مضاد حيوي لعلاج التهابات البلعوم، الأذن، والأسنان", side: "قد يسبب الإسهال أو اضطراب المعدة" },
    "amoxicillin": { active: "Amoxicillin", use: "Antibiotic for throat, ear, and dental infections", side: "May cause diarrhea" },
    "أوغمينتين": { active: "Augmentin", use: "مضاد حيوي واسع الطيف لالتهابات الجهاز التنفسي والبولية", side: "إسهال، غثيان، أو حساسية" },
    "augmentin": { active: "Augmentin", use: "Broad-spectrum antibiotic for respiratory and urinary tract", side: "Diarrhea or nausea" },
    "كلافراد": { active: "Clafuran / Ceftriaxone", use: "مضاد حيوي قوي للالتهابات البكتيرية الشديدة", side: "اضطراب مؤقت في الجهاز الهضمي" },
    "أزيثرومايسين": { active: "Azithromycin", use: "مضاد حيوي يؤخذ كجرعة واحدة يومياً لـ 3 أو 5 أيام", side: "ألم في البطن أو غثيان" },

    // 🫁 أدوية المعدة والجهاز الهضمي
    "أوميبرازول": { active: "Omeprazole", use: "لعلاج حموضة المعدة، الارتجاع المريئي، والقرحة", side: "صداع أو ألم طفيف في البطن" },
    "omeprazole": { active: "Omeprazole", use: "For stomach acid, reflux, and ulcers", side: "Headache or mild abdominal pain" },
    "نيكسيوم": { active: "Nexium (Esomeprazole)", use: "مقلل قوي لحموضة المعدة وحماية جدارها", side: "جفاف الفم أو صداع" },
    "nexium": { active: "Nexium", use: "Strong stomach acid reducer", side: "Dry mouth or headache" },
    "بلازيل": { active: "Plasil (Metoclopramide)", use: "لعلاج الغثيان والقيء وتنظيم حركة الأمعاء", side: "قد يسبب النعاس أو الدوار" },
    "بوسكوبان": { active: "Buscopan", use: "مضاد للمغص والتقلصات المعوية وآلام القولون", side: "جفاف الفم أو زغللة مؤقتة في العين" },
    "buscopan": { active: "Buscopan", use: "For abdominal cramps and colon pain", side: "Dry mouth or blurred vision" },

    // 🩸 أدوية الأمراض المزمنة (ضغط وسكري)
    "ميتفورمين": { active: "Metformin (Glucophage)", use: "منظم ومخفض لمستوى السكر في الدم (لنوع 2)", side: "اضطراب المعدة أو الإسهال في بداية الاستخدام" },
    "metformin": { active: "Metformin", use: "Blood sugar regulator for type 2 diabetes", side: "Stomach upset initially" },
    "كلوفاج": { active: "Glucophage", use: "الاسم التجاري للميتفورمين لتنظيم السكر ومقاومة الإنسولين", side: "غثيان أو طعم معدني بالفم" },
    "أملوديبين": { active: "Amlodipine", use: "لعلاج ارتفاع ضغط الدم وحماية القلب", side: "قد يسبب تورم طفيف في القدمين" },
    "amlodipine": { active: "Amlodipine", use: "For high blood pressure and heart protection", side: "May cause mild ankle swelling" },
    "كونكور": { active: "Concor (Bisoprolol)", use: "منظم لضربات القلب ومخفض لضغط الدم الشرياني", side: "شعور بالتعب أو برودة الأطراف" }
};

const fixes = {
    "برسيتول": "باراسيتامول",
    "بارسيتامول": "باراسيتامول",
    "بروفين": "إيبوبروفين",
    "بندول": "باراسيتامول",
    "panadol": "paracetamol",
    "اموكسيل": "أموكسيسيلين"
};
