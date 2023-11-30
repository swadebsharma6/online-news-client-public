import { Link } from "react-router-dom";


const Article = ({article}) => {
    // console.log(article)
    const {author, publisher, title, description, image} = article;
    return (
        <section className="mb-8">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="italic text-xs">{author}</p>
            <img className="w-full md:h-[400px] rounded-xl" src={image} alt="" />
            <h4 className="text-xl uppercase font-semibold">source: {publisher}</h4>
            <p>{description.slice(0, 300)}......<Link><span className="text-xl text-primary font-bold">Read More</span></Link> </p>
           
        </section>
    );
};

export default Article;