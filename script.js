// DATABASE PROJECT (Isi konten detail buat Modal)
const projectData = {
    "1": {
        title: "Digitalisasi Layanan Siswa",
        desc: "Sebagai Ketua OSIS SMKN 1 Garut, saya mengidentifikasi adanya inefisiensi dalam birokrasi sekolah yang masih manual. Saya menginisiasi transformasi digital melalui pengembangan platform web aspirasi siswa dan sistem absensi digital untuk 38 ekstrakurikuler. Peran saya adalah sebagai Strategic Leader dan Product Conceptor—merumuskan alur sistem, menentukan fitur prioritas berdasarkan kebutuhan siswa dan guru, serta memimpin koordinasi lintas departemen sekolah untuk memastikan sistem ini dapat diimplementasikan secara berkelanjutan guna meningkatkan transparansi dan kecepatan layanan informasi sekolah.",
        tech: "Strategic Leadership, Business Process Mapping, User Research"
    },
    "2": {
        title: "PERPOSSAGAR (Perpustakaan Online)",
        desc: "Proyek ini merupakan inisiatif besar saya dalam bidang literasi digital untuk SMKN 1 Garut. Melihat potensi besar karya tulis siswa yang tidak terwadahi, saya mencetuskan ide pembuatan platform PERPOSSAGAR. Saya bertindak sebagai Project Manager yang merancang konsep katalog buku digital dan galeri publikasi karya. Saya mengarahkan tim teknis dalam pengembangan database dan memastikan antarmuka platform (UI/UX) bersifat inklusif bagi seluruh siswa, sehingga berhasil meningkatkan minat baca dan semangat berkarya bagi ribuan siswa di lingkungan sekolah.",
        tech: "Project Management, Conceptual Design, Literacy Advocacy"
    },
    "3": {
        title: "Podcast Pelajar Inspiratif",
        desc: "Saya mendirikan platform media kreatif ini (Founder) dengan tujuan membangun persona positif dan menyebarkan nilai-nilai kepemimpinan di kalangan pelajar. Selain bertindak sebagai Host utama, saya mengelola keseluruhan Creative Direction—mulai dari riset narasumber inspiratif, penyusunan naskah wawancara yang edukatif, hingga strategi branding konten di berbagai platform digital. Inisiatif ini telah berhasil menjangkau ratusan audiens pelajar dan menjadi wadah diskusi yang kredibel di lingkungan pendidikan.",
        tech: "Creative Direction, Public Speaking, Content Branding"
    },
    "4": {
        title: "UNIGA Network Maintenance",
        desc: "Selama menjalani program internship di UPT TI Universitas Garut, saya bertanggung jawab penuh dalam pemeliharaan infrastruktur teknologi informasi kampus. Tugas saya mencakup pemeliharaan hardware secara preventif, Network Troubleshooting yang mencakup crimping kabel LAN massal, serta konfigurasi Access Point untuk memastikan distribusi sinyal internet yang stabil di berbagai gedung fakultas. Saya juga dipercaya menangani instalasi sistem operasi Windows 10/11 dan troubleshooting software bagi staf universitas untuk menjamin kelancaran operasional harian.",
        tech: "Network Administration, Hardware Troubleshooting, System Deployment"
    },
    "5": {
        title: "WJSLS 3.0 Public Relations & Event Management",
        desc: "Menjabat sebagai Head of Public Relations dalam West Java Student Leader Summit (WJSLS) 3.0, sebuah event prestisius yang dihadiri oleh lebih dari 3.500 peserta se-Jawa Barat. Peran saya sangat krusial dalam menyusun strategi komunikasi dan branding acara. Saya bertanggung jawab dalam pembuatan Press Release resmi untuk media cetak dan elektronik, menjalin kemitraan strategis dengan TVRI dan berbagai stasiun radio nasional. Selain itu, saya memimpin tim dalam handling tamu undangan VIP dan bertindak sebagai Liaison Officer (LO) utama yang mengoordinasikan Guest Star (Yovie & Nuno), memastikan seluruh aspek teknis dan kenyamanan artis tetap terjaga selama acara berlangsung.",
        tech: "Strategic Public Relations, Media Relations, VIP & Artist Handling"
    },
    "6": {
        title: "Professional Office Optimization",
        desc: "Mengelola dan mengoptimalkan sistem administrasi perkantoran terintegrasi. Dalam aspek Microsoft Excel, saya ahli dalam pengolahan data menggunakan fungsi VLOOKUP, INDEX-MATCH, Pivot Tables, hingga otomatisasi laporan teknis. Untuk Microsoft Word, saya berfokus pada standarisasi dokumen formal (Styles & Multi-level numbering), pembuatan laporan teknis sistematis dengan Table of Contents otomatis, serta penyusunan Press Release dan persuratan resmi organisasi yang sesuai dengan kaidah profesional. Integrasi kedua tools ini memastikan alur administrasi berjalan cepat, rapi, dan akurat.",
        tech: "Advanced Excel (Data Analysis), MS Word (Professional Document Standard)"
    }
};

