// Versiyon: 1.1.8 (Başlıklar "OBS Üzerinden Alınan Ders" olarak güncellendi)

function dilekceOlustur() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const ad = document.getElementById('adSoyad').value;
    const no = document.getElementById('ogrenciNo').value;
    const d1 = document.getElementById('ders1').value; // OBS'deki ders
    const d2 = document.getElementById('ders2').value; // Almak istediği ders

    doc.setFont("helvetica", "bold");
    doc.text("ISTATISTIK BOLUM BASKANLIGINA", 105, 20, { align: "center" });
    
    doc.setFont("helvetica", "normal");
    doc.text(`Bolumunuz ${no} numarali ogrencisiyim.`, 20, 40);
    doc.text("2025-2026 Bahar yariyilinda asagida belirttigim derslerim cakismaktadir.", 20, 50);
    
    doc.setFont("helvetica", "bold");
    doc.text("OBS uzerinde kayitli oldugum ders:", 20, 65);
    doc.setFont("helvetica", "normal");
    doc.text(`- ${d1}`, 25, 72);
    
    doc.setFont("helvetica", "bold");
    doc.text("Cakisiklik nedeniyle alinmak istenen ders:", 20, 85);
    doc.setFont("helvetica", "normal");
    doc.text(`- ${d2}`, 25, 92);
    
    doc.text("Cakisiklik nedeniyle magduriyetimin giderilmesini ve ilgili dersi", 20, 110);
    doc.text("alabilmem hususunda gereginin yapilmasini arz ederim.", 20, 117);
    
    doc.text(`Ad Soyad: ${ad}`, 140, 140);
    doc.text(`Tarih: ${new Date().toLocaleDateString()}`, 140, 150);

    doc.save(`Cakisik_Ders_Dilekce_${no}.pdf`);
}