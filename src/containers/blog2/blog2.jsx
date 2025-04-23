import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaComment, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Blog data
const cancerArticles = [
    {
        id: 1,
        title: "What is Bladder Cancer?",
        category: "Cancer | Urinary System",
        image: "https://storage.googleapis.com/a1aa/image/7sBt2mfp1sS8a4jitnyiutJxB89hMQdaU6pTvfaIq0Y.jpg",
        alt: "Bladder Cancer illustration",
        link: "/blogdetail",
    },
    {
        id: 2,
        title: "What are Carcinomas of unknown...",
        category: "Cancer | Other",
        image: "https://storage.googleapis.com/a1aa/image/j8DGEOZtdFrJ0j_Bm7K6AhVUZlAxmhJQMKOI9et_kPM.jpg",
        alt: "Carcinomas illustration",
        link: "/blogdetail",
    },
    {
        id: 3,
        title: "What is Oral and oropharyngeal...",
        category: "Cancer | Head and Neck",
        image: "https://storage.googleapis.com/a1aa/image/GfuGlR6wTEF5OmLswcnnfVgX1ryWYT4qorWmT5hyyrs.jpg",
        alt: "Oral and oropharyngeal cancer illustration",
        link: "/blogdetail",
    },
    {
        id: 4,
        title: "What is Osteosarcoma?",
        category: "Cancer | Musculoskeletal system",
        image: "https://storage.googleapis.com/a1aa/image/FFmbKz88nLFoRnnjIxFSNL3tE3dZbugWorYmGXktxgk.jpg",
        alt: "Osteosarcoma illustration",
        link: "/blogdetail",
    },
    {
        id: 5,
        title: "What is Prostate?",
        category: "Cancer | Male Reproductive System",
        image: "https://storage.googleapis.com/a1aa/image/XOwI8E-2eXcM9-t8_Ayg4_Pknv7B8lkKxEE8cZtpZh8.jpg",
        alt: "Prostate illustration",
        link: "/blogdetail",
    },
    {
        id: 6,
        title: "What is Small Cell Lung...",
        category: "Cancer | Lung and Respiratory System",
        image: "https://storage.googleapis.com/a1aa/image/Rx45iWV2Ql0o0gEnNwsJkbfbshJP2MIKRJAMgVRNosI.jpg",
        alt: "Small Cell Lung Cancer illustration",
        link: "/blogdetail",
    },
];

const orthopedicArticles = [
    {
        id: 7,
        title: "What is an Achilles Tendon...",
        category: "Achilles Tendon Rupture | Orthopedic",
        image: "https://storage.googleapis.com/a1aa/image/ukJQmLHbyRi1dnLhXSHvLs8e57mGrgWyOossFa79vUE.jpg",
        alt: "Achilles Tendon illustration",
        link: "/blogdetail",
    },
    {
        id: 8,
        title: "What is Bunionette Arthritis?",
        category: "Bunionette Deformity",
        image: "https://storage.googleapis.com/a1aa/image/LbiBjsP2vso-d13VII738GV9W4QzBSTn3fmXiJl9QlI.jpg",
        alt: "Bunionette Arthritis illustration",
        link: "/blogdetail",
    },
    {
        id: 9,
        title: "What is Ankle Arthritis?",
        category: "Ankle Arthritis | Orthopedic",
        image: "https://storage.googleapis.com/a1aa/image/aBpojX4_-ET6eg6T7_Gh8KQV_dymQ86jYMLTSHVyrZg.jpg",
        alt: "Ankle Arthritis illustration",
        link: "/blogdetail",
    },
    {
        id: 10,
        title: "What is Calcaneus Fracture?",
        category: "Calcaneus Fracture | Orthopedic",
        image: "https://storage.googleapis.com/a1aa/image/yEB-ffgYgNlIKW46VP07IWozYS4mr_XgWcORPmV3geE.jpg",
        alt: "Calcaneus Fracture illustration",
        link: "/blogdetail",
    },
    {
        id: 11,
        title: "What is an ACL Tear?",
        category: "ACL Tear | Orthopedic",
        image: "https://storage.googleapis.com/a1aa/image/QnAZ-kdhhQTOYrUCpUqSsyZefC6pPBP0CpPFsb8onbw.jpg",
        alt: "ACL Tear illustration",
        link: "/blogdetail",
    },
    {
        id: 12,
        title: "What is Acetabular Fracture?",
        category: "Acetabular Fracture | Orthopedic",
        image: "https://storage.googleapis.com/a1aa/image/mX1pexf8F_1tB2TvLn4jw7u5NvCkMcmnuOO-XemEv90.jpg",
        alt: "Acetabular Fracture illustration",
        link: "/blogdetail",
    },
];

// Article Card Component
const ArticleCard = ({ article }) => (
    <div className="col-md-4 mb-4">
        <Link to={article.link} className="text-decoration-none text-dark">
            <div className="card h-100 shadow-sm">
                <img
                    src={article.image}
                    className="card-img-top"
                    alt={article.alt}
                    style={{
                        height: "200px",
                        objectFit: "cover",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                    }}
                />
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text text-muted">{article.category}</p>
                    <div className="d-flex align-items-center text-muted">
                        <FaComment className="mr-2" /> 0
                    </div>
                </div>
            </div>
        </Link>
    </div>
);

// Add PropTypes validation for ArticleCard
ArticleCard.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,
};

// Section Component
const ArticleSection = ({ title, articles }) => (
    <section className="mb-5">
        <h2 className="h4 font-weight-bold mb-4">{title}</h2>
        <div className="row">
            {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
        <div className="d-flex justify-content-start mt-4">
            <button
                className="btn btn-primary"
                style={{ backgroundColor: "#00213e" }}
            >
                Know More <FaArrowRight className="ml-2" />
            </button>
        </div>
    </section>
);

// Add PropTypes validation for ArticleSection
ArticleSection.propTypes = {
    title: PropTypes.string.isRequired,
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

const MedicalArticles = () => {
    return (
        <div className="container my-5">
            <ArticleSection
                title="Latest From Cancer (Oncology)"
                articles={cancerArticles}
            />
            <ArticleSection
                title="Latest From Orthopedics"
                articles={orthopedicArticles}
            />
        </div>
    );
};

export default MedicalArticles;
