import allfair from "../assets/news_allfair.webp";
import kardashians from "../assets/news_thekardashians.jpg";
import thewalkingdead from "../assets/news_thewalkingdead11.jpg";
import hulu from "../assets/poster_huluon.jpg";

function AdditionalContent() {
    return(
        <div className="additional-content">
            <h2>What's new to Disney+</h2>
            <div className="news">
                <div className="news-content">
                    <img src={allfair} />
                    <h2>All's Fair</h2>
                    <p>Mereka tidak bermain, mereka pemainnya
                        Kim Kardashian, Naomi Watts, Niecy Nash, Teyana Taylor, Sarah Paulson, dan Glenn Close
                        berperan dalam ALL'S FAIR. Streaming mulai 4 November di Disney+.
                    </p>
                    <h3><a href="#">STREAMING SEKARANG</a></h3>
                </div>
                <div className="news-content">
                    <img src={kardashians} />
                    <h2>The Kardashians: Season 7</h2>
                    <p>Saat kamu pikir hidup keluarga Kardashian-Jenner sudah cukup sibuk,
                        mereka malah menekan gas lebih dalam lagi! Tonton keseruannya
                        di The Kardashians Season 7, tanyang sekarang di Disney+.
                    </p>
                    <h3><a href="#">STREAMING SEKARANG</a></h3>
                </div>
                <div className="news-content">
                    <img src={thewalkingdead} />
                    <h2>The Walking Dead: Season 12</h2>
                    <p>Perjuangan untuk bertahan hidup berlanjut di musim terakhir The Walking Dead.
                        Saksikan semua episode sekarang di Disney+.
                    </p>
                    <h3><a href="#">STREAMING SEKARANG</a></h3>
                </div>
            </div>

            <button className="signup-button">SIGN UP NOW</button>

            <div className="paragraph">
                <img src={hulu} alt="Hulu News"/>
                <h2>Hulu Resmi Hadir di Disney+ Mulai 9 Oktober 2025</h2>
                <h3>Disney+ Hotstar Berubah Nama Menjadi Disney+ di Indonesia</h3>
                <p>Mulai 9 Oktober 2025, Hulu akan hadir di Disney+ secara resmi, 
                menggantikan Star sebagai rumah bagi deretan konten hiburan populer untuk penonton di seluruh dunia. 
                Transformasi ini juga akan diikuti dengan perubahan nama Disney+ Hostar menjadi Disney+ di Indonesia. 
                Melalui pembaruan ini, para pelanggan dapat terus menikmati berbagai tayangan favorit di Disney+, 
                mulai dari film dan serial pemenang penghargaan, konten keluarga berkualitas, 
                hingga koleksi konten original yang semakin beragam, termasuk serial Korea dan Jepang yang terus berkembang. 
                Dengan warna hijaunya yang ikonik, Hulu dikenal lewat berbagai konten orisinalnya yang unik dan telah meraih deretan penghargaan bergengsi.</p>
                <p>Para penggemar di Indonesia dapat menantikan deretan konten orisinal dari Amerika, Korea, hingga Jepang yang akan hadir di bawah kategori Hulu di Disney+. 
                Beberapa judul unggulan yang patut dinantikan antara lain “All's Fair”, 
                sebuah drama hukum garapan Ryan Murphy yang dibintangi oleh Glenn Close, Kim Kardashian, dan Niecy Nash. Dari Korea, 
                ada “Would You Marry Me?”, drama komedi romantis dengan kisah hangat yang menghadirkan Choi Woo-shik dan Jung So-min, 
                serta “The Manipulated”, serial thriller penuh aksi dan adrenalin yang dibintangi oleh Ji Changwook dan Doh Kyungsoo.</p>
                <p>Deretan tayangan yang memukau ini akan menambah pilihan hiburan kelas dunia di Disney+, 
                mulai dari serial legendaris “Grey's Anatomy”, “Modern Family”, “Shōgun”, “High Potential”, 
                hingga drama Korea dan Jepang favorit para penggemar seperti “Tempest”, “Nine Puzzles”, “The Judge from Hell”, 
                “A Shop for Killers”, “Moving”, dan “Gannibal”.</p>
                <p>“Disney+ dikenal sebagai rumah bagi berbagai konten favorit di Indonesia. 
                Dengan hadirnya Hulu sebagai rumah untuk konten hiburan populer di Disney+, 
                kami akan terus menghadirkan tayangan dengan kualitas cerita terbaik untuk dinikmati keluarga, teman, dan para penggemar,” 
                ujar Vineet Puri, Vice President dan General Manager, The Walt Disney Company Southeast Asia.</p>
                <p>Dengan ratusan film, serial dan film original eksklusif, 
                serta ribuan episode dari Disney, Pixar, Marvel, Star Wars, National Geographic, dan Hulu, Disney+ 
                menjadi layanan streaming pilihan bagi keluarga, teman, dan para penggemar untuk menemukan dunia dan cerita baru.</p>
            </div>
        </div>
    );
}

export default AdditionalContent;