// 1. LOGIKA MODAL POP-UP (FIXED & RESPONSIVE)
const modal = document.getElementById("projectModal");
const modalDetails = document.getElementById("modalDetails");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-project');
        const data = projectData[id];

        if (data) {
            modalDetails.innerHTML = `
                <h2 style="color: #4f46e5; font-size: 1.8rem; margin-bottom: 15px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; font-weight: 800;">${data.title}</h2>
                <div style="margin: 20px 0;">
                    <h4 style="color: #1e293b; margin-bottom: 10px; font-size: 1.1rem;">Deskripsi & Peran Strategis:</h4>
                    <p style="line-height: 1.8; color: #475569; font-size: 1rem; text-align: justify;">${data.desc}</p>
                </div>
                <div style="background: #f8fafc; padding: 20px; border-radius: 15px; border: 1px solid #e2e8f0; border-left: 6px solid #4f46e5; margin-top: 25px;">
                    <strong style="color: #1e293b; display: block; margin-bottom: 8px; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Keahlian & Instrumen:</strong> 
                    <span style="color: #4f46e5; font-weight: 700; font-size: 1.05rem;">${data.tech}</span>
                </div>
            `;
            
            // Tambahkan class active untuk memicu CSS Modal
            modal.classList.add('active');
            document.body.style.overflow = "hidden"; // Kunci scroll layar utama
        }
    });
});

// Fungsi Tutup Modal
const closeAction = () => {
    modal.classList.remove('active');
    document.body.style.overflow = "auto"; // Balikin scroll
};

if(closeModal) { closeModal.onclick = closeAction; }
window.onclick = (event) => { if (event.target == modal) { closeAction(); } };

// 2. SMOOTH SCROLL & ACTIVE LINK
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== "#") {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// 3. NAVBAR GLASSMORPHISM
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '15px 8%'; 
    } else {
        navbar.style.background = 'white';
        navbar.style.backdropFilter = 'none';
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '20px 8%';
    }

    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 120) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(a => {
        const linkHref = a.getAttribute("href");
        if (linkHref.includes(current) && current !== "") {
            a.style.color = "#4f46e5";
        } else {
            a.style.color = "#0f172a";
        }
    });
});

// 4. ANIMASI REVEAL
const revealElements = document.querySelectorAll('.project-card, .exp-item, .section-header');
const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 50); 
            activeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    activeObserver.observe(el);
});

// 5. FOTO PROFILE TILT (FIXED)
const profileWrapper = document.querySelector('.image-wrapper');
if (profileWrapper && window.innerWidth > 768) { // Tilt dimatikan di mobile biar gak aneh
    profileWrapper.addEventListener('mousemove', (e) => {
        profileWrapper.style.animation = 'none'; 
        const { left, top, width, height } = profileWrapper.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        profileWrapper.style.transform = `perspective(1000px) rotateX(${y * -20}deg) rotateY(${x * 20}deg) scale(1.05)`;
    });

    profileWrapper.addEventListener('mouseleave', () => {
        profileWrapper.style.transition = 'all 0.5s ease';
        profileWrapper.style.transform = `perspective(1000px) rotate(3deg) scale(1)`;
        setTimeout(() => { profileWrapper.style.animation = 'float 6s ease-in-out infinite'; }, 500);
    });
}
