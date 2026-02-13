// Versiyon: 1.1.9 (Ders Yükleme Sorunu Giderildi)
const dersListesi = [
    "BED3011 - Basketbol Temel Teknik Eğitimi (Grup: 2) - Öğr.Gör. Ahmet Selim AKBIYIK",
    "BED3011 - Basketbol Temel Teknik Eğitimi (Grup: 3) - Öğr.Gör. Ahmet Selim AKBIYIK",
    "BED3011 - Basketbol Temel Teknik Eğitimi (Grup: 4) - Öğr.Gör. GÜLSÜM SONAL",
    "BED3011 - Basketbol Temel Teknik Eğitimi (Grup: 5) - Öğr.Gör. Ahmet Selim AKBIYIK",
    "BED3011 - Basketbol Temel Teknik Eğitimi (Grup: 8) - Öğr.Gör. Ahmet Selim AKBIYIK",
    "BED3012 - Korfbol Temel Teknik Eğitimi (Grup: 1) - Öğr.Gör. GÜLSÜM SONAL",
    "BED3012 - Korfbol Temel Teknik Eğitimi (Grup: 6) - Öğr.Gör. ÇETİN ERDEM SONAL",
    "BED3012 - Korfbol Temel Teknik Eğitimi (Grup: 7) - Öğr.Gör. GÜLSÜM SONAL",
    "BED3041 - Futbol ve Temel Hareket Öğretimi (Grup: 1) - Öğr.Gör. ÇETİN ERDEM SONAL",
    "BED3041 - Futbol ve Temel Hareket Öğretimi (Grup: 2) - Öğr.Gör. ÇETİN ERDEM SONAL",
    "BED3041 - Futbol ve Temel Hareket Öğretimi (Grup: 3) - Öğr.Gör. ÇETİN ERDEM SONAL",
    "BED3041 - Futbol ve Temel Hareket Öğretimi (Grup: 4) - Öğr.Gör. ÇETİN ERDEM SONAL",
    "BED3042 - Voleybolda Temel Teknik Eğitimi (Grup: 2) - Öğr.Gör. Şener GÜNAY",
    "BED4022 - Tenis Teknik ve Taktik Eğitimi (Grup: 1) - Öğr.Gör. Şener GÜNAY",
    "BED4022 - Tenis Teknik ve Taktik Eğitimi (Grup: 2) - Öğr.Gör. Şener GÜNAY",
    "BED4022 - Tenis Teknik ve Taktik Eğitimi (Grup: 4) - Öğr.Gör. ÇETİN ERDEM SONAL",
    "BED4022 - Tenis Teknik ve Taktik Eğitimi (Grup: 5) - Öğr.Gör. GÜLSÜM SONAL",
    "BED4022 - Tenis Teknik ve Taktik Eğitimi (Grup: 6) - Öğr.Gör. ÇETİN ERDEM SONAL",
    "BED4022 - Tenis Teknik ve Taktik Eğitimi (Grup: 7) - Öğr.Gör. GÜLSÜM SONAL",
    "BED4032 - Temel Yüzme Teknikleri Eğitimi (Grup: 2) - Öğr.Gör. GÜLSÜM SONAL",
    "ELM4071 - Mühendislikte Sayısal Yöntemler ve Uygulamaları (Grup: 1) - Dr.Öğretim Üyesi MEHMET BURAK ÖZAKIN",
    "FEF2000 - Bilimsel Araştırmaya Yönelik Yazma Becerileri (Grup: 1) - Doç.Dr. SENEM ÖNER BULUT",
    "FEF2002 - Kariyer Planlama ve Mesleki Etik (Grup: 5) - Doç.Dr. Gülder KEMALBAY",
    "FEF3001 - Yapay Zekaya Giriş (Grup: 1) - Prof.Dr. Selçuk ALP",
    "FIZ3557 - Hayatın İçinde Fizik (Grup: 1) - Dr.Öğretim Üyesi YAŞAR KARABUL",
    "GDM4309 - Gıda Okur Yazarlığı (Grup: 1) - Doç.Dr. HASAN CANKURT",
    "GDM4309 - Gıda Okur Yazarlığı (Grup: 2) - Doç.Dr. HASAN CANKURT",
    "IST1012 - Python ile Programlama (Grup: 1) - Arş.Gör.Dr. Hülya YÜREKLİ",
    "IST1132 - Olasılık (Grup: 1) - Prof.Dr. FATMA NOYAN TEKELİ",
    "IST1132 - Olasılık (Grup: 2) - Prof.Dr. GÜLHAYAT GÖLBAŞI ŞİMŞEK",
    "IST1142 - İstatistik (Grup: 1) - Doç.Dr. Gülder KEMALBAY",
    "IST1142 - İstatistik (Grup: 2) - Prof.Dr. Filiz KARAMAN",
    "IST1990 - Olasılık ve İstatistik (Grup: 1) - Arş.Gör.Dr. Hülya YÜREKLİ",
    "IST2022 - Matematiksel İstatistik (Grup: 1) - Doç.Dr. Atıf Ahmet EVREN",
    "IST2022 - Matematiksel İstatistik (Grup: 2) - Prof.Dr. Serpil KILIÇ DEPREN",
    "IST2072 - Matlab ile İstatistiksel Analiz (Grup: 1) - Prof.Dr. Selçuk ALP",
    "IST2122 - Python ile İstatistik Uygulamalar (Grup: 1) - Prof.Dr. Ali Hakan BÜYÜKLÜ",
    "IST2142 - Veri Tabanı (Grup: 1) - Dr.Öğretim Üyesi TUGAY KARADAĞ",
    "IST2162 - Mesleki İngilizce 2 (Grup: 1) - Prof.Dr. Serpil KILIÇ DEPREN",
    "IST2170 - Güncel İstatistik Uygulamaları (Grup: 1) - Doç.Dr. Reşit ÇELİK",
    "IST2252 - Veri Analizi (Grup: 1) - Arş.Gör.Dr. Hülya YÜREKLİ",
    "IST3012 - Yöneylem Araştırması 1 (Grup: 1) - Prof.Dr. ERSOY ÖZ",
    "IST3050 - Anket Düzenleme (Grup: 1) - Dr.Öğretim Üyesi Doğan YILDIZ",
    "IST3102 - Ekonometri (Grup: 1) - Dr.Öğretim Üyesi COŞKUN PARİM",
    "IST3110 - R ile İstatistik Uygulamaları (Grup: 1) - Doç.Dr. ERHAN ÇENE",
    "IST3122 - Regresyon Analizi 2 (Grup: 1) - Prof.Dr. GÜLHAYAT GÖLBAŞI ŞİMŞEK",
    "IST3132 - Stokastik Süreçler (Grup: 1) - Dr.Öğretim Üyesi COŞKUN PARİM",
    "IST3142 - Deneysel Tasarım (Grup: 1) - Doç.Dr. ÖYKÜM ESRA YİĞİT",
    "IST3152 - İstatistik Paket Programları Kullanımı (Grup: 1) - Dr.Öğretim Üyesi MEHMET ŞAMİL GÜNEŞ",
    "IST3252 - Nümerik Analiz (Grup: 1) - Dr.Öğretim Üyesi EGEMEN ÖZKAN",
    "IST3557 - İstatistik ve Bilimsel Düşünme (Grup: 1) - Doç.Dr. Atıf Ahmet EVREN",
    "IST4130 - WEB Programlama (Grup: 1) - Doç.Dr. ERHAN ÇENE",
    "IST4132 - Çok Değişkenli İstatistik 2 (Grup: 1) - Dr.Öğretim Üyesi Doğan YILDIZ",
    "IST4232 - Yöneylem Araştırması 2 (Grup: 1) - Dr.Öğretim Üyesi Elif TUNA",
    "IST4322 - Uygulamalı Panel Veri Analizi (Grup: 1) - Dr.Öğretim Üyesi Elif TUNA",
    "IST4412 - Veri Madenciliğine Giriş (Grup: 1) - Prof.Dr. Ali Hakan BÜYÜKLÜ",
    "IST4422 - Uygulamalı Optimizasyon (Grup: 1) - Doç.Dr. Gülder KEMALBAY",
    "ITB3020 - Felsefeye Giriş (Grup: 1) - Arş.Gör.Dr. ÇAĞRI TAŞGETİREN",
    "ITB3020 - Felsefeye Giriş (Grup: 3) - Arş.Gör.Dr. Yusuf ÖZ",
    "ITB3040 - 20. Yüzyılda Siyasi Gelişmeler ve Toplumsal Hareketler (Grup: 2) - Doç.Dr. MEHMET BEŞİKÇİ",
    "ITB3150 - Tarih ve Sinema (Grup: 1) - Arş.Gör.Dr. Yusuf ÖZ",
    "ITB3210 - Çağdaş Toplum Ve İletişim (Grup: 1) - Dr.Öğretim Üyesi Abdullah Teyfur ERDOĞDU",
    "ITB3220 - Modernite ve Tüketim Toplumu (Grup: 1) - Öğr.Gör.Dr. NİHAL ALTIOK",
    "ITB3560 - Siyaset Felsefesi (Grup: 1) - Prof.Dr. Neşet TOKU",
    "ITB4100 - Toplumsal Yapılar ve Tarihsel Dönüşümler (Grup: 2) - Öğr.Gör. Mahmut Zeki ERBAY",
    "KVK4422 - Müzecilik ve Müzeografi (Grup: 1) - Prof.Dr. NEVRA ERTÜRK GÜNGÖR",
    "MAT1002 - Matematik 2 (Grup: 1) - Prof.Dr. Canan ÇELİK KARAASLANLI",
    "MAT2412 - Diferansiyel Denklemler (Grup: 2) - Dr.Öğretim Üyesi Elif DEMİR",
    "MAT3557 - Şifreleme (Grup: 1) - Doç.Dr. Emre KOLOTOĞLU",
    "MDB1002 - Temel Fransızca 2 (Grup: 1) - Öğr.Gör. Elif YILMAZ",
    "MDB1007 - Temel İtalyanca 1 (Grup: 1) - Öğr.Gör. GÖKSEL KAYA",
    "MDB1007 - Temel İtalyanca 1 (Grup: 2) - Öğr.Gör. GÖKSEL KAYA",
    "MDB1008 - Temel İtalyanca 2 (Grup: 1) - Öğr.Gör. GÖKSEL KAYA",
    "MDB1009 - Temel Yunanca 1 (Grup: 2) - Öğr.Gör.Dr. BETÜL AYANOĞLU",
    "MDB1010 - Temel Yunanca 2 (Grup: 1) - Öğr.Gör.Dr. BETÜL AYANOĞLU",
    "MDB1011 - Temel Çince 1 (Grup: 1) - Öğr.Gör. ELİF SEVCAN BALCI",
    "MDB1017 - Temel Farsça 1 (Grup: 1) - Öğr.Gör. Maral HARİRİ AKBARİ",
    "MTH4053 - Kurumsal Gelecek Tasarımı: Ar-Ge, İnovasyon ve Dijital Ekosistemlerin Stratejik Yönetimi (Grup: 1) - Dr.Öğretim Üyesi TUGAY KARADAĞ",
    "TDB1032 - TÜRKÇE 2 (Grup: 23) - Doç.Dr. SEMA NOYAN"
];

