// Versiyon: 2.4.0 - Dinamik Ders Listesi ve Manuel Giriş Desteği
const dersler = [
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
    "MDB1032 - İleri İngilizce 2 (Grup: 8)",
    "MDB1032 - İleri İngilizce 2 (Grup: 9)",
    "MTH4053 - Kurumsal Gelecek Tasarımı: Ar-Ge, İnovasyon ve Dijital Ekosistemlerin Stratejik Yönetimi (Grup: 1) - Dr.Öğretim Üyesi TUGAY KARADAĞ",
    "TDB1032 - TÜRKÇE 2 (Grup: 23) - Doç.Dr. SEMA NOYAN"
];

// Sayfa hazır olduğunda Select kutularını doldur
document.addEventListener('DOMContentLoaded', () => {
    const s1 = document.getElementById('obsDersSelect');
    const s2 = document.getElementById('fykDersSelect');

    dersler.forEach(d => {
        let opt1 = document.createElement('option');
        opt1.value = d;
        opt1.textContent = d;
        s1.appendChild(opt1);

        let opt2 = document.createElement('option');
        opt2.value = d;
        opt2.textContent = d;
        s2.appendChild(opt2);
    });
});

// "Diğer" seçilirse manuel girişi göster
function toggleManualInput(type) {
    const select = document.getElementById(type + 'DersSelect');
    const manual = document.getElementById(type + 'DersManual');
    
    if (select.value === "DIGER") {
        manual.style.display = "block";
    } else {
        manual.style.display = "none";
    }
}

function dilekceOlustur() {
    const { jsPDF } = window.jspdf;
    if (!jsPDF) { alert("PDF Kütüphanesi Yüklenemedi!"); return; }
    
    const doc = new jsPDF();

    // Verileri Topla
    const v = {
        ad: document.getElementById('ad').value,
        soyad: document.getElementById('soyad').value,
        no: document.getElementById('ogrenciNo').value,
        mail: document.getElementById('eposta').value,
        tel: document.getElementById('telefon').value,
        grup: document.getElementById('dersGrup').value,
        kredi: document.getElementById('toplamKredi').value,
        saat: document.getElementById('gunSaat').value,
        bolum: document.getElementById('bolum').value
    };

    // Ders seçimlerini kontrol et (Manuel mi Liste mi?)
    let obsSecili = document.getElementById('obsDersSelect').value;
    v.obs = obsSecili === "DIGER" ? document.getElementById('obsDersManual').value : obsSecili;

    let fykSecili = document.getElementById('fykDersSelect').value;
    v.fyk = fykSecili === "DIGER" ? document.getElementById('fykDersManual').value : fykSecili;

    if(!v.ad || !v.no || !v.obs || !v.fyk) {
        alert("Lütfen tüm alanları doldurunuz!");
        return;
    }

    // PDF Tasarımı
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text(`${v.bolum} BOLUM BASKANLIGINA`, 105, 25, { align: "center" });

    doc.setFontSize(10);
    doc.text(`Ad Soyad: ${v.ad} ${v.soyad}`, 20, 45);
    doc.text(`Ogrenci No: ${v.no}`, 20, 52);
    doc.text(`E-posta: ${v.mail}`, 20, 59);
    doc.text(`Telefon: ${v.tel}`, 20, 66);

    doc.setFont("helvetica", "normal");
    const metin = `2025-2026 Egitim-Ogretim yili BAHAR doneminde cakisma nedeniyle alamadigim asagidaki dersin 28.08.2025 tarih ve 2025/08-20 sayili Senato Karari geregince Ogrenci Bilgi Sistemine eklenmesi hususunda geregini arz ederim.`;
    doc.text(doc.splitTextToSize(metin, 170), 20, 85);

    // Çizimle Tablo
    doc.rect(20, 105, 170, 35); 
    doc.line(20, 115, 190, 115);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("OBS Uzerinden Sectigim Ders", 25, 111);
    doc.text("FYK Karari ile Eklenecek Ders", 85, 111);
    doc.text("Grup", 145, 111);
    doc.text("Saat Bilgisi", 165, 111);

    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(v.obs, 55), 25, 122);
    doc.text(doc.splitTextToSize(v.fyk, 55), 85, 122);
    doc.text(v.grup, 145, 122);
    doc.text(doc.splitTextToSize(v.saat, 25), 165, 122);

    doc.setFontSize(10);
    doc.text(`Eklenecek Ders Dahil BAHAR Yariyilinda Alinan Toplam Kredi: ${v.kredi}`, 20, 155);
    doc.text(`Tarih: ${new Date().toLocaleDateString('tr-TR')}`, 150, 175);

    doc.setTextColor(200, 0, 0);
    doc.setFontSize(9);
    doc.text(`Bu belge ${v.mail} adresinden bolume iletilmistir.`, 105, 195, { align: "center" });

    doc.save(`Dilekce_${v.no}.pdf`);
}
