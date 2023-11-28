import { useLoaderData } from "react-router-dom";


const MyProfile = () => {

    const article = useLoaderData();
    console.log(article)

    return (
        <div>
            <h2 className="text-xl font-bold text-center">This is the User Profile Page: {article.length}</h2>
        </div>
    );
};

export default MyProfile;