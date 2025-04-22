const content = {
    home: `
      <h2>Selamat Datang di Website SMK Negeri 4 Kota Bengkulu</h2>
      <p>Sekolah kami berkomitmen dalam mencetak lulusan yang siap kerja, berkarakter, dan berprestasi.</p>
    `,
    about: `
      <h2>Tentang Kami</h2>
      <p>SMKN 4 Kota Bengkulu memiliki beberapa keunggulan, terutama sebagai SMK Pusat Keunggulan (SMK PK) sejak tahun 2022.
       Sebagai SMK PK, sekolah ini menerima banyak manfaat, termasuk dukungan dari pemerintah untuk mengembangkan program-program
       unggulan.Jurusan yang ada di sini RPL,APHPI,NKPI,TKPI,TSM,TKR,TBKR</p>
    `,
    galeri: `
      <h2>Galeri Sekolah</h2>
      <p>Kegiatan siswa dan dokumentasi sekolah:</p>
      <ul>
      </ul>
      <img src="upacara.jpg" alt="Upacara Hari Senin" width="300"> <li> upacara bendera</li>
      <img src="pramuka.jpg" alt="Kegiatan Pramuka" width="300"> <li> kegiatan pramuka</li>
      <img src="kunjungan Industri.jpg" alt="Kunjungan Industri" width="300" height="169"> <li> kunjungan industri</li>
    `,
    contact: `
      <h2>Kontak Kami</h2>
      <p>Alamat: Jl. Enggano, RT 9, RW 2, kel Pasar Bengkulu, kec Sungai Serut KOTA Bengkulu, prov. Bengkulu</p>
      <p>Email: smkn4kotabengkulu1@gmail.com</p>
      <p>Telepon: +62 736 20286</p>
    `
  };
  
  function showContent(page) {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = content[page];
  }
  