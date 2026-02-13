// Versiyon: 2.2.0 (Ders Listesi ve Görsel Format Güncellemesi)
const dersListesi = [
    "BED3011 - Basketbol Temel Teknik Eğitimi", "BED3012 - Korfbol Temel Teknik Eğitimi",
    "BED3041 - Futbol ve Temel Hareket Öğretimi", "BED3042 - Voleybolda Temel Teknik Eğitimi",
    "BED4022 - Tenis Teknik ve Taktik Eğitimi", "BED4032 - Temel Yüzme Teknikleri Eğitimi",
    "ELM4071 - Mühendislikte Sayısal Yöntemler ve Uygulamaları", "FEF2000 - Bilimsel Araştırmaya Yönelik Yazma Becerileri",
    "FEF2002 - Kariyer Planlama ve Mesleki Etik", "FEF3001 - Yapay Zekaya Giriş",
    "FIZ3557 - Hayatın İçinde Fizik", "GDM4309 - Gıda Okur Yazarlığı",
    "IST1012 - Python ile Programlama", "IST1132 - Olasılık", "IST1142 - İstatistik",
    "IST1990 - Olasılık ve İstatistik", "IST2022 - Matematiksel İstatistik",
    "IST2072 - Matlab ile İstatistiksel Analiz", "IST2122 - Python ile İstatistik Uygulamalar",
    "IST2142 - Veri Tabanı", "IST2162 - Mesleki İngilizce 2", "IST2170 - Güncel İstatistik Uygulamaları",
    "IST2252 - Veri Analizi", "IST3012 - Yöneylem Araştırması 1", "IST3050 - Anket Düzenleme",
    "IST3102 - Ekonometri", "IST3110 - R ile İstatistik Uygulamaları", "IST3122 - Regresyon Analizi 2",
    "IST3132 - Stokastik Süreçler", "IST3142 - Deneysel Tasarım", "IST3152 - İstatistik Paket Programları Kullanımı",
    "IST3252 - Nümerik Analiz", "IST3557 - İstatistik ve Bilimsel Düşünme", "IST4130 - WEB Programlama",
    "IST4132 - Çok Değişkenli İstatistik 2", "IST4232 - Yöneylem Araştırması 2",
    "IST4322 - Uygulamalı Panel Veri Analizi", "IST4412 - Veri Madenciliğine Giriş", "IST4422 - Uygulamalı Optimizasyon",
    "ITB3020 - Felsefeye Giriş", "ITB3040 - 20. Yüzyılda Siyasi Gelişmeler ve Toplumsal Hareketler",
    "ITB3150 - Tarih ve Sinema", "ITB3210 - Çağdaş Toplum Ve İletişim", "ITB3220 - Modernite ve Tüketim Toplumu",
    "ITB3560 - Siyaset Felsefesi", "ITB4100 - Toplumsal Yapılar ve Tarihsel Dönüşümler",
    "KVK4422 - Müzecilik ve Müzeografi", "MAT1002 - Matematik 2", "MAT2412 - Diferansiyel Denklemler",
    "MAT3557 - Şifreleme", "MDB1002 - Temel Fransızca 2", "MDB1007 - Temel İtalyanca 1",
    "MDB1008 - Temel İtalyanca 2", "MDB1009 - Temel Yunanca 1", "MDB1010 - Temel Yunanca 2",
    "MDB1011 - Temel Çince 1", "MDB1017 - Temel Farsça 1", "MTH4053 - Kurumsal Gelecek Tasarımı",
    "TDB1032 - TÜRKÇE 2"
];

// Sayfa yüklendiğinde datalist doldur
document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('dersDatalist');
    dersListesi.sort().forEach(ders => {
        let option = document.createElement('option');
        option.value = ders;
        list.appendChild(option);
    });
});

function dilekceOlustur() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const v = {
        ad: document.getElementById('ad').value,
        soyad: document.getElementById('soyad').value,
        no: document.getElementById('ogrenciNo').value,
        mail: document.getElementById('eposta').value,
        tel: document.getElementById('telefon').value,
        obs: document.getElementById('obsDers').value,
        fyk: document.getElementById('fykDers').value,
        grup: document.getElementById('dersGrup').value,
        kredi: document.getElementById('toplamKredi').value,
        saat: document.getElementById('gunSaat').value,
        bolum: document.getElementById('bolum').value
    };

    if(!v.ad || !v.no) { alert("Lütfen Ad Soyad ve Numara alanlarını doldurun!"); return; }

    // PDF Formatlama (Görseldekiyle aynı)
    doc.setFont("helvetica", "bold");
    doc.text(`${v.bolum} BOLUM BASKANLIGINA`, 105, 25, { align: "center" });

    doc.setFontSize(10);
    doc.text(`Ad Soyad: ${v.ad} ${v.soyad}`, 20, 45);
    doc.text(`Ogrenci No: ${v.no}`, 20, 52);
    doc.text(`E-posta: ${v.mail}`, 20, 59);
    doc.text(`Telefon: ${v.tel}`, 20, 66);

    doc.setFont("helvetica", "normal");
    const metin = `2025-2026 Egitim-Ogretim yili BAHAR doneminde cakisma nedeniyle alamadigim asagidaki dersin 28.08.2025 tarih ve 2025/08-20 sayili Senato Karari geregince Ogrenci Bilgi Sisteme eklenmesi hususunda geregini arz ederim.`;
    doc.text(doc.splitTextToSize(metin, 170), 20, 85);

    // Tablo
    doc.autoTable({
        startY: 105,
        head: [['OBS Uzerinden Sectigim Dersin Kodu-Adi', 'FYK Karari ile Eklenecek Dersin Kodu-Adi', 'Dersin Grubu', 'Derslerin Gun ve Saati']],
        body: [[v.obs, v.fyk, v.grup, v.saat]],
        theme: 'grid',
        styles: { fontSize: 8, halign: 'center', textColor: [0,0,0], lineColor: [0,0,0], lineWidth: 0.1 },
        headStyles: { fillColor: [255, 255, 255], fontStyle: 'bold' }
    });

    doc.text(`Eklenecek Ders Dahil BAHAR Yariyilinda Alinan Toplam Kredi: ${v.kredi}`, 20, doc.lastAutoTable.finalY + 12);
    doc.text(`Tarih: ${new Date().toLocaleDateString('tr-TR')}`, 150, doc.lastAutoTable.finalY + 35);

    doc.setTextColor(200, 0, 0);
    doc.setFontSize(9);
    doc.text(`Bu belge ${v.mail} adresinden bolume iletilmistir.`, 105, doc.lastAutoTable.finalY + 55, { align: "center" });

    doc.save(`Dilekce_${v.no}.pdf`);
}