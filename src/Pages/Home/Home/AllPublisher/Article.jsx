

const Article = ({article}) => {
    // console.log(article)
    const {author, publisher, title, tags, description, image} = article;
    return (
        <section className="mb-8">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="italic text-xs">{author}</p>
            <img className="w-full" src={image} alt="" />
            <h4 className="text-xl uppercase font-semibold">source: {publisher}</h4>
            <p>{description}</p>
            <p>{tags}</p>
         
        </section>
    );
};

export default Article;