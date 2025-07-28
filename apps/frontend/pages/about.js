import Link from "next/link";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h2>Tentang tesKoran.id</h2>
      <p>
        Selamat datang di <Link href="/">tesKoran.id</Link>, platform online
        inovatif yang dirancang khusus untuk membantu Anda menguasai tes Pauli
        dan tes Kraepelin. Kami memahami pentingnya persiapan psikotes kerja
        yang matang dalam setiap langkah karir dan pengembangan diri. Oleh
        karena itu, kami hadir dengan simulasi tes yang realistis dan fitur
        lengkap untuk menunjang keberhasilan Anda.
      </p>
      <br />
      <br />
      <h3>Siapa yang Membutuhkan tesKoran.id?</h3>
      <br />
      <h4>Pencari Kerja Profesional</h4>
      <p>
        Platform tes psikotes online kami sangat vital untuk persiapan tes BUMN,
        tes CPNS, serta berbagai seleksi karyawan di perusahaan swasta
        terkemuka, psikotes bank, dan posisi lain yang memerlukan kecepatan
        berhitung, akurasi perhitungan, dan konsentrasi tinggi di bawah tekanan
        waktu.
      </p>
      <br />
      <h4>Siapa Saja yang Ingin Melatih Otak</h4>
      <p>
        Latih otak Anda secara rutin untuk meningkatkan daya tahan mental, daya
        ingat, fokus, dan kecepatan pengambilan keputusan dalam pekerjaan yang
        membutuhkan ketelitian tinggi.
      </p>
      <br />
      <br />
      <h3>Jenis Tes</h3>
      <ul>
        <li>
          <b>Tes Pauli</b>
          <br />
          Dikenal juga sebagai Koran Pauli, Anda akan diminta menjumlahkan dua
          angka dari <b>atas ke bawah</b>, dan hanya menuliskan digit terakhir
          dari hasilnya.
        </li>
        <li>
          <b>Tes Kraepelin</b>
          <br />
          Dikenal juga sebagai Tes Koran, Anda akan diminta menjumlahkan dua
          angka dari <b>bawah ke atas</b>, dan hanya menuliskan digit terakhir
          dari hasilnya.
        </li>
      </ul>
      <br />
      <br />
      <h3>Mode Tes</h3>
      <ul>
        <li>
          <b>Latihan</b>
          <br />
          <ul>
            <li>
              Anda dapat melihat pengatur waktu tes dan jawaban yang salah akan
              ditandai dengan warna <span style={{ color: "red" }}>merah</span>.
            </li>
            <li>
              Hasil tes <b>tidak</b> akan ditampilkan di{" "}
              <Link href="/leaderboard">leaderboard</Link>, namun tetap
              tersimpan dan dapat Anda lihat di{" "}
              <Link href="profile">halaman Profil</Link> Anda.
            </li>
          </ul>
        </li>
        <li>
          <b>Kompetisi</b>
          <br />
          <ul>
            <li>
              Pengatur waktu tes tidak akan terlihat, dan semua jawaban (benar
              maupun salah) memiliki{" "}
              <span style={{ color: "#0070f3" }}>warna</span> yang sama.
            </li>
            <li>
              Hasil tes Anda akan ditampilkan di{" "}
              <Link href="/leaderboard">leaderboard</Link>.
            </li>
          </ul>
        </li>
      </ul>
      <br />
      <br />
      <h3>Arti dari Stats</h3>
      <ul>
        <li>
          <b>APM (Addition per Minute)</b>
          <br />
          Mengukur total jumlah penjumlahan benar yang berhasil Anda lakukan per
          menit
        </li>
        <li>
          <b>Akurasi</b>
          <br />
          Persentase penjumlahan yang benar
        </li>
        <li>
          <b>Modifikasi</b>
          Jumlah kali Anda mengubah jawaban. Statistik ini membantu Anda
          memahami seberapa sering Anda melakukan koreksi, terlepas dari hasil
          modifikasi tersebut.
        </li>
      </ul>
      Anda juga akan melihat grafik visual APM dan akurasi Anda sepanjang durasi
      tes, membantu Anda mengidentifikasi pola konsentrasi dan kelelahan.
      <br />
      <br />
      <h3>Keybinds</h3>
      <ul>
        <li>Gunakan tombol angka atau numpad untuk mengetik jawaban Anda.</li>
        <li>
          Tekan <span className={styles.codeText}>Backspace</span> atau{" "}
          <span className={styles.codeText}>Panah Atas</span> untuk navigasi
          mundur.
        </li>
        <li>
          Tekan <span className={styles.codeText}>Enter</span> atau{" "}
          <span className={styles.codeText}>Panah Bawah</span> untuk navigasi
          maju.
        </li>
      </ul>
      <br />
      <br />
      <p>
        <Link href="/">tesKoran.id</Link> adalah solusi komprehensif untuk
        persiapan tes Pauli dan Kraepelin online Anda. Mulai latihan hari ini,
        tingkatkan kemampuan numerik dan fokus Anda, serta siapkan diri untuk
        sukses dalam setiap psikotes!
      </p>
    </div>
  );
}
