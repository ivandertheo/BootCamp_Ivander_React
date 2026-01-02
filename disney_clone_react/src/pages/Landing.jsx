import MovieWrapper from "../components/MovieWrapper";
import Upcoming from "../components/Upcoming";
import AdditionalContent from "../components/AdditionalContent";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();
    const { user, loading } = useAuth();
    if (loading) return null;

    return (
        <>
        {/*spacer*/}
        <div className="spacer">
            <Link to="#">FILM & SERIAL SERU HANYA DI DISNEY+</Link>
        </div>
        <MovieWrapper />
        {/*spacer*/}
        {!user && (
            <div className="register-spacer">
            <p>
                Dapatkan berita terbaru film{" "}
                <strong>Disney, aplikasi dan yang lainnya!</strong>
            </p>
            <button
                className="register-button"
                onClick={() => navigate("/register")}
            >
                DAFTAR SEKARANG
            </button>
            </div>
        )}
        <Upcoming />
        <AdditionalContent />
        </>
    );
}

export default Landing;