// Sayfa hazır olduğunda dersleri doldur
document.addEventListener('DOMContentLoaded', () => {
    const s1 = document.getElementById('ders1');
    const s2 = document.getElementById('ders2');

    dersListesi.forEach(ders => {
        s1.options[s1.options.length] = new Option(ders, ders);
        s2.options[s2.options.length] = new Option(ders, ders);
    });
});

function dilekceOlustur() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const ad = document.getElementById('adSoyad').value;
    const no = document.getElementById('ogrenciNo').value;
    const d1 = document.getElementById('ders1').value;
    const d2 = document.getElementById('ders2').value;

    if(!ad || !no || !d1 || !d2) {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    doc.setFontSize(14);
    doc.text("ISTATISTIK BOLUM BASKANLIGINA", 105, 20, { align: "center" });
    
    doc.setFontSize(12);
    doc.text(`Bolumunuz ${no} numarali ogrencisiyim.`, 20, 40);
    doc.text("2025-2026 Bahar yariyilinda asagidaki derslerim cakismaktadir:", 20, 50);

    doc.text(`OBS'de Kayitli Ders: ${d1}`, 20, 65);
    doc.text(`Alinmak İstenen Ders: ${d2}`, 20, 75);

    doc.text("Gereginin yapilmasini arz ederim.", 20, 95);
    doc.text(`Ad Soyad: ${ad}`, 140, 115);
    doc.text(`Tarih: ${new Date().toLocaleDateString()}`, 140, 125);

    doc.save(`Dilekce_${no}.pdf`);
}