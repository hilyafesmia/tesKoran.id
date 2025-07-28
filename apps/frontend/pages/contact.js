import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h2>Kontak Kami</h2>
      <br />
      <p>Kami di tesKoran.id selalu senang mendengar masukan dari Anda!</p>
      <br />
      <p>
        Apakah Anda memiliki pertanyaan seputar tes Pauli atau tes Kraepelin,
        membutuhkan dukungan teknis terkait platform latihan online kami, atau
        ingin memberikan saran untuk pengembangan fitur? Jangan ragu untuk
        menghubungi tim kami.
      </p>
      <br />
      <p>
        Kami berkomitmen untuk memberikan pengalaman terbaik dalam persiapan
        psikotes kerja Anda. Silakan kirimkan email Anda ke:
      </p>
      <p className={styles.titleContainer}>
        <strong className={styles.title}>
          📩 <a href="mailto:hello@teskoran.id">hello@teskoran.id</a>
        </strong>
      </p>
      <br />
      <p>
        Kami akan berusaha merespons email Anda secepat mungkin. Masukan Anda
        sangat berharga bagi kami dalam terus meningkatkan kualitas layanan
        tesKoran.id.
      </p>
      <br />
      <p>Terima kasih atas minat Anda pada tesKoran.id!</p>
    </div>
  );
}
