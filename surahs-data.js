/* surahs-data.js — Verse data for Reciter Pro
   Each verse has two word arrays:
     - words      : Uthmani (Mushaf Madani) — used by default
     - words_ip   : Indo-Pak (Pakistani/Indian style — uses ٰ, ی, ہ, no ٱ alif-wasla)
   Translations are English (Mustafa Khattab / Dr. Mustafa Khattab style). */
(function () {
  "use strict";

  const SURAHS = [
    {
      n: 1, name: "Al-Fatihah", arabic: "ٱلْفَاتِحَة", meaning: "The Opening", count: 7,
      verses: [
        { i: 1,
          words:    ["بِسْمِ", "ٱللَّهِ", "ٱلرَّحْمَٰنِ", "ٱلرَّحِيمِ"],
          words_ip: ["بِسْمِ", "اللّٰہِ", "الرَّحْمٰنِ", "الرَّحِیْمِ"],
          trans: "In the name of Allah — the Most Gracious, the Most Merciful." },
        { i: 2,
          words:    ["ٱلْحَمْدُ", "لِلَّهِ", "رَبِّ", "ٱلْعَٰلَمِينَ"],
          words_ip: ["اَلْحَمْدُ", "لِلّٰہِ", "رَبِّ", "الْعٰلَمِیْنَ"],
          trans: "All praise is due to Allah, Lord of all worlds." },
        { i: 3,
          words:    ["ٱلرَّحْمَٰنِ", "ٱلرَّحِيمِ"],
          words_ip: ["الرَّحْمٰنِ", "الرَّحِیْمِ"],
          trans: "The Most Gracious, the Most Merciful." },
        { i: 4,
          words:    ["مَٰلِكِ", "يَوْمِ", "ٱلدِّينِ"],
          words_ip: ["مٰلِکِ", "یَوْمِ", "الدِّیْنِ"],
          trans: "Master of the Day of Judgement." },
        { i: 5,
          words:    ["إِيَّاكَ", "نَعْبُدُ", "وَإِيَّاكَ", "نَسْتَعِينُ"],
          words_ip: ["اِیَّاکَ", "نَعْبُدُ", "وَاِیَّاکَ", "نَسْتَعِیْنُ"],
          trans: "You alone we worship, and You alone we ask for help." },
        { i: 6,
          words:    ["ٱهْدِنَا", "ٱلصِّرَٰطَ", "ٱلْمُسْتَقِيمَ"],
          words_ip: ["اِہْدِنَا", "الصِّرَاطَ", "الْمُسْتَقِیْمَ"],
          trans: "Guide us to the Straight Path." },
        { i: 7,
          words:    ["صِرَٰطَ", "ٱلَّذِينَ", "أَنْعَمْتَ", "عَلَيْهِمْ", "غَيْرِ", "ٱلْمَغْضُوبِ", "عَلَيْهِمْ", "وَلَا", "ٱلضَّآلِّينَ"],
          words_ip: ["صِرَاطَ", "الَّذِیْنَ", "اَنْعَمْتَ", "عَلَیْہِمْ", "غَیْرِ", "الْمَغْضُوْبِ", "عَلَیْہِمْ", "وَلَا", "الضَّآلِّیْنَ"],
          trans: "The path of those You have blessed — not of those who earned wrath, nor of those who went astray." }
      ]
    },
    {
      n: 103, name: "Al-Asr", arabic: "ٱلْعَصْر", meaning: "The Declining Day", count: 3,
      verses: [
        { i: 1,
          words:    ["وَٱلْعَصْرِ"],
          words_ip: ["وَالْعَصْرِ"],
          trans: "By the declining day." },
        { i: 2,
          words:    ["إِنَّ", "ٱلْإِنسَٰنَ", "لَفِى", "خُسْرٍ"],
          words_ip: ["اِنَّ", "الْاِنْسَانَ", "لَفِیْ", "خُسْرٍ"],
          trans: "Surely humanity is in loss." },
        { i: 3,
          words:    ["إِلَّا", "ٱلَّذِينَ", "ءَامَنُوا۟", "وَعَمِلُوا۟", "ٱلصَّٰلِحَٰتِ", "وَتَوَاصَوْا۟", "بِٱلْحَقِّ", "وَتَوَاصَوْا۟", "بِٱلصَّبْرِ"],
          words_ip: ["اِلَّا", "الَّذِیْنَ", "اٰمَنُوْا", "وَعَمِلُوا", "الصّٰلِحٰتِ", "وَتَوَاصَوْا", "بِالْحَقِّ", "وَتَوَاصَوْا", "بِالصَّبْرِ"],
          trans: "Except those who believe, do good, and urge one another to truth and patience." }
      ]
    },
    {
      n: 108, name: "Al-Kawthar", arabic: "ٱلْكَوْثَر", meaning: "Abundance", count: 3,
      verses: [
        { i: 1,
          words:    ["إِنَّآ", "أَعْطَيْنَٰكَ", "ٱلْكَوْثَرَ"],
          words_ip: ["اِنَّآ", "اَعْطَیْنٰکَ", "الْکَوْثَرَ"],
          trans: "Indeed, We have granted you ˹O Prophet˺ abundance." },
        { i: 2,
          words:    ["فَصَلِّ", "لِرَبِّكَ", "وَٱنْحَرْ"],
          words_ip: ["فَصَلِّ", "لِرَبِّکَ", "وَانْحَرْ"],
          trans: "So pray to your Lord and sacrifice ˹to Him alone˺." },
        { i: 3,
          words:    ["إِنَّ", "شَانِئَكَ", "هُوَ", "ٱلْأَبْتَرُ"],
          words_ip: ["اِنَّ", "شَانِئَکَ", "ہُوَ", "الْاَبْتَرُ"],
          trans: "Indeed, your enemy ˹O Prophet˺ is truly cut off ˹from any goodness˺." }
      ]
    },
    {
      n: 109, name: "Al-Kafirun", arabic: "ٱلْكَافِرُون", meaning: "The Disbelievers", count: 6,
      verses: [
        { i: 1,
          words:    ["قُلْ", "يَٰٓأَيُّهَا", "ٱلْكَٰفِرُونَ"],
          words_ip: ["قُلْ", "یٰۤاَیُّہَا", "الْکٰفِرُوْنَ"],
          trans: "Say, ˹O Prophet,˺ \"O you disbelievers!\"" },
        { i: 2,
          words:    ["لَآ", "أَعْبُدُ", "مَا", "تَعْبُدُونَ"],
          words_ip: ["لَآ", "اَعْبُدُ", "مَا", "تَعْبُدُوْنَ"],
          trans: "I do not worship what you worship." },
        { i: 3,
          words:    ["وَلَآ", "أَنتُمْ", "عَٰبِدُونَ", "مَآ", "أَعْبُدُ"],
          words_ip: ["وَلَآ", "اَنْتُمْ", "عٰبِدُوْنَ", "مَآ", "اَعْبُدُ"],
          trans: "Nor do you worship what I worship." },
        { i: 4,
          words:    ["وَلَآ", "أَنَا۠", "عَابِدٌۭ", "مَّا", "عَبَدتُّمْ"],
          words_ip: ["وَلَآ", "اَنَا", "عَابِدٌ", "مَّا", "عَبَدْتُّمْ"],
          trans: "I will never worship what you worship." },
        { i: 5,
          words:    ["وَلَآ", "أَنتُمْ", "عَٰبِدُونَ", "مَآ", "أَعْبُدُ"],
          words_ip: ["وَلَآ", "اَنْتُمْ", "عٰبِدُوْنَ", "مَآ", "اَعْبُدُ"],
          trans: "Nor will you ever worship what I worship." },
        { i: 6,
          words:    ["لَكُمْ", "دِينُكُمْ", "وَلِىَ", "دِينِ"],
          words_ip: ["لَکُمْ", "دِیْنُکُمْ", "وَلِیَ", "دِیْنِ"],
          trans: "You have your way, and I have mine." }
      ]
    },
    {
      n: 110, name: "An-Nasr", arabic: "ٱلنَّصْر", meaning: "Divine Support", count: 3,
      verses: [
        { i: 1,
          words:    ["إِذَا", "جَآءَ", "نَصْرُ", "ٱللَّهِ", "وَٱلْفَتْحُ"],
          words_ip: ["اِذَا", "جَآءَ", "نَصْرُ", "اللّٰہِ", "وَالْفَتْحُ"],
          trans: "When Allah's help and the victory comes." },
        { i: 2,
          words:    ["وَرَأَيْتَ", "ٱلنَّاسَ", "يَدْخُلُونَ", "فِى", "دِينِ", "ٱللَّهِ", "أَفْوَاجًۭا"],
          words_ip: ["وَرَاَیْتَ", "النَّاسَ", "یَدْخُلُوْنَ", "فِیْ", "دِیْنِ", "اللّٰہِ", "اَفْوَاجًا"],
          trans: "And you see people entering Allah's faith in crowds." },
        { i: 3,
          words:    ["فَسَبِّحْ", "بِحَمْدِ", "رَبِّكَ", "وَٱسْتَغْفِرْهُ", "إِنَّهُۥ", "كَانَ", "تَوَّابًۢا"],
          words_ip: ["فَسَبِّحْ", "بِحَمْدِ", "رَبِّکَ", "وَاسْتَغْفِرْہُ", "اِنَّہٗ", "کَانَ", "تَوَّابًا"],
          trans: "Then glorify the praises of your Lord and seek His forgiveness — surely He is ever Accepting of Repentance." }
      ]
    },
    {
      n: 112, name: "Al-Ikhlas", arabic: "ٱلْإِخْلَاص", meaning: "Sincere Devotion", count: 4,
      verses: [
        { i: 1,
          words:    ["قُلْ", "هُوَ", "ٱللَّهُ", "أَحَدٌ"],
          words_ip: ["قُلْ", "ہُوَ", "اللّٰہُ", "اَحَدٌ"],
          trans: "Say, \"He is Allah — One ˹and Indivisible˺.\"" },
        { i: 2,
          words:    ["ٱللَّهُ", "ٱلصَّمَدُ"],
          words_ip: ["اللّٰہُ", "الصَّمَدُ"],
          trans: "Allah — the Sustainer ˹needed by all˺." },
        { i: 3,
          words:    ["لَمْ", "يَلِدْ", "وَلَمْ", "يُولَدْ"],
          words_ip: ["لَمْ", "یَلِدْ", "وَلَمْ", "یُوْلَدْ"],
          trans: "He has never had offspring, nor was He born." },
        { i: 4,
          words:    ["وَلَمْ", "يَكُن", "لَّهُۥ", "كُفُوًا", "أَحَدٌ"],
          words_ip: ["وَلَمْ", "یَکُنْ", "لَّہٗ", "کُفُوًا", "اَحَدٌ"],
          trans: "And there is none comparable to Him." }
      ]
    },
    {
      n: 113, name: "Al-Falaq", arabic: "ٱلْفَلَق", meaning: "The Daybreak", count: 5,
      verses: [
        { i: 1,
          words:    ["قُلْ", "أَعُوذُ", "بِرَبِّ", "ٱلْفَلَقِ"],
          words_ip: ["قُلْ", "اَعُوْذُ", "بِرَبِّ", "الْفَلَقِ"],
          trans: "Say, \"I seek refuge in the Lord of the daybreak.\"" },
        { i: 2,
          words:    ["مِن", "شَرِّ", "مَا", "خَلَقَ"],
          words_ip: ["مِنْ", "شَرِّ", "مَا", "خَلَقَ"],
          trans: "From the evil of whatever He has created." },
        { i: 3,
          words:    ["وَمِن", "شَرِّ", "غَاسِقٍ", "إِذَا", "وَقَبَ"],
          words_ip: ["وَمِنْ", "شَرِّ", "غَاسِقٍ", "اِذَا", "وَقَبَ"],
          trans: "And from the evil of the night when it grows dark." },
        { i: 4,
          words:    ["وَمِن", "شَرِّ", "ٱلنَّفَّٰثَٰتِ", "فِى", "ٱلْعُقَدِ"],
          words_ip: ["وَمِنْ", "شَرِّ", "النَّفّٰثٰتِ", "فِی", "الْعُقَدِ"],
          trans: "And from the evil of those who blow on knots." },
        { i: 5,
          words:    ["وَمِن", "شَرِّ", "حَاسِدٍ", "إِذَا", "حَسَدَ"],
          words_ip: ["وَمِنْ", "شَرِّ", "حَاسِدٍ", "اِذَا", "حَسَدَ"],
          trans: "And from the evil of an envier when they envy." }
      ]
    },
    {
      n: 114, name: "An-Nas", arabic: "ٱلنَّاس", meaning: "Humankind", count: 6,
      verses: [
        { i: 1,
          words:    ["قُلْ", "أَعُوذُ", "بِرَبِّ", "ٱلنَّاسِ"],
          words_ip: ["قُلْ", "اَعُوْذُ", "بِرَبِّ", "النَّاسِ"],
          trans: "Say, \"I seek refuge in the Lord of humankind.\"" },
        { i: 2,
          words:    ["مَلِكِ", "ٱلنَّاسِ"],
          words_ip: ["مَلِکِ", "النَّاسِ"],
          trans: "The Master of humankind." },
        { i: 3,
          words:    ["إِلَٰهِ", "ٱلنَّاسِ"],
          words_ip: ["اِلٰہِ", "النَّاسِ"],
          trans: "The God of humankind." },
        { i: 4,
          words:    ["مِن", "شَرِّ", "ٱلْوَسْوَاسِ", "ٱلْخَنَّاسِ"],
          words_ip: ["مِنْ", "شَرِّ", "الْوَسْوَاسِ", "الْخَنَّاسِ"],
          trans: "From the evil of the lurking whisperer." },
        { i: 5,
          words:    ["ٱلَّذِى", "يُوَسْوِسُ", "فِى", "صُدُورِ", "ٱلنَّاسِ"],
          words_ip: ["الَّذِیْ", "یُوَسْوِسُ", "فِیْ", "صُدُوْرِ", "النَّاسِ"],
          trans: "Who whispers into the hearts of humankind." },
        { i: 6,
          words:    ["مِنَ", "ٱلْجِنَّةِ", "وَٱلنَّاسِ"],
          words_ip: ["مِنَ", "الْجِنَّۃِ", "وَالنَّاسِ"],
          trans: "Whether from jinn or humankind." }
      ]
    }
  ];

  window.SURAHS = SURAHS;
})();
